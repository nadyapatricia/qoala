import React from 'react';
import styled from '@emotion/styled';

import { DESKTOP_BREAKPOINT } from '../constants';
import DesktopCard from './DesktopCard';

export default function DesktopView({ isUsersLoading, users }) {
  return (
    <DesktopCardContainer>
      {!isUsersLoading &&
        users.length > 0 &&
        users.map((user) => {
          return <DesktopCard user={user} />;
        })}
    </DesktopCardContainer>
  );
}

const DesktopCardContainer = styled.div`
  display: none;
  ${DESKTOP_BREAKPOINT} {
    display: flex;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 20px;
  }
`;
