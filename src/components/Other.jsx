import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import classes from "./Other.module.css";

function Other() {
  const [panValidation, setPanValidation] = useState(false);
  const [specifiedPerson, setSpecifiedPerson] = useState(false);
  const [gstin, setGstin] = useState(false);

  const specifiedPersonData = [
    {
      Tracking_ID: 1632498750,
      Creation_Date: "13-08-2023",
      Creation_Time: "08:15:30",
      Portal: "Reporting Portal",
      Request_Status: "Request Created",
    },
    {
      Tracking_ID: 5079821463,
      Creation_Date: "20-06-2023",
      Creation_Time: "12:45:22",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 9083657124,
      Creation_Date: "30-05-2023",
      Creation_Time: "18:30:55",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 2468109753,
      Creation_Date: "12-05-2023",
      Creation_Time: "03:20:12",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 1357924680,
      Creation_Date: "04-04-2023",
      Creation_Time: "22:10:48",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 6543219870,
      Creation_Date: "03-04-2023",
      Creation_Time: "14:55:36",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
  ];

  const panData = [
    {
      Tracking_ID: 4289567130,
      Creation_Date: "10-08-2023",
      Creation_Time: "09:40:27",
      Portal: "TRACES",
      Request_Status: "Request Created",
    },
    {
      Tracking_ID: 7018264935,
      Creation_Date: "05-08-2023",
      Creation_Time: "23:58:14",
      Portal: "TRACES",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 3142765980,
      Creation_Date: "06-07-2023",
      Creation_Time: "05:12:42",
      Portal: "TRACES",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 8790356214,
      Creation_Date: "05-06-2023",
      Creation_Time: "17:33:09",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 5824179360,
      Creation_Date: "31-05-2023",
      Creation_Time: "06:25:18",
      Portal: "TRACES",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 7351692408,
      Creation_Date: "19-05-2023",
      Creation_Time: "19:05:41",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 9204751863,
      Creation_Date: "25-04-2023",
      Creation_Time: "21:50:03",
      Portal: "TRACES",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 3147805926,
      Creation_Date: "23-04-2023",
      Creation_Time: "10:37:29",
      Portal: "Reporting Portal",
      Request_Status: "Request Processed",
    },
  ];

  const gstinData = [
    {
      Tracking_ID: 6497238501,
      Creation_Date: "28-07-2023",
      Creation_Time: "13:18:07",
      Portal: "GST Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 4015729836,
      Creation_Date: "01-06-2023",
      Creation_Time: "16:27:50",
      Portal: "GST Portal",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: 7968351240,
      Creation_Date: "06-06-2023",
      Creation_Time: "02:44:56",
      Portal: "GST Portal",
      Request_Status: "Request Processed",
    },
  ];

  const [othersPopup, setOthersPopup] = useState(false);

  const [newPopup, setNewPopup] = useState(false);
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  return (
    <>
    {( othersPopup || newPopup ) && <div className={classes.overlay} onClick={()=>{
      setNewPopup(false);
      return setOthersPopup(false);
    }}></div>}
      {othersPopup && (
        <div className={classes.popup}>
          <CloseIcon
            onClick={() => {
              return setOthersPopup(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.25rem",
              right: "2.25rem",
              cursor: "pointer",
            }}
          />
          <h4>
            {panValidation && "New Request"}
            {specifiedPerson && "Specified Person Check"}
            {gstin && "GSTIN Check"}
          </h4>
          <section>
            {panValidation && (
              <>
                <h6>Choose Portal</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="portal"
                      value="TRACES"
                      id="TRACES"
                    />
                    <label htmlFor="TRACES">TRACES</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="portal"
                      value="Reporting Portal"
                      id="Reporting Portal"
                    />
                    <label htmlFor="Reporting Portal">Reporting Portal</label>
                  </span>
                </div>
              </>
            )}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <img src="/Captha.png" alt="" />
            <input type="text" placeholder="Enter Captcha" />
            <button
              onClick={() => {
                return setOthersPopup(false);
              }}
            >
              Submit
            </button>
          </section>

          <div>
            <button>
              <FileUploadOutlinedIcon
                style={{ fontSize: "3rem", marginRight: "1rem" }}
              />
              Upload Template
            </button>
            <button>
              <FileDownloadOutlinedIcon
                style={{ fontSize: "3rem", marginRight: "1rem" }}
              />
              Download Template
            </button>
          </div>
        </div>
      )}
      {newPopup && (
        <div style={{justifyContent:'unset'}} className={classes.popup}>
          <CloseIcon
            onClick={() => {
              return setNewPopup(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.25rem",
              right: "2.25rem",
              cursor: "pointer",
            }}
          />
          <h4 style={{marginBottom:'3rem'}}>Request Status</h4>
          <section>
            {panValidation && (
              <>
                <h6>Choose Portal</h6>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="portal"
                      value="TRACES"
                      id="TRACES"
                    />
                    <label htmlFor="TRACES">TRACES</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="portal"
                      value="Reporting Portal"
                      id="Reporting Portal"
                    />
                    <label htmlFor="Reporting Portal">Reporting Portal</label>
                  </span>
                </div>
              </>
            )}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <img src="/Captha.png" alt="" />
            <input type="text" placeholder="Enter Captcha" />
            <button
              onClick={() => {
                return setOthersPopup(false);
              }}
            >
              Submit
            </button>
          </section>

          {/* <div>
            <button>
              <FileUploadOutlinedIcon
                style={{ fontSize: "3rem", marginRight: "1rem" }}
              />
              Upload Template
            </button>
            <button>
              <FileDownloadOutlinedIcon
                style={{ fontSize: "3rem", marginRight: "1rem" }}
              />
              Download Template
            </button>
          </div> */}
        </div>
      )}
      <div className={classes.other}>
        {!panValidation && !specifiedPerson && !gstin && (
          <main>
            <h5>Validations</h5>
            <section>
              <span
                onClick={() => {
                  return setPanValidation(true);
                }}
              >
                <p>PAN Validations</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span
                onClick={() => {
                  return setSpecifiedPerson(true);
                }}
              >
                <p>Specified Person Check</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span
                onClick={() => {
                  return setGstin(true);
                }}
              >
                <p>GSTIN Validations</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
            <section>
              <span
                onClick={() => {
                  return setGstin(true);
                }}
              >
                <p>LDC Validations</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
            <h5>MIS</h5>
            <section>
              <span>
                <p>Control Center</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span>
                <p>Other Reports</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
            <h5>Other Services</h5>
            <section>
              <span>
                <p>Form 16A/27D</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span>
                <p>Form 15 CA/CB</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span>
                <p>NR Services</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
          </main>
        )}

        {(panValidation || specifiedPerson || gstin) && (
          <div className={classes.tablediv}>
            <section>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setGstin(false);
                  setSpecifiedPerson(false);
                  return setPanValidation(false);
                }}
                href=""
              >
                Other
              </a>
              <ChevronRightIcon className={classes.breadcrumbarrow} />
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                href=""
              >
                {panValidation && "PAN Validation"}
                {specifiedPerson && "Specified Person Check"}
                {gstin && "GSTIN Check"}
              </a>
            </section>

            <button
              onClick={() => {
                return setOthersPopup(true);
              }}
            >
              <AddIcon style={{ fontSize: "3rem" }} />
              Create New Request
            </button>
          </div>
        )}
        {(panValidation || specifiedPerson || gstin) && (
          <table className={classes.table}>
            <tbody>
              <tr>
                {/* <th>
                  
                  <input type="checkbox" name="" id="" />
                </th> */}
                <th>Tracking ID</th>
                <th>Creation Date</th>
                <th>Creation Time</th>
                <th>Portal</th>
                <th>Request Status</th>
                <th>Actions</th>
              </tr>

              {specifiedPerson &&
                specifiedPersonData.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>{val.Tracking_ID}</td>
                      <td>{val.Creation_Date}</td>
                      <td>{val.Creation_Time}</td>
                      <td>{val.Portal}</td>
                      <td>{val.Request_Status}</td>
                      <td
                        style={{
                          display: "grid",
                          gridTemplateRows: "1fr 1fr",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <FileDownloadOutlinedIcon
                          onClick={() => {
                            return setNewPopup(true);
                          }}
                          style={{
                            margin: "auto",
                            fontSize: "2.5rem",
                            cursor: "pointer",
                          }}
                        />{" "}
                        <p>Template</p>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            return setNewPopup(true);
                          }}
                        >
                          Report
                        </p>
                      </td>
                    </tr>
                  );
                })}
              {panValidation &&
                panData.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>{val.Tracking_ID}</td>
                      <td>{val.Creation_Date}</td>
                      <td>{val.Creation_Time}</td>
                      <td>{val.Portal}</td>
                      <td>{val.Request_Status}</td>
                      <td
                        style={{
                          display: "grid",
                          gridTemplateRows: "1fr 1fr",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <FileDownloadOutlinedIcon
                          onClick={() => {
                            return setNewPopup(true);
                          }}
                          style={{
                            margin: "auto",
                            fontSize: "2.5rem",
                            cursor: "pointer",
                          }}
                        />{" "}
                        <p>Template</p>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            return setNewPopup(true);
                          }}
                        >
                          Report
                        </p>
                      </td>
                    </tr>
                  );
                })}
              {gstin &&
                gstinData.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>{val.Tracking_ID}</td>
                      <td>{val.Creation_Date}</td>
                      <td>{val.Creation_Time}</td>
                      <td>{val.Portal}</td>
                      <td>{val.Request_Status}</td>
                      <td
                        style={{
                          display: "grid",
                          gridTemplateRows: "1fr 1fr",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <FileDownloadOutlinedIcon
                          onClick={() => {
                            return setNewPopup(true);
                          }}
                          style={{
                            margin: "auto",
                            fontSize: "2.5rem",
                            cursor: "pointer",
                          }}
                        />{" "}
                        <p>Template</p>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            return setNewPopup(true);
                          }}
                        >
                          Report
                        </p>
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
}

export default Other;
