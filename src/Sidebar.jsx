import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    'Dashboard',
'Page Layouts',
'Apps',
'Widgets',
'Sidebar Layouts',
'Basic UI Elements',
'Advanced UI',
'Popups',
'Notifications',
'Icons',
'Forms',
'Text editors',
'Code editors',
'Charts',
'Tables',
'Maps',
'User Pages',
'Error pages',
'General Pages',
'E-commerce',
'E-mail',
'Calendar',
'Gallery',
'Documentation',
'Projects',
'Categories',

'Free',
'Pro',
  ];

  return (
    <aside className={`bg-purple-700 text-white h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} p-4`}>
      <button onClick={toggleSidebar} className="text-white mb-6">
        Menu
      </button>

      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:bg-purple-600 cursor-pointer p-2 rounded text-sm"
            title={isCollapsed ? item : ''} // Tooltip on collapse
          >
            {isCollapsed ? item[0] : item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
