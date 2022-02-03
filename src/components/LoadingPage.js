import React from 'react';
import styled from '@emotion/styled';
import { Spin } from 'antd';

export default function LoadingPage() {
  return (
    <StyledContainer>
      <Spin size='large' />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
`;
