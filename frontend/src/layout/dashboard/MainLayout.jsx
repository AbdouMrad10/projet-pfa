import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileAddFilled,
  FileAddOutlined,
  HomeFilled,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, ConfigProvider, Flex, Layout, Menu, theme } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { IoAddOutline, IoListOutline } from 'react-icons/io5';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, activeIcon, inactiveIcon, path) {
  return {
    key,
    activeIcon,
    inactiveIcon,
    label: <Link to={path}>{label}</Link>, // Use Link for navigation
  };
}

const items = [
  getItem('Dashboard', '1', <HomeFilled />, <HomeOutlined />, '/dashboard/'),
  getItem('Campaigns', '2', <UnorderedListOutlined />, <UnorderedListOutlined />, '/dashboard/campaigns'),
  getItem('Create Campaign', '3', <FileAddFilled />, <FileAddOutlined />, '/dashboard/create-campaign'),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Get current route

  const {
    token: { colorPrimary, colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Determine active menu item based on current path
  const activeKey = items.find(item => location.pathname === item.label.props.to)?.key || '1';

  // Map items to include the correct icon based on active state
  const menuItems = items.map(item => ({
    ...item,
    icon: item.key === activeKey ? item.activeIcon : item.inactiveIcon,
  }));

  return (
    <>

    <Layout  className='w-full   ' style={{minHeight: '100vh' }}>
    <Sider
      theme="light"
        className={` ${collapsed ? ' shadow-xl' : '  shadow-xl !w-[270px] !max-w-[270px] !min-w-[250px]'}`}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >        
        <div className="mb-10 demo-logo-vertical  mx-auto my-5 flex justify-center items-center gap-4 " >
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            width={45}
            className=""
            height={45}
          />
          {/* hide the text h3 if collapsed if true */}
          {!collapsed && <h3  className='text-violet-700 text-lg' style={{fontFamily: 'Roboto'}} >Dashborad</h3>}
        </div>
        <Menu style={{fontFamily: 'Arial'}} mode="inline" selectedKeys={[activeKey]} items={menuItems} />
      </Sider>
      <Layout>
        <Header className='m-4 flex rounded-xl p-0 shadow-md ' style={{ background: colorBgContainer }}
        
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64 }}
          />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{items.find(item => item.key === activeKey)?.label.props.children}</Breadcrumb.Item>
          </Breadcrumb>

          <div className='shadow-md'
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet /> 
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Donnation Company ©{new Date().getFullYear()} , made with ❤️ by Glsi2 Groupe
        </Footer>
      </Layout>
    </Layout>
    </>
  );
};

export default App;