import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import classes from "./SectionTDS.module.css";

const SectionTDS = (props) => {
  const taxData = [
    {
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
      Rate: '0.10%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '5.00%',
    },
    {
      Nature_of_Payment: 'Contract Services',
      TDS_Section: '194C',
      Rate: '2.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '5.00%',
    },
    {
      Nature_of_Payment: 'Premature withdrawal from EPF',
      TDS_Section: '192A',
      Rate: '10.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '20.00%',
    },
    {
      Nature_of_Payment: 'Dividend',
      TDS_Section: '194',
      Rate: '10.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '20.00%',
    },
    {
      Nature_of_Payment: 'Rent for the use of machinery or plant or equipment',
      TDS_Section: '194I(A)',
      Rate: '2.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '5.00%',
    },
    {
      Nature_of_Payment: 'Rent for the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings',
      TDS_Section: '194I(B)',
      Rate: '10.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '20.00%',
    },
    {
      Nature_of_Payment: 'commission, remuneration or prize (by whatever name called) on lottery tickets',
      TDS_Section: '194G',
      Rate: '5.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '10.00%',
    },
    {
      Nature_of_Payment: 'Brokerage or Commission (Other than Insurance Commission)',
      TDS_Section: '194H',
      Rate: '5.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '10.00%',
    },
    {
      Nature_of_Payment: 'sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator',
      TDS_Section: '194O',
      Rate: '1.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '5.00%',
    },
    {
      Nature_of_Payment: 'Interest on Securities',
      TDS_Section: '193',
      Rate: '10.00%',
      NO_PAN_Rate: '20.00%',
      Specified_Person_Rate: '20.00%',
    },
  ];
  
  
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <div className={classes.sectiontds}>
      <span>
        <a onClick={(e)=>{e.preventDefault(); return props.transactionHomeScreen()}} href="">Application Level Master</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">Section-To-TDS Rate</a>
      </span>
      <section>
        <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button>
        <button>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Template File
        </button>
      </section>

      <table className={classes.table}>
        <tbody>
          <tr>
            {/* <th>Select</th> */}
            <th>
              Nature of Payment
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
            </th>
            <th>
              TDS-Section
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
            </th>
            <th>Rate
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
              </th>
            <th>No PAN Rate
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
              </th>
            <th>Specified Person Rate
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
              </th>
            {/* <th>Per Transaction Threshold<KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /></th> */}
            {/* <th>File Download<KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /></th>
            <th>Report Download<KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /></th>
            <th>Type<KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /></th>
            <th>Actions<KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /></th> */}
          </tr>
          
          {taxData.map((val, idx) => {
            return (
              <tr id={idx}>
                {/* <td>
                  <input type="checkbox" name="" id="" />
                </td> */}
                <td>{val.Nature_of_Payment}</td>
                <td>{val.TDS_Section}</td>
                <td>{val.Rate}</td>
                <td>{val.NO_PAN_Rate}</td>
                <td>{val.Specified_Person_Rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SectionTDS;
