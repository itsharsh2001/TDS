import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import classes from "../Clients.module.css";

const TanLevel = ({ sidebar }) => {
  const [addClientStep1, setAddClientStep1] = useState(true);
  const [addClientStep2, setAddClientStep2] = useState(false);
  const [addClientStep3, setAddClientStep3] = useState(false);

  const clientData = [
    {
      Branch_Name: "Pune Branch",
      TAN: "BKICA9561K",
      Onboarding_Month: "April-2024",
      Created_On: "30-03-2023 11:46PM",
    },
    {
      Branch_Name: "Mumbai Branch",
      TAN: "BKICA8561L",
      Onboarding_Month: "May-2024",
      Created_On: "30-04-2023 01:46PM",
    },
  ];

  const [tanFieldCount, setTanFieldCount] = useState(3);

  const [reversalRecord, setReversalRecord] = useState(false);
  const [provisionInvoice, setProvisionInvoice] = useState(false);
  const [advanceInvoice, setAdvanceInvoice] = useState(false);
  const [thresholdApplicable, setThresholdApplicable] = useState(false);

  const [parameterSelect, setParameterSelect] = useState(false);
  const [parameterSelect2, setParameterSelect2] = useState(false);
  const [tanSelect, setTanSelect] = useState(false);
  const [tanSelect2, setTanSelect2] = useState(false);

  const customNumberStyle = {
    backgroundColor: "#00A7B5",
    color: "#fff",
  };

  const [popup, setPopup] = useState(false);
  const [viewClientPopup, setViewClientPopup] = useState(false);
  const [updateClientPopup, setUpdateClientPopup] = useState(false);

  const [clientIdentity, setClientIdentity] = useState(2);

  const nextButtonHandler = () => {
    if (!popup && !updateClientPopup) {
      if (addClientStep1) {
        setAddClientStep1(false);
        setAddClientStep2(true);
      }
      if (addClientStep2) {
        setAddClientStep2(false);
        setAddClientStep3(true);
      }
      if (addClientStep3) {
        setAddClientStep3(false);
        setAddClientStep1(true);
        // setPopup(false);
        setUpdateClientPopup(false);
        setViewClientPopup(false);
        setViewClientPopup(false);
      }
    } else {
      if (addClientStep1) {
        setAddClientStep1(false);
        setAddClientStep2(true);
      }
      if (addClientStep2) {
        setAddClientStep2(false);
        setAddClientStep1(true);
        setPopup(false);
        setUpdateClientPopup(false);
      }
    }
  };

  let customHrStyle = {};
  if (popup) {
    customHrStyle = {
      backgroundColor: "#00A7B5",
      width: "80%",
    };
  } else {
    customHrStyle = {
      backgroundColor: "#00A7B5",
      // width: '80%'
    };
  }

  const cancelButtonHandler = () => {
    setAddClientStep1(true);
    setAddClientStep2(false);
    setAddClientStep3(false);
    setPopup(false);
    setViewClientPopup(false);
    setUpdateClientPopup(false);
  };

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {(popup || viewClientPopup || updateClientPopup) && (
        <div
          className={classes.overlay}
          onClick={() => {
            setPopup(false);
            setViewClientPopup(false);
            return setUpdateClientPopup(false);
          }}
        ></div>
      )}
      {popup && (
        <div className={classes.popup}>
          {addClientStep1 && <h1 className={classes.heading}>Add Branch</h1>}
          {addClientStep2 && (
            <h1 className={classes.heading}>Access Management</h1>
          )}
          <span>
            <p
              onClick={() => {
                setAddClientStep1(true);
                setAddClientStep2(false);
                return setAddClientStep3(false);
              }}
              style={
                addClientStep1 || addClientStep2 || addClientStep3
                  ? customNumberStyle
                  : {}
              }
            >
              1
            </p>
            <hr
              style={
                addClientStep2 || addClientStep3
                  ? customHrStyle
                  : { width: "80%" }
              }
            />
            <p
              onClick={() => {
                setAddClientStep1(false);
                setAddClientStep2(true);
                return setAddClientStep3(false);
              }}
              style={addClientStep2 || addClientStep3 ? customNumberStyle : {}}
            >
              2
            </p>
          </span>
          {/* <h1 className={classes.heading}>Add Client</h1> */}
          {/* {addClientStep1 && <h5>Add Group & Client Details</h5>} */}
          {addClientStep2 && (
            <table className={classes.accessmanagementtable}>
              <tbody>
                <tr>
                  <th>Module</th>
                  <th>Features</th>
                  <th>Access</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Monthly Compliances</td>
                  <td>TDS Computation</td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <KeyboardArrowDownOutlinedIcon
                      className={classes.downicon}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Quarterly Compliances</td>
                  <td>
                    <p>Integrated Return</p>{" "}
                    {dropdown && <p>Independent Return</p>}
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {dropdown && <input type="checkbox" name="" id="" />}
                  </td>
                  <td>
                    {!dropdown && (
                      <KeyboardArrowDownOutlinedIcon
                        onClick={() => {
                          return setDropdown(true);
                        }}
                        className={classes.downicon}
                      />
                    )}
                    {dropdown && (
                      <KeyboardArrowUpOutlinedIcon
                        onClick={() => {
                          return setDropdown(false);
                        }}
                        className={classes.downicon}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Annual Compliances</td>
                  <td>26AS Reconciliations</td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <KeyboardArrowDownOutlinedIcon
                      className={classes.downicon}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {addClientStep1 && (
            <main className={classes.popupmainpart}>
              <section>
                <h6>Branch/TAN Details</h6>
                {addClientStep2 && <h6>Branch/TAN Details</h6>}
                <div>
                  <input
                    placeholder="Type Branch Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    placeholder="Type TAN Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    placeholder="Onboarding Month"
                    type="date"
                    name=""
                    id=""
                  />
                  {/* <select name="" id="">
                    <option value="">Select Group</option>
                    <option value="">ABC</option>
                    <option value="">DEF</option>
                    <option value="">GHI</option>
                  </select> */}
                  {/* <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      return setAddNewGroup(true);
                    }}
                  >
                    <AddIcon /> Add New Group
                  </p> */}
                </div>
                {/* {addNewGroup && (
                  <div>
                    <input
                      placeholder="Type Group Name"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) => {
                        return setNewGroupValue(e.target.value);
                      }}
                    />
                    <button>Create</button>
                  </div>
                )} */}
              </section>

              <section>
                <h6>Responsible Person's Details</h6>
                <div>
                  <input placeholder="Type Name" type="text" name="" id="" />
                  <input
                    placeholder="Type PAN Number"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    placeholder="Type Designation"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input placeholder="Type Email" type="email" name="" id="" />
                  <input
                    placeholder="Type Phone Number"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                {/* <h6>Select the type of Accounting</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="accountingtype"
                      value="Centralized"
                      id="Centralized"
                    />
                    <label htmlFor="Centralized">Centralized</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="accountingtype"
                      value="Decentralized"
                      id="Decentralized"
                    />
                    <label htmlFor="Decentralized">Decentralized</label>
                  </span>
                </div> */}
              </section>
            </main>
          )}
          <div>
            <button onClick={nextButtonHandler} className={classes.button}>
              {addClientStep2 ? "Submit" : "Next"}
            </button>
            {/* <button onClick={cancelButtonHandler} className={classes.button}>
              Submit
            </button> */}
            <button onClick={cancelButtonHandler} className={classes.button1}>
              Close
            </button>
          </div>
        </div>
      )}

      {viewClientPopup && (
        <div className={classes.popup}>
          {addClientStep1 && <h1 className={classes.heading}>Add Branch</h1>}
          {addClientStep2 && (
            <h1 className={classes.heading}>Access Management</h1>
          )}
          <span>
            <p
              onClick={() => {
                setAddClientStep1(true);
                setAddClientStep2(false);
                return setAddClientStep3(false);
              }}
              style={
                addClientStep1 || addClientStep2 || addClientStep3
                  ? customNumberStyle
                  : {}
              }
            >
              1
            </p>
            <hr
              style={
                addClientStep2 || addClientStep3
                  ? customHrStyle
                  : {  }
              }
            />
            <p
              onClick={() => {
                setAddClientStep1(false);
                setAddClientStep2(true);
                return setAddClientStep3(false);
              }}
              style={addClientStep2 || addClientStep3 ? customNumberStyle : {}}
            >
              2
            </p>
            <hr style={addClientStep3 ? customHrStyle : {}} />
            <p
              onClick={() => {
                setAddClientStep1(false);
                setAddClientStep2(false);
                return setAddClientStep3(true);
              }}
              style={addClientStep3 ? customNumberStyle : {}}
            >
              3
            </p>
          </span>
          {/* <h1 className={classes.heading}>Add Client</h1> */}
          {addClientStep3 && <h5>Users mapped to Branch</h5>}
          {addClientStep2 && (
            <table className={classes.accessmanagementtable}>
              <tbody>
                <tr>
                  <th>Module</th>
                  <th>Features</th>
                  <th>Access</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Monthly Compliances</td>
                  <td>TDS Computation</td>
                  <td>
                    <input disabled checked type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <KeyboardArrowDownOutlinedIcon
                      className={classes.downicon}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Quarterly Compliances</td>
                  <td>
                    <p>Integrated Return</p>{" "}
                    {dropdown && <p>Independent Return</p>}
                  </td>
                  <td>
                    <input disabled checked type="checkbox" name="" id="" />
                    {dropdown && (
                      <input disabled type="checkbox" name="" id="" />
                    )}
                  </td>
                  <td>
                    {!dropdown && (
                      <KeyboardArrowDownOutlinedIcon
                        onClick={() => {
                          return setDropdown(true);
                        }}
                        className={classes.downicon}
                      />
                    )}
                    {dropdown && (
                      <KeyboardArrowUpOutlinedIcon
                        onClick={() => {
                          return setDropdown(false);
                        }}
                        className={classes.downicon}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Annual Compliances</td>
                  <td>26AS Reconciliations</td>
                  <td>
                    <input disabled checked type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <KeyboardArrowDownOutlinedIcon
                      className={classes.downicon}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {addClientStep3 && (
            <>
              
              <table className={classes.step3table}>
                <tbody>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                  </tr>
                  <tr>
                    <td>Ganesh Gupta</td>
                    <td>GT Manager</td>
                  </tr>
                  <tr>
                    <td>Dhruv Jain</td>
                    <td>GT Manager</td>
                  </tr>
                  <tr>
                    <td>Dhruv Jain</td>
                    <td>GT Executive</td>
                  </tr>
                  <tr>
                    <td>Harsh</td>
                    <td>Admin</td>
                  </tr>
                </tbody>
              </table>
              
            </>
          )}

          {addClientStep1 && (
            <main className={classes.popupmainpart}>
              <section>
                <h6>Branch/TAN Details</h6>
                {addClientStep2 && <h6>Branch/TAN Details</h6>}
                <div>
                  <input
                    disabled
                    placeholder="Pune"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    disabled
                    placeholder="BKICA9561K"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    disabled
                    placeholder="April 2024"
                    type="date"
                    name=""
                    id=""
                  />
                  {/* <select name="" id="">
                 <option value="">Select Group</option>
                 <option value="">ABC</option>
                 <option value="">DEF</option>
                 <option value="">GHI</option>
               </select> */}
                  {/* <p
                 style={{ cursor: "pointer" }}
                 onClick={() => {
                   return setAddNewGroup(true);
                 }}
               >
                 <AddIcon /> Add New Group
               </p> */}
                </div>
                {/* {addNewGroup && (
               <div>
                 <input
                   placeholder="Type Group Name"
                   type="text"
                   name=""
                   id=""
                   onChange={(e) => {
                     return setNewGroupValue(e.target.value);
                   }}
                 />
                 <button>Create</button>
               </div>
             )} */}
              </section>

              <section>
                <h6>Responsible Person's Details</h6>
                <div>
                  <input
                    disabled
                    placeholder="Ganesh Gupta"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    disabled
                    placeholder="BKIPG6950K"
                    type="text"
                    name=""
                    id=""
                  />
                  <input disabled placeholder="CEO" type="text" name="" id="" />
                </div>
                <div>
                  <input
                    disabled
                    placeholder="ganesh.g@abc.com"
                    type="email"
                    name=""
                    id=""
                  />
                  <input
                    disabled
                    placeholder="89558668797"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                {/* <h6>Select the type of Accounting</h6>
             <div>
               <span>
                 <input
                   type="radio"
                   name="accountingtype"
                   value="Centralized"
                   id="Centralized"
                 />
                 <label htmlFor="Centralized">Centralized</label>
               </span>
               <span>
                 <input
                   type="radio"
                   name="accountingtype"
                   value="Decentralized"
                   id="Decentralized"
                 />
                 <label htmlFor="Decentralized">Decentralized</label>
               </span>
             </div> */}
              </section>
            </main>
          )}
          <div>
            <button onClick={nextButtonHandler} className={classes.button}>
              {addClientStep3 ? "Submit" : "Next"}
            </button>
            {/* <button onClick={cancelButtonHandler} className={classes.button}>
           Submit
         </button> */}
            <button onClick={cancelButtonHandler} className={classes.button1}>
              Close
            </button>
          </div>
        </div>
      )}

      {updateClientPopup && (
        <div className={classes.popup}>
          {addClientStep1 && <h1 className={classes.heading}>Add Branch</h1>}
          {addClientStep2 && (
            <h1 className={classes.heading}>Access Management</h1>
          )}
          <span>
            <p
              onClick={() => {
                setAddClientStep1(true);
                setAddClientStep2(false);
                return setAddClientStep3(false);
              }}
              style={
                addClientStep1 || addClientStep2 || addClientStep3
                  ? customNumberStyle
                  : {}
              }
            >
              1
            </p>
            <hr
              style={
                addClientStep2 || addClientStep3
                  ? customHrStyle
                  : { width: "80%" }
              }
            />
            <p
              onClick={() => {
                setAddClientStep1(false);
                setAddClientStep2(true);
                return setAddClientStep3(false);
              }}
              style={addClientStep2 || addClientStep3 ? customNumberStyle : {}}
            >
              2
            </p>
          </span>
          {/* <h1 className={classes.heading}>Add Client</h1> */}
          {/* {addClientStep1 && <h5>Add Group & Client Details</h5>} */}
          {addClientStep2 && (
            <table className={classes.accessmanagementtable}>
              <tbody>
                <tr>
                  <th>Module</th>
                  <th>Features</th>
                  <th>Access</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Monthly Compliances</td>
                  <td>TDS Computation</td>
                  <td>
                    <input checked type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <KeyboardArrowDownOutlinedIcon
                      className={classes.downicon}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Quarterly Compliances</td>
                  <td>
                    <p>Integrated Return</p>{" "}
                    {dropdown && <p>Independent Return</p>}
                  </td>
                  <td>
                    <input checked type="checkbox" name="" id="" />
                    {dropdown && <input type="checkbox" name="" id="" />}
                  </td>
                  <td>
                    {!dropdown && (
                      <KeyboardArrowDownOutlinedIcon
                        onClick={() => {
                          return setDropdown(true);
                        }}
                        className={classes.downicon}
                      />
                    )}
                    {dropdown && (
                      <KeyboardArrowUpOutlinedIcon
                        onClick={() => {
                          return setDropdown(false);
                        }}
                        className={classes.downicon}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Annual Compliances</td>
                  <td>26AS Reconciliations</td>
                  <td>
                    <input checked type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <KeyboardArrowDownOutlinedIcon
                      className={classes.downicon}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {addClientStep1 && (
            <main className={classes.popupmainpart}>
              <section>
                <h6>Branch/TAN Details</h6>
                {addClientStep2 && <h6>Branch/TAN Details</h6>}
                <div>
                  <input placeholder="Pune" type="text" name="" id="" />
                  <input placeholder="BKICA9561K" type="text" name="" id="" />
                  <input placeholder="April 2024" type="date" name="" id="" />
                  {/* <select name="" id="">
                   <option value="">Select Group</option>
                   <option value="">ABC</option>
                   <option value="">DEF</option>
                   <option value="">GHI</option>
                 </select> */}
                  {/* <p
                   style={{ cursor: "pointer" }}
                   onClick={() => {
                     return setAddNewGroup(true);
                   }}
                 >
                   <AddIcon /> Add New Group
                 </p> */}
                </div>
                {/* {addNewGroup && (
                 <div>
                   <input
                     placeholder="Type Group Name"
                     type="text"
                     name=""
                     id=""
                     onChange={(e) => {
                       return setNewGroupValue(e.target.value);
                     }}
                   />
                   <button>Create</button>
                 </div>
               )} */}
              </section>

              <section>
                <h6>Responsible Person's Details</h6>
                <div>
                  <input placeholder="Ganesh Gupta" type="text" name="" id="" />
                  <input placeholder="BKIPG6950K" type="text" name="" id="" />
                  <input placeholder="CEO" type="text" name="" id="" />
                </div>
                <div>
                  <input
                    placeholder="ganesh.g@abc.com"
                    type="email"
                    name=""
                    id=""
                  />
                  <input placeholder="89558668797" type="text" name="" id="" />
                </div>
                {/* <h6>Select the type of Accounting</h6>
               <div>
                 <span>
                   <input
                     type="radio"
                     name="accountingtype"
                     value="Centralized"
                     id="Centralized"
                   />
                   <label htmlFor="Centralized">Centralized</label>
                 </span>
                 <span>
                   <input
                     type="radio"
                     name="accountingtype"
                     value="Decentralized"
                     id="Decentralized"
                   />
                   <label htmlFor="Decentralized">Decentralized</label>
                 </span>
               </div> */}
              </section>
            </main>
          )}
          <div>
            <button onClick={nextButtonHandler} className={classes.button}>
              {addClientStep2 ? "Submit" : "Next"}
            </button>
            {/* <button onClick={cancelButtonHandler} className={classes.button}>
             Submit
           </button> */}
            <button onClick={cancelButtonHandler} className={classes.button1}>
              Close
            </button>
          </div>
        </div>
      )}
      <section
        style={sidebar ? { width: "77.5%" } : { width: "100%" }}
        className={classes.clients}
      >
        <div>
          <section>
            <input type="text" placeholder="Search Branch" />
            <SearchIcon />
          </section>
          <p
            onClick={() => {
              return setPopup(true);
            }}
          >
            <AddIcon style={{ fontSize: "2rem" }} />
            Add Branch
          </p>
        </div>

        <table>
          <tbody>
            <tr style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
              <th>Branch Name</th>
              <th>TAN</th>
              <th>Onboarding Month</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>

            {clientData.map((val, idx) => {
              return (
                <tr
                  style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
                  key={idx}
                >
                  <td>{val.Branch_Name}</td>
                  <td>{val.TAN}</td>
                  <td>{val.Onboarding_Month}</td>
                  <td>{val.Created_On}</td>

                  <td>
                    <VisibilityIcon
                      onClick={() => {
                        return setViewClientPopup(true);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#00ADA3",
                        fontSize: "2.5rem",
                        marginRight: "1.5rem",
                      }}
                    />
                    <EditIcon
                      onClick={() => {
                        return setUpdateClientPopup(true);
                      }}
                      style={{
                        cursor: "pointer",
                        marginLeft: "1.5rem",
                        // marginRight: "1.5rem",
                        color: "#FFBB59",
                        fontSize: "2.5rem",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <section className={classes.pagination}>
          <p>Showing 10 out of 160 rows</p>
          <div>
            <p>
              <KeyboardDoubleArrowLeftIcon />
              Previous
            </p>
            <span>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
            </span>

            <p>
              Next
              <KeyboardDoubleArrowRightIcon />
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default TanLevel;
