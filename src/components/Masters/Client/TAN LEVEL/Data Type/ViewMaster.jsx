import React, { useState } from "react";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./ViewMaster.module.css";

const ViewMaster = ({ type }) => {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const purchaseOrders = [
    {
      PO_Number: 'PO0000010399',
      PO_Description: 'Sahibabad Factory Rent',
      Nature_of_Payment: 'Payment of rent in case of Land or building or furniture or fitting',
      TDS_Section: '194I(b)',
    },
    {
      PO_Number: 'PO0000011635',
      PO_Description: 'Noida Office Rent',
      Nature_of_Payment: 'Payment of rent in case of Land or building or furniture or fitting',
      TDS_Section: '194I(b)',
    },
    {
      PO_Number: 'PO0000011640',
      PO_Description: 'Lucknow Office Rent',
      Nature_of_Payment: 'Payment of rent in case of Land or building or furniture or fitting',
      TDS_Section: '194I(b)',
    },
    {
      PO_Number: 'PO0000012826',
      PO_Description: 'Table Saw - Bosch GTS 254 1800W 4300rpm Professional Table Saw',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      PO_Number: 'PO0000014272',
      PO_Description: 'Lawyer Fees for case against ZZZ Limited',
      Nature_of_Payment: 'Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.',
      TDS_Section: '194J',
    },
    {
      PO_Number: 'PO0000017795',
      PO_Description: 'Catering for Office Party: TGIF',
      Nature_of_Payment: 'Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details',
      TDS_Section: '194C',
    },
    {
      PO_Number: 'PO0000020173',
      PO_Description: 'Wood Planks-Chestnut',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      PO_Number: 'PO0000022812',
      PO_Description: 'Wood Planks-Oak',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      PO_Number: 'PO0000023884',
      PO_Description: 'Oakwook Planks',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      PO_Number: 'PO0000026838',
      PO_Description: 'Wood Planks-Teak',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
  ];
  
  const hsnSACCodes = [
    {
      HSN_SAC_Code: '9982',
      Description: 'Legal and accounting services',
      Nature_of_Payment: 'Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.',
      TDS_Section: '194J',
    },
    {
      HSN_SAC_Code: '4407',
      Description: 'WOOD SAWN OR CHIPPED LENGTHWISE, SLICED OR PEELED, WHETHER OR NOT PLANED, SANDED OR END-JOINTED, OF A THICKNESS EXCEEDING 6 MM',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      HSN_SAC_Code: '9963',
      Description: 'Accommodation, food and beverage services',
      Nature_of_Payment: 'Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details',
      TDS_Section: '194C',
    },
    {
      HSN_SAC_Code: '997212',
      Description: 'Rental or leasing services involving own or leased non-residential property',
      Nature_of_Payment: 'Payment of rent in case of Land or building or furniture or fitting',
      TDS_Section: '194I(b)',
    },
    {
      HSN_SAC_Code: '84672200',
      Description: 'TOOLS FOR WORKING IN THE HAND, PNEUMATIC, HYDRAULIC OR WITH A SELF-CONTAINED ELECTRIC OR NON-ELECTRIC MOTOR - PNEUMATIC - WITH A SELF-CONTAINED ELECTRIC MOTOR: SAWS',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      HSN_SAC_Code: '996111',
      Description: 'Services provided for a fee/commission or contract basis on wholesale trade',
      Nature_of_Payment: 'Payment of commission (other than insurance commission) or brokerage',
      TDS_Section: '194H',
    },
    {
      HSN_SAC_Code: '70049099',
      Description: 'DRAWN GLASS AND BLOWN GLASS, IN SHEETS, WHETHER OR NOT HAVING AN ABSORBENT, REFLECTING OR NON-REFLECTING LAYER, BUT NOT OTHERWISE WORKED - OTHER GLASS: OTHER: OTHER',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      HSN_SAC_Code: '9401',
      Description: 'SEATS (OTHER THAN THOSE OF HEADING 9402), WHETHER OR NOT CONVERTIBLE INTO BEDS, AND PARTS THEREOF',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      HSN_SAC_Code: '998361',
      Description: 'Advertising Services',
      Nature_of_Payment: 'Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details',
      TDS_Section: '194C',
    },
    {
      HSN_SAC_Code: '9987',
      Description: 'Maintenance, repair and installation (except construction) services',
      Nature_of_Payment: 'Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details',
      TDS_Section: '194C',
    },
    {
      HSN_SAC_Code: '998312',
      Description: 'Business consulting services including public relations services',
      Nature_of_Payment: 'Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.',
      TDS_Section: '194J',
    },
  ];
  
  const glCodes = [
    {
      GL_Code: 'GL00071228',
      GL_Description: 'Legal Fees',
      GL_Type: 'PL-Legal Expenses',
      Nature_of_Payment: 'Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.',
      TDS_Section: '194J',
    },
    {
      GL_Code: 'GL00023832',
      GL_Description: 'Catering',
      GL_Type: 'PL-Employee Benefit Expenses',
      Nature_of_Payment: 'Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details',
      TDS_Section: '194C',
    },
    {
      GL_Code: 'GL00058062',
      GL_Description: 'Factory Rent',
      GL_Type: 'PL-Rent',
      Nature_of_Payment: 'Payment of rent in case of Land or building or furniture or fitting',
      TDS_Section: '194I(b)',
    },
    {
      GL_Code: 'GL00089459',
      GL_Description: 'Office Rent',
      GL_Type: 'PL-Rent',
      Nature_of_Payment: 'Payment of rent in case of Land or building or furniture or fitting',
      TDS_Section: '194I(b)',
    },
    {
      GL_Code: 'GL00031497',
      GL_Description: 'Wood',
      GL_Type: 'PL-Direct Expenses',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      GL_Code: 'GL00097823',
      GL_Description: 'Table Saw',
      GL_Type: 'BS-Machinery',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      GL_Code: 'GL00063342',
      GL_Description: 'Sales Commission',
      GL_Type: 'PL-Direct Expenses',
      Nature_of_Payment: 'Payment of commission (other than insurance commission) or brokerage',
      TDS_Section: '194H',
    },
    {
      GL_Code: 'GL00063307',
      GL_Description: 'Glass',
      GL_Type: 'PL-Direct Expenses',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      GL_Code: 'GL00041231',
      GL_Description: 'Cushions',
      GL_Type: 'PL-Direct Expenses',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
    {
      GL_Code: 'GL00075324',
      GL_Description: 'Provision for Wood',
      GL_Type: 'BS-Short Term Provisions',
      Nature_of_Payment: 'Purchase of Goods',
      TDS_Section: '194Q',
    },
  ];
  
  const portalUsers = [
    {
      PortalUserID: 'GSTIN',
      UserID: '*************',
      Password: '*************',
    },
    {
      PortalUserID: 'TRACES',
      UserID: '*************',
      Password: '*************',
    },
    {
      PortalUserID: 'Reporting Portal',
      UserID: '*************',
      Password: '*************',
    },
  ];
  

  let rowStyle = {};
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  switch (type) {
    case "Keyword":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr",
      };
      break;
    case "Po":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      };
      break;
    case "GLmaster":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      };
      break;
    case "Hsnsac":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      };
        break;
    // Add more cases for other values as needed
    default:
      break;
  }

  return (
    <div className={classes.viewmaster}>
      <button>
        <FileDownloadOutlinedIcon className={classes.downloadicon} />
        Download Master Data
      </button>
      <table className={classes.table}>
        <tbody>
          <tr style={rowStyle}>
            {type == "Keyword" && (
              <>
                <th>
                  Portal User ID
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  User ID
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  Password
                  <KeyboardArrowDownIcon />
                </th>
              </>
            )}
            {type == "Po" && (
              <>
                <th>
                  PO Number
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  PO Description
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  Nature Of Payment
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  TDS Section
                  <KeyboardArrowDownIcon />
                </th>
              </>
            )}
            {type == "GLmaster" && (
              <>
                <th>
                  GL Code
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  GL Description
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  GL Type
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  Nature of Payment
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  TDS Section
                  <KeyboardArrowDownIcon />
                </th>
              </>
            )}
            {type == "Hsnsac" && (
              <>
                <th>
                  HSN/SAC Code
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  Description
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  Nature Of Payment
                  <KeyboardArrowDownIcon />
                </th>
                <th>
                  TDS Section
                  <KeyboardArrowDownIcon />
                </th>
              </>
            )}
            
          </tr>
  

          {type=='Po' && purchaseOrders.map((val,idx)=>{
            return (
              <tr style={rowStyle} id={idx}>
                <td>{val.PO_Number}</td>
                <td>{val.PO_Description}</td>
                <td>{val.Nature_of_Payment}</td>
                <td>{val.TDS_Section}</td>
              </tr>
            )
          })}
          {type=='Hsnsac' && hsnSACCodes.map((val,idx)=>{
            return (
              <tr style={rowStyle} id={idx}>
                <td>{val.HSN_SAC_Code}</td>
                <td>{val.Description}</td>
                <td>{val.Nature_of_Payment}</td>
                <td>{val.TDS_Section}</td>
              </tr>
            )
          })}
          {type=='GLmaster' && glCodes.map((val,idx)=>{
            return (
              <tr style={rowStyle} id={idx}>
                <td>{val.GL_Code}</td>
                <td>{val.GL_Description}</td>
                <td>{val.GL_Type}</td>
                <td>{val.Nature_of_Payment}</td>
                <td>{val.TDS_Section}</td>
              </tr>
            )
          })}
          {type=='Keyword' && portalUsers.map((val,idx)=>{
            return (
              <tr style={rowStyle} id={idx}>
                <td>{val.PortalUserID}</td>
                <td>{val.UserID}</td>
                <td>{val.Password}</td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMaster;
