import React from "react";
import classes from "./Clients.module.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import { useState } from "react";
import TanLevel from "./Clients/TanLevel";

const Clients = ({ sidebar }) => {
  const [popup, setPopup] = useState(false);

  const [newClient, setNewClient] = useState({
    group_name: "",
    client_name: "",
    pan: "",
    email: "",
    onboarding: "",
  });

  const clientData = [
    {
      Group_Name: "ABC",
      Client_Name: "ABC Consultancy Services Limited",
      Client_PAN: "BKICA9561K",
      Email_Address: "accounts@abc.com",
      Onboarded_On: "30-03-2023",
    },
    {
      Group_Name: "ABC",
      Client_Name: "ABC Motors Limited",
      Client_PAN: "BKICD9828K",
      Email_Address: "accounts@def.com",
      Onboarded_On: "21-04-2023",
    },
    {
      Group_Name: "ABC",
      Client_Name: "ABC Chemicals Limited",
      Client_PAN: "BKICG6641K",
      Email_Address: "accounts@ghi.com",
      Onboarded_On: "19-04-2023",
    },
    {
      Group_Name: "ABC",
      Client_Name: "ABC Powers Limited",
      Client_PAN: "BKICJ1426K",
      Email_Address: "accounts@jkl.com",
      Onboarded_On: "06-05-2023",
    },
    {
      Group_Name: "ABC",
      Client_Name: "ABC Steel Limited",
      Client_PAN: "BKICM7469K",
      Email_Address: "accounts@mno.com",
      Onboarded_On: "09-05-2023",
    },
    {
      Group_Name: "DEF",
      Client_Name: "DEF Ports Limited",
      Client_PAN: "PKICA9561K",
      Email_Address: "accounts@pqr.com",
      Onboarded_On: "11-07-2023",
    },
    {
      Group_Name: "DEF",
      Client_Name: "DEF Total Gas Limited",
      Client_PAN: "PKICD9828K",
      Email_Address: "accounts@stu.com",
      Onboarded_On: "20-08-2023",
    },
    {
      Group_Name: "DEF",
      Client_Name: "DEF Enterprises",
      Client_PAN: "PKICG6641K",
      Email_Address: "accounts@vwx.com",
      Onboarded_On: "12-08-2023",
    },
    {
      Group_Name: "DEF",
      Client_Name: "DEF Power Limited",
      Client_PAN: "PKICJ1426K",
      Email_Address: "accounts@yza.com",
      Onboarded_On: "11-08-2023",
    },
  ];

  const [items, setItems] = useState([
    { id: "item-1", content: "HSN/SAC Code" },
    { id: "item-2", content: "Vendor" },
    { id: "item-3", content: "GL Code" },
    { id: "item-4", content: "Invoice Description" },
    { id: "item-5", content: "PO Description" },
    // Add more items as needed
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(fromIndex, 1);
    reorderedItems.splice(toIndex, 0, movedItem);
    setItems(reorderedItems);
  };

  const [addedClient, setAddedClient] = useState(false);

  const [addClientStep1, setAddClientStep1] = useState(true);
  const [addClientStep2, setAddClientStep2] = useState(false);
  const [addClientStep3, setAddClientStep3] = useState(false);

  const [tanLevel, setTanLevel] = useState(false);

  const [addNewGroup, setAddNewGroup] = useState(false);

  const [newGroupValue, setNewGroupValue] = useState("");

  const [viewClientPopup, setViewClientPopup] = useState(false);
  const [updateClientPopup, setUpdateClientPopup] = useState(false);

  const nextButtonHandler = () => {
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
      setPopup(false);
      setViewClientPopup(false);
    }
  };

  const cancelButtonHandler = () => {
    setAddClientStep1(true);
    setAddClientStep2(false);
    setAddClientStep3(false);
    setPopup(false);
    setViewClientPopup(false);
    setUpdateClientPopup(false);
  };

  const customNumberStyle = {
    backgroundColor: "#4f2d7f",
    color: "#fff",
  };

  const customHrStyle = {
    backgroundColor: "#4f2d7f",
  };

  const tanLevelSetter = () =>{
    setTanLevel(false)
  }

  const [clientIdentity, setClientIdentity] = useState(2);

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
          {/* <span>
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
            <hr style={addClientStep2 || addClientStep3 ? customHrStyle : {}} />
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
          </span> */}
          <h1 className={classes.heading}>Add Client</h1>
          {addClientStep1 && <h5>Add Group & Client Details</h5>}
          {/* {addClientStep2 && (
            <h5>
              Add Branch Details{" "}
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  return setTanFieldCount((prevState) => {
                    return prevState + 1;
                  });
                }}
              >
                <AddIcon />
                Add Branch/TAN
              </p>
            </h5>
          )} */}
          {/* {addClientStep3 && <h5>Onboarding Questions</h5>} */}
          <main className={classes.popupmainpart}>
            {addClientStep1 && (
              <section>
                <h6>Group Details</h6>
                {/* {addClientStep2 && <h6>Branch/TAN Details</h6>} */}
                <div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      return setNewClient((prevState) => ({
                        ...prevState,
                        group_name: e.target.value,
                      }));
                    }}
                  >
                    <option value="">Select Group</option>
                    <option value="ABC">ABC</option>
                    <option value="DEF">DEF</option>
                    <option value="GHI">GHI</option>
                    {newGroupValue && <option value="">{newGroupValue}</option>}
                  </select>
                  {/* <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      return setAddNewGroup(true);
                    }}
                  >
                    <AddIcon /> Add New Group
                  </p> */}
                </div>
                
              </section>
            )}
            {addClientStep1 && (
              <section>
                <h6>Client Details</h6>
                <div>
                  {/* <input
                    onChange={(e) => {
                      return setNewClient((prevState) => ({
                        ...prevState,
                        client_name: e.target.value,
                      }));
                    }}
                    placeholder="Deductor's Name"
                    type="text"
                    name=""
                    id=""
                  /> */}
                  <select onChange={(e) => {
                      return setNewClient((prevState) => ({
                        ...prevState,
                        client_name: e.target.value,
                      }));
                    }} name="" id="">
                    <option value="">Deductor's Name</option>
                    <option value="Harsh">Harsh</option>
                    <option value="Dhruv">Dhruv</option>
                    <option value="Abhishek">Abhishek</option>
                  </select>
                  <input
                    onChange={(e) => {
                      return setNewClient((prevState) => ({
                        ...prevState,
                        pan: e.target.value,
                      }));
                    }}
                    placeholder="Deductor's PAN"
                    type="text"
                    name=""
                    id=""
                  />
                  <select name="" id="">
                    <option value="">Select Residential Status</option>
                    <option value="Residential">Residential</option>
                    <option value="NonResidential">NonResidential</option>
                  </select>
                  {/* <input
                    placeholder="Residential Status"
                    type="text"
                    name=""
                    id=""
                  /> */}
                </div>
                <div>
                  <input
                    onChange={(e) => {
                      return setNewClient((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }}
                    placeholder="Email Address"
                    type="email"
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
            )}
          </main>
          <div>
            {/* <button onClick={nextButtonHandler} className={classes.button}>
              {addClientStep3 ? "Submit" : "Next"}
            </button> */}
            <button
              onClick={() => {
                setAddedClient(true);
                setAddClientStep1(true);
                setAddClientStep2(false);
                setAddClientStep3(false);
                return setPopup(false);
              }}
              className={classes.button}
            >
              Submit
            </button>
            <button onClick={cancelButtonHandler} className={classes.button1}>
              Close
            </button>
          </div>
        </div>
      )}

      {viewClientPopup && (
        <div className={classes.popup}>
          <h1 className={classes.heading}>View Client</h1>
          {addClientStep1 && <h5>View Group & Client Details</h5>}

          <main className={classes.popupmainpart}>
            {addClientStep1 && (
              <section>
                <h6>Group Details</h6>
                <div>
                  <select disabled name="" id="">
                    <option value="">ABC</option>
                  </select>
                </div>
              </section>
            )}
            {addClientStep1 && (
              <section>
                <h6>Client Details</h6>
                <div>
                  <input
                    disabled
                    placeholder={
                      clientIdentity == 1
                        ? "ABC Consultancy Services Limited"
                        : "ABC Motors Limited"
                    }
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    disabled
                    placeholder={
                      clientIdentity == 1 ? "BKICA9561K" : "BKICD9828K"
                    }
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    disabled
                    placeholder="Residential"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
                    disabled
                    placeholder={
                      clientIdentity == 1
                        ? "accounts@abc.com"
                        : "accounts@def.com"
                    }
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </section>
            )}
          </main>
          <div>
            <button onClick={cancelButtonHandler} className={classes.button1}>
              Close
            </button>
          </div>
        </div>
      )}

      {updateClientPopup && (
        <div className={classes.popup}>
          <h1 className={classes.heading}>Edit Client</h1>
          <h5>Edit Group & Client Details</h5>

          <main className={classes.popupmainpart}>
            <section>
              <h6>Group Details</h6>
              {/* {addClientStep2 && <h6>Branch/TAN Details</h6>} */}
              <div>
                <select name="" id="">
                  <option value="">ABC</option>
                  <option value="">ABC</option>
                  <option value="">DEF</option>
                  <option value="">GHI</option>
                </select>
                {/* <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    return setAddNewGroup(true);
                  }}
                >
                  <AddIcon /> Add New Group
                </p> */}
              </div>
              {addNewGroup && (
                <div>
                  <input
                    placeholder="Type Group Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <button>Create</button>
                </div>
              )}
            </section>

            <section>
              <h6>Client Details</h6>
              <div>
                <input
                  placeholder={
                    clientIdentity == 1
                      ? "ABC Consultancy Services Limited"
                      : "ABC Motors Limited"
                  }
                  type="text"
                  name=""
                  id=""
                />
                
                <input
                  placeholder={
                    clientIdentity == 1 ? "BKICA9561K" : "BKICD9828K"
                  }
                  type="text"
                  name=""
                  id=""
                />
                <select name="" id="">
                  {/* <option value="">Select Residential Status</option> */}
                  <option value="Residential">Residential</option>
                  <option value="NonResidential">NonResidential</option>
                </select>
                {/* <input placeholder="Residential" type="text" name="" id="" /> */}
              </div>
              <div>
                <input
                  placeholder={
                    clientIdentity == 1
                      ? "accounts@abc.com"
                      : "accounts@def.com"
                  }
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </section>
          </main>
          <div>
            <button onClick={cancelButtonHandler} className={classes.button}>
              Edit
            </button>
            <button onClick={cancelButtonHandler} className={classes.button1}>
              Close
            </button>
          </div>
        </div>
      )}

      {!tanLevel && (
        <section
          style={sidebar ? { width: "77.5%" } : { width: "100%" }}
          className={classes.clients}
        >
          <div>
            <section>
              <input type="text" placeholder="Search Client" />
              <SearchIcon />
            </section>
            <p
              onClick={() => {
                return setPopup(true);
              }}
            >
              <AddIcon style={{ fontSize: "2rem" }} />
              Add Client
            </p>
          </div>

          <table>
            <tbody>
              <tr>
                <th>
                  Group Name
                  {/* <KeyboardArrowDownIcon /> */}
                </th>
                <th>
                  Client Name
                  {/* <KeyboardArrowDownIcon /> */}
                </th>
                <th>
                  Client PAN
                  {/* <KeyboardArrowDownIcon /> */}
                </th>
                <th>
                  Email Address
                  {/* <KeyboardArrowDownIcon /> */}
                </th>
                <th>
                  Onboarded On
                  {/* <KeyboardArrowDownIcon /> */}
                </th>
                <th>
                  Actions
                  {/* <KeyboardArrowDownIcon /> */}
                </th>
              </tr>
              {addedClient && (
                <tr>
                  <td>{newClient.group_name}</td>
                  <td>{newClient.client_name}</td>
                  <td>{newClient.pan}</td>
                  <td>{newClient.email}</td>
                  <td>17-06-2024</td>
                  <td>
                    <VisibilityIcon
                      onClick={() => {
                        setClientIdentity(1);

                        return setViewClientPopup(true);
                      }}
                      style={{
                        cursor: "pointer",
                        // marginRight: "1.5rem",
                        color: "#00ADA3",
                        fontSize: "2.5rem",
                      }}
                    />
                    <EditIcon
                      onClick={() => {
                        setClientIdentity(1);

                        setAddClientStep2(true);
                        setAddClientStep1(false);
                        setAddClientStep3(false);
                        return setUpdateClientPopup(true);
                      }}
                      style={{
                        cursor: "pointer",
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                        color: "#FFBB59",
                        fontSize: "2.5rem",
                      }}
                    />
                    <ChevronRightOutlinedIcon
                      onClick={() => {
                        return setTanLevel(true);
                      }}
                      style={{
                        cursor: "pointer",
                        // marginLeft: "1.5rem",
                        color: "#FFF",
                        background: "#4f2d7f",
                        borderRadius: "50%",
                        fontSize: "2.5rem",
                      }}
                    />
                  </td>
                </tr>
              )}
              {clientData.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <td>{val.Group_Name}</td>
                    <td>{val.Client_Name}</td>
                    <td>{val.Client_PAN}</td>
                    <td>{val.Email_Address}</td>
                    <td>{val.Onboarded_On}</td>
                    <td>
                      <VisibilityIcon
                        onClick={() => {
                          if (idx == 0) {
                            setClientIdentity(1);
                          } else if (idx == 1) {
                            setClientIdentity(0);
                          } else {
                            setClientIdentity(2);
                          }
                          return setViewClientPopup(true);
                        }}
                        style={{
                          cursor: "pointer",
                          // marginRight: "1.5rem",
                          color: "#00ADA3",
                          fontSize: "2.5rem",
                        }}
                      />
                      <EditIcon
                        onClick={() => {
                          if (idx == 0) {
                            setClientIdentity(1);
                          } else if (idx == 1) {
                            setClientIdentity(0);
                          } else {
                            setClientIdentity(2);
                          }
                          setAddClientStep2(true);
                          setAddClientStep1(false);
                          setAddClientStep3(false);
                          return setUpdateClientPopup(true);
                        }}
                        style={{
                          cursor: "pointer",
                          marginLeft: "1.5rem",
                          marginRight: "1.5rem",
                          color: "#FFBB59",
                          fontSize: "2.5rem",
                        }}
                      />
                      <ChevronRightOutlinedIcon
                        onClick={() => {
                          return setTanLevel(true);
                        }}
                        style={{
                          cursor: "pointer",
                          // marginLeft: "1.5rem",
                          color: "#FFF",
                          background: "#4f2d7f",
                          borderRadius: "50%",
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
      )}
      {tanLevel && <TanLevel tanLevelSetter={tanLevelSetter} sidebar={sidebar} />}
    </>
  );
};

export default Clients;
