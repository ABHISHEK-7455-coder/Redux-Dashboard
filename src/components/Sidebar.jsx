import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-purple-700 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Purple Admin</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Tickets</li>
        <li>Projects</li>
        <li>Todo</li>
      </ul>
    </aside>
  );
}

export default Sidebar;