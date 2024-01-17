import React, { useState } from "react";
import classes from "./Sidebar.module.css";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import GridViewIcon from "@mui/icons-material/GridView";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import ShieldIcon from "@mui/icons-material/Shield";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
// import ArticleIcon from "@mui/icons-material/Article";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { motion } from "framer-motion";

const Sidebar = ({ setActiveModule, sidebar, activeModule }) => {
  // const [slideOut, setSlideOut] = useState(false)

  const active = {
    color: "white",
    backgroundColor: "#4f2d7f",
  };

  return (
    <div
      style={
        sidebar
          ? { width: "22.5%" }
          : { opacity: "0", pointerEvents: "none", width: "0", minWidth: "0" }
      }
      className={classes.sidebar}
    >
      {/* <ul>
            <li><GridViewIcon/>Dashboard</li>
            <li><PeopleOutlineIcon/>Clients</li>
            <li><PersonIcon/>User Management</li>
            <li><ShieldIcon/>Masters</li>
            <li><ConnectingAirportsIcon/>Tansactions</li>
            <li><ArticleIcon/>Others</li>
        </ul>

        <span>
            <HelpOutlineIcon/>
            Help & Support
        </span> */}
      <div className={classes.innerSidebar}>
        <ul>
          <li
            style={activeModule == "dashboard" ? active : {}}
            onClick={() => {
              return setActiveModule("dashboard");
            }}
          >
            <GridViewIcon style={{ marginRight: "1.5rem" }} />
            Dashboard
          </li>
          <li
            style={activeModule == "clients" ? active : {}}
            onClick={() => {
              return setActiveModule("clients");
            }}
          >
            <PeopleOutlineIcon style={{ marginRight: "1.5rem" }} />
            Clients
          </li>
          <li
            style={activeModule == "usermanagement" ? active : {}}
            onClick={() => {
              return setActiveModule("usermanagement");
            }}
          >
            <PersonOutlineOutlinedIcon style={{ marginRight: "1.5rem" }} />
            User Management
          </li>
          <li
            style={activeModule == "masters" ? active : {}}
            onClick={() => {
              return setActiveModule("masters");
            }}
          >
            <ShieldOutlinedIcon style={{ marginRight: "1.5rem" }} />
            Masters
          </li>
          <li
            style={activeModule == "transactions" ? active : {}}
            onClick={() => {
              return setActiveModule("transactions");
            }}
          >
            <SwapHorizIcon style={{ marginRight: "1.5rem" }} />
            Transactions
          </li>
          <li
            style={activeModule == "other" ? active : {}}
            onClick={() => {
              return setActiveModule("other");
            }}
          >
            <ArticleOutlinedIcon style={{ marginRight: "1.5rem" }} />
            Others
          </li>
        </ul>
        <span
          style={activeModule == "helpandsupport" ? active : {}}
          onClick={() => {
            return setActiveModule("helpandsupport");
          }}
        >
          <HelpOutlineIcon style={{ marginRight: "1.5rem" }} />
          Help & Support
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
