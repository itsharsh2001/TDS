import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DescriptionIcon from "@mui/icons-material/Description";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import AddIcon from "@mui/icons-material/Add";
import PurpleButton from "./UI/PurpleButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { ReactComponent as MySVG1 } from "../svg/1bar.svg";
import { ReactComponent as MySVG2 } from "../svg/2bar.svg";
import { ReactComponent as MySVG3 } from "../svg/3bar.svg";
import Card from "./Dashboard/Card";

const Dashboard = ({sidebar}) => {
  const [editing, setEditing] = useState(false);

  const [chosenParameters, setChosenParameters] = useState({
    group:'',
    entity:'',
    tan:'',
    financial:'',
  })

  const [visibleFields, setVisibleFields] = useState({
    group:false,
    entity:false,
    tan:false,
    financial:false,
  })

  const [screenCount, setScreenCount] = useState(1)

  const customStyle = {
    width: "100%",
    gridTemplateColumns: "16.67% 16.67% 16.67% 16.67% 16.67% 16.67%",
  };

  const opacityStyle = {
    opacity:'0',
    pointerEvents:'none',
  }

  return (
    <section style={sidebar?{width:'77.5%'}:{width:'100%'}} className={classes.dashboard}>
      {!editing && (
        <section>
          <span>
            <h2>30</h2>
            <p>No. of Clients</p>
          </span>
          <span>
            <h2>167</h2>
            <p>Total TANs</p>
          </span>
          <span>
            <h2>1035753</h2>
            <p>No. of Entries Processed</p>
          </span>
          <span>
            <h2>568</h2>
            <p>Total Months Processed</p>
          </span>
          <span>
            <h2>100</h2>
            <p>Months Pending</p>
          </span>
          <span>
            <h2>37</h2>
            <p>Returns Pending</p>
          </span>
          <span>
            <h2>130</h2>
            <p>Returns Processed</p>
          </span>
        </section>
      )}

      {editing && (
        <section style={editing ? customStyle : {}}>
          <span>
            <p>No. of Clients</p>
            <h2>189</h2>
          </span>
          <span>
            <p>No. of Clients</p>
            <h2>189</h2>
          </span>
          <span>
            <p>No. of Clients</p>
            <h2>189</h2>
          </span>
          <span>
            <p>No. of Clients</p>
            <h2>189</h2>
          </span>
          <span>
            <p>No. of Clients</p>
            <h2>189</h2>
          </span>
          <span>
            <p>No. of Clients</p>
            <h2>189</h2>
          </span>
        </section>
      )}

      <div className={classes.selects}>
        <span onClick={()=>{
          setVisibleFields({
            group:!visibleFields.group,
            entity:false,
            tan:false,
            financial:false,
          })
        }}>
          <p>{chosenParameters.group!=''?chosenParameters.group:'Choose Group'}</p>
          <KeyboardArrowDownIcon />
        </span>
        <span onClick={()=>{
          setVisibleFields({
            group:false,
            entity:!visibleFields.entity,
            tan:false,
            financial:false,
          })
        }}>
          <p>{chosenParameters.entity!=''?chosenParameters.entity:'Choose Entity'}</p>
          <KeyboardArrowDownIcon />
        </span>
        <span onClick={()=>{
          setVisibleFields({
            group:false,
            entity:false,
            tan:!visibleFields.tan,
            financial:false,
          })
        }}>
          <p>{chosenParameters.tan!=''?chosenParameters.tan:'Choose TAN'}</p>
          <KeyboardArrowDownIcon />
        </span>
        <span onClick={()=>{
          setVisibleFields({
            group:false,
            entity:false,
            tan:false,
            financial:!visibleFields.financial,
          })
        }}>
          <p>{chosenParameters.financial!=''?chosenParameters.financial:'Choose Financial Year'}</p>
          <KeyboardArrowDownIcon />
        </span>
      </div>

      { (chosenParameters.entity==''|| chosenParameters.group==''|| chosenParameters.tan==''|| chosenParameters.financial=='' )&&<div style={{position:'relative', top:'0', zIndex:'51'}} className={classes.selects}>
        <div style={!visibleFields.group ? opacityStyle : {}}>
          <span>
            <SearchIcon />{" "}
            <input value={chosenParameters?.group} placeholder="Search Filters" type="text" name="" id="" />
          </span>
          <ul>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                group: 'TATA'
              })}} type="radio" name="group" id="a1" />
              <label onClick={(e)=>{return setChosenParameters({
                ...chosenParameters,
                group: 'TATA'
              })}}  htmlFor="a1">TATA</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                group: 'ADANI'
              })}}  type="radio" name="group" id="a2" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                group: 'ADANI'
              })}}  htmlFor="a2">ADANI</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                group: 'Reliance'
              })}}  type="radio" name="group" id="a3" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                group: 'Reliance'
              })}}  htmlFor="a3">Reliance</label>
            </li>
          </ul>
          <PurpleButton>Apply</PurpleButton>
        </div>
        <div style={!visibleFields.entity ? opacityStyle : {}}>
          <span>
            <SearchIcon />{" "}
            <input value={chosenParameters.entity} placeholder="Search Filters" type="text" name="" id="" />
          </span>
          <ul>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Consultancy Services Limited'
              })}} type="radio" name="" id="e1" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Consultancy Services Limited'
              })}} htmlFor="e1">Tata Consultancy Services Limited</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Motors Limited'
              })}} type="radio" name="" id="e2" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Motors Limited'
              })}} htmlFor="e2">Tata Motors Limited</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Chemicals Limited'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Chemicals Limited'
              })}} htmlFor="">Tata Chemicals Limited</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Powers Limited'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Powers Limited'
              })}} htmlFor="">Tata Powers Limited</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Steel Limited'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                entity: 'Tata Steel Limited'
              })}} htmlFor="">Tata Steel Limited</label>
            </li>
          </ul>
          <PurpleButton>Apply</PurpleButton>
        </div>
        <div style={!visibleFields.tan ? opacityStyle : {}}>
          <span>
            <SearchIcon />{" "}
            <input value={chosenParameters.tan} placeholder="Search Filters" type="text" name="" id="" />
          </span>
          <ul>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICA9561K'
              })}} type="radio" name="" id="t1" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICA9561K'
              })}} htmlFor="t1">BKICA9561K</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICD9828K'
              })}} type="radio" name="" id="t2" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICD9828K'
              })}} htmlFor="t2">BKICD9828K</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICG6641K'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICG6641K'
              })}} htmlFor="">BKICG6641K</label>
            </li> 
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICJ1426K'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICJ1426K'
              })}} htmlFor="">BKICJ1426K</label>
            </li> 
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICM7469K'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                tan: 'BKICM7469K'
              })}} htmlFor="">BKICM7469K</label>
            </li>      
          </ul>
          <PurpleButton>Apply</PurpleButton>
        </div>
        <div style={!visibleFields.financial ? opacityStyle : {}}>
          <span>
            <SearchIcon />{" "}
            <input value={chosenParameters.financial} placeholder="Search Filters" type="text" name="" id="" />
          </span>
          <ul>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                financial: 'FY 2023-24'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                financial: 'FY 2023-24'
              })}} htmlFor="">FY 2023-24</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                financial: 'FY 2022-23'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                financial: 'FY 2022-23'
              })}} htmlFor="">FY 2022-23</label>
            </li>
            <li>
              <input onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                financial: 'FY 2021-22'
              })}} type="radio" name="" id="" />
              <label onClick={()=>{return setChosenParameters({
                ...chosenParameters,
                financial: 'FY 2021-22'
              })}} htmlFor="">FY 2021-22</label>
            </li>
          </ul>
          <PurpleButton>Apply</PurpleButton>
        </div>
      </div>}

      {!editing && !chosenParameters.entity==''&& !chosenParameters.group==''&& !chosenParameters.tan==''&& !chosenParameters.financial=='' && (
        <>
          <span className={classes.heading}>
            <h3>Dashboard</h3>
            <div>
              <p onClick={()=>{return setEditing(true)}}>
                Customize Dashboard
                <AddIcon
                  style={{
                    color: "#2A589C",
                    fontSize: "2.5rem",
                    boxShadow: "none",
                  }}
                />
              </p>
              {/* <svg
                className={classes.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99992 16.6663C9.07944 16.6663 8.33325 15.9201 8.33325 14.9997C8.33325 14.0792 9.07944 13.333 9.99992 13.333C10.9204 13.333 11.6666 14.0792 11.6666 14.9997C11.6666 15.9201 10.9204 16.6663 9.99992 16.6663ZM9.99992 11.6663C9.07944 11.6663 8.33325 10.9201 8.33325 9.99967C8.33325 9.0792 9.07944 8.33301 9.99992 8.33301C10.9204 8.33301 11.6666 9.0792 11.6666 9.99967C11.6666 10.4417 11.491 10.8656 11.1784 11.1782C10.8659 11.4907 10.4419 11.6663 9.99992 11.6663ZM9.99992 6.66634C9.07944 6.66634 8.33325 5.92015 8.33325 4.99967C8.33325 4.0792 9.07944 3.33301 9.99992 3.33301C10.9204 3.33301 11.6666 4.0792 11.6666 4.99967C11.6666 5.4417 11.491 5.86563 11.1784 6.17819C10.8659 6.49075 10.4419 6.66634 9.99992 6.66634Z"
                  fill="#4F4F4F"
                />
              </svg> */}
            </div>
          </span>

          <main className={classes.main}>
            <img src="/dashboard1.png" alt="" />
            <img src="/PANStatus.png" alt="" />
            <img src="/Top5Vendors.png" alt="" />
          </main>
          <img className={classes.img} src="/tds.png" alt="" />
          <main className={classes.main}>
              <img style={{width:'66%'}} src="/Variance in TDS.png" alt="" />
              <img src="/TDS Distribution.png" alt="" />
          </main>
          <main className={classes.main}>
              <img src="/Top 5 Vendors.png" alt="" />
              <img style={{width:'66%'}} src="/Top 10 LDC nearing full uitilization.png" alt="" />
          </main>
          <img className={classes.img} src="/Monthly Challan Summary.png" alt="" />
          
        </>
      )}

      {editing && (
        <main>
          <section>
            <h3>
              Dashboard{" "}
              <PurpleButton onClick={()=>{return setEditing(false)}}>
                <DescriptionIcon style={{ marginRight: "1rem" }} />
                Done
              </PurpleButton>
              {/* <svg
                style={{ marginLeft: "1rem" }}
                className={classes.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99992 16.6663C9.07944 16.6663 8.33325 15.9201 8.33325 14.9997C8.33325 14.0792 9.07944 13.333 9.99992 13.333C10.9204 13.333 11.6666 14.0792 11.6666 14.9997C11.6666 15.9201 10.9204 16.6663 9.99992 16.6663ZM9.99992 11.6663C9.07944 11.6663 8.33325 10.9201 8.33325 9.99967C8.33325 9.0792 9.07944 8.33301 9.99992 8.33301C10.9204 8.33301 11.6666 9.0792 11.6666 9.99967C11.6666 10.4417 11.491 10.8656 11.1784 11.1782C10.8659 11.4907 10.4419 11.6663 9.99992 11.6663ZM9.99992 6.66634C9.07944 6.66634 8.33325 5.92015 8.33325 4.99967C8.33325 4.0792 9.07944 3.33301 9.99992 3.33301C10.9204 3.33301 11.6666 4.0792 11.6666 4.99967C11.6666 5.4417 11.491 5.86563 11.1784 6.17819C10.8659 6.49075 10.4419 6.66634 9.99992 6.66634Z"
                  fill="#4F4F4F"
                />
              </svg> */}
            </h3>
            <p>
              <PriorityHighIcon className={classes.highicon} /> You are
              currently editing your dashboard. Click Done button to save
              changes .
            </p>
            <div>
              {/* <img src="/1bar.svg" alt="" /> */}
              <MySVG1 onClick={()=>{return setScreenCount(1)}} />
              {/* <img src="/2bar.svg" alt="" /> */}
              <MySVG2 onClick={()=>{return setScreenCount(2)}} />
              {/* <img src="/3bar.svg" alt="" /> */}
              <MySVG3 onClick={()=>{return setScreenCount(3)}} />
            </div>
            <section>
              <span>
                <NoteAddOutlinedIcon />
                <h6>
                  Drag or Click on a widget to this column or tap add it from
                  the widget list
                </h6>
              </span>
              {(screenCount==2||screenCount==3) &&<span>
                <NoteAddOutlinedIcon />
                <h6>
                  Drag or Click on a widget to this column or tap add it from
                  the widget list
                </h6>
              </span>}
              {screenCount==3 && <span>
                <NoteAddOutlinedIcon />
                <h6>
                  Drag or Click on a widget to this column or tap add it from
                  the widget list
                </h6>
              </span>}
            </section>
          </section>

          <div className={classes.sidebardiv}>
            <p>
              Add widgets <CloseIcon />
            </p>
            <span>
              <SearchIcon />
              <input type="text" placeholder="Search Widget" name="" id="" />
            </span>
            <section>
              <p>All 7</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </section>

            <hr />

            <div>
              <Card name='TDS Distribution' img='/dashboard1.png' />
              <Card name='PAN Status' img='/PANStatus.png' />
              <Card name='Top 5 Vendors' img='/Top5Vendors.png' />
              <Card name='TDS Distribution' img='/TDS Distribution.png' />
              <Card name='Top 5 Vendors' img='/Top 5 Vendors.png' />
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default Dashboard;
