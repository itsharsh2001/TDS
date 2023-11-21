import React from 'react'
import classes from './Navbar.module.css'

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Navbar = ({sidebarToggler,setActiveModule}) => {
  return (
    <nav className={classes.nav}>
        <div>
           <MenuIcon onClick={sidebarToggler} style={{cursor:'pointer',fontSize:'3rem',color:'#4F2D7F'}}/>
           <img onClick={()=>{return setActiveModule('dashboard')}} src="/Logo.png" alt="" srcSet="" /> 
        </div>
        <section>
            <img src="/user.png" alt="" srcSet="" />
            <h4>Ganesh Gupta</h4>
            <LoginOutlinedIcon style={{fontSize:'4rem',color:'#ffffff',padding:'0.75rem', background:'#4F2D7F', borderRadius:'50%'}}/>
        </section>
    </nav>
  )
}

export default Navbar