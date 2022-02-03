import React, { Suspense, lazy } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { QoalaLogo, NavigationBar, LoadingPage } from './components';

// Lazy-loaded imports
const Root = lazy(() => import('./Root'));

const { Header, Sider } = Layout;

export default function App() {
  return (
    <div className='App'>
      <Layout style={{ height: '100vh' }}>
        <Sider theme='light' breakpoint='lg' collapsedWidth='0'>
          <QoalaLogo />
          <NavigationBar />
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-sub-header-background'></Header>
          <Suspense fallback={<LoadingPage />}>
            <Root />
          </Suspense>
        </Layout>
      </Layout>
    </div>
  );
}
