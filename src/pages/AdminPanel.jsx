import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

import classes from './AdminPanel.module.css'

const AdminPanel = () => {
  return (
    <div className={classes.admin}>
      <Navbar/>
      <span>
        <Sidebar/>
        <Dashboard/>
      </span>
    </div>
  )
}

export default AdminPanel