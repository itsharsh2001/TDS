import React, { useState } from "react";
import classes from "./TaxPosition.module.css";

import DraggableList from "../../../Draggable/DraggableList";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PurpleButton from "../../../UI/PurpleButton";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

function TaxPosition(props) {
  const [viewData, setViewData] = useState(false);
  const [parameters, setParameters] = useState(false);
  const [popup, setPopup] = useState(false);
  const [cardScreen, setCardScreen] = useState(true);

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };
  return (
    <>
      {popup && (
        <div
          className={classes.overlay}
          onClick={() => {
            return setPopup(false);
          }}
        ></div>
      )}
      {popup && (
        <div className={classes.popup}>
          <CloseOutlinedIcon
            onClick={() => {
              return setPopup(false);
            }}
            className={classes.closeicon}
          />
          {props.clientIdentity == "ABC Consultancy Limited" && (
            <main>
              <div
                className={classes.div}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "4rem",
                  position: "relative",
                  width: "40%",
                  top: "1rem",
                  marginLeft: "auto",
                }}
              >
                <PurpleButton>
                  <EditOutlinedIcon
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                  Edit
                </PurpleButton>
                <PurpleButton>
                  <LocalPrintshopOutlinedIcon
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                  Print
                </PurpleButton>
              </div>
              <h6>
                Select the parameters for determining TDS section along with
                their priority
              </h6>
              <div className={classes.div}>
                Select Parameters{" "}
                {!parameters && (
                  <KeyboardArrowDownOutlinedIcon
                    onClick={() => {
                      return setParameters(true);
                    }}
                    className={classes.greyicon}
                  />
                )}
                {parameters && (
                  <KeyboardArrowUpOutlinedIcon
                    onClick={() => {
                      return setParameters(false);
                    }}
                    className={classes.greyicon}
                  />
                )}
              </div>
              {parameters && <DraggableList clickablity={true} />}

              <h6>
                Whether Section-Mismatch Report is required before Monthly
                Liability Computation?
              </h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>
              <h6>Is Cancelled Records adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>
              <h6>Is Reversal Records adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>
              <h6>Select the basis for adjustment</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Document Number
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Vendor-Section Combination
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Hybrid
              </label>

              <h6>Is Credit Note adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Is Provision-Invoice adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Select the basis for adjustment</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                PO Number
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Vendor-Section Combination
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Hybrid
              </label>

              <h6>Select the look-up period for Provisions</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Current & Previous Month Provisions
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Previous Month Provisions
              </label>

              <h6>
                Whether tax is deducted on monthly provision(except March)?"
              </h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Is Advance-Invoice adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Select the basis for adjustment</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                PO Number
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Vendor-Section Combination
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Hybrid
              </label>

              <h6>Select the look-up period for Invoices</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Current & Succeeding Month Provisions
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Invoices after Advance Date
              </label>

              <h6>Is Threshold Applicable?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Threshold Applicable for which sections?</h6>

              <select
                disabled
                style={{
                  height: "3rem",
                  marginBottom: "1rem",
                  background: "#F9F5FF",
                }}
                name=""
                id=""
              >
                <option value="">Select All</option>
                <option value="">192A</option>
                <option value="">193</option>
                <option value="">194</option>
                <option value="">194A</option>
                <option value="">194B</option>
                <option value="">Proviso to section 194B</option>
                <option value="">194BA</option>
                <option value="">Sub-section (2) of section 194BA</option>
                <option value="">194BB</option>
                <option value="">194C</option>

                <option value="">194D</option>
                <option value="">194DA</option>
                <option value="">194E</option>
                <option value="">194EE</option>
                <option value="">194F</option>
                <option value="">194G</option>
                <option value="">194H</option>
                <option value="">194-I(a)</option>
                <option value="">194-I(b)</option>
                <option value="">194J(a)</option>

                <option value="">194J(b)</option>
                <option value="">194K</option>
                <option value="">194LA</option>
                <option value="">194LB </option>
                <option value="">194LBA(a)</option>
              </select>
              {/* <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label> */}

              <h6>Select the treatment if Vendor PAN is invalid</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Levy TDS at higher rate
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Error out the transaction
              </label>

              <h6>Rounding Off</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Round up to nearest Paisa
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Round up to nearest Rupee
              </label>

              <h6>ERP</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                SAP
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Oracle
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Others
              </label>

              <h6>Company Code</h6>
              <label htmlFor="">
                <input
                  style={{
                    height: "3rem",
                    marginBottom: "1rem",
                    background: "#F9F5FF",
                  }}
                  placeholder="1000"
                  disabled
                  type="number"
                  name=""
                  id=""
                />
              </label>

              <h6>Transition Balance Type</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Lumpsum
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Detailed
              </label>
            </main>
          )}

          {props.clientIdentity == "ABC Motors Limited" && (
            <main>
              <h6>
                Select the parameters for determining TDS section along with
                their priority
              </h6>
              <div className={classes.div}>
                Select Parameters{" "}
                {!parameters && (
                  <KeyboardArrowDownOutlinedIcon
                    onClick={() => {
                      return setParameters(true);
                    }}
                    className={classes.greyicon}
                  />
                )}
                {parameters && (
                  <KeyboardArrowUpOutlinedIcon
                    onClick={() => {
                      return setParameters(false);
                    }}
                    className={classes.greyicon}
                  />
                )}
              </div>
              {parameters && <DraggableList clickablity={true} />}

              <h6>
                Whether Section-Mismatch Report is required before Monthly
                Liability Computation?
              </h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>
              <h6>Is Cancelled Records adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>
              <h6>Is Reversal Records adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>
              <h6>Select the basis for adjustment</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Document Number
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Vendor-Section Combination
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Hybrid
              </label>

              <h6>Is Credit Note adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Is Provision-Invoice adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Select the basis for adjustment</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                PO Number
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Vendor-Section Combination
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Hybrid
              </label>

              <h6>Select the look-up period for Provisions</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Current & Previous Month Provisions
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Previous Month Provisions
              </label>

              <h6>
                Whether tax is deducted on monthly provision(except March)?"
              </h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Is Advance-Invoice adjustment required?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Select the basis for adjustment</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                PO Number
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Vendor-Section Combination
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Hybrid
              </label>

              <h6>Select the look-up period for Invoices</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Current & Succeeding Month Provisions
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Invoices after Advance Date
              </label>

              <h6>Is Threshold Applicable?</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label>

              <h6>Threshold Applicable for which sections?</h6>

              <select
                disabled
                style={{
                  height: "3rem",
                  marginBottom: "1rem",
                  background: "#F9F5FF",
                }}
                name=""
                id=""
              >
                <option value="">Select All</option>
                <option value="">192A</option>
                <option value="">193</option>
                <option value="">194</option>
                <option value="">194A</option>
                <option value="">194B</option>
                <option value="">Proviso to section 194B</option>
                <option value="">194BA</option>
                <option value="">Sub-section (2) of section 194BA</option>
                <option value="">194BB</option>
                <option value="">194C</option>

                <option value="">194D</option>
                <option value="">194DA</option>
                <option value="">194E</option>
                <option value="">194EE</option>
                <option value="">194F</option>
                <option value="">194G</option>
                <option value="">194H</option>
                <option value="">194-I(a)</option>
                <option value="">194-I(b)</option>
                <option value="">194J(a)</option>

                <option value="">194J(b)</option>
                <option value="">194K</option>
                <option value="">194LA</option>
                <option value="">194LB </option>
                <option value="">194LBA(a)</option>
              </select>
              {/* <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Yes
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                No
              </label> */}

              <h6>Select the treatment if Vendor PAN is invalid</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Levy TDS at higher rate
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Error out the transaction
              </label>

              <h6>Rounding Off</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Round up to nearest Paisa
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Round up to nearest Rupee
              </label>

              <h6>ERP</h6>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                SAP
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Oracle
              </label>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Others
              </label>

              <h6>Company Code</h6>
              <label htmlFor="">
                <input
                  style={{
                    height: "3rem",
                    marginBottom: "1rem",
                    background: "#F9F5FF",
                  }}
                  placeholder="1000"
                  disabled
                  type="number"
                  name=""
                  id=""
                />
              </label>

              <h6>Transition Balance Type</h6>
              <label htmlFor="">
                <input disabled checked type="radio" name="" id="" />
                Lumpsum
              </label>
              <label htmlFor="">
                <input disabled type="radio" name="" id="" />
                Detailed
              </label>
            </main>
          )}

          <span>
            <button
              onClick={() => {
                return setPopup(false);
              }}
            >
              Print
            </button>
            <button
              onClick={() => {
                return setPopup(false);
              }}
            >
              Close
            </button>
          </span>
        </div>
      )}
      <div className={classes.taxposition}>
        <span>
          <a
            onClick={(e) => {
              e.preventDefault();
              return props.tanLevelMasterTypeSetter("none");
            }}
            href=""
          >
            Client Masters
          </a>
          <ChevronRightIcon className={classes.righticon} />

          <a
            onClick={(e) => {
              e.preventDefault();
              return setCardScreen(true);
            }}
            href=""
          >
            Tax Position Master
          </a>
          {!cardScreen && (
            <>
              <ChevronRightIcon className={classes.righticon} />

              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                href=""
              >
                2023-24
              </a>
            </>
          )}
        </span>

        <button>Move to Next F.Y.</button>

        {cardScreen && (
          <section className={classes.cardscreen}>
            <span
              onClick={() => {
                return setCardScreen(false);
              }}
            >
              2023-24{" "}
              <CalendarTodayOutlinedIcon className={classes.calendericon} />
            </span>
            <span>
              2022-23{" "}
              <CalendarTodayOutlinedIcon className={classes.calendericon} />
            </span>
          </section>
        )}

        {!cardScreen && (
          <>
            <ul>
              <li
                style={!viewData ? hoverStyle : {}}
                onClick={() => setViewData(false)}
              >
                Tax Position
              </li>
              <li
                style={viewData ? hoverStyle : {}}
                onClick={() => setViewData(true)}
              >
                Previous Snapshots
              </li>
            </ul>

            {!viewData && props.clientIdentity == "ABC Consultancy Limited" && (
              <main>
                <div
                  className={classes.div}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "4rem",
                    position: "relative",
                    width: "40%",
                    top: "1rem",
                    marginLeft: "auto",
                  }}
                >
                  <PurpleButton>
                    <EditOutlinedIcon
                      style={{ fontSize: "2rem", marginRight: "1rem" }}
                    />
                    Edit
                  </PurpleButton>
                  <PurpleButton>
                    <LocalPrintshopOutlinedIcon
                      style={{ fontSize: "2rem", marginRight: "1rem" }}
                    />
                    Print
                  </PurpleButton>
                </div>
                <h6>
                  Select the parameters for determining TDS section along with
                  their priority
                </h6>
                <div className={classes.div}>
                  Select Parameters{" "}
                  {!parameters && (
                    <KeyboardArrowDownOutlinedIcon
                      onClick={() => {
                        return setParameters(true);
                      }}
                      className={classes.greyicon}
                    />
                  )}
                  {parameters && (
                    <KeyboardArrowUpOutlinedIcon
                      onClick={() => {
                        return setParameters(false);
                      }}
                      className={classes.greyicon}
                    />
                  )}
                </div>
                {parameters && <DraggableList clickablity={true} />}

                <h6>
                  Whether Section-Mismatch Report is required before Monthly
                  Liability Computation?
                </h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>
                <h6>Is Cancelled Records adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>
                <h6>Is Reversal Records adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>
                <h6>Select the basis for adjustment</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Document Number
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Vendor-Section Combination
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Hybrid
                </label>

                <h6>Is Credit Note adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Is Provision-Invoice adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Select the basis for adjustment</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  PO Number
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Vendor-Section Combination
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Hybrid
                </label>

                <h6>Select the look-up period for Provisions</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Current & Previous Month Provisions
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Previous Month Provisions
                </label>

                <h6>
                  Whether tax is deducted on monthly provision(except March)?"
                </h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Is Advance-Invoice adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Select the basis for adjustment</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  PO Number
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Vendor-Section Combination
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Hybrid
                </label>

                <h6>Select the look-up period for Invoices</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Current & Succeeding Month Provisions
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Invoices after Advance Date
                </label>

                <h6>Is Threshold Applicable?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Threshold Applicable for which sections?</h6>
                <select
                  disabled
                  style={{
                    height: "3rem",
                    marginBottom: "1rem",
                    background: "#F9F5FF",
                  }}
                  name=""
                  id=""
                >
                  <option value="">Select All</option>
                  <option value="">192A</option>
                  <option value="">193</option>
                  <option value="">194</option>
                  <option value="">194A</option>
                  <option value="">194B</option>
                  <option value="">Proviso to section 194B</option>
                  <option value="">194BA</option>
                  <option value="">Sub-section (2) of section 194BA</option>
                  <option value="">194BB</option>
                  <option value="">194C</option>

                  <option value="">194D</option>
                  <option value="">194DA</option>
                  <option value="">194E</option>
                  <option value="">194EE</option>
                  <option value="">194F</option>
                  <option value="">194G</option>
                  <option value="">194H</option>
                  <option value="">194-I(a)</option>
                  <option value="">194-I(b)</option>
                  <option value="">194J(a)</option>

                  <option value="">194J(b)</option>
                  <option value="">194K</option>
                  <option value="">194LA</option>
                  <option value="">194LB </option>
                  <option value="">194LBA(a)</option>
                </select>
                {/* <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label> */}

                <h6>Select the treatment if Vendor PAN is invalid</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Levy TDS at higher rate
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Error out the transaction
                </label>

                <h6>Rounding Off</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Round up to nearest Paisa
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Round up to nearest Rupee
                </label>

                <h6>ERP</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  SAP
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Oracle
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Others
                </label>

                <h6>Company Code</h6>
                <label htmlFor="">
                  <input
                    style={{
                      height: "3rem",
                      border: "none",
                      outline: "none",
                      marginBottom: "1rem",
                      background: "#F9F5FF",
                    }}
                    placeholder="1000"
                    disabled
                    type="number"
                    name=""
                    id=""
                  />
                </label>

                <h6>Transition Balance Type</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Lumpsum
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Detailed
                </label>
              </main>
            )}
            {!viewData && props.clientIdentity == "ABC Motors Limited" && (
              <main>
                <h6>
                  Select the parameters for determining TDS section along with
                  their priority
                </h6>
                <div className={classes.div}>
                  Select Parameters{" "}
                  {!parameters && (
                    <KeyboardArrowDownOutlinedIcon
                      onClick={() => {
                        return setParameters(true);
                      }}
                      className={classes.greyicon}
                    />
                  )}
                  {parameters && (
                    <KeyboardArrowUpOutlinedIcon
                      onClick={() => {
                        return setParameters(false);
                      }}
                      className={classes.greyicon}
                    />
                  )}
                </div>
                {parameters && <DraggableList clickablity={true} />}

                <h6>
                  Whether Section-Mismatch Report is required before Monthly
                  Liability Computation?
                </h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>
                <h6>Is Cancelled Records adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>
                <h6>Is Reversal Records adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>
                <h6>Select the basis for adjustment</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Document Number
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Vendor-Section Combination
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Hybrid
                </label>

                <h6>Is Credit Note adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Is Provision-Invoice adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Select the basis for adjustment</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  PO Number
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Vendor-Section Combination
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Hybrid
                </label>

                <h6>Select the look-up period for Provisions</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Current & Previous Month Provisions
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Previous Month Provisions
                </label>

                <h6>
                  Whether tax is deducted on monthly provision(except March)?"
                </h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Is Advance-Invoice adjustment required?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Select the basis for adjustment</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  PO Number
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Vendor-Section Combination
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Hybrid
                </label>

                <h6>Select the look-up period for Invoices</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Current & Succeeding Month Provisions
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Invoices after Advance Date
                </label>

                <h6>Is Threshold Applicable?</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label>

                <h6>Threshold Applicable for which sections?</h6>
                <select
                  disabled
                  style={{
                    height: "3rem",
                    marginBottom: "1rem",
                    background: "#F9F5FF",
                  }}
                  name=""
                  id=""
                >
                  <option value="">Select All</option>
                  <option value="">192A</option>
                  <option value="">193</option>
                  <option value="">194</option>
                  <option value="">194A</option>
                  <option value="">194B</option>
                  <option value="">Proviso to section 194B</option>
                  <option value="">194BA</option>
                  <option value="">Sub-section (2) of section 194BA</option>
                  <option value="">194BB</option>
                  <option value="">194C</option>

                  <option value="">194D</option>
                  <option value="">194DA</option>
                  <option value="">194E</option>
                  <option value="">194EE</option>
                  <option value="">194F</option>
                  <option value="">194G</option>
                  <option value="">194H</option>
                  <option value="">194-I(a)</option>
                  <option value="">194-I(b)</option>
                  <option value="">194J(a)</option>

                  <option value="">194J(b)</option>
                  <option value="">194K</option>
                  <option value="">194LA</option>
                  <option value="">194LB </option>
                  <option value="">194LBA(a)</option>
                </select>
                {/* <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Yes
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  No
                </label> */}

                <h6>Select the treatment if Vendor PAN is invalid</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Levy TDS at higher rate
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Error out the transaction
                </label>

                <h6>Rounding Off</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Round up to nearest Paisa
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Round up to nearest Rupee
                </label>

                <h6>ERP</h6>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  SAP
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Oracle
                </label>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Others
                </label>

                <h6>Company Code</h6>
                <label htmlFor="">
                  <input
                    style={{
                      height: "3rem",
                      marginBottom: "1rem",
                      background: "#F9F5FF",
                    }}
                    placeholder="1000"
                    disabled
                    type="number"
                    name=""
                    id=""
                  />
                </label>

                <h6>Transition Balance Type</h6>
                <label htmlFor="">
                  <input disabled checked type="radio" name="" id="" />
                  Lumpsum
                </label>
                <label htmlFor="">
                  <input disabled type="radio" name="" id="" />
                  Detailed
                </label>
              </main>
            )}
            {viewData && (
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <th>Updated On</th>
                    <th>Updated By</th>
                    <th>Approved By</th>
                    <th>Applicable From & To</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>10-09-2023 16:45</td>
                    <td>Courtney Henry</td>
                    <td>--</td>
                    <td>--</td>
                    <td>
                      <RemoveRedEyeOutlinedIcon
                        onClick={() => {
                          return setPopup(true);
                        }}
                        style={{ cursor: "pointer", fontSize: "2.5rem" }}
                      />
                      <button>Approve</button>
                      <button>Reject</button>
                    </td>
                  </tr>
                  <tr>
                    <td>10-08-2023 16:45</td>
                    <td>Theresa Webb</td>
                    <td>Cameron Williamson</td>
                    <td>10-08-2023 -- (--)</td>
                    <td>
                      <RemoveRedEyeOutlinedIcon
                        style={{ cursor: "pointer", fontSize: "2.5rem" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10-07-2023 16:45</td>
                    <td>Kethryn Murphy</td>
                    <td>Guy Hawkins</td>
                    <td>10-07-2023 -- 10-07-2023</td>
                    <td>
                      <RemoveRedEyeOutlinedIcon
                        style={{ cursor: "pointer", fontSize: "2.5rem" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10-06-2023 16:45</td>
                    <td>Arlene McCoy</td>
                    <td>Robert Fox</td>
                    <td>10-06-2023 -- 10-06-2023</td>
                    <td>
                      <RemoveRedEyeOutlinedIcon
                        style={{ cursor: "pointer", fontSize: "2.5rem" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10-05-2023 16:45</td>
                    <td>Eleanor Pena</td>
                    <td>Jacob Janes</td>
                    <td>10-05-2023 -- 10-05-2023</td>
                    <td>
                      <RemoveRedEyeOutlinedIcon
                        style={{ cursor: "pointer", fontSize: "2.5rem" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default TaxPosition;
