import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaUserCircle, FaCog, FaSignOutAlt, FaBell, FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`); // Replace with actual search logic
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationsOpen(false); // Close notifications dropdown
  };

  const toggleNotificationsDropdown = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileOpen(false); // Close profile dropdown
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="search-bar">
        <div className="search-input-container">
          <FaSearch className="search-icon" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="user-info">

        <div className="notifications" ref={notificationsRef} onClick={toggleNotificationsDropdown}>
          <FaBell className="notifications-icon" />
          {isNotificationsOpen && (
            <div className="notifications-dropdown">
              <div className="dropdown-item">
                <span>No new notifications</span>
              </div>
            </div>
          )}
        </div>

        <div className="profile" ref={profileRef} onClick={toggleProfileDropdown}>
          <FaUserCircle className="profile-icon" />
          <span>Admin</span>
          {isProfileOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-item">
                <FaCog className="dropdown-icon" />
                <span>Settings</span>
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                <FaSignOutAlt className="dropdown-icon" />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;