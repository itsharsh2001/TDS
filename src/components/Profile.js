import React, { useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PurpleButton from "./UI/PurpleButton.jsx";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import classes from "./Profile.module.css";

function Profile() {
  const [popup, setPopup] = useState(false);
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
          <h4>Grant Thornton</h4>
          {/* <section> */}
            <img src="/Key.png" alt="" />
            <h6>Set You New Password</h6>

            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            {/* <img src="/Captha.png" alt="" /> */}
            <input type="password" placeholder="Confirm New Password" />
            <button
              onClick={() => {
                return setPopup(false);
              }}
            >
              Submit
            </button>
          {/* </section> */}

          {/* <div>
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
          </div> */}
        </div>
      )}
      <div className={classes.profile}>
        <section>
          <img src="/face.png" alt="" />
          <div>
            <h1>Ganesh Gupta</h1>
            <h2>
              <MailOutlinedIcon className={classes.mailicon} />
              chris.swanson@wxyz.com
            </h2>
          </div>
          <PurpleButton
            onClick={() => {
              return setPopup(true);
            }}
          >
            Change Password
          </PurpleButton>
        </section>
        {/* <table className={classes.table}>
            <tbody>
                <tr>
                    <th>Client Name</th>
                    <th>Branch</th>
                    <th>Role</th>
                </tr>
                <tr>
                    <td>XYZ Pvt. Ltd.</td>
                    <td>Pune Branch</td>
                    <td>Executive</td>
                </tr>
                <tr>
                    <td>XYZ Pvt. Ltd.</td>
                    <td>Branch Branch</td>
                    <td>Manager</td>
                </tr>
            </tbody>
        </table> */}

        <img src="/profileempty.png" alt="" />
      </div>
    </>
  );
}

export default Profile;
