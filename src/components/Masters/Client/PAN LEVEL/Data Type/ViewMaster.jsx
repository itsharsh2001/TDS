import React, { useState } from "react";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";

import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./ViewMaster.module.css";

const ViewMaster = ({ type, clientIdentity }) => {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const [templateFileUpload, setTemplateFileUpload] = useState(false);
  const [othersPopup, setOthersPopup] = useState(false);

  const keywordMaster = [
    {
      Keywords: "Manpower",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      Keywords: "Raw Material",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      Keywords: "Goods",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      Keywords: "Service",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
  ];
  const keywordMaster2 = [
    {
      Keywords: "Manpower",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      Keywords: "Raw Material",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      Keywords: "Goods",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      Keywords: "Service",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
  ];

  const vendorMaster = [
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000070179",
      Vendor_Name: "ASK & Associates LLP",
      Vendor_PAN: "BKIFA2014K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFA2014K8Z3",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000064548",
      Vendor_Name: "BSK & Associates LLP",
      Vendor_PAN: "BKIFB9164K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFB9164K9Z5",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194I(b)",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000052557",
      Vendor_Name: "CSK & Associates LLP",
      Vendor_PAN: "BKIFC9305K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFC9305K6Z9",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194H",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000021645",
      Vendor_Name: "Ganesh Gupta",
      Vendor_PAN: "BKIPG3065K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIPG3065K3Z1",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194H",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000061723",
      Vendor_Name: "DSK & Associates LLP",
      Vendor_PAN: "BKIFD7079K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFD7079K7Z2",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000049276",
      Vendor_Name: "ABC Private Limited",
      Vendor_PAN: "BKICA9561K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICA9561K2Z8",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000025310",
      Vendor_Name: "DEF Limited",
      Vendor_PAN: "BKICD9828K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICD9828K3Z7",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000063391",
      Vendor_Name: "GHI Limited",
      Vendor_PAN: "BKICG6641K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICG6641K6Z1",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "Yes",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000067792",
      Vendor_Name: "Aarav Ahuja",
      Vendor_PAN: "BKIPA6087K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIPA6087K8Z3",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194I(b)",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000014299",
      Vendor_Name: "JKL Limited",
      Vendor_PAN: "BKICJ1426K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICJ1426K6Z7",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000090217",
      Vendor_Name: "MNO Private Limited",
      Vendor_PAN: "BKICM7469K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICM7469K1Z5",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194I(b)",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
  ];

  const vendorMaster2 = [
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000030179",
      Vendor_Name: "ASK & Associates LLP",
      Vendor_PAN: "BKIFA2014K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFA2014K8Z3",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000014548",
      Vendor_Name: "BSK & Associates LLP",
      Vendor_PAN: "BKIFB9164K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFB9164K9Z5",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194I(b)",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000082557",
      Vendor_Name: "CSK & Associates LLP",
      Vendor_PAN: "BKIFC9305K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFC9305K6Z9",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194H",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000071645",
      Vendor_Name: "Ganesh Gupta",
      Vendor_PAN: "BKIPG3065K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIPG3065K3Z1",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194H",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000021723",
      Vendor_Name: "DSK & Associates LLP",
      Vendor_PAN: "BKIFD7079K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFD7079K7Z2",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000019276",
      Vendor_Name: "ABC Private Limited",
      Vendor_PAN: "BKICA9561K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICA9561K2Z8",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000065310",
      Vendor_Name: "DEF Limited",
      Vendor_PAN: "BKICD9828K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICD9828K3Z7",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000036391",
      Vendor_Name: "GHI Limited",
      Vendor_PAN: "BKICG6641K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICG6641K6Z1",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "Yes",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000090792",
      Vendor_Name: "Aarav Ahuja",
      Vendor_PAN: "BKIPA6087K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIPA6087K8Z3",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194I(b)",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000013299",
      Vendor_Name: "JKL Limited",
      Vendor_PAN: "BKICJ1426K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICJ1426K6Z7",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194Q",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Company_TAN: "PDMS01068F",
      Vendor_Code: "VEN000023217",
      Vendor_Name: "MNO Private Limited",
      Vendor_PAN: "BKICM7469K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICM7469K1Z5",
      Vendor_Res_Status: "R",
      Nature_of_Payment: "194I(b)",
      TDS_Section: "Valid",
      Vendor_PAN_Status: "No",
    },
  ];

  const LDCMaster = [
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Vendor_Code: "VEN000052557",
      Vendor_Name: "CSK & Associates LLP",
      Vendor_PAN: "BKIFC9305K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFC9305K6Z9",
      LDC_Number: "8AC6935KDD",
      Applicable_From: "4/1/2023",
      Applicable_To: "3/31/2024",
      LDC_Amount: "2,000,000.00",
      LDC_Rate: "0.00%",
      Utilised_Amount: "-",
      TDS_Section: "194H",
      Description_of_Service: "Commission",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Vendor_Code: "VEN000099605",
      Vendor_Name: "GSK & Associates LLP",
      Vendor_PAN: "BKIFG1766K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFG1766K5Z2",
      LDC_Number: "0AC4278KDD",
      Applicable_From: "4/3/2023",
      Applicable_To: "7/29/2023",
      LDC_Amount: "3,200,000.00",
      LDC_Rate: "0.50%",
      Utilised_Amount: "-",
      TDS_Section: "194C",
      Description_of_Service: "Advertisement",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Consultancy Services Limited",
      Company_PAN: "BKICA9561K",
      Vendor_Code: "VEN000088170",
      Vendor_Name: "YZ Limited",
      Vendor_PAN: "BKICY9471K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICY9471K2Z5",
      LDC_Number: "4AC8753KDD",
      Applicable_From: "4/1/2023",
      Applicable_To: "7/28/2023",
      LDC_Amount: "3,100,000.00",
      LDC_Rate: "5.00%",
      Utilised_Amount: "-",
      TDS_Section: "194J",
      Description_of_Service: "Professional Services",
    },
  ];

  const LDCMaster2 = [
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Vendor_Code: "VEN000092557",
      Vendor_Name: "CSK & Associates LLP",
      Vendor_PAN: "BKIFC9305K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFC9305K6Z9",
      LDC_Number: "8AC6935KDD",
      Applicable_From: "4/1/2023",
      Applicable_To: "3/31/2024",
      LDC_Amount: "2,000,000.00",
      LDC_Rate: "0.00%",
      Utilised_Amount: "-",
      TDS_Section: "194H",
      Description_of_Service: "Commission",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Vendor_Code: "VEN000019605",
      Vendor_Name: "GSK & Associates LLP",
      Vendor_PAN: "BKIFG1766K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKIFG1766K5Z2",
      LDC_Number: "0AC4278KDD",
      Applicable_From: "4/3/2023",
      Applicable_To: "7/29/2023",
      LDC_Amount: "3,200,000.00",
      LDC_Rate: "0.50%",
      Utilised_Amount: "-",
      TDS_Section: "194C",
      Description_of_Service: "Advertisement",
    },
    {
      Company_Code: 1000,
      Company_Name: "ABC Motors Limited",
      Company_PAN: "BKICA9561K",
      Vendor_Code: "VEN000038170",
      Vendor_Name: "YZ Limited",
      Vendor_PAN: "BKICY9471K",
      Vendor_TAN: "",
      Vendor_GSTIN: "09BKICY9471K2Z5",
      LDC_Number: "4AC8753KDD",
      Applicable_From: "4/1/2023",
      Applicable_To: "7/28/2023",
      LDC_Amount: "3,100,000.00",
      LDC_Rate: "5.00%",
      Utilised_Amount: "-",
      TDS_Section: "194J",
      Description_of_Service: "Professional Services",
    },
  ];

  let rowStyle = {};

  switch (type) {
    case "Keyword":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr",
      };
      break;
    case "Vendor":
      rowStyle = {
        gridTemplateColumns:
          "15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15%",
      };
      break;
    case "LDC":
      rowStyle = {
        gridTemplateColumns:
          "15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15%",
      };
      break;
    // Add more cases for other values as needed
    default:
      break;
  }

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
        <button onClick={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.downloadicon} />
          Download Master Data
        </button>

        {/* {(type == "Vendor" || type == "LDC") && (
          <button
            onClick={() => {
              return setOthersPopup(true);
            }}
          >
            <PeopleIcon className={classes.downloadicon} />
            {type == "Vendor" && "Specified Person Check"}
            {type == "LDC" && "LDC Validations"}
          </button>
        )} */}
        <table className={classes.table}>
          <tbody>
            <tr style={rowStyle}>
              {type == "Keyword" && (
                <>
                  <th>
                    Keywords
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Nature Of Payment
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    TDS Section
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
              {type == "Vendor" && (
                <>
                  <th>
                    Company Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Company Name
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Company PAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Company TAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor Name
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vandor PAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor TAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor GSTIN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor Resident Status
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Nature of Payment
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    TDS Section
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor PAN Status
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
              {type == "LDC" && (
                <>
                  <th>
                    Company Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Company Name
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Company PAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>

                  <th>
                    Vendor Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor Name
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vandor PAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor TAN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor GSTIN
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    LDC Number
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Applicable From
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Applicable To
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    LDC Amount
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    LDC Rate
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Utilised Amount
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    TDS Section
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Description of Service
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
            </tr>

            {type == "Keyword" &&
              clientIdentity == "ABC Consultancy Limited" &&
              keywordMaster.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Keywords}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                  </tr>
                );
              })}

            {type == "Vendor" &&
              clientIdentity == "ABC Consultancy Limited" &&
              vendorMaster.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Company_Code}</td>
                    <td>{val.Company_Name}</td>
                    <td>{val.Company_PAN}</td>
                    <td>{val.Company_TAN}</td>
                    <td>{val.Vendor_Code}</td>
                    <td>{val.Vendor_Name}</td>
                    <td>{val.Vendor_PAN}</td>
                    <td>{val.Vendor_TAN}</td>
                    <td>{val.Vendor_GSTIN}</td>
                    <td>{val.Vendor_Res_Status}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Vendor_PAN_Status}</td>
                  </tr>
                );
              })}

            {type == "LDC" &&
              clientIdentity == "ABC Consultancy Limited" &&
              LDCMaster.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Company_Code}</td>
                    <td>{val.Company_Name}</td>
                    <td>{val.Company_PAN}</td>
                    <td>{val.Vendor_Code}</td>
                    <td>{val.Vendor_Name}</td>
                    <td>{val.Vendor_PAN}</td>
                    <td>{val.Vendor_TAN}</td>
                    <td>{val.Vendor_GSTIN}</td>
                    <td>{val.LDC_Number}</td>
                    <td>{val.Applicable_From}</td>
                    <td>{val.Applicable_To}</td>
                    <td>{val.LDC_Amount}</td>
                    <td>{val.LDC_Rate}</td>
                    <td>{val.Utilised_Amount}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Description_of_Service}</td>
                  </tr>
                );
              })}

            {type == "Keyword" &&
              clientIdentity == "ABC Motors Limited" &&
              keywordMaster2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Keywords}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                  </tr>
                );
              })}

            {type == "Vendor" &&
              clientIdentity == "ABC Motors Limited" &&
              vendorMaster2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Company_Code}</td>
                    <td>{val.Company_Name}</td>
                    <td>{val.Company_PAN}</td>
                    <td>{val.Company_TAN}</td>
                    <td>{val.Vendor_Code}</td>
                    <td>{val.Vendor_Name}</td>
                    <td>{val.Vendor_PAN}</td>
                    <td>{val.Vendor_TAN}</td>
                    <td>{val.Vendor_GSTIN}</td>
                    <td>{val.Vendor_Res_Status}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Vendor_PAN_Status}</td>
                  </tr>
                );
              })}

            {type == "LDC" &&
              clientIdentity == "ABC Motors Limited" &&
              LDCMaster2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Company_Code}</td>
                    <td>{val.Company_Name}</td>
                    <td>{val.Company_PAN}</td>
                    <td>{val.Vendor_Code}</td>
                    <td>{val.Vendor_Name}</td>
                    <td>{val.Vendor_PAN}</td>
                    <td>{val.Vendor_TAN}</td>
                    <td>{val.Vendor_GSTIN}</td>
                    <td>{val.LDC_Number}</td>
                    <td>{val.Applicable_From}</td>
                    <td>{val.Applicable_To}</td>
                    <td>{val.LDC_Amount}</td>
                    <td>{val.LDC_Rate}</td>
                    <td>{val.Utilised_Amount}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Description_of_Service}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewMaster;
