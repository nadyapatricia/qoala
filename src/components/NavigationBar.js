import React from 'react';
import { Menu } from 'antd';
import { HomeFilled, UserOutlined, SettingOutlined } from '@ant-design/icons';

export default function NavigationBar() {
  return (
    <Menu mode='inline' defaultSelectedKeys={['2']}>
      <Menu.Item key='1' icon={<HomeFilled />}>
        Home
      </Menu.Item>
      <Menu.Item key='2' icon={<UserOutlined />}>
        Qoala Users
      </Menu.Item>
      <Menu.Item key='3' icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  );
}
