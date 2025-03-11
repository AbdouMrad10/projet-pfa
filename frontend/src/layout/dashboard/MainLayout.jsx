import React from 'react';
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
import { useState,useRef} from "react";
//header
import { FaSearch, FaUserCircle, FaCog, FaSignOutAlt, FaBell, FaSun, FaMoon } from "react-icons/fa";
import Search from 'antd/es/transfer/search';

 
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
  //header
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
    const notificationsRef = useRef(null);
    const profileRef = useRef(null);
    
  
  
   const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`); // Remplacez par la logique de recherche réelle
  };
   const toggleNotificationsDropdown = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileOpen(false); // Fermer le dropdown du profil
  };
   const handleLogout = () => {
    alert("Logged out successfully!"); // Remplacez par la logique de déconnexion réelle
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationsOpen(false); // Fermer le dropdown des notifications
  };

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
       
                  <Header className="m-4 flex items-center rounded-xl p-0 shadow-md" style={{ background: colorBgContainer }}>
  <Button
    type="text"
    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    onClick={() => setCollapsed(!collapsed)}
    style={{ fontSize: '16px', width: 64, height: 64 }}
  />
  <div className="flex justify-between items-center w-full px-5">
    {/* Barre de recherche */}
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <FaSearch
          className="absolute left-3 text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors"
          onClick={handleSearch}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="pl-10 pr-3 h-10 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <Button
        onClick={handleSearch}
        className="bg-indigo-600 text-white px-4 py-2 h-10 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Search
      </Button>
    </div>

    {/* Notifications et Profil */}
    <div className="flex items-center gap-5">
      <div className="relative cursor-pointer" ref={notificationsRef} onClick={toggleNotificationsDropdown}>
        <FaBell className="text-indigo-500 text-xl" />
        {isNotificationsOpen && (
          <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-10">
            <div className="flex items-center gap-2 p-3 text-gray-800">
              <span>No new notifications</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex items-center gap-2 cursor-pointer" ref={profileRef} onClick={toggleProfileDropdown}>
        <FaUserCircle className="text-indigo-500 text-xl" />
        <span>Admin</span>
        {isProfileOpen && (
          <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-10">
            <div className="flex items-center gap-2 p-3 text-gray-800 hover:bg-gray-100">
              <FaCog className="text-gray-500" />
              <span>Settings</span>
            </div>
            <div
              className="flex items-center gap-2 p-3 text-gray-800 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="text-gray-500" />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
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