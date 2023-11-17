import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import PurpleButton from "../../UI/PurpleButton";
import WhiteButton from "../../UI/WhiteButton";

import classes from "./TransactionProcessing.module.css";
import { Close, Download } from "@mui/icons-material";

const TransactionProcessing = (props) => {
  const [activeMonth, setActiveMonth] = useState('')

  const [monthClicked, setMonthClicked] = useState(false);
  const [justProcessedTransactions, setJustProcessedTransactions] =
    useState(false);

  const [monthColor, setmonthColor] = useState("");

  const [status, setStatus] = useState("");

  const [popup, setPopup] = useState(false);

  const [warningpopup, setWarningpopup] = useState(false);

  const [redMonthAdditionalRow, setRedMonthAdditionalRow] = useState(false)

  const [aprilmay, setAprilmay] = useState(false)

  const redClassDiv = {
    backgroundColor: "#c241006b",
  };
  const redClassIcon = {
    color: "#c24100",
  };
  const redBorder = {
    border: "2px solid #c24100",
  };
  const greenClassDiv = {
    backgroundColor: "#9bd7326b",
  };
  const greenClassIcon = {
    color: "#9bd732",
  };
  const greenBorder = {
    border: "2px solid #9bd732",
  };
  const grayClassDiv = {
    backgroundColor: "#b9abcc6b",
  };
  const grayClassIcon = {
    color: "#b9abcc",
  };
  const grayBorder = {
    border: "2px solid #b9abcc",
  };
  const grey = {
    border: "2px solid #B3B3B3",
    background: "#B3B3B3",
    pointerEvents: "none",
  };
  let arr = [];
  return (
    <>
      {popup && (
        <div className={classes.popup}>
          <h2>
            Process for Current Month{" "}
            <Close
              onClick={() => {
                return setPopup(false);
              }}
              style={{ cursor: "pointer" }}
              className={classes.closeicon}
            />
          </h2>
          <main>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <b> Cancellations</b>
                  </td>
                  <td>
                    Start Time: <p>10 July 2023 10:10</p>
                  </td>
                  <td>
                    No. of Records: <p>300</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Status: <h6>Completed</h6>
                  </td>
                  <td>
                    End Time: <p>10 July 2023 10:20</p>
                  </td>
                  <td>
                    <PurpleButton>
                      {" "}
                      <FileDownloadOutlinedIcon /> Download Report
                    </PurpleButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>

          <section>
            <PurpleButton
              onClick={() => {
                setJustProcessedTransactions(true);
                return setPopup(false);
              }}
            >
              Accept
            </PurpleButton>
            <WhiteButton
              onClick={() => {
                return setPopup(false);
              }}
            >
              Reject
            </WhiteButton>
          </section>
        </div>
      )}

      {warningpopup && (
        <div className={classes.warning}>
          <Close
            onClick={() => {
              return setWarningpopup(false);
            }}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "1rem",
              right: "1rem",
              fontSize: "2.5rem",
            }}
          />
          <h3>This month is not available for processing</h3>
        </div>
      )}

      <div className={classes.transactionprocessing}>
        {/* {!monthClicked && (
          <ul>
            <li>Monthly Compliances</li>
            <li>Quarterly Compliances</li>
            <li>Annual Compliances</li>
          </ul>
        )} */}

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
              setActiveMonth('');
              setAprilmay(false);
              setJustProcessedTransactions(false);
              setStatus('');
              setRedMonthAdditionalRow(false);
              console.log('activemonth', activeMonth);
              return setMonthClicked(false);
            }}
            href=""
          >
            Transaction Processing Center
          </a>
          {activeMonth!='' && <><ChevronRightIcon className={classes.righticon} />
          <a
            onClick={(e) => {
              e.preventDefault();
              
            }}
            href=""
          >
            {activeMonth}
          </a></>}
        </span>

        {!monthClicked && (
          <>
            <div>
              <span></span>
              <p>In Process</p>
              <span></span>
              <p>Processed</p>
              <span></span>
              <p>Inactive</p>
            </div>

            <main>
              <section
                onClick={() => {
                  setActiveMonth('April');
                  setMonthClicked(true)
                  return setAprilmay(true)
                }}
                style={redBorder}
              >
                <h1 style={redClassIcon}>April</h1>
                <div style={redClassDiv}>
                  <CalendarTodayIcon style={redClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  setActiveMonth('May');
                  setMonthClicked(true)
                  return setAprilmay(true);
                }}
                style={redBorder}
              >
                <h1 style={redClassIcon}>May</h1>
                <div style={redClassDiv}>
                  <CalendarTodayIcon style={redClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  setActiveMonth('June');
                  setmonthColor("red");
                  setJustProcessedTransactions(true);

                  console.log(justProcessedTransactions, monthColor, activeMonth);
                  return setMonthClicked(true);
                }}
                style={redBorder}
              >
                <h1 style={redClassIcon}>June</h1>
                <div style={redClassDiv}>
                  <CalendarTodayIcon style={redClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  setActiveMonth('July');
                  setmonthColor("green");
                  console.log( monthColor, activeMonth);
                  return setMonthClicked(true);
                }}
                style={greenBorder}
              >
                <h1 style={greenClassIcon}>July</h1>
                <div style={greenClassDiv}>
                  <CalendarTodayIcon style={greenClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>August</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>September</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>October</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>November</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>December</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>January</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>February</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
              <section
                onClick={() => {
                  return setWarningpopup(true);
                }}
                style={grayBorder}
              >
                <h1 style={grayClassIcon}>March</h1>
                <div style={grayClassDiv}>
                  <CalendarTodayIcon style={grayClassIcon} />
                </div>
              </section>
            </main>
          </>
        )}

        {monthClicked && !aprilmay && (
          <section>
            <PurpleButton
              onClick={() => {
                if(monthColor=='red'){
                  setRedMonthAdditionalRow(true);
                }
                return setStatus("Reverse Processed");
              }}
              customStyle={justProcessedTransactions ? {} : grey}
            >
              Reverse Compute Process
            </PurpleButton>

            <PurpleButton
              customStyle={
                monthColor == "red" || justProcessedTransactions ? grey : {}
              }
              onClick={() => {
                return setPopup(true);
              }}
            >
              Process Transactions
            </PurpleButton>
          </section>
        )}

        {monthClicked && !aprilmay && (
          <table className={classes.table}>
            <tbody>
              <tr>
                {/* <th>Serial No.</th> */}
                <th>Date of Processing</th>
                <th>Username</th>
                <th>No. of Records</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

              {!justProcessedTransactions && (
                <>
                  <img src="/ZeroTransactions.png" alt="" />
                  <h2>No Transactions are processed</h2>
                  <p>
                    You can process transactions to display the computing data
                    for the month.
                  </p>
                </>
              )}
              {/* {
                redMonthAdditionalRow && (
                  <tr>
                  
                  <td>17-08-2023</td>
                  <td>Ganesh Gupta</td>
                  <td>12569</td>
                  <td>Processed</td>
                  <td>
                    
                    <select name="" id="">
                      <option value="">Download Reports</option>
                      <option value="">
                        Cancellation Adjustment Report-Consolidated
                      </option>
                      <option value="">
                        Cancellation Adjustment Report-Detailed
                      </option>
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
                  </td>
                </tr>
                )
              } */}
              {justProcessedTransactions && (
                <tr>
                  {" "}
                  {/* <td>1.</td> */}
                  <td>17-08-2023</td>
                  <td>Ganesh Gupta</td>
                  <td>99753</td>
                  <td>{status == "" ? "Processed" : status}</td>
                  <td>
                    {/* <PurpleButton>
                      Download Reports
                      <KeyboardArrowDownIcon className={classes.down} />
                    </PurpleButton> */}
                    <select name="" id="">
                      <option value="">Download Reports</option>
                      <option value="">
                        Cancellation Adjustment Report-Consolidated
                      </option>
                      <option value="">
                        Cancellation Adjustment Report-Detailed
                      </option>
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
                  </td>
                </tr>
              )}

              {arr.map((val, idx) => {
                return (
                  <tr id={idx}>
                    {/* <td>1.</td> */}
                    <td>17-08-2023</td>
                    <td>Ganesh Gupta</td>
                    <td>23900</td>
                    <td>Processed</td>
                    <td>
                      <PurpleButton>Download Reports</PurpleButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}


        {aprilmay && (
          <section>
            <PurpleButton
              customStyle={grey}
            >
              Reverse Compute Process
            </PurpleButton>

            <PurpleButton
              customStyle={
                grey
              }
            >
              Process Transactions
            </PurpleButton>
          </section>
        )}

        {aprilmay && (
          <table className={classes.table}>
            <tbody>
              <tr>
                {/* <th>Serial No.</th> */}
                <th>Date of Processing</th>
                <th>Username</th>
                <th>No. of Records</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

              
              {
                
                  <tr>
                  {" "}
                  {/* <td>1.</td> */}
                  <td>17-08-2023</td>
                  <td>Ganesh Gupta</td>
                  <td>12569</td>
                  <td>Processed</td>
                  <td>
                    {/* <PurpleButton>
                      Download Reports
                      <KeyboardArrowDownIcon className={classes.down} />
                    </PurpleButton> */}
                    <select name="" id="">
                      <option value="">Download Reports</option>
                      <option value="">
                        Cancellation Adjustment Report-Consolidated
                      </option>
                      <option value="">
                        Cancellation Adjustment Report-Detailed
                      </option>
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
                  </td>
                </tr>
                
              }
             
                <tr>
                  {" "}
                  {/* <td>1.</td> */}
                  <td>17-08-2023</td>
                  <td>Ganesh Gupta</td>
                  <td>99753</td>
                  <td>{status == "" ? "Processed" : status}</td>
                  <td>
                    {/* <PurpleButton>
                      Download Reports
                      <KeyboardArrowDownIcon className={classes.down} />
                    </PurpleButton> */}
                    <select name="" id="">
                      <option value="">Download Reports</option>
                      <option value="">
                        Cancellation Adjustment Report-Consolidated
                      </option>
                      <option value="">
                        Cancellation Adjustment Report-Detailed
                      </option>
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
                  </td>
                </tr>
             

              {arr.map((val, idx) => {
                return (
                  <tr id={idx}>
                    {/* <td>1.</td> */}
                    <td>17-08-2023</td>
                    <td>Ganesh Gupta</td>
                    <td>23900</td>
                    <td>Processed</td>
                    <td>
                      <PurpleButton>Download Reports</PurpleButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TransactionProcessing;