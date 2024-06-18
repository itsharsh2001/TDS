import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Uploaded from "./Data Type/Uploaded";
import ViewMaster from "./Data Type/ViewMaster";

import classes from "./NaturePayment.module.css";

const NaturePayment = (props) => {
  const [viewData, setViewData] = useState(false);

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };

  return (
    <div className={classes.naturepayment}>
      <span>
        <a
          onClick={(e) => {
            e.preventDefault();
            return props.transactionHomeScreen();
          }}
          href=""
        >
          Application Level Master
        </a>
        <ChevronRightIcon className={classes.righticon} />
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href=""
        >
          Nature of Payment Rate & Threshold Master
        </a>
      </span>
      <ul>
        <li
          style={!viewData ? hoverStyle : {}}
          onClick={() => setViewData(false)}
        >
          Uploaded Data
        </li>
        <li
          style={viewData ? hoverStyle : {}}
          onClick={() => setViewData(true)}
        >
          View Master Data
        </li>
      </ul>

      {!viewData && <Uploaded type="NaturePayment" />}
      {viewData && <ViewMaster type="NaturePayment" />}
    </div>
  );
};

export default NaturePayment;
