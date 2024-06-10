import React, { useState } from "react";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./Enrichment.module.css";

const Enrichment = ({ type }) => {
  const [popup, setPopup] = useState(false);
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  let rowStyle = {};
  const [templateFileUpload, setTemplateFileUpload] = useState(false);
  rowStyle = {
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
  };

  let enrichmentData = [
    {
      File_Name: "Enrichment_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: "1823456790",
      No_of_Records: "1264",
      Status: "Processed",
    },
  ];

  const buttonToggler = () => {
    if (type != "Keyword") {
      handleDownload();
    } else {
      setPopup(true);
    }
  };

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
          <CloseIcon
            onClick={() => {
              return setPopup(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.25rem",
              right: "2.25rem",
              cursor: "pointer",
            }}
          />
          <h4>Add Credentials</h4>
          <section>
            <select name="" id="">
              <option value="">Select Portal</option>
              <option value="">Reporting Portal</option>
              <option value="">GSTIN</option>
              <option value="">TRACES</option>
            </select>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button
              onClick={() => {
                return setPopup(false);
              }}
            >
              Submit
            </button>
          </section>
        </div>
      )}
      <div className={classes.enrichment}>

        <button>
            <FileDownloadOutlinedIcon className={classes.downloadicon}/>
            Enrichment Template
        </button>
        <button>
            <FileUploadOutlinedIcon className={classes.downloadicon} />
            Enrichment
        </button>
        
        <button onClick={buttonToggler}>
          <FileDownloadOutlinedIcon className={classes.downloadicon} />
          Download Master Data
        </button>
        
        <table className={classes.table}>
          <tbody>
            <tr style={rowStyle}>
              <th>
                File Name
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                Uploaded By
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>Batch ID</th>
              <th>No. of Records</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

            {enrichmentData.map((val, idx) => {
              return (
                <tr style={rowStyle} id={idx}>
                  <td>{val.File_Name}</td>
                  <td>{val.Uploaded_By}</td>
                  <td>{val.Batch_ID}</td>
                  <td>{val.No_of_Records}</td>
                  <td>{val.Status}</td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridTemplateRows: "1fr 1fr",
                    }}
                  >
                    <FileDownloadOutlinedIcon
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <FileDownloadOutlinedIcon
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <DeleteOutlinedIcon
                      style={{ margin: "auto", fontSize: "2.5rem" }}
                    />
                    <p>File</p>
                    <p>Error</p>
                    <p>Delete</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Enrichment;
