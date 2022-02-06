import React from 'react';
import styled from '@emotion/styled';
import { DESKTOP_BREAKPOINT } from '../constants';
import MobileCard from './MobileCard';

export default function MobileView({ isUsersLoading, users }) {
  return (
    <MobileCardContainer>
      {!isUsersLoading &&
        users.length > 0 &&
        users.map((user) => {
          return <MobileCard user={user} />;
        })}
    </MobileCardContainer>
  );
}

const MobileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;

  ${DESKTOP_BREAKPOINT} {
    display: none;
  }
`;
