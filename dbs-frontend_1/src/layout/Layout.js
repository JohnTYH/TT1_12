import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';

const { Content, Sider } = Layout;

export const PageWrapper = ({ children }) => {
  const history = useHistory();

  const getMenu = () =>
    [
      {
        icon: <HomeOutlined />,
        name: 'Home',
        onClick: () => history.push('/home')
      },
      {
        icon: <LogoutOutlined />,
        name: 'Logout',
        onClick: () => {
          history.push('/');
          sessionStorage.removeItem("token");
        }
      }
    ];

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {getMenu().map((menuItem, key) =>
            <Menu.Item key={`${key + 1}`} icon={menuItem.icon} onClick={menuItem.onClick}>
              {menuItem.name}
            </Menu.Item>)
          }
        </Menu>
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ margin: '24px' }}>
          <div className="site-layout-background">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}