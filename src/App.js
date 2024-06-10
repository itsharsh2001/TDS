import React, { useState } from "react";
import "./App.css";
// import AdminPanel from './pages/AdminPanel';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Clients from "./components/Clients";
import HelpSupport from "./components/HelpSupport";
import Other from "./components/Other";
import Masters from "./components/Masters";
import Profile from "./components/Profile";

import { Masters2 } from "./components/Masters2";

import Transactions from "./components/Transactions";
import UserManagement from "./components/UserManagement/UserManagement";

import AdminPanel from "./pages/AdminPanel";
import Transactions2 from "./components/Transactions2";
import Transactions3 from "./components/Transactions3";

let App = () => {
  const [activeModule, setactiveModule] = useState("dashboard");
  const [sidebar, setSidebar] = useState(true);

  const sidebarToggler = () => {
    setSidebar((prevState) => {
      return !prevState;
    });
  };
  const activeModuleSetter = (module) => {
    console.log(module);
    setactiveModule(module);
  };
  return (
    <>
      {/* <div style={{margin:0, padding:0}}>
      <AdminPanel/>
    </div> */}
      <div className="admin">
        <Navbar
          sidebarToggler={sidebarToggler}
          setActiveModule={activeModuleSetter}
        />
        <span>
          <Sidebar
            activeModule={activeModule}
            sidebar={sidebar}
            setActiveModule={activeModuleSetter}
          />

          {activeModule == "dashboard" && <Dashboard sidebar={sidebar} />}
          {activeModule == "clients" && <Clients sidebar={sidebar} />}
          {activeModule == "helpandsupport" && (
            <HelpSupport sidebar={sidebar} />
          )}
          {activeModule == "other" && <Other sidebar={sidebar} />}
          {activeModule == "masters" && <Masters sidebar={sidebar} />}
          {activeModule == "masters2" && <Masters2 sidebar={sidebar}/>}  
          {activeModule == "transactions" && <Transactions sidebar={sidebar} />}
          {activeModule == "transactions2" && (
            <Transactions2 sidebar={sidebar} />
          )}
          {activeModule == "transactions3" && (
            <Transactions3 sidebar={sidebar} />
          )}
          {activeModule == "usermanagement" && (
            <UserManagement sidebar={sidebar} />
          )}
          {activeModule == "profile" && <Profile />}
        </span>
      </div>
    </>
  );
};

export default App;
