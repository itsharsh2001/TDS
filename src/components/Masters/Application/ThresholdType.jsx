import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import classes from './ThresholdType.module.css'

const ThresholdType = (props) => {
  const tdsSections = [
    {
      Section: "194Q",
      Deductor: "Any Person",
      Deductee: "Any Person",
      Nature_of_Transaction: "Purchase of Goods",
      Per_Transaction_Threshold: 5000000.00,
      Annual_Threshold: 5000000.00,
      Type_of_Threshold: "Prospective",
    },
    {
      Section: "194O",
      Deductor: "E-Commerce Operator",
      Deductee: "Individual",
      Nature_of_Transaction:
        "Sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator",
      Per_Transaction_Threshold: 500000.00,
      Annual_Threshold: 500000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194O",
      Deductor: "E-Commerce Operator",
      Deductee: "HUF",
      Nature_of_Transaction:
        "Sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator",
      Per_Transaction_Threshold: 500000.00,
      Annual_Threshold: 500000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194O",
      Deductor: "E-Commerce Operator",
      Deductee: "Other than Individual or HUF",
      Nature_of_Transaction:
        "Sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator",
      Per_Transaction_Threshold: "-",
      Annual_Threshold: "-",
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194C",
      Deductor: "Any Person",
      Deductee: "Individual",
      Nature_of_Transaction: "Contract Work",
      Per_Transaction_Threshold: 30000.00,
      Annual_Threshold: 100000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194C",
      Deductor: "Any Person",
      Deductee: "HUF",
      Nature_of_Transaction: "Contract Work",
      Per_Transaction_Threshold: 30000.00,
      Annual_Threshold: 100000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194C",
      Deductor: "Any Person",
      Deductee: "Other than Individual or HUF",
      Nature_of_Transaction: "Contract Work",
      Per_Transaction_Threshold: 30000.00,
      Annual_Threshold: 100000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194G",
      Deductor: "Any Person",
      Deductee: "Any Person",
      Nature_of_Transaction:
        "Commission, remuneration or prize (by whatever name called) on lottery tickets",
      Per_Transaction_Threshold: 15000.00,
      Annual_Threshold: 15000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194H",
      Deductor: "Any Person",
      Deductee: "Any Person",
      Nature_of_Transaction: "Brokerage or Commission (Other than Insurance Commission)",
      Per_Transaction_Threshold: 15000.00,
      Annual_Threshold: 15000.00,
      Type_of_Threshold: "Retrospective",
    },
    {
      Section: "194D",
      Deductor: "Any Person",
      Deductee: "Any Person",
      Nature_of_Transaction: "Insurance Commission",
      Per_Transaction_Threshold: 15000.00,
      Annual_Threshold: 15000.00,
      Type_of_Threshold: "Retrospective",
    },
  ];
  
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  return (
    <div className={classes.thresholdtype}>
      <span>
        <a onClick={(e)=>{e.preventDefault(); return props.transactionHomeScreen()}} href="">Application Level Master</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">Threshold Type & Value Masters</a>
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
              Section
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
              Deductor
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
            <th>Deductee
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
            <th>Nature of Transaction
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
            <th>Per Transaction Threshold
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
            <th>Annual Threshold
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
            <th>Type of Threshold
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
            {/* <th>Report Download<KeyboardArrowDownIcon
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
          
          {tdsSections.map((val, idx) => {
            return (
              <tr id={idx}>
                {/* <td>
                  <input type="checkbox" name="" id="" />
                </td> */}
                <td>{val.Section}</td>
                <td>{val.Deductor}</td>
                <td>
                      {val.Deductee}
                    </td>
                <td>{val.Nature_of_Transaction}</td>
                <td>{val.Per_Transaction_Threshold}</td>

                <td>{val.Annual_Threshold}</td>
                <td>
                  {val.Type_of_Threshold}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ThresholdType