import React, { useState } from "react";
import PurpleButton from "../../UI/PurpleButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Close } from "@mui/icons-material";


import classes from "./BIReport.module.css";

const BIReport = (props) => {
  const [monthly, setMonthly] = useState(false);
  const [quarterly, setQuarterly] = useState(false);
  const [annually, setAnnually] = useState(false);

  const [fromMonth, setFromMonth] = useState(false);
  const [toMonth, setToMonth] = useState(false);

  const [fromMonth2, setFromMonth2] = useState(false);
  const [toMonth2, setToMonth2] = useState(false);

  const [reportTypeSet, setReportTypeSet] = useState(true);
  const [monthSet, setMonthSet] = useState(false);

  const [monthSet2, setMonthSet2] = useState(false);

  const [fromMonthValue, setFromMonthValue] = useState("");
  const [toMonthValue, setToMonthValue] = useState("");

  const [fromMonthValue2, setFromMonthValue2] = useState("");
  const [toMonthValue2, setToMonthValue2] = useState("");

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

  const fromMonthValueSetter = (month) => {
    // console.log(e.target.innerText);
    // console.log("yoyoyoy");
    setFromMonth(false);
    console.log("hello console");
    setToMonth(true);
    // setFromMonthValue(e.target.innerText);
    setFromMonthValue(month);
    console.log(fromMonth, "yoyoyo");
    console.log(toMonth, "yoyoyoy");
  };
  const toMonthValueSetter = (month) => {
    // console.log(e.target.innerText);
    // console.log("yoyoyoy");
    // setFromMonth(false);
    console.log("hello console.");
    setToMonth(false);
    // setToMonthValue(e.target.innerText);
    setToMonthValue(month);
    setMonthSet(true);
    console.log(fromMonth, "yoyoyo");
    console.log(toMonth, "yoyoyoy");
  };

  const fromMonthValueSetter2 = (month) => {
    // console.log(e.target.innerText);
    // console.log("yoyoyoy");
    setFromMonth2(false);
    // console.log("hello console");
    setToMonth2(true);
    // setFromMonthValue2(e.target.innerText);
    setFromMonthValue2(month);

    // console.log(fromMonth, "yoyoyo");
    // console.log(toMonth, "yoyoyoy");
  };
  const toMonthValueSetter2 = (month) => {
    // console.log(e.target.innerText);
    // console.log("yoyoyoy");
    // setFromMonth(false);
    // console.log("hello console");
    setToMonth2(false);
    // setToMonthValue2(e.target.innerText);
    setToMonthValue2(month)
    setMonthSet2(true);
    // console.log(fromMonth, "yoyoyo");
    // console.log(toMonth, "yoyoyoy");
  };

  const handleDownload = async () => {
    try {
      const response = await fetch('/assets/Excel101ExtraPractice01.xlsx');
  
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
     
      // Use the response object to get the file content
      const fileContent = await response.blob({ type: 'application/xlsx' });

      // Now you can process the file content as needed
      console.log('File content:', fileContent);

      const link = document.createElement('a');
      link.href = URL.createObjectURL(fileContent);
      link.download = 'downloadedFiless.xlsx';

      // Trigger the click event
      link.click();
    } catch (error) {
        console.error('Error fetching file:', error);
    }
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
              <p>Cancellation Adjustment Report (Consolidated)<Close onClick={()=>{return setMonthSet(false)}} style={{color:'red'}}/> </p>
              {/* <p>Reversal Adjustment Report</p> */}
            </>
          )}
        </span>
        <p>Select Month Range</p>
        <div>
          <span>
            {fromMonthValue == "" ? "Select From Month" : `${fromMonthValue}`}
            <CalendarMonthIcon style={{ fontSize: "2rem" }} />
          </span>
          <span>
            {toMonthValue == "" ? "Select To Month" : `${toMonthValue}`}{" "}
            <CalendarMonthIcon style={{ fontSize: "2rem" }} />
          </span>
          <PurpleButton onClick={handleDownload}>
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
                      fromMonthValueSetter('Apr 2023');
                    }}
                  >
                    Apr
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('May 2023');
                    }}
                  >
                    May
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Jun 2023');
                    }}
                  >
                    Jun
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Jul 2023');
                    }}
                  >
                    Jul
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Aug 2023');
                    }}
                  >
                    Aug
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Sep 2023');
                    }}
                  >
                    Sep
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Oct 2023');
                    }}
                  >
                    Oct
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Nov 2023');
                    }}
                  >
                    Nov
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Dec 2023');
                    }}
                  >
                    Dec
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Jan 2024');
                    }}
                  >
                    Jan
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Feb 2024');
                    }}
                  >
                    Feb
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter('Mar 2024');
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
                      toMonthValueSetter('Apr 2023');
                    }}
                  >
                    Apr
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('May 2023');
                    }}
                  >
                    May
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Jun 2023');
                    }}
                  >
                    Jun
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Jul 2023');
                    }}
                  >
                    Jul
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Aug 2023');
                    }}
                  >
                    Aug
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Sep 2023');
                    }}
                  >
                    Sep
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Oct 2023');
                    }}
                  >
                    Oct
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Nov 2023');
                    }}
                  >
                    Nov
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Dec 2023');
                    }}
                  >
                    Dec
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Jan 2024');
                    }}
                  >
                    Jan
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Feb 2024');
                    }}
                  >
                    Feb
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter('Mar 2024');
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
          <select
            onChange={() => {
            return setFromMonth2(true);
          }} name="" id="">
            <option value="">Select Report Type</option>
            <option value="">
              Vendor-Section Threshold Consumption Report
            </option>
            <option value="">LDC Consumption Report</option>
            {/* <option value="">Monthly-Liability Report</option> */}
          </select>
          {monthSet2 && <>
          <p>Vendor-Section Threshold Consumption Report<Close onClick={()=>{return setMonthSet2(false)}} style={{color:'red'}}/> </p>
          
          </>}
        </span>
        <p>Select Month Range</p>
        <div>
          <span>
          {fromMonthValue2 == "" ? "Select From Month" : fromMonthValue2}{" "}
            <CalendarMonthIcon style={{ fontSize: "2rem" }} />
          </span>
          <span>
          {toMonthValue2 == "" ? "Select To Month" : toMonthValue2}{" "}
            <CalendarMonthIcon style={{ fontSize: "2rem" }} />
          </span>
          <PurpleButton onClick={handleDownload}>
            <FileDownloadOutlinedIcon
              style={{ fontSize: "2.5rem", marginRight: "2rem" }}
            />{" "}
            Download Report
          </PurpleButton>
        </div>
        {(fromMonth2||toMonth2) &&<div className={classes.calenderpopup}>
          {(fromMonth2 || toMonth2) && 
          <section style={!fromMonth2 ? customOpacity : {}}>
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
                      fromMonthValueSetter2('Apr 2023');
                    }}
                  >
                    Apr
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('May 2023');
                    }}
                  >
                    May
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Jun 2023');
                    }}
                  >
                    Jun
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Jul 2023');
                    }}
                  >
                    Jul
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Aug 2023');
                    }}
                  >
                    Aug
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Sep 2023');
                    }}
                  >
                    Sep
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Oct 2023');
                    }}
                  >
                    Oct
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Nov 2023');
                    }}
                  >
                    Nov
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Dec 2023');
                    }}
                  >
                    Dec
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Jan 2024');
                    }}
                  >
                    Jan
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Feb 2024');
                    }}
                  >
                    Feb
                  </p>
                  <p
                    onClick={(e) => {
                      fromMonthValueSetter2('Mar 2024');
                    }}
                  >
                    Mar
                  </p>
                </main>
          </section>}
          {toMonth2 && <section>
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
                      toMonthValueSetter2('Apr 2023');
                    }}
                  >
                    Apr
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('May 2023');
                    }}
                  >
                    May
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Jun 2023');
                    }}
                  >
                    Jun
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Jul 2023');
                    }}
                  >
                    Jul
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Aug 2023');
                    }}
                  >
                    Aug
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Sep 2023');
                    }}
                  >
                    Sep
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Oct 2023');
                    }}
                  >
                    Oct
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Nov 2023');
                    }}
                  >
                    Nov
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Dec 2023');
                    }}
                  >
                    Dec
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Jan 2024');
                    }}
                  >
                    Jan
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Feb 2024');
                    }}
                  >
                    Feb
                  </p>
                  <p
                    onClick={(e) => {
                      toMonthValueSetter2('Mar 2024');
                    }}
                  >
                    Mar
                  </p>
                </main>
          </section>}
        </div>}
      </section>
    </div>
  );
};

export default BIReport;
