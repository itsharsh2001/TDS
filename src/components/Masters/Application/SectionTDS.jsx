import React, {useState} from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import Uploaded from "./Data Type/Uploaded";
import ViewMaster from "./Data Type/ViewMaster";

import classes from "./SectionTDS.module.css";

const SectionTDS = (props) => {
  


  const [viewData, setViewData] = useState(false);
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };


  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  return (
    <div className={classes.sectiontds}>
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
          Section-To-TDS Rate
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
      {/* <section>
        <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button>
        <button onClick={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Masters
        </button>
      </section> */}

      {/* <table className={classes.table}>
        <tbody>
          <tr>
            <th>Nature of Payment</th>
            <th>TDS-Section</th>
            <th>Rate</th>
            <th>No PAN Rate</th>
            <th>Specified Person Rate</th>
          </tr>
        </tbody>
      </table> */}
       
       {!viewData && <Uploaded type="Section" />}
      {viewData && <ViewMaster type="Section" />}
    </div>
  );
};

export default SectionTDS;
