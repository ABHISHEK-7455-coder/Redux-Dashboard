import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { weeklySales, weeklyOrders, visitorsOnline } = useSelector((state) => state.dashboard);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 shadow rounded">Weekly Sales: ${weeklySales}</div>
      <div className="bg-white p-4 shadow rounded">Weekly Orders: {weeklyOrders}</div>
      <div className="bg-white p-4 shadow rounded">Visitors Online: {visitorsOnline}</div> 
      <div className="bg-white p-4 shadow rounded">Visit and Sales Statistics</div>
      <div className="bg-white p-4 shadow rounded">Traffic Sources</div>
      <div className="bg-white p-4 shadow rounded">Recent Tickets</div>
      <div className="bg-white p-4 shadow rounded">Recent Updates</div>
      <div className="bg-white p-4 shadow rounded">Project Status</div>
      <div className="bg-white p-4 shadow rounded">Todo List</div>
      <div className="bg-white p-4 shadow rounded">Calendar</div>
    </div>
  );
}

export default Dashboard;