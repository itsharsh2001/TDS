import React, { useState } from "react";
// import FileDownloadOutlinedIcon from '@mui/icons-material/Download';

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./Uploaded.module.css";
import PurpleButton from "../../../../UI/PurpleButton";
import WhiteButton from "../../../../UI/WhiteButton";

const Uploaded = ({ type, clientIdentity }) => {
  const [fileUpload, setFileUpload] = useState(false);
  const [mappingManual, setMappingManual] = useState(true);
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

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

  const templateUploadMapping2 = [
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

  const loginData = [
    {
      File_Name: "Login_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 8347612950,
      No_of_Records: 3,
      Processed_Records: 3,
      Error_Records: 0,
    },
  ];

  const loginData2 = [
    {
      File_Name: "Login_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 8347612950,
      No_of_Records: 3,
      Processed_Records: 3,
      Error_Records: 0,
    },
  ];

  const poData = [
    {
      File_Name: "PO_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 5276341809,
      No_of_Records: 19763,
      Processed_Records: 19763,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_Apr.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1436098572,
      No_of_Records: 9286,
      Processed_Records: 9286,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_May.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9703186245,
      No_of_Records: 2456,
      Processed_Records: 2456,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_Jun.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1253769480,
      No_of_Records: 1247,
      Processed_Records: 1247,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_Jul.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 6942180375,
      No_of_Records: 4513,
      Processed_Records: 4513,
      Error_Records: 0,
    },
  ];

  const poData2 = [
    {
      File_Name: "PO_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 5276341809,
      No_of_Records: 19763,
      Processed_Records: 19763,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_Apr.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1436098572,
      No_of_Records: 9286,
      Processed_Records: 9286,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_May.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9703186245,
      No_of_Records: 2456,
      Processed_Records: 2456,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_Jun.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1253769480,
      No_of_Records: 1247,
      Processed_Records: 1247,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_PO_Jul.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 6942180375,
      No_of_Records: 4513,
      Processed_Records: 4513,
      Error_Records: 0,
    },
  ];

  const hsnData = [
    {
      File_Name: "HSN_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 4819723065,
      No_of_Records: 11,
      Processed_Records: 11,
      Error_Records: 0,
    },
  ];

  const hsnData2 = [
    {
      File_Name: "HSN_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 4819723065,
      No_of_Records: 11,
      Processed_Records: 11,
      Error_Records: 0,
    },
  ];

  const sectionmappingData = [
    {
      File_Name: "Section_Mapping_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1219723065,
      No_of_Records: 50,
      Processed_Records: 50,
      Error_Records: 0,
    },
  ];

  const sectionmappingData2 = [
    {
      File_Name: "Section_Mapping_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1219723065,
      No_of_Records: 50,
      Processed_Records: 50,
      Error_Records: 0,
    },
  ];

  const glData = [
    {
      File_Name: "GL_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 7326149805,
      No_of_Records: 19763,
      Processed_Records: 19763,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_Apr.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 7384912065,
      No_of_Records: 20,
      Processed_Records: 20,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_May.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 3625087149,
      No_of_Records: 14,
      Processed_Records: 14,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_Jun.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1573029468,
      No_of_Records: 12,
      Processed_Records: 12,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_Jul.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9630412578,
      No_of_Records: 19,
      Processed_Records: 19,
      Error_Records: 0,
    },
  ];
  const glData2 = [
    {
      File_Name: "GL_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 7326149805,
      No_of_Records: 19763,
      Processed_Records: 19763,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_Apr.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 7384912065,
      No_of_Records: 20,
      Processed_Records: 20,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_May.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 3625087149,
      No_of_Records: 14,
      Processed_Records: 14,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_Jun.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1573029468,
      No_of_Records: 12,
      Processed_Records: 12,
      Error_Records: 0,
    },
    {
      File_Name: "Additional_GL_Jul.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9630412578,
      No_of_Records: 19,
      Processed_Records: 19,
      Error_Records: 0,
    },
  ];

  const documentSupply = [
    {
      File_Name: "Login_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1857296430,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];

  const documentSupply2 = [
    {
      File_Name: "Login_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1857296430,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  let rowStyle = {};

  switch (type) {
    case "Keyword":
      rowStyle = {
        gridTemplateColumns: "10% 17% 17% 17% 17% 17% 17% 17%",
      };
      break;
    case "Po":
      rowStyle = {
        gridTemplateColumns: "10% 17% 17% 17% 17% 17% 17% 17%",
      };
      break;
    case "GLmaster":
      rowStyle = {
        gridTemplateColumns: "10% 17% 17% 17% 17% 17% 17% 17%",
      };
      break;
    case "Hsnsac":
      rowStyle = {
        gridTemplateColumns: "10% 17% 17% 17% 17% 17% 17% 17%",
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
                        <td onClick={handleDownload}>
                          <FileDownloadOutlinedIcon
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
      {fileUpload && (
        <div
          className={classes.overlay}
          onClick={() => {
            return setFileUpload(false);
          }}
        ></div>
      )}
      <div className={classes.uploaded}>
        {/* <div>
          <input
            onClick={() => {
              return setTemplateFileUpload(false);
            }}
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
        </div> */}
        <span>
          {/* <label
            onClick={() => {
              if(!templateFileUpload){
                return setFileUpload(true);}
            }}
            htmlFor=""
          >
            <input
              onClick={() => {
                if(!templateFileUpload){
                  return setFileUpload(true);}
              }}
              type="file"
              name=""
              id=""
            />
          </label>
          {templateFileUpload && (
            <button
            onClick={handleDownload}
              style={{
                marginRight: "3rem",
                marginLeft: "auto",
              }}
              className={classes.leftbutton}
            >
              <FileDownloadOutlinedIcon className={classes.downloadicon} />
              Download Template
            </button>
          )} */}
          {/* <PurpleButton>
            <FileUploadOutlinedIcon className={classes.downloadicon} />
            Edit Master 
          </PurpleButton> */}
          <PurpleButton>
            <FileUploadOutlinedIcon className={classes.downloadicon} />
            Upload Master Data
          </PurpleButton>
          <PurpleButton onClick={handleDownload}>
            <FileDownloadOutlinedIcon className={classes.downloadicon} />
            Download Template File
          </PurpleButton>
          <PurpleButton onClick={handleDownload}>
            <FileDownloadOutlinedIcon className={classes.downloadicon} />
            Download Consolidated Error Reports
          </PurpleButton>
        </span>

        <table className={classes.table}>
          <tbody>
            <tr style={rowStyle}>
              <th>
                Select
                {/* <input type="checkbox" name="" id="" /> */}
              </th>
              <th>
                File Name
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                Uploaded By
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                Batch ID
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                No of Records
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                Processed Records
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                Error Records
                {/* <KeyboardArrowDownIcon /> */}
              </th>
              <th>
                Actions
                {/* <KeyboardArrowDownIcon/> */}
              </th>
            </tr>

            {type == "Po" &&
              clientIdentity == "ABC Consultancy Limited" &&
              poData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
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
                      />
                      <p onClick={handleDownload}>File</p>
                      <p onClick={handleDownload}>Error</p>
                    </th>
                  </tr>
                );
              })}
            {type == "Po" &&
              clientIdentity == "ABC Motors Limited" &&
              poData2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
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
                      />
                      <p onClick={handleDownload}>File</p>
                      <p onClick={handleDownload}>Error</p>
                    </th>
                  </tr>
                );
              })}
            {type == "Hsnsac" &&
              clientIdentity == "ABC Consultancy Limited" &&
              hsnData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "Hsnsac" &&
              clientIdentity == "ABC Motors Limited" &&
              hsnData2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "GLmaster" &&
              clientIdentity == "ABC Consultancy Limited" &&
              glData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "GLmaster" &&
              clientIdentity == "ABC Motors Limited" &&
              glData2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "Keyword" &&
              clientIdentity == "ABC Consultancy Limited" &&
              loginData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "Keyword" &&
              clientIdentity == "ABC Motors Limited" &&
              loginData2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "DocumentSupply" &&
              clientIdentity == "ABC Consultancy Limited" &&
              documentSupply.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}
            {type == "DocumentSupply" &&
              clientIdentity == "ABC Motors Limited" &&
              documentSupply2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "SectionMapping" &&
              clientIdentity == "ABC Consultancy Limited" &&
              sectionmappingData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}

            {type == "SectionMapping" &&
              clientIdentity == "ABC Motors Limited" &&
              sectionmappingData2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>

                    <td>{val.File_Name}</td>
                    <td>{val.Uploaded_By}</td>
                    <td>{val.Batch_ID}</td>
                    <td>{val.No_of_Records}</td>
                    <td>{val.Processed_Records}</td>
                    <td>{val.Error_Records}</td>
                    <th
                      style={{
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <FileDownloadOutlinedIcon
                        style={{ margin: "auto", fontSize: "2.5rem" }}
                      />
                      <p>File</p>
                      <p>Error</p>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Uploaded;
