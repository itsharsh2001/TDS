import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./DocumentSupply.module.css";

const DocumentSupply = (props) => {
  const documentsAndSupply = [
    { Document: "Document", Type: "INV", Description: "Invoice" },
    { Document: "Document", Type: "ADV", Description: "Advance" },
    { Document: "Document", Type: "PRV", Description: "Provision" },
    { Document: "Document", Type: "RNV", Description: "Revised Invoice" },
    { Document: "Document", Type: "CR", Description: "Credit Note" },
    { Document: "Document", Type: "DR", Description: "Debit Note" },
    { Document: "Document", Type: "DLC", Description: "Delivery Challan" },
    {
      Document: "Document",
      Type: "SLF",
      Description: "Self Invoice in case of Reverse Charge",
    },
    {
      Document: "Document",
      Type: "RSLF",
      Description: "Revised Self Invoice in case of Reverse Charge",
    },
    { Document: "Document", Type: "RCR", Description: "Revised Credit Note" },
    { Document: "Document", Type: "RDR", Description: "Revised Debit Note" },
    {
      Document: "Document",
      Type: "RDLC",
      Description: "Revised Delivery Challan",
    },
    { Document: "Document", Type: "RFV", Description: "Refund Voucher" },
    {
      Document: "Document",
      Type: "RRFV",
      Description: "Revised Refund Voucher",
    },
    { Document: "Supply", Type: "TAX", Description: "Taxable Supplies" },
    { Document: "Supply", Type: "STO", Description: "Stock Transfer" },
    {
      Document: "Supply",
      Type: "NON",
      Description: "Non-taxable in GST regime",
    },
    { Document: "Supply", Type: "EXT", Description: "Exempt" },
    { Document: "Supply", Type: "NIL", Description: "Taxable at Nil rate" },
    { Document: "Supply", Type: "CAN", Description: "Cancelled Document" },
    { Document: "Supply", Type: "REV", Description: "Reversal Document" },
    { Document: "Supply", Type: "IMPG", Description: "Import of Goods" },
    { Document: "Supply", Type: "IMPS", Description: "Import of Services" },
    {
      Document: "Supply",
      Type: "SEZG",
      Description: "Goods received from SEZ",
    },
    {
      Document: "Supply",
      Type: "SEZS",
      Description: "Services received from SEZ",
    },
    { Document: "Supply", Type: "COM", Description: "Composition Scheme" },
    { Document: "Supply", Type: "DXP", Description: "Deemed Export" },
    { Document: "Supply", Type: "NSY", Description: "Non-supply transactions" },
    {
      Document: "Supply",
      Type: "DTA",
      Description: "Supplies received from DTA by SEZ",
    },
    { Document: "Supply", Type: "CBW", Description: "Custom Bonded Warehouse" },
    {
      Document: "Supply",
      Type: "EXP",
      Description: "Export of Goods/Services",
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
    <div className={classes.documentsupply}>
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
          Document Supply Master
        </a>
      </span>
      <section>
        <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button>
        <button onClick={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Template File
        </button>
      </section>

      <table className={classes.table}>
        <tbody>
          <tr>
            {/* <th>Select</th> */}
            <th>
              Document/Supply
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
              Type
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
              Decription
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
          </tr>

          {documentsAndSupply.map((val, idx) => {
            return (
              <tr id={idx}>
                <td>{val.Document}</td>
                <td>{val.Type}</td>
                <td>{val.Description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentSupply;
