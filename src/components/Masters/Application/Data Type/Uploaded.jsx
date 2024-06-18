import React, { useState } from "react";
// import FileDownloadOutlinedIcon from '@mui/icon.s-material/Download';
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DescriptionIcon from "@mui/icons-material/Description";

import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import classes from "./Uploaded.module.css";
import PurpleButton from "../../../UI/PurpleButton";
// import WhiteButton from "../../../../UI/WhiteButton";
import WhiteButton from "../../../UI/WhiteButton";

const Uploaded = ({ type }) => {
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

  const baseNature = [
    {
      File_Name: "Nature_Payment_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1296274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];

  const subBase = [
    {
      File_Name: "Nature_Payment_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9596274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];
  const HSNSAC = [
    {
      File_Name: "HSN_SAC_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9596274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];
  const Keyword = [
    {
      File_Name: "Keyword_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 1857274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];
  const DocumentSupply = [
    {
      File_Name: "Document_Supply_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9596274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];
  const Penalty = [
    {
      File_Name: "Internet_Penalty_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9596274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];
  const Section = [
    {
      File_Name: "TDS_Section_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9596274810,
      No_of_Records: 16246,
      Processed_Records: 16246,
      Error_Records: 0,
    },
  ];
  const Payment = [
    {
      File_Name: "NOP_Master_Onboarding.xlsx",
      Uploaded_By: "Ganesh Gupta",
      Batch_ID: 9596274810,
      No_of_Records: 1500,
      Processed_Records: 1500,
      Error_Records: 0,
    },
  ];

  const handleDownload = async () => {
    let fileUrl = "";
    switch (type) {
      case "BaseNature":
        fileUrl = "/Base Nature of Payment Master Template.xlsx";
        break;
      case "SubBase":
        fileUrl = "/Sub Nature of Payment Master Template.xlsx";
        break;
      case "HSNSAC":
        fileUrl = "/HSN SAC Master Template.xlsx";
        break;
      case "DocumentSupply":
        fileUrl = "/Document And Supply Type Master Template.xlsx";
        break;
      case "Penalty":
        fileUrl = "/Interest and Penalty Master Template.xlsx";
        break;
      case "NaturePayment":
        fileUrl =
          "/Nature of Payment - Rate and Threshold Master Template.xlsx";
        break;
      case "Keyword":
        fileUrl = "/Keyword Master Template.xlsx";
        break;
      // Add more cases for other values as needed
      default:
        break;
    }

    // Create a link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileUrl); // Set the file name here

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up: remove the link from the body
    document.body.removeChild(link);
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
                <tbody style={{ width: "60vw!important" }}>
                  <tr
                    style={{
                      gridTemplateColumns: "26.5% 26.5% 26.5% 19%",
                    }}
                  >
                    {/* <th></th> */}
                    <th>File Name</th>
                    <th>Created By</th>
                    <th>Created On</th>
                    <th>Download</th>
                  </tr>

                  {templateUploadMapping.map((val, idx) => {
                    return (
                      <tr
                        style={{
                          gridTemplateColumns: "26.5% 26.5% 26.5% 19%",
                        }}
                        id={idx}
                      >
                        {/* <td>
                          
                          <input type="radio" name="" id="" />
                        </td> */}
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
        <span>
          <button onClick={handleDownload}>
            <FileDownloadOutlinedIcon className={classes.downloadicon} />
            Download Template File
          </button>
          <button>
            <FileUploadOutlinedIcon className={classes.downloadicon} />
            Upload Template File
          </button>
          <button>
            <FileUploadOutlinedIcon className={classes.downloadicon} />
            Edit Master Data
          </button>
        </span>

        <table className={classes.table}>
          <tbody>
            <tr>
              <th>Select</th>
              <th>File Name</th>
              <th>Uploaded By</th>
              <th>Batch ID</th>
              <th>No. of Records</th>
              <th>Processed Records</th>
              <th>Error Records</th>
              <th>Actions</th>
            </tr>

            {type == "BaseNature" &&
              baseNature.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}

            {type == "SubBase" &&
              subBase.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}

            {type == "HSNSAC" &&
              HSNSAC.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}

            {type == "DocumentSupply" &&
              DocumentSupply.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}

            {type == "Penalty" &&
              Penalty.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}
            {type == "Section" &&
              Section.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}
            {type == "NaturePayment" &&
              Payment.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
                    </td>
                  </tr>
                );
              })}

            {type == "Keyword" &&
              Keyword.map((val, idx) => {
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
                      <p onClick={handleDownload}>Error</p>
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

export default Uploaded;
