import React from "react";
import classes from "./Clients.module.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import { useState, useEffect, useRef } from "react";
import DraggableItem from "./Draggable/DraggableItem";
import DropTarget from "./Draggable/DropTarget";
import DraggableList from "./Draggable/DraggableList";
import TanLevel from "./Clients/TanLevel";

const Clients = ({ sidebar }) => {
  const [popup, setPopup] = useState(false);

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

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [addClientStep1, setAddClientStep1] = useState(true);
  const [addClientStep2, setAddClientStep2] = useState(false);
  const [addClientStep3, setAddClientStep3] = useState(false);

  const [tanLevel, setTanLevel] = useState(false);

  const [parameterSelect, setParameterSelect] = useState(false);
  const [parameterSelect2, setParameterSelect2] = useState(false);
  const [tanSelect, setTanSelect] = useState(false);
  const [tanSelect2, setTanSelect2] = useState(false);

  const [addNewGroup, setAddNewGroup] = useState(false);

  const [newGroupValue, setNewGroupValue] = useState("");

  const [viewClientPopup, setViewClientPopup] = useState(false);
  const [updateClientPopup, setUpdateClientPopup] = useState(false);

  const [tanFieldCount, setTanFieldCount] = useState(3);

  const [reversalRecord, setReversalRecord] = useState(false);
  const [provisionInvoice, setProvisionInvoice] = useState(false);
  const [advanceInvoice, setAdvanceInvoice] = useState(false);
  const [thresholdApplicable, setThresholdApplicable] = useState(false);

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
                  <select name="" id="">
                    <option value="">Select Group</option>
                    <option value="">ABC</option>
                    <option value="">DEF</option>
                    <option value="">GHI</option>
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
            )}
            {addClientStep1 && (
              <section>
                <h6>Client Details</h6>
                <div>
                  <input
                    placeholder="Deductor's Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    placeholder="Deductor's PAN"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    placeholder="Residential Status"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <input
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
            {/* {addClientStep2 && (
              <section>
                <h6 style={{ display: "flex", flexDirection: "row" }}>
                  Branch Name
                  <p style={{ marginLeft: "calc(29% - 5rem)" }}>TAN Number</p>
                </h6>
                <div>
                  <input placeholder="Branch Name" type="text" name="" id="" />
                  <input placeholder="TAN Number" type="text" name="" id="" />
                </div>
                <h6>Responsible Person's Details</h6>
                <div>
                  <input placeholder="Name" type="text" name="" id="" />
                  <input placeholder="PAN" type="text" name="" id="" />
                  <input placeholder="Designation" type="text" name="" id="" />
                </div>
              </section>
            )} */}
            {/* {Array.from({ length: tanFieldCount }, (_, index) => (
              <>
                {addClientStep2 && (
                  <section key={index}>
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "row!important",
                      }}
                    >
                      Branch Name
                      <p
                        style={{
                          marginLeft: "calc(29% - 5rem)",
                        }}
                      >
                        TAN Number
                      </p>
                      <DeleteForeverIcon
                        onClick={() => {
                          return setTanFieldCount((prevState) => {
                            return prevState - 1;
                          });
                        }}
                        style={{
                          marginLeft: "auto",
                          color: "red",
                          cursor: "pointer",
                          fontSize: "3rem",
                        }}
                      />
                    </h6>
                    

                    <div>
                      <input
                        placeholder="Branch Name"
                        type="text"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="TAN Number"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <h6>Responsible Person's Details</h6>
                    <div>
                      <input placeholder="Name" type="text" name="" id="" />
                      <input placeholder="PAN" type="text" name="" id="" />
                      <input
                        placeholder="Designation"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </section>
                )}
              </>
            ))} */}
            {/* {addClientStep3 && (
              <section>
                <label
                  onClick={() => {
                    return setParameterSelect2((prevState) => {
                      return !prevState;
                    });
                  }}
                  className={classes.standaloneselect}
                  htmlFor=""
                >
                  <input
                    disabled
                    placeholder="Select TANs"
                    type="text"
                    name=""
                    id=""
                  />
                  <KeyboardArrowDownOutlinedIcon
                    onClick={() => {
                      setTanSelect2((prevState) => {
                        return !prevState;
                      });
                    }}
                  />
                </label>
                {tanSelect2 && (
                  <div
                    style={{
                      flexDirection: "column",
                      alignItems: "baseline",
                      background: "white",
                      marginTop: "1rem",
                      width: "30%",
                    }}
                  >
                    
                    <span>
                      <input type="radio" name="" id="" />
                      <label htmlFor="">PDMS01068F</label>
                    </span>
                    <span>
                      <input type="radio" name="" id="" />
                      <label htmlFor="">BFES03018Z</label>
                    </span>
                    <span>
                      <input type="radio" name="" id="" />
                      <label htmlFor="">RSEX13028F</label>
                    </span>
                  </div>
                )}

                <h6>Select the type of Accounting</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="invalidpan"
                      value="Levy TDs at higher rate"
                      id="Levy TDs at higher rate"
                    />
                    <label htmlFor="Levy TDs at higher rate">Centralized</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="invalidpan"
                      value="Error out the transaction"
                      id="Error out the transaction"
                    />
                    <label htmlFor="Error out the transaction">
                      Decentralized
                    </label>
                  </span>
                </div>

                <h6>Select the parameters for determining TDS section</h6>
                <label
                  onClick={() => {
                    return setParameterSelect((prevState) => {
                      return !prevState;
                    });
                  }}
                  className={classes.standaloneselect}
                  htmlFor=""
                >
                  <input
                    disabled
                    placeholder="Select Parameters"
                    type="text"
                    name=""
                    id=""
                  />
                  <KeyboardArrowDownOutlinedIcon />
                </label>

                {parameterSelect && <DraggableList clickablity={true} />}
                <h6>Is Cancelled Records adjustment required?</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="provision"
                      value="Yes"
                      id="provisionYes"
                    />
                    <label htmlFor="provisionYes">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="provision"
                      value="No"
                      id="provisionNo"
                    />
                    <label htmlFor="provisionNo">No</label>
                  </span>
                </div>

                <h6>Is Reversal Records adjustment required?</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="Reversal"
                      value="Yes"
                      id="AdvanceYes"
                      onClick={() => {
                        return setReversalRecord(true);
                      }}
                    />
                    <label htmlFor="AdvanceYes">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="Reversal"
                      value="No"
                      id="AdvanceNo"
                      onClick={() => {
                        return setReversalRecord(false);
                      }}
                    />
                    <label htmlFor="AdvanceNo">No</label>
                  </span>
                </div>

                {reversalRecord && (
                  <>
                    <h6>Select the basis for adjustment</h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid"
                          value="Document"
                          id="Document"
                        />
                        <label htmlFor="Document">Document Number</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid"
                          value="Combination"
                          id="Combination"
                        />
                        <label htmlFor="Combination">
                          Vendor-Section Combination
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid"
                          value="Hybrid"
                          id="Hybrid"
                        />
                        <label htmlFor="Hybrid">Hybrid</label>
                      </span>
                    </div>
                  </>
                )}

                <h6>Is Credit Notes-Advance adjustment required?</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="CreditNotes"
                      value="Yes"
                      id="CreditNotesYes"
                    />
                    <label htmlFor="CreditNotesYes">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="CreditNotes"
                      value="No"
                      id="CreditNotesNo"
                    />
                    <label htmlFor="CreditNotesNo">No</label>
                  </span>
                </div>

                <h6>Is Provision-Invoice adjustment required?</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="ProvisionInvoice"
                      value="Yes"
                      id="CancellationYes"
                      onClick={() => {
                        return setProvisionInvoice(true);
                      }}
                    />
                    <label htmlFor="CancellationYes">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="ProvisionInvoice"
                      value="No"
                      id="CancellationNo"
                      onClick={() => {
                        return setProvisionInvoice(false);
                      }}
                    />
                    <label htmlFor="CancellationNo">No</label>
                  </span>
                </div>

                {provisionInvoice && (
                  <>
                    <h6>Select the basis for adjustment</h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid1"
                          value="Document1"
                          id="Document1"
                        />
                        <label htmlFor="Document1">PO Number</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid1"
                          value="Combination1"
                          id="Combination1"
                        />
                        <label htmlFor="Combination1">
                          Vendor-Section Combination
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid1"
                          value="Hybrid1"
                          id="Hybrid1"
                        />
                        <label htmlFor="Hybrid1">Hybrid</label>
                      </span>
                    </div>

                    <h6>Select the look-up period for adjustment</h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid20"
                          value="Combination20"
                          id="Combination20"
                        />
                        <label htmlFor="Combination20">
                          Adjust Current Month & succeeding month invoices
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid20"
                          value="Hybrid20"
                          id="Hybrid20"
                        />
                        <label htmlFor="Hybrid20">
                          Adjust only succeeding month invoices
                        </label>
                      </span>
                    </div>

                    <h6>
                      Whether tax is deducted on monthly provision(except
                      March)?"
                    </h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="taxmarch"
                          value="Yes"
                          id="CancellationYes1"
                        />
                        <label htmlFor="CancellationYes1">Yes</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="taxmarch"
                          value="No"
                          id="CancellationNo1"
                        />
                        <label htmlFor="CancellationNo1">No</label>
                      </span>
                    </div>
                  </>
                )}
                <h6>Is Advance-Invoice adjustment required?</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="advanceinvoice"
                      value="Yes"
                      id="CancellationYes"
                      onClick={() => {
                        return setAdvanceInvoice(true);
                      }}
                    />
                    <label htmlFor="CancellationYes">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="advanceinvoice"
                      value="No"
                      id="CancellationNo"
                      onClick={() => {
                        return setAdvanceInvoice(true);
                      }}
                    />
                    <label htmlFor="CancellationNo">No</label>
                  </span>
                </div>

                {advanceInvoice && (
                  <>
                    {" "}
                    <h6>Select the basis for adjustment</h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid101"
                          value="Document1"
                          id="Document1"
                        />
                        <label htmlFor="Document1">PO Number</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid101"
                          value="Combination1"
                          id="Combination1"
                        />
                        <label htmlFor="Combination1">
                          Vendor-Section Combination
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid101"
                          value="Hybrid1"
                          id="Hybrid1"
                        />
                        <label htmlFor="Hybrid1">Hybrid</label>
                      </span>
                    </div>
                    <h6>Select the look-up period for adjustment</h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid201"
                          value="Combination2"
                          id="Combination2"
                        />
                        <label htmlFor="Combination2">
                          Adjust Current Month & succeeding month invoices
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid201"
                          value="Hybrid2"
                          id="Hybrid2"
                        />
                        <label htmlFor="Hybrid2">
                          Adjust invoices only after advance date
                        </label>
                      </span>
                    </div>
                  </>
                )}

                <h6>Is Threshold Applicable?</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="threshold"
                      value="Yes"
                      id="CancellationYes"
                      onClick={() => {
                        return setThresholdApplicable(true);
                      }}
                    />
                    <label htmlFor="CancellationYes">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="threshold"
                      value="No"
                      id="CancellationNo"
                      onClick={() => {
                        return setThresholdApplicable(false);
                      }}
                    />
                    <label htmlFor="CancellationNo">No</label>
                  </span>
                </div>

                {thresholdApplicable && (
                  <>
                    <h6>For which sections</h6>
                    <div>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid301"
                          value="Combination3"
                          id="Combination3"
                        />
                        <label htmlFor="Combination3">For All Sections</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="Hybrid301"
                          value="Hybrid3"
                          id="Hybrid3"
                        />
                        <label htmlFor="Hybrid3">For Selected Sections</label>
                      </span>
                    </div>
                  </>
                )}

                <h6>Rounding Off</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="Hybrid401"
                      value="Combination4"
                      id="Combination4"
                    />
                    <label htmlFor="Combination4">
                      Round up to nearest Paisa
                    </label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="Hybrid401"
                      value="Hybrid4"
                      id="Hybrid4"
                    />
                    <label htmlFor="Hybrid4">Round up to nearest Rupee</label>
                  </span>
                </div>

                <h6>Select the treatment if Vendor PAN is invalid</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="Hybrid501"
                      value="Combination5"
                      id="Combination5"
                    />
                    <label htmlFor="Combination5">
                      Levy TDS at higher rate
                    </label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="Hybrid501"
                      value="Hybrid5"
                      id="Hybrid5"
                    />
                    <label htmlFor="Hybrid5">Error out the transaction</label>
                  </span>
                </div>
              </section>
            )} */}
          </main>
          <div>
            {/* <button onClick={nextButtonHandler} className={classes.button}>
              {addClientStep3 ? "Submit" : "Next"}
            </button> */}
            <button onClick={cancelButtonHandler} className={classes.button}>
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
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    return setAddNewGroup(true);
                  }}
                >
                  <AddIcon /> Add New Group
                </p>
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
                <input placeholder="Residential" type="text" name="" id="" />
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
                      onClick={()=>{return setTanLevel(true)}}
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
      {tanLevel && (  
        <TanLevel sidebar={sidebar}/>
      )}
    </>
  );
};

export default Clients;
