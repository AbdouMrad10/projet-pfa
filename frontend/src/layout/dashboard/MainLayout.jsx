import React from "react";
import Header from "../../component/dashboard/header";
import Sidebar from "../../component/dashboard/sidebar";
import "../../css/dashboard/MainLayout.css"


const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="layout-container">
        <Sidebar />
        <div className="main-content">
          {children} {/* This will render the page content */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;