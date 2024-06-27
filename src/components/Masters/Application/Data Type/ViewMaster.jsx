import React, { useState } from "react";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import classes from "./ViewMaster.module.css";

const ViewMaster = ({ type }) => {
  const [popup, setPopup] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const baseNature = [
    {
      Base_Nop: "141",
      Base_Nature: "Benefits or prerequisites of business or profession",
      Section_Act: "194R",
      Section_Return: "94R",
    },
    {
      Base_Nop: "142",
      Base_Nature: "Benefits or prerequisites of business or profession",
      Section_Act: "First Provision to sub section (1) of section 194R",
      Section_Return: "94R-P",
    },
    {
      Base_Nop: "143",
      Base_Nature: "Payment of consideration for transfer",
      Section_Act: "194S",
      Section_Return: "94S",
    },
    {
      Base_Nop: "144",
      Base_Nature: "Payment for transfer of virtual digital assets",
      Section_Act: "First Provision to sub section (1) of section 194R",
      Section_Return: "94S-P",
    },
    {
      Base_Nop: "145",
      Base_Nature: "Other sums payable to a non-resident",
      Section_Act: "195",
      Section_Return: "195",
    },
    {
      Base_Nop: "146",
      Base_Nature: "Payments in respect of units of Non-Residents",
      Section_Act: "196A",
      Section_Return: "96A",
    },
    {
      Base_Nop: "147",
      Base_Nature: "Payments in respect of units to a offshore funds",
      Section_Act: "196B",
      Section_Return: "96B",
    },
    {
      Base_Nop: "148",
      Base_Nature: "Income from foreign currency bonds",
      Section_Act: "196C",
      Section_Return: "96C",
    },
    {
      Base_Nop: "149",
      Base_Nature: "Income of foreign institutional investors",
      Section_Act: "196D[1]",
      Section_Return: "96D",
    },
  ];

  const hsnsacData = [
    {
      HSN_SAC_Code: "995411",
      Description:
        "Construction services of single dwelling or multi dwelling or multi-storied residential buildings",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995412",
      Description:
        "Construction services of other residential buildings such as old age homes, homeless shelters, hostels etc.",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995413",
      Description:
        "Construction services of industrial buildings such as buildings used for production activities (used for assembly line activities), workshops, storage buildings and other similar industrial buildings",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995414",
      Description:
        "Construction services of commercial buildings such as office buildings, exhibition & marriage halls, malls, hotels, restaurants, airports, rail or road terminals, parking garages, petrol and service stations, theaters and other similar buildings.",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995415",
      Description:
        "Construction services of other non-residential buildings such as educational institutions, hospitals, clinics including veterinary clinics, religious establishments, courts, prisons, museums and other similar buildings",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995416",
      Description: "Construction Services of other buildings n.e.c",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995419",
      Description:
        "Services involving Repair, alterations, additions, replacements, renovation, maintenance or remodeling of the buildings covered above.",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995421",
      Description:
        "General construction services of highways, streets, roads, railways and airfield runways, bridges and tunnels",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995422",
      Description:
        "General construction services of harbors, waterways, dams, water mains and lines, irrigation and other waterworks",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995423",
      Description:
        "General construction services of long-distance underground/overland/submarine pipelines, communication and electric power lines (cables); pumping stations and related works; transformer stations and related works.",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995424",
      Description:
        "General construction services of local water & sewage pipelines, electricity and communication cables & related works",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995425",
      Description:
        "General construction services of mines and industrial plants",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "995426",
      Description:
        "General Construction services of Power Plants and its related infrastructure",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person.",
      TDS_Section: "194C",
    },
  ];

  const subBase = [
    {
      Nop_id: "100",
      Section: "192A",
      Base: "Payment of accumulated balance",
      Sub_ID: "100001",
      Sub_Payment: "Payment of accumulated balance",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101001",
      Sub_Payment: "Interest payable an 4 1/4 per cent",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101002",
      Sub_Payment: "Interest payable an 4 1/4 per cent",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101003",
      Sub_Payment: "Interest payable an 4 3/4 per cent",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101004",
      Sub_Payment: "Interest payable on National Debt",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101005",
      Sub_Payment: "Interest payable on 7-Year National Debt",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101006",
      Sub_Payment: "Interest payable on debentures",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101007",
      Sub_Payment: "Interest payable an 6 1/2 per cent",
    },
    {
      Nop_id: "100",
      Section: "193",
      Base: "Payment on securities",
      Sub_ID: "101008",
      Sub_Payment: "Interest payable an 7 per cent",
    },
  ];

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

  const interestRates = [
    { Type: "Short Payment", Interest_Rate: "1.50%" },
    { Type: "Late Payment", Interest_Rate: "1.50%" },
    { Type: "Short Deduction", Interest_Rate: "1.00%" },
    { Type: "Late Deduction", Interest_Rate: "1.00%" },
  ];

  const keywordData = [
    {
      Keywords: "Contract",
      Nature_Of_Payment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
      TDS_Section: "194C",
    },
    {
      Keywords: "Construction",
      Nature_Of_Payment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
      TDS_Section: "194C",
    },
    {
      Keywords: "Payment of accumulated balance due to an employee ",
      Nature_Of_Payment: "Payment of accumulated balance due to an employee ",
      TDS_Section: "192A",
    },
    {
      Keywords: "Interest on securities",
      Nature_Of_Payment: "Interest on securities",
      TDS_Section: "193",
    },
    {
      Keywords: "Dividend",
      Nature_Of_Payment: "Dividend Income",
      TDS_Section: "194",
    },
    {
      Keywords: "Interest other than interest on securities",
      Nature_Of_Payment:
        "Payment or credit of the amount of interest income other than the income by way of interest on securities",
      TDS_Section: "194A",
    },
    {
      Keywords: "Winnings from lottery or crossword puzzle, etc",
      Nature_Of_Payment:
        "Payment of any income by way of winnings from any lottery or crossword puzzle or card game and other game of any sort other than winnings from any online game",
      TDS_Section: "194B",
    },
    {
      Keywords:
        "Winnings from lottery or crossword puzzle, etc where consideration is made in kind or cash is not sufficient to meet the tax liability and tax has been paid before such winnings are released",
      Nature_Of_Payment:
        "Payment of any income by way of winnings from any lottery or crossword puzzle or card game and other game of any sort other than winnings from any online game",
      TDS_Section: "Provision to section 194B",
    },
    {
      Keywords: "Winnings from online games",
      Nature_Of_Payment:
        "Payment of any income by way of winnings from any online game",
      TDS_Section: "194BA",
    },
    {
      Keywords:
        "Net Winnings from online games where the net winnings are made in kind or cash is not sufficient to meet the tax liability and tax has been paid before such net winnings are released",
      Nature_Of_Payment:
        "Payment of any income by way of winnings from any online game",
      TDS_Section: "Sub-section (2) of section 194BA",
    },
    {
      Keywords: "Winnings from horse race",
      Nature_Of_Payment:
        "Payment of any income by way of winnings from any horse race",
      TDS_Section: "194BB",
    },
    {
      Keywords: "Payment of contractors and sub-contractors",
      Nature_Of_Payment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
      TDS_Section: "194C",
    },
    {
      Keywords: "Insurance Commission",
      Nature_Of_Payment:
        "Payment or credit any amount for any income by way of remuneration or reward, whether by way of commission or otherwise, for soliciting or procuring insurance business (including business relating to the continuance, renewal or revival of policies of insurance)",
      TDS_Section: "194D",
    },
  ];

  const taxData = [
    {
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
      Rate: "0.10%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "5.00%",
    },
    {
      Nature_of_Payment: "Contract Services",
      TDS_Section: "194C",
      Rate: "2.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "5.00%",
    },
    {
      Nature_of_Payment: "Premature withdrawal from EPF",
      TDS_Section: "192A",
      Rate: "10.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "20.00%",
    },
    {
      Nature_of_Payment: "Dividend",
      TDS_Section: "194",
      Rate: "10.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "20.00%",
    },
    {
      Nature_of_Payment: "Rent for the use of machinery or plant or equipment",
      TDS_Section: "194I(A)",
      Rate: "2.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "5.00%",
    },
    {
      Nature_of_Payment:
        "Rent for the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
      TDS_Section: "194I(B)",
      Rate: "10.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "20.00%",
    },
    {
      Nature_of_Payment:
        "commission, remuneration or prize (by whatever name called) on lottery tickets",
      TDS_Section: "194G",
      Rate: "5.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "10.00%",
    },
    {
      Nature_of_Payment:
        "Brokerage or Commission (Other than Insurance Commission)",
      TDS_Section: "194H",
      Rate: "5.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "10.00%",
    },
    {
      Nature_of_Payment:
        "sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator",
      TDS_Section: "194O",
      Rate: "1.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "5.00%",
    },
    {
      Nature_of_Payment: "Interest on Securities",
      TDS_Section: "193",
      Rate: "10.00%",
      NO_PAN_Rate: "20.00%",
      Specified_Person_Rate: "20.00%",
    },
  ];

  const paymentData = [
    {
      Nature_Of_Payment: "Payment of contractors and sub-contractors",
      Section: "194C",
    },
    
    {
      Nature_Of_Payment: "Payment of accumulated balance due to an employee ",
      Section: "192A",
    },
    {
      Nature_Of_Payment: "Interest on securities",
      Section: "193",
    },
    {
      Nature_Of_Payment: "Dividend",
      Section: "194",
    },

    {
      Nature_Of_Payment: "Winnings from lottery or crossword puzzle, etc",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Winnings from lottery or crossword puzzle, etc where consideration is made in kind or cash is not sufficient to meet the tax liability and tax has been paid before such winnings are released",
      Section: "Proviso to section 194B",
    },
    {
      Nature_Of_Payment: "Winnings from online games",
      Section: "194BA",
    },
    {
      Nature_Of_Payment:
        "Net Winnings from online games where the net winnings are made in kind or cash is not sufficient to meet the tax liability and tax has been paid before such net winnings are released",
      Section: "Sub-section (2) of section 194BA",
    },
    {
      Nature_Of_Payment: "Winnings from horse race",
      Section: "194BB",
    },
    {
      Nature_Of_Payment: "Interest other than interest on securities",
      Section: "194A",
    },
    {
      Nature_Of_Payment: "Insurance Commission",
      Section: "194D",
    },
    {
      Nature_Of_Payment: "Payment in respect of life insurance policy",
      Section: "194DA",
    },
    {
      Nature_Of_Payment:
        "Payments to non-resident Sportsmen/Sport Associations",
      Section: "194E",
    },
    {
      Nature_Of_Payment:
        "Payments in respect of deposits under National Savings Schemes",
      Section: "194EE",
    },
    {
      Nature_Of_Payment:
        "Payments on account of repurchase of Units by Mutual Funds or UTIs",
      Section: "194F",
    },
    {
      Nature_Of_Payment: "Commission, prize etc., on sale of lottery tickets",
      Section: "194G",
    },
    {
      Nature_Of_Payment: "Commission or Brokerage",
      Section: "194H",
    },
    {
      Nature_Of_Payment: "Rent",
      Section: "194-I(a)",
    },
    {
      Nature_Of_Payment: "Rent",
      Section: "194-I(b)",
    },
    {
      Nature_Of_Payment:
        "Fees for Technical Services (not being professional service), royalty for sale, distribution or exhibition of cinematographic films and call center (@2%)",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment: "Fee for professional service or royalty etc (@10%)",
      Section: "194J(b)",
    },
  ];

  let rowStyle = {};
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  switch (type) {
    case "BaseNature":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      };
      break;
    case "SubBase":
      rowStyle = {
        gridTemplateColumns: "0.5fr 0.5fr 1fr 1fr 1fr",
      };
      break;
    case "HSNSAC":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      };
      break;
    case "DocumentSupply":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr",
      };
      break;
    case "Penalty":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr",
      };
      break;
    case "Section":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      };
      break;
    case "NaturePayment":
      rowStyle = {
        gridTemplateColumns: "1fr 0.7fr 0.3fr",
      };
      break;
    case "Keyword":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr",
      };
      break;
    // Add more cases for other values as needed
    default:
      break;
  }

  const buttonToggler = () => {
    if (type != "Keyword") {
      handleDownload();
    } else {
      setPopup(true);
    }
  };

  const handleDownload = async () => {
    let fileUrl = "";
    switch (type) {
      case "BaseNature":
        fileUrl = "/Base Nature of Payment Master.xlsx";
        break;
      case "SubBase":
        fileUrl = "/Sub Nature of Payment Master.xlsx";
        break;
      case "HSNSAC":
        fileUrl = "/HSN SAC Master.xlsx";
        break;
      case "DocumentSupply":
        fileUrl = "/Document And Supply Type Master.xlsx";
        break;
      case "Penalty":
        fileUrl = "/Interest and Penalty Master.xlsx";
        break;
      case "NaturePayment":
        fileUrl =
          "/Nature of Payment - Rate and Threshold Master.xlsx";
        break;
      case "Keyword":
        fileUrl = "/Keyword Master.xlsx";
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
      {popup && (
        <div
          className={classes.overlay}
          onClick={() => {
            return setPopup(false);
          }}
        ></div>
      )}
      {popup && (
        <div className={classes.popup}>
          <CloseIcon
            onClick={() => {
              return setPopup(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.25rem",
              right: "2.25rem",
              cursor: "pointer",
            }}
          />
          <h4>Add Credentials</h4>
          <section>
            <select name="" id="">
              <option value="">Select Portal</option>
              <option value="">Reporting Portal</option>
              <option value="">GSTIN</option>
              <option value="">TRACES</option>
            </select>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button
              onClick={() => {
                return setPopup(false);
              }}
            >
              Submit
            </button>
          </section>
        </div>
      )}
      <div className={classes.viewmaster}>
        <button onClick={buttonToggler}>
          <FileDownloadOutlinedIcon className={classes.downloadicon} />
          {/* {type == "Keyword" ? "Add User Credentials" : "Download Master Data"} */}
          Download Master Data
        </button>
        <table className={classes.table}>
          <tbody>
            <tr style={rowStyle}>
              {type == "BaseNature" && (
                <>
                  <th>Base NOP ID</th>
                  <th>Base Nature Of Payment</th>
                  <th>Section Act</th>
                  <th>Section Return</th>
                </>
              )}
              {type == "SubBase" && (
                <>
                  <th>Base NOP ID</th>
                  <th>Section</th>
                  <th>Base Nature Of Payment</th>
                  <th>Sub NOP ID</th>
                  <th>Sub Nature of Payment</th>
                </>
              )}
              {type == "HSNSAC" && (
                <>
                  <th>HSNSAC Code</th>
                  <th>Description</th>
                  <th>Nature Of Payment</th>
                  <th>TDS_Section</th>
                </>
              )}
              {type == "DocumentSupply" && (
                <>
                  <th>Document/Supply</th>
                  <th>Code</th>
                  <th>Description</th>
                </>
              )}
              {type == "Penalty" && (
                <>
                  <th>Type</th>
                  <th>Interest Rate</th>
                </>
              )}
              {type == "Section" && (
                <>
                  <th>Nature of Payment</th>
                  <th>TDS Section</th>
                  <th>Rate</th>
                  <th>No PAN Rate</th>
                  <th>Specified Person Rate</th>
                </>
              )}
              {type == "NaturePayment" && (
                <>
                  <th>Nature of Payment</th>
                  <th>Section</th>
                  <th></th>
                </>
              )}
              {type == "Keyword" && (
                <>
                  <th>Keywords</th>
                  <th>Nature Of Payment</th>
                  <th>TDS Section</th>
                </>
              )}
            </tr>

            {type == "BaseNature" &&
              baseNature.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Base_Nop}</td>
                    <td>{val.Base_Nature}</td>
                    <td>{val.Section_Act}</td>
                    <td>{val.Section_Return}</td>
                  </tr>
                );
              })}
            {type == "SubBase" &&
              subBase.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Nop_id}</td>
                    <td>{val.Section}</td>
                    <td>{val.Base}</td>
                    <td>{val.Sub_ID}</td>
                    <td>{val.Sub_Payment}</td>
                  </tr>
                );
              })}
            {type == "HSNSAC" &&
              hsnsacData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.HSN_SAC_Code}</td>
                    <td>{val.Description}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                  </tr>
                );
              })}
            {type == "DocumentSupply" &&
              documentsAndSupply.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Document}</td>
                    <td>{val.Type}</td>
                    <td>{val.Description}</td>
                  </tr>
                );
              })}
            {type == "Penalty" &&
              interestRates.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Type}</td>
                    <td>{val.Interest_Rate}</td>
                  </tr>
                );
              })}
            {type == "Section" &&
              taxData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Rate}</td>
                    <td>{val.NO_PAN_Rate}</td>
                    <td>{val.Specified_Person_Rate}</td>
                  </tr>
                );
              })}
            {type == "Keyword" &&
              keywordData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Keywords}</td>
                    <td>{val.Nature_Of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                  </tr>
                );
              })}
            {type == "NaturePayment" &&
              paymentData.map((val, idx) => {
                return (
                  <>
                    <tr style={rowStyle} id={idx}>
                      <td>{val.Nature_Of_Payment}</td>
                      <td>{val.Section}</td>
                      <td>
                        {!dropdown && (
                          <KeyboardArrowDownIcon
                            onClick={() => {
                              return setDropdown(true);
                            }}
                            className={classes.downicon}
                          />
                        )}
                        {dropdown && (
                          <KeyboardArrowUpOutlinedIcon
                            onClick={() => {
                              return setDropdown(false);
                            }}
                            className={classes.downicon}
                          />
                        )}
                      </td>
                    </tr>
                    {idx == 0 && dropdown && (
                      <table className={classes.specialtable}>
                        <tbody>
                          <tr>
                            <th>Sub Nature of Payment</th>
                            <th>Threshold Type</th>
                            <th>Annual Threshold</th>
                            <th>Per Transaction Threshold</th>
                            <th>Standard Rate</th>
                            <th>Rate Under Section 206AA</th>
                            <th>Rate Under Section 206AB</th>
                          </tr>
                          <tr>
                            <td>
                              Payment or credit any amount for carrying out any
                              work (including supply of labour for carrying out
                              any work) in pursuance of a contract
                            </td>
                            <td>Retrospective</td>
                            <td>100,000</td>
                            <td>30,000</td>
                            <td>Multiple</td>
                            <td>20.00%</td>
                            <td>5.00%</td>
                          </tr>
                          <tr>
                            <td>
                              Payment or credit any amount for carriage of goods
                              or passengers by railways
                            </td>
                            <td>NA</td>
                            <td>-</td>
                            <td>-</td>
                            <td>0.00%</td>
                            <td>0.00%</td>
                            <td>0.00%</td>
                          </tr>
                          <tr>
                            <td>
                              "Payment or credit any amount for plying, hiring
                              or leasing goods carriages, where the contractor
                              owns ten or less goods carriages"
                            </td>
                            <td>NA</td>
                            <td>-</td>
                            <td>-</td>
                            <td>0.00%</td>
                            <td>0.00%</td>
                            <td>0.00%</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewMaster;
