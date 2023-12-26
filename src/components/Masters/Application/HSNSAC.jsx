import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import classes from "./HSNSAC.module.css";

const HSNSAC = (props) => {
  const hsnsacData = [
    {
      HSN_SAC_Code: "995411",
      Description: "Construction services of single dwelling or multi dwelling or multi-storied residential buildings",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995412",
      Description: "Construction services of other residential buildings such as old age homes, homeless shelters, hostels etc.",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995413",
      Description: "Construction services of industrial buildings such as buildings used for production activities (used for assembly line activities), workshops, storage buildings and other similar industrial buildings",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995414",
      Description: "Construction services of commercial buildings such as office buildings, exhibition & marriage halls, malls, hotels, restaurants, airports, rail or road terminals, parking garages, petrol and service stations, theaters and other similar buildings.",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995415",
      Description: "Construction services of other non-residential buildings such as educational institutions, hospitals, clinics including veterinary clinics, religious establishments, courts, prisons, museums and other similar buildings",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995416",
      Description: "Construction Services of other buildings n.e.c",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995419",
      Description: "Services involving Repair, alterations, additions, replacements, renovation, maintenance or remodeling of the buildings covered above.",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995421",
      Description: "General construction services of highways, streets, roads, railways and airfield runways, bridges and tunnels",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995422",
      Description: "General construction services of harbors, waterways, dams, water mains and lines, irrigation and other waterworks",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995423",
      Description: "General construction services of long-distance underground/overland/submarine pipelines, communication and electric power lines (cables); pumping stations and related works; transformer stations and related works.",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995424",
      Description: "General construction services of local water & sewage pipelines, electricity and communication cables & related works",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995425",
      Description: "General construction services of mines and industrial plants",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995426",
      Description: "General Construction services of Power Plants and its related infrastructure",
      Nature_of_Payment: "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
  ];
  
  
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
    <div className={classes.hsnsac}>
      <span>
        <a onClick={(e)=>{e.preventDefault(); return props.transactionHomeScreen()}} href="">Application Level Master</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">HSN/SAC Master</a>
      </span>
      <section>
        <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button>
        <button className={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Template File
        </button>
      </section>

      <table className={classes.table}>
        <tbody>
          <tr>
            
            <th>
              HSN/SAC Code
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
              Description
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
              TDS Section
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
            {/* <th>Processed Records</th>
            <th>Error Records</th>
            <th>File Download</th>
            <th>Report Download</th>
            <th>Type</th>
            <th>Actions</th> */}
          </tr>
          
          {hsnsacData.map((val, idx) => {
            return (
              <tr id={idx}>
                <td>{val.HSN_SAC_Code}</td>
                <td>{val.Description}</td>
                <td>{val.Nature_of_Payment}</td>
                <td>{val.TDS_Section}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HSNSAC;
