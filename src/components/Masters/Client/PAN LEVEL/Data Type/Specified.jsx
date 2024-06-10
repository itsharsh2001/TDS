import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./Specified.module.css";

function Specified({ type, clientIdentity }) {
  const [othersPopup, setOthersPopup] = useState(false);

  let rowStyle = {};

  switch (type) {
    case "Vendor":
      rowStyle = {
        gridTemplateColumns: "10% 15% 15% 15% 15% 15% 16%",
      };
      break;
    case "LDC":
      rowStyle = {
        gridTemplateColumns: "15% 15% 15% 15% 15% 15% 15%",
      };
      break;
    // Add more cases for other values as needed
    default:
      break;
  }

  const vendorMaster = [
    {
      Tracking_ID: "186047456",
      Creation_Date: "11-08-2023 16:45",
      Created_By: "Jack.k",
      Created_For: "ABC Master",
      Request_Status: "Request Created",
    },
    {
      Tracking_ID: "186047457",
      Creation_Date: "12-08-2023 16:50",
      Created_By: "Harsh.h",
      Created_For: "DEF Master",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: "186047458",
      Creation_Date: "13-08-2023 16:55",
      Created_By: "Dhruv.v",
      Created_For: "GHI Master",
      Request_Status: "Request Processed",
    },
  ];

  const vendorMaster2 = [
    {
      Tracking_ID: "196047456",
      Creation_Date: "11-08-2023 16:45",
      Created_By: "Abhishek.k",
      Created_For: "ABC Master",
      Request_Status: "Request Created",
    },
    {
      Tracking_ID: "196047457",
      Creation_Date: "12-08-2023 16:50",
      Created_By: "Pranav.v",
      Created_For: "DEF Master",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: "196047458",
      Creation_Date: "13-08-2023 16:55",
      Created_By: "Ankur.r",
      Created_For: "GHI Master",
      Request_Status: "Request Processed",
    },
  ];

  const LDCMaster = [
    {
      Tracking_ID: "186047456",
      Creation_Date: "11-08-2023 16:45",
      Created_By: "Jack.k",
      Created_For: "ABC Master",
      Request_Status: "Request Created",
    },
    {
      Tracking_ID: "186047457",
      Creation_Date: "12-08-2023 16:50",
      Created_By: "Harsh.h",
      Created_For: "DEF Master",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: "186047458",
      Creation_Date: "13-08-2023 16:55",
      Created_By: "Dhruv.v",
      Created_For: "GHI Master",
      Request_Status: "Request Processed",
    },
  ];

  const LDCMaster2 = [
    {
      Tracking_ID: "196047456",
      Creation_Date: "11-08-2023 16:45",
      Created_By: "Abhishek.k",
      Created_For: "ABC Master",
      Request_Status: "Request Created",
    },
    {
      Tracking_ID: "196047457",
      Creation_Date: "12-08-2023 16:50",
      Created_By: "Pranav.v",
      Created_For: "DEF Master",
      Request_Status: "Request Processed",
    },
    {
      Tracking_ID: "196047458",
      Creation_Date: "13-08-2023 16:55",
      Created_By: "Ankur.r",
      Created_For: "GHI Master",
      Request_Status: "Request Processed",
    },
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch("/assets/Excel101ExtraPractice01.xlsx");

      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      // Use the response object to get the file content
      const fileContent = await response.blob({ type: "application/xlsx" });

      // Now you can process the file content as needed
      console.log("File content:", fileContent);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(fileContent);
      link.download = "downloadedFiless.xlsx";

      // Trigger the click event
      link.click();
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  return (<>
    {othersPopup && (
      <div
        className={classes.overlay}
        onClick={() => {
          return setOthersPopup(false);
        }}
      ></div>
    )}
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
          {type == "Vendor" && "Specified Person Check"}
          {type == "LDC" && "LDC Validation"}
        </h4>
        <section>
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
          <button onClick={handleDownload}>
            <FileDownloadOutlinedIcon
              style={{ fontSize: "3rem", marginRight: "1rem" }}
            />
            Download Template
          </button>
        </div>
      </div>
    )}
    <div className={classes.viewmaster}>
      <button onClick={()=>{return setOthersPopup(true)}}>
        <AddIcon className={classes.downloadicon} />
        Create Request
      </button>

      {type=='Vendor' && <button onClick={()=>{return setOthersPopup(true)}}>Fetch Status</button>}

      <table className={classes.table}>
        <tbody>
          <tr style={rowStyle}>
            {type == "LDC" && (
              <>
                <th>Select</th>
                <th>Tracking ID</th>
                <th>Creation Date</th>

                <th>Created By</th>
                <th>Created For</th>
                <th>Request Status</th>
                <th>Actions</th>
              </>
            )}

            {type == "Vendor" && (
              <>
                <th>Select</th>
                <th>Tracking ID</th>
                <th>Creation Date</th>

                <th>Created By</th>
                <th>Created For</th>
                <th>Request Status</th>
                <th>Actions</th>
              </>
            )}
          </tr>

          {type == "Vendor" &&
            clientIdentity == "ABC Consultancy Limited" &&
            vendorMaster.map((val, idx) => {
              return (
                <tr style={rowStyle} id={idx}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{val.Tracking_ID}</td>
                  <td>{val.Creation_Date}</td>
                  <td>{val.Created_By}</td>
                  <td>{val.Created_For}</td>
                  <td>{val.Request_Status}</td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      gridTemplateColumns: "1fr 1fr",
                    }}
                  >
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />{" "}
                    <p onClick={handleDownload}>File</p>
                    <p onClick={handleDownload}>Error</p>
                  </td>
                </tr>
              );
            })}

          {type == "LDC" &&
            clientIdentity == "ABC Consultancy Limited" &&
            LDCMaster.map((val, idx) => {
              return (
                <tr style={rowStyle} id={idx}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{val.Tracking_ID}</td>
                  <td>{val.Creation_Date}</td>
                  <td>{val.Created_By}</td>
                  <td>{val.Created_For}</td>
                  <td>{val.Request_Status}</td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      gridTemplateColumns: "1fr 1fr",
                    }}
                  >
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />{" "}
                    <p onClick={handleDownload}>File</p>
                    <p onClick={handleDownload}>Error</p>
                  </td>
                </tr>
              );
            })}

          {type == "Vendor" &&
            clientIdentity == "ABC Motors Limited" &&
            vendorMaster2.map((val, idx) => {
              return (
                <tr style={rowStyle} id={idx}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{val.Tracking_ID}</td>
                  <td>{val.Creation_Date}</td>
                  <td>{val.Created_By}</td>
                  <td>{val.Created_For}</td>
                  <td>{val.Request_Status}</td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      gridTemplateColumns: "1fr 1fr",
                    }}
                  >
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />{" "}
                    <p onClick={handleDownload}>File</p>
                    <p onClick={handleDownload}>Error</p>
                  </td>
                </tr>
              );
            })}

          {type == "LDC" &&
            clientIdentity == "ABC Motors Limited" &&
            LDCMaster2.map((val, idx) => {
              return (
                <tr style={rowStyle} id={idx}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{val.Tracking_ID}</td>
                  <td>{val.Creation_Date}</td>
                  <td>{val.Created_By}</td>
                  <td>{val.Created_For}</td>
                  <td>{val.Request_Status}</td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      gridTemplateColumns: "1fr 1fr",
                    }}
                  >
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <FileDownloadOutlinedIcon
                      onClick={handleDownload}
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />{" "}
                    <p onClick={handleDownload}>File</p>
                    <p onClick={handleDownload}>Error</p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Specified;
