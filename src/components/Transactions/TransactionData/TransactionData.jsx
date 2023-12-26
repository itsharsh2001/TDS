import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from "@mui/icons-material/Close";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DescriptionIcon from "@mui/icons-material/Description";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import classes from "./TransactionData.module.css";
import PurpleButton from "../../UI/PurpleButton";
import WhiteButton from "../../UI/WhiteButton";
import { green } from "@mui/material/colors";

const TransactionData = (props) => {
  const [deletedRecords, setDeletedRecords] = useState(false);
  const [fileUpload, setFileUpload] = useState(false);
  const [mappingManual, setMappingManual] = useState(true);
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const [reportType, setReportType] = useState(false);
  const [datatype, setDatatype] = useState("invoice");

  const invoiceData = [
    // {
    //   File_Name: 'Invoice_July_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 7529846103,
    //   No_of_Records: 1853,
    //   Processed_Records: 1732,
    //   Error_Records: 14,
    //   Mismatch_Records: 86,
    //   Out_of_TDS_Scope_Records: 21
    // },
    // {
    //   File_Name: 'Invoice_April_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 3985712406,
    //   No_of_Records: 1145,
    //   Processed_Records: 965,
    //   Error_Records: 48,
    //   Mismatch_Records: 79,
    //   Out_of_TDS_Scope_Records: 53
    // },
    // {
    //   File_Name: 'Invoice_April_21_30.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 4102573698,
    //   No_of_Records: 1303,
    //   Processed_Records: 1174,
    //   Error_Records: 60,
    //   Mismatch_Records: 54,
    //   Out_of_TDS_Scope_Records: 15
    // },
    // {
    //   File_Name: 'Invoice_May_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 6291850473,
    //   No_of_Records: 1940,
    //   Processed_Records: 1738,
    //   Error_Records: 45,
    //   Mismatch_Records: 60,
    //   Out_of_TDS_Scope_Records: 97
    // },
    // {
    //   File_Name: 'Invoice_May_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 8360749251,
    //   No_of_Records: 1879,
    //   Processed_Records: 1628,
    //   Error_Records: 96,
    //   Mismatch_Records: 89,
    //   Out_of_TDS_Scope_Records: 66
    // },
    // {
    //   File_Name: 'Invoice_May_21_31.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 5036924718,
    //   No_of_Records: 1900,
    //   Processed_Records: 1787,
    //   Error_Records: 93,
    //   Mismatch_Records: 3,
    //   Out_of_TDS_Scope_Records: 17
    // },
    // {
    //   File_Name: 'Invoice_June_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 1249785630,
    //   No_of_Records: 1841,
    //   Processed_Records: 1672,
    //   Error_Records: 53,
    //   Mismatch_Records: 48,
    //   Out_of_TDS_Scope_Records: 68
    // },
    // {
    //   File_Name: 'Invoice_June_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 9850361472,
    //   No_of_Records: 1575,
    //   Processed_Records: 1451,
    //   Error_Records: 55,
    //   Mismatch_Records: 58,
    //   Out_of_TDS_Scope_Records: 11
    // },
    // {
    //   File_Name: 'Invoice_June_21_30.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 7468123509,
    //   No_of_Records: 1678,
    //   Processed_Records: 1511,
    //   Error_Records: 51,
    //   Mismatch_Records: 42,
    //   Out_of_TDS_Scope_Records: 74
    // },
    {
      File_Name: "Invoice_July_1_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 3692578140,
      No_of_Records: 1292,
      Processed_Records: 1123,
      Error_Records: 46,
      Mismatch_Records: 97,
      Out_of_TDS_Scope_Records: 26,
    },
    {
      File_Name: "Invoice_July_11_20.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1380247695,
      No_of_Records: 1899,
      Processed_Records: 1830,
      Error_Records: 33,
      Mismatch_Records: 27,
      Out_of_TDS_Scope_Records: 9,
    },
    {
      File_Name: "Invoice_July_21_31.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 5824679301,
      No_of_Records: 1327,
      Processed_Records: 1189,
      Error_Records: 27,
      Mismatch_Records: 62,
      Out_of_TDS_Scope_Records: 49,
    },
  ];

  const advanceData = [
    // {
    //   File_Name: 'Advance_April_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 2461358970,
    //   No_of_Records: 1960,
    //   Processed_Records: 1846,
    //   Error_Records: 84,
    //   Mismatch_Records: 18,
    //   Out_of_TDS_Scope_Records: 12
    // },
    // {
    //   File_Name: 'Advance_April_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 8742053169,
    //   No_of_Records: 1606,
    //   Processed_Records: 1527,
    //   Error_Records: 6,
    //   Mismatch_Records: 59,
    //   Out_of_TDS_Scope_Records: 14
    // },
    // {
    //   File_Name: 'Advance_April_21_30.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 5203968741,
    //   No_of_Records: 1055,
    //   Processed_Records: 941,
    //   Error_Records: 31,
    //   Mismatch_Records: 30,
    //   Out_of_TDS_Scope_Records: 53
    // },
    // {
    //   File_Name: 'Advance_May_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 4036197825,
    //   No_of_Records: 1971,
    //   Processed_Records: 1846,
    //   Error_Records: 58,
    //   Mismatch_Records: 54,
    //   Out_of_TDS_Scope_Records: 13
    // },
    // {
    //   File_Name: 'Advance_May_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 6958741203,
    //   No_of_Records: 1072,
    //   Processed_Records: 901,
    //   Error_Records: 62,
    //   Mismatch_Records: 49,
    //   Out_of_TDS_Scope_Records: 60
    // },
    // {
    //   File_Name: 'Advance_May_21_31.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 1694270853,
    //   No_of_Records: 1628,
    //   Processed_Records: 1434,
    //   Error_Records: 79,
    //   Mismatch_Records: 27,
    //   Out_of_TDS_Scope_Records: 88
    // },
    // {
    //   File_Name: 'Advance_June_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 7350284619,
    //   No_of_Records: 1947,
    //   Processed_Records: 1758,
    //   Error_Records: 16,
    //   Mismatch_Records: 96,
    //   Out_of_TDS_Scope_Records: 77
    // },
    // {
    //   File_Name: 'Advance_June_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 3690487521,
    //   No_of_Records: 1379,
    //   Processed_Records: 1166,
    //   Error_Records: 46,
    //   Mismatch_Records: 73,
    //   Out_of_TDS_Scope_Records: 94
    // },
    // {
    //   File_Name: 'Advance_June_21_30.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 7824169305,
    //   No_of_Records: 1210,
    //   Processed_Records: 1079,
    //   Error_Records: 41,
    //   Mismatch_Records: 59,
    //   Out_of_TDS_Scope_Records: 31
    // },
    {
      File_Name: "Advance_July_1_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1047398562,
      No_of_Records: 1958,
      Processed_Records: 1863,
      Error_Records: 16,
      Mismatch_Records: 44,
      Out_of_TDS_Scope_Records: 35,
    },
    {
      File_Name: "Advance_July_11_20.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 2560319748,
      No_of_Records: 1317,
      Processed_Records: 1123,
      Error_Records: 75,
      Mismatch_Records: 19,
      Out_of_TDS_Scope_Records: 100,
    },
    {
      File_Name: "Advance_July_21_31.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 5896132407,
      No_of_Records: 1784,
      Processed_Records: 1651,
      Error_Records: 26,
      Mismatch_Records: 91,
      Out_of_TDS_Scope_Records: 16,
    },
  ];

  const provisionData = [
    // {
    //   File_Name: 'Provision_April_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 4709825613,
    //   No_of_Records: 1471,
    //   Processed_Records: 1223,
    //   Error_Records: 94,
    //   Mismatch_Records: 80,
    //   Out_of_TDS_Scope_Records: 74
    // },
    // {
    //   File_Name: 'Provision_April_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 9352047618,
    //   No_of_Records: 1983,
    //   Processed_Records: 1756,
    //   Error_Records: 85,
    //   Mismatch_Records: 44,
    //   Out_of_TDS_Scope_Records: 98
    // },
    // {
    //   File_Name: 'Provision_April_21_30.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 1479063825,
    //   No_of_Records: 1674,
    //   Processed_Records: 1561,
    //   Error_Records: 52,
    //   Mismatch_Records: 30,
    //   Out_of_TDS_Scope_Records: 31
    // },
    // {
    //   File_Name: 'Provision_May_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 3265987401,
    //   No_of_Records: 1028,
    //   Processed_Records: 865,
    //   Error_Records: 68,
    //   Mismatch_Records: 21,
    //   Out_of_TDS_Scope_Records: 74
    // },
    // {
    //   File_Name: 'Provision_May_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 8427051396,
    //   No_of_Records: 1167,
    //   Processed_Records: 1081,
    //   Error_Records: 1,
    //   Mismatch_Records: 47,
    //   Out_of_TDS_Scope_Records: 38
    // },
    // {
    //   File_Name: 'Provision_May_21_31.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 6180279543,
    //   No_of_Records: 1477,
    //   Processed_Records: 1367,
    //   Error_Records: 42,
    //   Mismatch_Records: 52,
    //   Out_of_TDS_Scope_Records: 16
    // },
    // {
    //   File_Name: 'Provision_June_1_10.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 7045932168,
    //   No_of_Records: 1777,
    //   Processed_Records: 1654,
    //   Error_Records: 75,
    //   Mismatch_Records: 36,
    //   Out_of_TDS_Scope_Records: 12
    // },
    // {
    //   File_Name: 'Provision_June_11_20.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 2093487651,
    //   No_of_Records: 1225,
    //   Processed_Records: 1077,
    //   Error_Records: 22,
    //   Mismatch_Records: 47,
    //   Out_of_TDS_Scope_Records: 79
    // },
    // {
    //   File_Name: 'Provision_June_21_30.xlsx',
    //   Uploaded_By: 'Ganesh Gupta',
    //   Batch_ID: 9563201478,
    //   No_of_Records: 1919,
    //   Processed_Records: 1668,
    //   Error_Records: 99,
    //   Mismatch_Records: 57,
    //   Out_of_TDS_Scope_Records: 95
    // },
    {
      File_Name: "Provision_July_1_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 4836710295,
      No_of_Records: 1222,
      Processed_Records: 1176,
      Error_Records: 5,
      Mismatch_Records: 5,
      Out_of_TDS_Scope_Records: 36,
    },
    {
      File_Name: "Provision_July_11_20.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 7132490865,
      No_of_Records: 1747,
      Processed_Records: 1677,
      Error_Records: 11,
      Mismatch_Records: 5,
      Out_of_TDS_Scope_Records: 54,
    },
    {
      File_Name: "Provision_July_21_31.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9283674501,
      No_of_Records: 1905,
      Processed_Records: 1771,
      Error_Records: 64,
      Mismatch_Records: 41,
      Out_of_TDS_Scope_Records: 29,
    },
  ];

  const enrichmentData = [
    {
      File_Name: "Data_Enrichment_July_1_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 5556710295,
      No_of_Records: 12,
      Processed_Records: 11,
      Error_Records: 1,
      Mismatch_Records: 5,
      Out_of_TDS_Scope_Records: 1,
    },
    {
      File_Name: "Data_Enrichment_July_2_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9627589420,
      No_of_Records: 9,
      Processed_Records: 7,
      Error_Records: 2,
      Mismatch_Records: 3,
      Out_of_TDS_Scope_Records: 1,
    },
    {
      File_Name: "Data_Enrichment_July_3_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 8839730992,
      No_of_Records: 7,
      Processed_Records: 4,
      Error_Records: 3,
      Mismatch_Records: 1,
      Out_of_TDS_Scope_Records: 1,
    },
  ];

  const deletedInvoice = [
    {
      File_Name: "Invoice_April_1_10.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9173468052,
      No_of_Records: 1853,
      Processed_Records: 746,
      Error_Records: 1000,
      Mismatch_Records: 86,
      Out_of_TDS_Scope_Records: 21,
    },
  ];

  const templateUploadMapping = [
    {
      File_Name: "Mapping Template 1",
      Created_By: "Deepak Dhawan",
      Created_On: "5/3/2023",
    },
    {
      File_Name: "Mapping Template 2",
      Created_By: "Harshad Hariharan",
      Created_On: "5/5/2023",
    },
    {
      File_Name: "Mapping Template 3",
      Created_By: "Deepak Dhawan",
      Created_On: "6/2/2023",
    },
  ];

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch('/assets/Excel101ExtraPractice01.xlsx');
  
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
     
      // Use the response object to get the file content
      const fileContent = await response.blob({ type: 'application/xlsx' });

      // Now you can process the file content as needed
      console.log('File content:', fileContent);

      const link = document.createElement('a');
      link.href = URL.createObjectURL(fileContent);
      link.download = 'downloadedFiless.xlsx';

      // Trigger the click event
      link.click();
    } catch (error) {
        console.error('Error fetching file:', error);
    }
  };

  return (
    <>
      {deletedRecords && (
        <div className={classes.popup}>
          <section>
            Deleted Records
            <CloseIcon
              onClick={() => {
                return setDeletedRecords(false);
              }}
              className={classes.closeicon}
            />
          </section>
          <table className={classes.table}>
            <tbody>
              <tr>
                {/* <th>Select</th> */}
                <th>File Name</th>
                <th>Uploaded By</th>
                <th>Batch ID</th>
                <th>No. of Records</th>
                <th>Processed Records</th>
                <th>Error Records</th>
                <th>Mismatch Records</th>
                <th>Out of TDS Scope Records</th>
                {/* <th>Type</th> */}
                <th>Actions</th>
              </tr>

              {datatype == "invoice" ? (
                deletedInvoice.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>{val.File_Name}</td>
                      <td>{val.Uploaded_By}</td>
                      <td>{val.Batch_ID}</td>
                      <td>{val.No_of_Records}</td>
                      <td>{val.Processed_Records}</td>

                      <td>{val.Error_Records}</td>
                      <td>{val.Mismatch_Records}</td>
                      <td>{val.Out_of_TDS_Scope_Records}</td>
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
                        <p onClick={handleDownload}>Report</p>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className={classes.emptyDiv}>No Deleted Records</div>
              )}
            </tbody>
          </table>
        </div>
      )}
      {fileUpload && (
        <div className={classes.popup2}>
          <h5>Custom Mapping</h5>
          <div>
            <input
              onClick={() => {
                return setMappingManual(true);
              }}
              checked={mappingManual}
              type="radio"
              name="mapping"
              id="custom"
            />
            <label
              onClick={() => {
                return setMappingManual(true);
              }}
              htmlFor="custom"
            >
              Manual Mapping
            </label>
            <input
              onClick={() => {
                return setMappingManual(false);
              }}
              checked={!mappingManual}
              type="radio"
              name="mapping"
              id="template"
            />
            <label
              onClick={() => {
                return setMappingManual(false);
              }}
              htmlFor="template"
            >
              Template Upload Mapping
            </label>
          </div>
          <p>
            <PriorityHighIcon className={classes.highicon} />
            {mappingManual && (
              <>Choose user data field to map data with system</>
            )}
            {!mappingManual && (
              <>
                Download pre-existing template or Upload template to map data
                <FileDownloadOutlinedIcon
                  className={classes.downloadicon}
                />{" "}
                <b> Download Sample Template</b>
              </>
            )}
          </p>

          {mappingManual && (
            <section>
              <div>
                <h2>System Defined Field</h2>
                <select name="" id="">
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 9</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">System Defined Field 10</option>
                  <option value="">System Defined Field 1</option>
                  <option value="">System Defined Field 2</option>
                  <option value="">System Defined Field 3</option>
                  <option value="">System Defined Field 4</option>
                  <option value="">System Defined Field 5</option>
                  <option value="">System Defined Field 6</option>
                  <option value="">System Defined Field 7</option>
                  <option value="">System Defined Field 8</option>
                  <option value="">System Defined Field 9</option>
                </select>
              </div>
              <div>
                <h2>User Data Field</h2>
                <select name="" id="">
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 10</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
                <select name="" id="">
                  <option value="">User Data Field 3</option>
                  <option value="">User Data Field 1</option>
                  <option value="">User Data Field 2</option>
                  <option value="">User Data Field 4</option>
                  <option value="">User Data Field 5</option>
                  <option value="">User Data Field 6</option>
                  <option value="">User Data Field 7</option>
                  <option value="">User Data Field 8</option>
                  <option value="">User Data Field 9</option>
                  <option value="">User Data Field 10</option>
                </select>
              </div>
            </section>
          )}

          {/* <label htmlFor="">
            <DescriptionIcon/>
            <h6>Select file to upload</h6>
            <p>Or drag and drop file here</p>
          </label> */}
          {!mappingManual && (
            <>
              <label className={classes.fileUpload}>
                <div className={classes.uploadIcon}>
                  {/* <img src="document-icon.png" alt="Document Icon" /> */}
                  <DescriptionIcon
                    style={{ color: "#4F2D7F", fontSize: "4rem" }}
                  />

                  <p className={classes.uploadText1}>Select file to upload</p>
                  <p className={classes.uploadText2}>
                    Or drag and drop file here
                  </p>
                  <input
                    type="file"
                    id="fileInput"
                    className={classes.fileInput}
                  />
                </div>
              </label>
              <table className={classes.table}>
                <tbody>
                  <tr
                    style={{
                      gridTemplateColumns: "6% 24.5% 24.5% 24.5% 20.5%",
                    }}
                  >
                    <th></th>
                    <th>File Name</th>
                    <th>Created By</th>
                    <th>Created On</th>
                    <th>Download</th>
                  </tr>

                  {templateUploadMapping.map((val, idx) => {
                    return (
                      <tr
                        style={{
                          gridTemplateColumns: "6% 24.5% 24.5% 24.5% 20.5%",
                        }}
                        id={idx}
                      >
                        <td>
                          {/* <input type="checkbox" name="" id="" /> */}
                          <input type="radio" name="" id="" />
                        </td>
                        <td>{val.File_Name}</td>
                        <td>{val.Created_By}</td>
                        <td>{val.Created_On}</td>
                        <td>
                          <FileDownloadOutlinedIcon
                          onClick={handleDownload}
                            style={{ cursor: "pointer", fontSize: "2.5rem" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}

          <span>
            {mappingManual && (
              <PurpleButton
                onClick={() => {
                  return setFileUpload(false);
                }}
              >
                Save As Template
              </PurpleButton>
            )}
            <PurpleButton
              onClick={() => {
                return setFileUpload(false);
              }}
            >
              Submit
            </PurpleButton>
            <WhiteButton
              onClick={() => {
                return setFileUpload(false);
              }}
            >
              Cancel
            </WhiteButton>
          </span>
        </div>
      )}

{( deletedRecords || fileUpload ) && <div className={classes.overlay} onClick={()=>{
      setDeletedRecords(false);
      return setFileUpload(false);
    }}></div>}
      {props.monthSelected && (
        <div className={classes.transactiondata}>
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
              Transaction Data
            </a>
          </span>
          <ul>
            <li
              style={datatype == "invoice" ? hoverStyle : {}}
              onClick={() => {
                return setDatatype("invoice");
              }}
            >
              Invoice Data
            </li>
            <li
              style={datatype == "advance" ? hoverStyle : {}}
              onClick={() => {
                return setDatatype("advance");
              }}
            >
              Advance Data
            </li>
            <li
              style={datatype == "provision" ? hoverStyle : {}}
              onClick={() => {
                return setDatatype("provision");
              }}
            >
              Provision Data
            </li>
            <li
              style={datatype == "enrichment" ? hoverStyle : {}}
              onClick={() => {
                return setDatatype("enrichment");
              }}
            >
              Data Enrichment
            </li>
          </ul>
          {datatype!='enrichment' && <><div>
            <input
              onClick={() => {
                return setTemplateFileUpload(false);
              }}
              checked={!templateFileUpload}
              type="radio"
              name="fileupload"
              id="custom"
            />
            <label
              onClick={() => {
                return setTemplateFileUpload(false);
              }}
              htmlFor="custom"
            >
              Custom File Upload
            </label>
            <input
              onClick={() => {
                return setTemplateFileUpload(true);
              }}
              checked={templateFileUpload}
              type="radio"
              name="fileupload"
              id="template"
            />
            <label
              onClick={() => {
                return setTemplateFileUpload(true);
              }}
              htmlFor="template"
            >
              Template File Upload
            </label>

            <button
              onClick={() => {
                return setDeletedRecords(true);
              }}
            >
              View Deleted Records
            </button>
          </div>
          <main>
            <label
              onClick={() => {
                if (!templateFileUpload) {
                  return setFileUpload(true);
                }
              }}
              htmlFor=""
            >
              <input
                onClick={() => {
                  if (!templateFileUpload) {
                    return setFileUpload(true);
                  }
                }}
                type="file"
                name=""
                id=""
              />
            </label>

            {templateFileUpload && (
              <button
                style={{
                  marginRight: "-15rem",
                  marginLeft: "auto",
                }}
                className={classes.leftbutton}
                onClick={handleDownload}
              >
                <FileDownloadOutlinedIcon className={classes.downloadicon} />
                Download Template
              </button>
            )}

            <button
              onClick={() => {
                return setReportType((prevState) => {
                  return !prevState;
                });
              }}
              style={{ marginLeft: "auto" }}
            >
              <FileDownloadOutlinedIcon className={classes.downloadicon} />
              Download Reports
              <KeyboardArrowDownIcon
                style={{ borderLeft: "1px solid white" }}
                className={classes.downloadicon}
              />
            </button>
          </main></>}

          {datatype=='enrichment' && <section>
            <PurpleButton customStyle={{fontWeight: '700',fontSize:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',height:'4rem'}}><FileUploadOutlinedIcon style={{marginRight:'1rem',fontSize:'2.5rem'}}/>
             Upload Enrichment Template</PurpleButton>
            <PurpleButton onClick={handleDownload} customStyle={{fontWeight: '700',fontSize:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',height:'4rem'}}><FileDownloadOutlinedIcon style={{marginRight:'1rem',fontSize:'2.5rem'}} />
             Download Common Pool</PurpleButton>
            <button
            className={classes.reports}
              onClick={() => {
                return setReportType((prevState) => {
                  return !prevState;
                });
              }}
              style={{ marginLeft: "auto" }}
            >
              <FileDownloadOutlinedIcon className={classes.downloadicon} />
              Download Reports
              <KeyboardArrowDownIcon
                style={{ borderLeft: "1px solid white" }}
                className={classes.downloadicon}
              />
            </button> </section>}

          {reportType && (
            <section className={classes.specialsection}>
              <p onClick={handleDownload}>
                Error Report{" "}
                <FileDownloadOutlinedIcon
                  style={{ fontSize: "2.5rem", color: "#4F2D7F" }}
                />{" "}
              </p>
              <p onClick={handleDownload}>
                Section Mismatch Report{" "}
                <FileDownloadOutlinedIcon
                  style={{ fontSize: "2.5rem", color: "#4F2D7F" }}
                />{" "}
              </p>
              <p onClick={handleDownload}>
                Out of TDS Scope Report{" "}
                <FileDownloadOutlinedIcon
                  style={{ fontSize: "2.5rem", color: "#4F2D7F" }}
                />{" "}
              </p>
            </section>
          )}

          <table
            style={reportType ? { marginTop: "-13.5rem" } : {}}
            className={classes.table}
          >
            <tbody>
              <tr style={datatype=='enrichment'?{gridTemplateColumns: '10% 15% 15% 15% 15% 15% 15% 15% 15%'}:{}}>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>File Name</th>
                <th>Uploaded By</th>
                <th>Batch ID</th>
                <th>No. of Records</th>
                <th>Processed Records</th>
                <th>Error Records</th>
                {datatype!='enrichment' && <><th>Mismatch Records</th>
                <th>Out of TDS Scope Records</th></>}
                <th>Actions</th>
                {/* <th>Report Download</th>
              <th>Type</th>
              <th>Actions</th> */}
              </tr>

              {datatype == "invoice" &&
                invoiceData.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{val.File_Name}</td>
                      <td>{val.Uploaded_By}</td>
                      <td>{val.Batch_ID}</td>
                      <td>{val.No_of_Records}</td>
                      <td>{val.Processed_Records}</td>

                      <td>{val.Error_Records}</td>
                      <td>{val.Mismatch_Records}</td>
                      <td>{val.Out_of_TDS_Scope_Records}</td>
                      <td
                        style={{
                          display: "grid",
                          gridTemplateRows: "1fr 1fr",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        <FileDownloadOutlinedIcon
                        onClick={handleDownload}
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />{" "}
                        <DeleteForeverIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <p onClick={handleDownload}>Report</p>
                        <p>Reprocess</p>
                        <p>Delete</p>
                      </td>
                      {/* <td>
                    <button>Download</button>
                  </td>
                  <td>Static</td>
                  <td>
                    <RemoveRedEyeIcon className={classes.icon2} />
                    <EditIcon className={classes.icon2} />
                  </td> */}
                    </tr>
                  );
                })}
              {datatype == "advance" &&
                advanceData.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{val.File_Name}</td>
                      <td>{val.Uploaded_By}</td>
                      <td>{val.Batch_ID}</td>
                      <td>{val.No_of_Records}</td>
                      <td>{val.Processed_Records}</td>

                      <td>{val.Error_Records}</td>
                      <td>{val.Mismatch_Records}</td>
                      <td>{val.Out_of_TDS_Scope_Records}</td>
                      {/* <td>
                    <button>Download</button>
                  </td>
                  <td>Static</td>
                  <td>
                    <RemoveRedEyeIcon className={classes.icon2} />
                    <EditIcon className={classes.icon2} />
                  </td> */}
                      <td
                        style={{
                          display: "grid",
                          gridTemplateRows: "1fr 1fr",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        <FileDownloadOutlinedIcon
                        onClick={handleDownload}
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />{" "}
                        <DeleteForeverIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <p onClick={handleDownload}>Report</p>
                        <p>Reprocess</p>
                        <p>Delete</p>
                      </td>
                    </tr>
                  );
                })}
              {datatype == "provision" &&
                provisionData.map((val, idx) => {
                  return (
                    <tr id={idx}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{val.File_Name}</td>
                      <td>{val.Uploaded_By}</td>
                      <td>{val.Batch_ID}</td>
                      <td>{val.No_of_Records}</td>
                      <td>{val.Processed_Records}</td>

                      <td>{val.Error_Records}</td>
                      <td>{val.Mismatch_Records}</td>
                      <td>{val.Out_of_TDS_Scope_Records}</td>
                      {/* <td>
                    <button>Download</button>
                  </td>
                  <td>Static</td>
                  <td>
                    <RemoveRedEyeIcon className={classes.icon2} />
                    <EditIcon className={classes.icon2} />
                  </td> */}
                      <td
                        style={{
                          display: "grid",
                          gridTemplateRows: "1fr 1fr",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                      >
                        <FileDownloadOutlinedIcon
                        onClick={handleDownload}
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />{" "}
                        <DeleteForeverIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        <p onClick={handleDownload}>Report</p>
                        <p>Reprocess</p>
                        <p>Delete</p>
                      </td>
                    </tr>
                  );
                })}

              {datatype == "enrichment" &&
                enrichmentData.map((val, idx) => {
                  return (
                    <tr style={{gridTemplateColumns: '10% 15% 15% 15% 15% 15% 15% 15% 15%'}} id={idx}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{val.File_Name}</td>
                      <td>{val.Uploaded_By}</td>
                      <td>{val.Batch_ID}</td>
                      <td>{val.No_of_Records}</td>
                      <td>{val.Processed_Records}</td>

                      <td>{val.Error_Records}</td>
                      {/* <td>{val.Mismatch_Records}</td>
                      <td>{val.Out_of_TDS_Scope_Records}</td> */}
                      {/* <td>
                    <button>Download</button>
                  </td>
                  <td>Static</td>
                  <td>
                    <RemoveRedEyeIcon className={classes.icon2} />
                    <EditIcon className={classes.icon2} />
                  </td> */}
                      <td
                        // style={{
                        //   display: "grid",
                        //   gridTemplateRows: "1fr 1fr",
                        //   gridTemplateColumns: "1fr 1fr 1fr",
                        // }}
                      >
                        <FileDownloadOutlinedIcon
                        onClick={handleDownload}
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />
                        {/* <FileDownloadOutlinedIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        />{" "}
                        <DeleteForeverIcon
                          style={{ margin: "auto", fontSize: "2.5rem" }}
                        /> */}
                        <p onClick={handleDownload}>Report</p>
                        {/* <p>Reprocess</p>
                        <p>Delete</p> */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TransactionData;
