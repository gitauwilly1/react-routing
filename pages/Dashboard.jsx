import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h2>Dashboard</h2>
        <nav>
            <Link to="overview">Overview</Link>
            <Link to="users">Users</Link>
            <Link to="settings">Settings</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Dashboard