import React from 'react';
import { Avatar, Card } from 'antd';
import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export default function DesktopCard({ user }) {
  const { id, title, firstName, lastName, age, email, city, posCode, state } =
    user;

  return (
    <StyledCard
      size='small'
      title={
        <>
          <span style={{ color: '#adadad' }}>Qoala User</span>{' '}
          <span style={{ color: '#1890FF' }}>{id}</span>
        </>
      }
      extra={<EllipsisOutlined />}
      id={id}
    >
      <ContentWrapper>
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginBottom: '20px' }}
        />
        <UserBarBody>
          <Details>
            <Header>Name</Header>
            <Content>{`${title} ${firstName} ${lastName}`}</Content>
          </Details>
          <Details>
            <Header>Age</Header>
            <Content>{`${age}`}</Content>
          </Details>
          <Details>
            <Header>Address</Header>
            <Content>{`${city} ${state} ${posCode}`}</Content>
          </Details>
          <Details>
            <Header>Email</Header>
            <Content>{email}</Content>
          </Details>
        </UserBarBody>
      </ContentWrapper>
    </StyledCard>
  );
}

const UserBarBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

const Details = styled.div`
  margin-bottom: 5px;
  align: left;
  &:last-child {
    margin-bottom: -20px;
  }
`;

const Content = styled.p`
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Header = styled.p`
  margin-bottom: 2px;
  font-weight: 500;
  color: #adadad;
`;

const StyledCard = styled(Card)`
  min-width: 300px;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
