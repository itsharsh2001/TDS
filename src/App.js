import React,{useState} from 'react';
import './App.css';
// import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import HelpSupport from './components/HelpSupport';
import Other from './components/Other';
import Masters from './components/Masters';
import Transactions from './components/Transactions';
import UserManagement from './components/UserManagement/UserManagement';


let App = () => {
  const [activeModule, setactiveModule] = useState('dashboard')
  const [sidebar, setSidebar] = useState(true)

  

  const sidebarToggler = () => {
    setSidebar((prevState)=>{return !prevState})
  }
  const activeModuleSetter = (module) => {
    console.log(module)
    setactiveModule(module)
  }
  return (
    // <div style={{margin:0, padding:0}}>
    //   <AdminPanel/>
    // </div>
    <div className='admin'>
      <Navbar sidebarToggler={sidebarToggler} setActiveModule={activeModuleSetter}/>
      <span>
       
        <Sidebar activeModule={activeModule} sidebar={sidebar} setActiveModule={activeModuleSetter}/>
        
        {activeModule=='dashboard' && <Dashboard sidebar={sidebar}/>}
        {activeModule=='clients' && <Clients sidebar={sidebar}/>}
        {activeModule=='helpandsupport' && <HelpSupport sidebar={sidebar}/>}
        {activeModule=='other' && <Other sidebar={sidebar}/>}
        {activeModule=='masters' && <Masters sidebar={sidebar}/>}
        {activeModule=='transactions' && <Transactions sidebar={sidebar}/>}
        {activeModule=='usermanagement' && <UserManagement sidebar={sidebar}/>}
      </span>
    </div>
  );
}

export default App;
