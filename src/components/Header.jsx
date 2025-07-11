import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header>
            <h2 className="header-heading">My Dashboard</h2>

            <div className="header-container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="header-search"
                />

                <button className="notification-btn">
                    Notification
                </button>

               
                    <button
                        className="user-btn"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span>John</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown">
                            <button className="dropdown-btn">Profile</button>
                            <button className="dropdown-btn">Settings</button>
                            <button className="dropdown-btn">Logout</button>
                        </div>
                    )}
               
            </div>
        </header>
    );
};

export default Header;
