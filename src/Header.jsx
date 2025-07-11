import React, { useState } from 'react';
import './App.css'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">My Dashboard</h2>

            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded px-3 py-1 focus:outline-none"
                />

                <button className="text-gray-600 hover:text-black">
                    Notification
                </button>

               
                    <button
                        className="flex items-center gap-2 text-gray-600 hover:text-black"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span>John</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow p-2 z-10">
                            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Profile</button>
                            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Settings</button>
                            <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Logout</button>
                        </div>
                    )}
               
            </div>
        </header>
    );
};

export default Header;
