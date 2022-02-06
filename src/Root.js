import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Layout } from 'antd';

import { DESKTOP_BREAKPOINT } from './constants';
import { Pagination } from './components/index';
import DesktopView from './pages/DesktopView';
import MobileView from './pages/MobileView';
import { getUserData, getTotalCount } from './redux/actions';

const { Content, Footer } = Layout;

export default function Root() {
  const dispatch = useDispatch();
  const { users, isUsersLoading, totalCount, filterValues } = useSelector(
    (state) => state.userManagement
  );

  const { currentPage, pageLimit } = filterValues;

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getTotalCount());
  }, [dispatch]);

  return (
    <>
      <StyledContent>
        <div>
          <DesktopView isUsersLoading={isUsersLoading} users={users} />
          <MobileView isUsersLoading={isUsersLoading} users={users} />
        </div>
      </StyledContent>
      <Footer style={{ textAlign: 'center' }}>
        <Pagination
          totalCount={totalCount}
          pageLimit={pageLimit}
          currentPage={currentPage}
        />
      </Footer>
    </>
  );
}

const StyledContent = styled(Content)`
  margin: 24px;
  overflow-y: scroll;

  ${DESKTOP_BREAKPOINT} {
    overflow-y: hidden;
  }
`;
