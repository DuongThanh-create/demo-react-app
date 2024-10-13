import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HomeLayout = () => {
return (<div>
    <h1>Home Demo</h1>
    <nav>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>)
}

export default HomeLayout