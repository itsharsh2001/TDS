import React, { useState } from "react";
import PurpleButton from "../../UI/PurpleButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import classes from "./BIReport.module.css";

const BIReport = (props) => {
  const [monthly, setMonthly] = useState(false);
  const [quarterly, setQuarterly] = useState(false);
  const [annually, setAnnually] = useState(false);

  const [fromMonth, setFromMonth] = useState(false);
  const [toMonth, setToMonth] = useState(false);

  const [reportTypeSet, setReportTypeSet] = useState(true);
  const [monthSet, setMonthSet] = useState(false);

  const [fromMonthValue, setFromMonthValue] = useState("");
  const [toMonthValue, setToMonthValue] = useState("");

  const customOpacity = {
    opacity: "0",
    pointerEvents: "none",
  };

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };
  const compliancesSetter = (type) => {
    setMonthly(false);
    setAnnually(false);
    setQuarterly(false);

    if (type == "monthly") {
      setMonthly(true);
    } else if (type == "quarterly") {
      setQuarterly(true);
    } else if (type == "annually") {
      setAnnually(true);
    }
  };

  const fromMonthValueSetter = (e) => {
    console.log(e.target.innerText);
    console.log("yoyoyoy");
    setFromMonth(false);
    console.log("hello console");
    setToMonth(true);
    setFromMonthValue(e.target.innerText);

    console.log(fromMonth, "yoyoyo");
    console.log(toMonth, "yoyoyoy");
  };
  const toMonthValueSetter = (e) => {
    console.log(e.target.innerText);
    console.log("yoyoyoy");
    // setFromMonth(false);
    console.log("hello console");
    setToMonth(false);
    setToMonthValue(e.target.innerText);
    setMonthSet(true);
    console.log(fromMonth, "yoyoyo");
    console.log(toMonth, "yoyoyoy");
  };

  return (
    <div className={classes.bireport}>
      {/* <ul>
        <li
          style={monthly ? hoverStyle : {}}
          onClick={() => {
            return compliancesSetter("monthly");
          }}
        >
          Monthly Compliances
        </li>
        <li
          style={quarterly ? hoverStyle : {}}
          onClick={() => {
            return compliancesSetter("quarterly");
          }}
        >
          Quarterly Compliances
        </li>
        <li
          style={annually ? hoverStyle : {}}
          onClick={() => {
            return compliancesSetter("annually");
          }}
        >
          Annual Compliances
        </li>
      </ul> */}

      <span>
        <a
          onClick={(e) => {
            e.preventDefault();
            return props.transactionHomeScreen("");
          }}
          href=""
        >
          Monthly Compliance
        </a>
        <ChevronRightIcon className={classes.righticon} />
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href=""
        >
          BI Report
        </a>

        {/* <PurpleButton>
          <FileUploadOutlinedIcon style={{ fontSize: "2.5rem" }} /> Upload
          Template
        </PurpleButton> */}
      </span>

      <section>
        <h3>TAN Level Reports</h3>
        <span>
          <select
            onChange={() => {
              return setFromMonth(true);
            }}
            name=""
            id=""
          >
            <option value="">Select Report Type</option>
            <option value="">
              Cancellation Adjustment Report-Consolidated
            </option>
            <option value="">Cancellation Adjustment Report-Detailed</option>
            <option value="">Reversal Adjustment Report</option>
            <option value="">Credit Note Adjustment Report</option>
            <option value="">Provision Adjustment Report</option>
            <option value="">Advance Adjustment Report</option>
            <option value="">
              Vendor-Section Threshold Consumption Report
            </option>
            <option value="">LDC Consumption Report</option>
            <option value="">Monthly-Liability Report</option>
          </select>
          {monthSet && (
            <>
              <p>Cancellation Adjustment Report (Consolidated)</p>
              <p>Reversal Adjustment Report</p>
            </>
          )}
        </span>
        <p>Select Month Range</p>
        <div>
          <span>
            {fromMonthValue == "" ? "Select From Month" : fromMonthValue}{" "}
            <CalendarMonthIcon style={{ fontSize: "2rem" }} />
          </span>
          <span>
            {toMonthValue == "" ? "Select To Month" : toMonthValue}{" "}
            <CalendarMonthIcon style={{ fontSize: "2rem" }} />
          </span>
          <PurpleButton>
            <FileDownloadOutlinedIcon
              style={{ fontSize: "2.5rem", marginRight: "2rem" }}
            />{" "}
            Download Report
          </PurpleButton>
        </div>
        {(fromMonth || toMonth) && (
          <div className={classes.calenderpopup}>
            {(fromMonth || toMonth) && (
              <section style={!fromMonth ? customOpacity : {}}>
                <span style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                  2023-2024
                  <b>
                    <KeyboardArrowLeftIcon />
                    <KeyboardArrowRightIcon />
                  </b>
                </span>
                <main>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Apr
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    May
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Jun
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Jul
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Aug
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Sep
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Oct
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Nov
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Dec
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Jan
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Feb
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter(e);
                    }}
                  >
                    Mar
                  </p>
                </main>
              </section>
            )}
            {toMonth && (
              <section>
                <span style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                  2023-2024
                  <b>
                    <KeyboardArrowLeftIcon />
                    <KeyboardArrowRightIcon />
                  </b>
                </span>
                <main>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Apr
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    May
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Jun
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Jul
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Aug
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Sep
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Oct
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Nov
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Dec
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Jan
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Feb
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter(e);
                    }}
                  >
                    Mar
                  </p>
                </main>
              </section>
            )}
          </div>
        )}
      </section>
      <section>
        <h3>PAN Level Reports</h3>
        <span>
          <select name="" id="">
            <option value="">Select Report Type</option>
            <option value="">
              Cancellation Adjustment Report-Consolidated
            </option>
            <option value="">Cancellation Adjustment Report-Detailed</option>
            <option value="">Reversal Adjustment Report</option>
            <option value="">Credit Note Adjustment Report</option>
            <option value="">Provision Adjustment Report</option>
            <option value="">Advance Adjustment Report</option>
            <option value="">
              Vendor-Section Threshold Consumption Report
            </option>
            <option value="">LDC Consumption Report</option>
            <option value="">Monthly-Liability Report</option>
          </select>
          {/* <p>Cancellation Adjustment Report (Consolidated)</p>
          <p>Reversal Adjustment Report</p> */}
        </span>
        <p>Select Month Range</p>
        <div>
          <span>
            Aug <CalendarMonthIcon />
          </span>
          <span>
            Oct <CalendarMonthIcon />
          </span>
          <PurpleButton>
            <FileDownloadOutlinedIcon
              style={{ fontSize: "2.5rem", marginRight: "2rem" }}
            />{" "}
            Download Report
          </PurpleButton>
        </div>
        {/* {(fromMonth||toMonth) &&<div className={classes.calenderpopup}>
          {fromMonth && <section>
            <span style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
              2023-2024
              <b>
                <KeyboardArrowLeftIcon />
                <KeyboardArrowRightIcon />
              </b>
            </span>
            <main>
              <p>Apr</p>
              <p>May</p>
              <p>Jun</p>
              <p>Jul</p>
              <p>Aug</p>
              <p>Sep</p>
              <p>Oct</p>
              <p>Nov</p>
              <p>Dec</p>
              <p>Jan</p>
              <p>Feb</p>
              <p>Mar</p>
            </main>
          </section>}
          {toMonth && <section>
            <span style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
              2023-2024
              <b>
                <KeyboardArrowLeftIcon />
                <KeyboardArrowRightIcon />
              </b>
            </span>
            <main>
              <p>Apr</p>
              <p>May</p>
              <p>Jun</p>
              <p>Jul</p>
              <p>Aug</p>
              <p>Sep</p>
              <p>Oct</p>
              <p>Nov</p>
              <p>Dec</p>
              <p>Jan</p>
              <p>Feb</p>
              <p>Mar</p>
            </main>
          </section>}
        </div>} */}
      </section>
    </div>
  );
};

export default BIReport;
