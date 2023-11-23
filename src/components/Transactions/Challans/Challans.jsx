import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from "@mui/icons-material/Close";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import PurpleButton from "../../UI/PurpleButton";
import WhiteButton from "../../UI/WhiteButton";

import classes from "./Challans.module.css";

const Challans = (props) => {
  const [monthly, setMonthly] = useState(true);
  const [quarterly, setQuarterly] = useState(false);
  const [annually, setAnnually] = useState(false);
  const [challanUtilization, setChallanUtilization] = useState(false);
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const challans = [
    {
      major_head: "Corporate",
      Challan_Identification_Number: "051000264202312734",
      Acknowledgement_Number: "AJ8020854",
      Bank_Name: "HDFC Bank",
      Bank_Reference_Number: "K2317603614147",
      Date: "06-04-2023",
      BSR_Code: "0510002",
      Challan_No: 12734,
      Income_tax: 1425207.0,
      Surcharge: "-",
      Cess: "-",
      Interest: "-",
      Penalty: "-",
      Others: "-",
      Fee_under_Section_234E: "-",
      Total: 1425207.0,
      Challan_Utilised: 585934.0,
      Challan_Balance: 839273.0,
    },
    {
      major_head: "Non-Corporate",
      Challan_Identification_Number: "051000264202312785",
      Acknowledgement_Number: "AJ8021182",
      Bank_Name: "HDFC Bank",
      Bank_Reference_Number: "K2317603614437",
      Date: "06-04-2023",
      BSR_Code: "0510002",
      Challan_No: 12785,
      Income_tax: 18433242.0,
      Surcharge: "-",
      Cess: "-",
      Interest: "-",
      Penalty: "-",
      Others: "-",
      Fee_under_Section_234E: "-",
      Total: 18433242.0,
      Challan_Utilised: 17876995.0,
      Challan_Balance: 556247.0,
    },
    {
      major_head: "Corporate",
      Challan_Identification_Number: "051000275202324000",
      Acknowledgement_Number: "AK11799642",
      Bank_Name: "HDFC Bank",
      Bank_Reference_Number: "K2330110250621",
      Date: "07-05-2023",
      BSR_Code: "0510002",
      Challan_No: 24000,
      Income_tax: 7558033.0,
      Surcharge: "-",
      Cess: "-",
      Interest: "-",
      Penalty: "-",
      Others: "-",
      Fee_under_Section_234E: "-",
      Total: 7558033.0,
      Challan_Utilised: 756674.0,
      Challan_Balance: 6801359.0,
    },
    {
      major_head: "Non-Corporate",
      Challan_Identification_Number: "051000275202324576",
      Acknowledgement_Number: "AK11799900",
      Bank_Name: "HDFC Bank",
      Bank_Reference_Number: "K2330110250622",
      Date: "07-05-2023",
      BSR_Code: "0510002",
      Challan_No: 24576,
      Income_tax: 6590234.0,
      Surcharge: "-",
      Cess: "-",
      Interest: "-",
      Penalty: "-",
      Others: "-",
      Fee_under_Section_234E: "-",
      Total: 6590234.0,
      Challan_Utilised: 4228576.0,
      Challan_Balance: 2361658.0,
    },
    {
      major_head: "Corporate",
      Challan_Identification_Number: "051000266202342786",
      Acknowledgement_Number: "BJ1421232",
      Bank_Name: "HDFC Bank",
      Bank_Reference_Number: "K2330110250553",
      Date: "06-06-2023",
      BSR_Code: "0510002",
      Challan_No: 42786,
      Income_tax: 12995637.0,
      Surcharge: "-",
      Cess: "-",
      Interest: "-",
      Penalty: "-",
      Others: "-",
      Fee_under_Section_234E: "-",
      Total: 12995637.0,
      Challan_Utilised: 2918081.0,
      Challan_Balance: 10077556.0,
    },
    {
      major_head: "Non-Corporate",
      Challan_Identification_Number: "051000266202342814",
      Acknowledgement_Number: "BJ1421313",
      Bank_Name: "HDFC Bank",
      Bank_Reference_Number: "K2330110250640",
      Date: "06-06-2023",
      BSR_Code: "0510002",
      Challan_No: 42814,
      Income_tax: 9792935.0,
      Surcharge: "-",
      Cess: "-",
      Interest: "-",
      Penalty: "-",
      Others: "-",
      Fee_under_Section_234E: "-",
      Total: 9792935.0,
      Challan_Utilised: 2350487.0,
      Challan_Balance: 7442448.0,
    },
  ];

  // console.log(data);

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
  return (
    <>
      {challanUtilization && (
        <div className={classes.popup}>
          <CloseIcon
            onClick={() => {
              return setChallanUtilization(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.15rem",
              right: "1.5rem",
              cursor: "pointer",
            }}
          />
          <h4>Challan Utilization</h4>
          <section>
            <h6>TRACES Portal</h6>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <img src="/Captha.png" alt="" />
            <input type="text" placeholder="Enter Captcha" />
            <button
              onClick={() => {
                return setChallanUtilization(false);
              }}
            >
              Login
            </button>
          </section>
        </div>
      )}
      {( challanUtilization ) && <div className={classes.overlay} onClick={()=>{
      
      return setChallanUtilization(false);
    }}></div>}
      <div className={classes.challans}>
        {/* <ul>
          <li
            style={monthly ? hoverStyle : {}}
            onClick={() => {
              props.compliancesSetter("monthly");
              props.transactionHomeScreen("");
              return compliancesSetter("monthly");
            }}
          >
            Monthly Compliances
          </li>
          <li
            style={quarterly ? hoverStyle : {}}
            onClick={() => {
              props.compliancesSetter("quarterly");
              props.transactionHomeScreen("");
              return compliancesSetter("quarterly");
            }}
          >
            Quarterly Compliances
          </li>
          <li
            style={annually ? hoverStyle : {}}
            onClick={() => {
              props.compliancesSetter("annually");
              props.transactionHomeScreen("");
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
            Challans
          </a>

          {/* <PurpleButton>
          <FileUploadOutlinedIcon style={{fontSize:'2.5rem'}} /> Upload Template
        </PurpleButton> */}
        </span>

        <div>
          {/* <select name="" id="">
          <option value="">Select TAN</option>
          <option value="">TAN 1</option>
          <option value="">TAN 2</option>
          <option value="">TAN 3</option>
        </select> */}

          <PurpleButton
            onClick={() => {
              return setChallanUtilization(true);
            }}
          >
            Check Challan Utilisation
          </PurpleButton>
          <PurpleButton>
            <FileUploadOutlinedIcon style={{ fontSize: "2.5rem" }} /> Upload
            Template
          </PurpleButton>
          <PurpleButton>
            <FileDownloadOutlinedIcon style={{ fontSize: "2.5rem" }} />
            Downlaod Template
          </PurpleButton>
        </div>

        <table className={classes.table}>
          <tbody>
            <tr>
              <th>
                Select
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Major Head
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Challan Identification No.
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Acknowledgement No.
                <KeyboardArrowDownIcon />
              </th>

              <th>
                Bank Name
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Bank Reference Number
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Date
                <KeyboardArrowDownIcon />
              </th>
              <th>
                BSR Code
                <KeyboardArrowDownIcon />
              </th>

              <th>
                Challan No.
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Income Tax
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Surcharge
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Cess
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Interest
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Penalty
                <KeyboardArrowDownIcon />
              </th>

              <th>
                Others
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Fee Under Section 234E
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Total
                <KeyboardArrowDownIcon />
              </th>

              <th>
                Challan Utilised
                <KeyboardArrowDownIcon />
              </th>
              <th>
                Challan Balance
                <KeyboardArrowDownIcon />
              </th>

              {/* <th>Processed Records</th>
            <th>Error Records</th>
            <th>File Download</th>
            <th>Report Download</th>
            <th>Type</th>
            <th>Actions</th> */}
            </tr>

            {challans.map((val, idx) => {
              return (
                <tr id={idx}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{val.major_head}</td>
                  <td>{val.Challan_Identification_Number}</td>
                  <td>{val.Acknowledgement_Number}</td>
                  <td>{val.Bank_Name}</td>
                  <td>{val.Bank_Reference_Number}</td>
                  <td>{val.Date}</td>
                  <td>{val.BSR_Code}</td>
                  <td>{val.Challan_No}</td>
                  <td>{val.Income_tax}</td>
                  <td>{val.Surcharge}</td>
                  <td>{val.Cess}</td>
                  <td>{val.Interest}</td>
                  <td>{val.Penalty}</td>
                  <td>{val.Others}</td>
                  <td>{val.Fee_under_Section_234E}</td>
                  <td>{val.Total}</td>
                  <td>{val.Challan_Utilised}</td>
                  <td>{val.Challan_Balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Challans;
