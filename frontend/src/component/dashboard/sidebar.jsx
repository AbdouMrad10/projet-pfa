import React from "react";
import { Link } from "react-router-dom";
import "../../css/dashboard/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Dashboard</h3>
      <ul>
        <li>
          <Link to="/campaigns">Campaigns</Link>
        </li>
        <li>
          <Link to="/create-campaign">Create Campaign</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;