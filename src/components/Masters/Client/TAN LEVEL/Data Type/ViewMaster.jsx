import React, { useState } from "react";
// import FileDownloadOutlinedIcon from "@mui/icons-material/Download";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./ViewMaster.module.css";
import DeleteForever from "@mui/icons-material/DeleteForever";

const ViewMaster = ({ type, clientIdentity }) => {
  const [popup, setPopup] = useState(false);
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const hsnSACCodes = [
    {
      HSN_SAC_Code: "9982",
      Description: "Legal and accounting services",
      Nature_of_Payment:
        "Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.",
      TDS_Section: "194J",
    },
    {
      HSN_SAC_Code: "4407",
      Description:
        "WOOD SAWN OR CHIPPED LENGTHWISE, SLICED OR PEELED, WHETHER OR NOT PLANED, SANDED OR END-JOINTED, OF A THICKNESS EXCEEDING 6 MM",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "9963",
      Description: "Accommodation, food and beverage services",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "997212",
      Description:
        "Rental or leasing services involving own or leased non-residential property",
      Nature_of_Payment:
        "Payment of rent in case of Land or building or furniture or fitting",
      TDS_Section: "194I(b)",
    },
    {
      HSN_SAC_Code: "84672200",
      Description:
        "TOOLS FOR WORKING IN THE HAND, PNEUMATIC, HYDRAULIC OR WITH A SELF-CONTAINED ELECTRIC OR NON-ELECTRIC MOTOR - PNEUMATIC - WITH A SELF-CONTAINED ELECTRIC MOTOR: SAWS",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "996111",
      Description:
        "Services provided for a fee/commission or contract basis on wholesale trade",
      Nature_of_Payment:
        "Payment of commission (other than insurance commission) or brokerage",
      TDS_Section: "194H",
    },
    {
      HSN_SAC_Code: "70049099",
      Description:
        "DRAWN GLASS AND BLOWN GLASS, IN SHEETS, WHETHER OR NOT HAVING AN ABSORBENT, REFLECTING OR NON-REFLECTING LAYER, BUT NOT OTHERWISE WORKED - OTHER GLASS: OTHER: OTHER",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "9401",
      Description:
        "SEATS (OTHER THAN THOSE OF HEADING 9402), WHETHER OR NOT CONVERTIBLE INTO BEDS, AND PARTS THEREOF",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "998361",
      Description: "Advertising Services",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "9987",
      Description:
        "Maintenance, repair and installation (except construction) services",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "998312",
      Description:
        "Business consulting services including public relations services",
      Nature_of_Payment:
        "Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.",
      TDS_Section: "194J",
    },
  ];

  const gl_abc_consultancy = [
    {
      "GL Code": "GL00071228",
      "GL Type": "Expenses",
      "GL Description": "Legal Fees",
      "TDS Section": "194J(b)",
      "Nature of Payment": "Fee for professional service or royalty etc (@10%)",
      "Sub Nature of Payment":
        "Payment or credit of any income by way of fees for professional services",
    },
    {
      "GL Code": "GL00023832",
      "GL Type": "Expenses",
      "GL Description": "Catering",
      "TDS Section": "194C",
      "Nature of Payment": "Payment of contractors and sub-contractors",
      "Sub Nature of Payment":
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      "GL Code": "GL00058062",
      "GL Type": "Expenses",
      "GL Description": "Factory Rent",
      "TDS Section": "194I(b)",
      "Nature of Payment": "Rent",
      "Sub Nature of Payment":
        "Payment or credit of rent or the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
    },
    {
      "GL Code": "GL00089459",
      "GL Type": "Expenses",
      "GL Description": "Office Rent",
      "TDS Section": "194I(b)",
      "Nature of Payment": "Rent",
      "Sub Nature of Payment":
        "Payment or credit of rent or the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
    },
    {
      "GL Code": "GL00031497",
      "GL Type": "Expenses",
      "GL Description": "Wood",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00097823",
      "GL Type": "Plant & Machinery",
      "GL Description": "Table Saw",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00063342",
      "GL Type": "Expenses",
      "GL Description": "Sales Commission",
      "TDS Section": "194H",
      "Nature of Payment": "Commission or Brokerage",
      "Sub Nature of Payment":
        "Payment or credit of any income by way of commission (not being insurance commission referred to in section 194D) or brokerage",
    },
    {
      "GL Code": "GL00063307",
      "GL Type": "Expenses",
      "GL Description": "Glass",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00041231",
      "GL Type": "Expenses",
      "GL Description": "Cushions",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00075324",
      "GL Type": "Short Term Provisions",
      "GL Description": "Provision for Wood",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00059691",
      "GL Type": "Short Term Provisions",
      "GL Description": "Provision for Glass",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00050397",
      "GL Type": "Short Term Provisions",
      "GL Description": "Provision for Cushions",
      "TDS Section": "194Q",
      "Nature of Payment": "Payment of certain sums for purchase of goods",
      "Sub Nature of Payment":
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      "GL Code": "GL00015939",
      "GL Type": "Expenses",
      "GL Description": "Cleaning & Maintenance",
      "TDS Section": "194C",
      "Nature of Payment": "Payment of contractors and sub-contractors",
      "Sub Nature of Payment":
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      "GL Code": "GL00079336",
      "GL Type": "Expenses",
      "GL Description": "TV Advertisement",
      "TDS Section": "194C",
      "Nature of Payment": "Payment of contractors and sub-contractors",
      "Sub Nature of Payment":
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      "GL Code": "GL00053337",
      "GL Type": "Short Term Provisions",
      "GL Description": "Provision for Rent",
      "TDS Section": "194I(b)",
      "Nature of Payment": "Rent",
      "Sub Nature of Payment":
        "Payment or credit of rent or the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
    },
    {
      "GL Code": "GL00063438",
      "GL Type": "Short Term Provisions",
      "GL Description": "Provision for Cleaning & Maintenance",
      "TDS Section": "194C",
      "Nature of Payment": "Payment of contractors and sub-contractors",
      "Sub Nature of Payment":
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      "GL Code": "GL00052550",
      "GL Type": "Expenses",
      "GL Description": "Consulting Fees",
      "TDS Section": "194J(b)",
      "Nature of Payment": "Fee for professional service or royalty etc (@10%)",
      "Sub Nature of Payment":
        "Payment or credit of any income by way of fees for professional services",
    },
    {
      "GL Code": "GL00075590",
      "GL Type": "Expenses",
      "GL Description": "Machinery Rent",
      "TDS Section": "194-I(a)",
      "Nature of Payment": "Rent",
      "Sub Nature of Payment":
        "Payment or credit of rent for the use of any machinery or plant or equipment",
    },
  ];

  const gl_abc_motors = [
    {
      glCode: "GL00071228",
      glType: "Expenses",
      glDescription: "Legal Fees",
      tdsSection: "194J(b)",
      natureOfPayment: "Fee for professional service or royalty etc (@10%)",
      subNatureOfPayment:
        "Payment or credit of any income by way of fees for professional services",
    },
    {
      glCode: "GL00023832",
      glType: "Expenses",
      glDescription: "Catering",
      tdsSection: "194C",
      natureOfPayment: "Payment of contractors and sub-contractors",
      subNatureOfPayment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      glCode: "GL00058062",
      glType: "Expenses",
      glDescription: "Factory Rent",
      tdsSection: "194I(b)",
      natureOfPayment: "Rent",
      subNatureOfPayment:
        "Payment or credit of rent or the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
    },
    {
      glCode: "GL00089459",
      glType: "Expenses",
      glDescription: "Office Rent",
      tdsSection: "194I(b)",
      natureOfPayment: "Rent",
      subNatureOfPayment:
        "Payment or credit of rent or the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
    },
    {
      glCode: "GL00031497",
      glType: "Expenses",
      glDescription: "Wood",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00097823",
      glType: "Plant & Machinery",
      glDescription: "Table Saw",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00063342",
      glType: "Expenses",
      glDescription: "Sales Commission",
      tdsSection: "194H",
      natureOfPayment: "Commission or Brokerage",
      subNatureOfPayment:
        "Payment or credit of any income by way of commission (not being insurance commission referred to in section 194D) or brokerage",
    },
    {
      glCode: "GL00063307",
      glType: "Expenses",
      glDescription: "Glass",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00041231",
      glType: "Expenses",
      glDescription: "Cushions",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00075324",
      glType: "Short Term Provisions",
      glDescription: "Provision for Wood",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00059691",
      glType: "Short Term Provisions",
      glDescription: "Provision for Glass",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00050397",
      glType: "Short Term Provisions",
      glDescription: "Provision for Cushions",
      tdsSection: "194Q",
      natureOfPayment: "Payment of certain sums for purchase of goods",
      subNatureOfPayment:
        "Payment or credit of any sum for purchase of any goods",
    },
    {
      glCode: "GL00015939",
      glType: "Expenses",
      glDescription: "Cleaning & Maintenance",
      tdsSection: "194C",
      natureOfPayment: "Payment of contractors and sub-contractors",
      subNatureOfPayment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      glCode: "GL00079336",
      glType: "Expenses",
      glDescription: "TV Advertisement",
      tdsSection: "194C",
      natureOfPayment: "Payment of contractors and sub-contractors",
      subNatureOfPayment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      glCode: "GL00053337",
      glType: "Short Term Provisions",
      glDescription: "Provision for Rent",
      tdsSection: "194I(b)",
      natureOfPayment: "Rent",
      subNatureOfPayment:
        "Payment or credit of rent or the use of any land or building (including factory building) or land appurtenant to a building (including factory building) or furniture or fittings",
    },
    {
      glCode: "GL00063438",
      glType: "Short Term Provisions",
      glDescription: "Provision for Cleaning & Maintenance",
      tdsSection: "194C",
      natureOfPayment: "Payment of contractors and sub-contractors",
      subNatureOfPayment:
        "Payment or credit any amount for carrying out any work (including supply of labour for carrying out any work) in pursuance of a contract",
    },
    {
      glCode: "GL00052550",
      glType: "Expenses",
      glDescription: "Consulting Fees",
      tdsSection: "194J(b)",
      natureOfPayment: "Fee for professional service or royalty etc (@10%)",
      subNatureOfPayment:
        "Payment or credit of any income by way of fees for professional services",
    },
    {
      glCode: "GL00075590",
      glType: "Expenses",
      glDescription: "Machinery Rent",
      tdsSection: "194-I(a)",
      natureOfPayment: "Rent",
      subNatureOfPayment:
        "Payment or credit of rent for the use of any machinery or plant or equipment",
    },
  ];

  const portalUsers = [
    {
      PortalUserID: "GSTIN",
      UserID: "*************",
      Password: "*************",
    },
    {
      PortalUserID: "TRACES",
      UserID: "*************",
      Password: "*************",
    },
    {
      PortalUserID: "Reporting Portal",
      UserID: "*************",
      Password: "*************",
    },
  ];

  const documentSupply_abc_motors = [
    {
      type: "Document",
      erpType: "INV",
      appType: "INV",
      description: "Invoice",
    },
    {
      type: "Document",
      erpType: "ADV",
      appType: "ADV",
      description: "Advance",
    },
    {
      type: "Document",
      erpType: "PRV",
      appType: "PRV",
      description: "Provision",
    },
    {
      type: "Document",
      erpType: "RNV",
      appType: "RNV",
      description: "Revised Invoice",
    },
    {
      type: "Document",
      erpType: "CR",
      appType: "CR",
      description: "Credit Note",
    },
    {
      type: "Document",
      erpType: "DR",
      appType: "DR",
      description: "Debit Note",
    },
    {
      type: "Document",
      erpType: "DLC",
      appType: "DLC",
      description: "Delivery Challan",
    },
    {
      type: "Document",
      erpType: "SLF",
      appType: "SLF",
      description: "Self Invoice in case of Reverse Charge",
    },
    {
      type: "Document",
      erpType: "RSLF",
      appType: "RSLF",
      description: "Revised Self Invoice in case of Reverse Charge",
    },
    {
      type: "Document",
      erpType: "RCR",
      appType: "RCR",
      description: "Revised Credit Note",
    },
    {
      type: "Document",
      erpType: "RDR",
      appType: "RDR",
      description: "Revised Debit note",
    },
    {
      type: "Document",
      erpType: "RDLC",
      appType: "RDLC",
      description: "Revised Delivery Challan",
    },
    {
      type: "Document",
      erpType: "RFV",
      appType: "RFV",
      description: "Refund Voucher",
    },
    {
      type: "Document",
      erpType: "RRFV",
      appType: "RRFV",
      description: "Revised Refund voucher",
    },
    {
      type: "Supply",
      erpType: "TAX",
      appType: "TAX",
      description: "Taxable Supplies",
    },
    {
      type: "Supply",
      erpType: "STO",
      appType: "STO",
      description: "Stock Transfer",
    },
    {
      type: "Supply",
      erpType: "NON",
      appType: "NON",
      description: "Non-taxable in GST regime",
    },
    { type: "Supply", erpType: "EXT", appType: "EXT", description: "Exempt" },
    {
      type: "Supply",
      erpType: "NIL",
      appType: "NIL",
      description: "Taxable at Nil rate",
    },
    {
      type: "Supply",
      erpType: "CAN",
      appType: "CAN",
      description: "Cancelled Document",
    },
    {
      type: "Supply",
      erpType: "REV",
      appType: "REV",
      description: "Reversal Document",
    },
    {
      type: "Supply",
      erpType: "IMPG",
      appType: "IMPG",
      description: "Import of Goods",
    },
    {
      type: "Supply",
      erpType: "IMPS",
      appType: "IMPS",
      description: "Import of Services",
    },
    {
      type: "Supply",
      erpType: "SEZG",
      appType: "SEZG",
      description: "Goods received from SEZ",
    },
    {
      type: "Supply",
      erpType: "SEZS",
      appType: "SEZS",
      description: "Services received from SEZ",
    },
    {
      type: "Supply",
      erpType: "COM",
      appType: "COM",
      description: "Composition Scheme",
    },
    {
      type: "Supply",
      erpType: "DXP",
      appType: "DXP",
      description: "Deemed Export",
    },
    {
      type: "Supply",
      erpType: "NSY",
      appType: "NSY",
      description: "Non-supply transactions",
    },
    {
      type: "Supply",
      erpType: "DTA",
      appType: "DTA",
      description: "Supplies received from DTA by SEZ",
    },
    {
      type: "Supply",
      erpType: "CBW",
      appType: "CBW",
      description: "Custom Bonded Warehouse",
    },
    {
      type: "Supply",
      erpType: "EXP",
      appType: "EXP",
      description: "Export of Goods/Services",
    },
  ];

  const documentSupply_abc_consultancy = [
    {
      type: "Document",
      erpType: "INV",
      appType: "INV",
      description: "Invoice",
    },
    {
      type: "Document",
      erpType: "ADV",
      appType: "ADV",
      description: "Advance",
    },
    {
      type: "Document",
      erpType: "PRV",
      appType: "PRV",
      description: "Provision",
    },
    {
      type: "Document",
      erpType: "RNV",
      appType: "RNV",
      description: "Revised Invoice",
    },
    {
      type: "Document",
      erpType: "CR",
      appType: "CR",
      description: "Credit Note",
    },
    {
      type: "Document",
      erpType: "DR",
      appType: "DR",
      description: "Debit Note",
    },
    {
      type: "Document",
      erpType: "DLC",
      appType: "DLC",
      description: "Delivery Challan",
    },
    {
      type: "Document",
      erpType: "SLF",
      appType: "SLF",
      description: "Self Invoice in case of Reverse Charge",
    },
    {
      type: "Document",
      erpType: "RSLF",
      appType: "RSLF",
      description: "Revised Self Invoice in case of Reverse Charge",
    },
    {
      type: "Document",
      erpType: "RCR",
      appType: "RCR",
      description: "Revised Credit Note",
    },
    {
      type: "Document",
      erpType: "RDR",
      appType: "RDR",
      description: "Revised Debit note",
    },
    {
      type: "Document",
      erpType: "RDLC",
      appType: "RDLC",
      description: "Revised Delivery Challan",
    },
    {
      type: "Document",
      erpType: "RFV",
      appType: "RFV",
      description: "Refund Voucher",
    },
    {
      type: "Document",
      erpType: "RRFV",
      appType: "RRFV",
      description: "Revised Refund voucher",
    },
    {
      type: "Supply",
      erpType: "TAX",
      appType: "TAX",
      description: "Taxable Supplies",
    },
    {
      type: "Supply",
      erpType: "STO",
      appType: "STO",
      description: "Stock Transfer",
    },
    {
      type: "Supply",
      erpType: "NON",
      appType: "NON",
      description: "Non-taxable in GST regime",
    },
    { type: "Supply", erpType: "EXT", appType: "EXT", description: "Exempt" },
    {
      type: "Supply",
      erpType: "NIL",
      appType: "NIL",
      description: "Taxable at Nil rate",
    },
    {
      type: "Supply",
      erpType: "CAN",
      appType: "CAN",
      description: "Cancelled Document",
    },
    {
      type: "Supply",
      erpType: "REV",
      appType: "REV",
      description: "Reversal Document",
    },
    {
      type: "Supply",
      erpType: "IMPG",
      appType: "IMPG",
      description: "Import of Goods",
    },
    {
      type: "Supply",
      erpType: "IMPS",
      appType: "IMPS",
      description: "Import of Services",
    },
    {
      type: "Supply",
      erpType: "SEZG",
      appType: "SEZG",
      description: "Goods received from SEZ",
    },
    {
      type: "Supply",
      erpType: "SEZS",
      appType: "SEZS",
      description: "Services received from SEZ",
    },
    {
      type: "Supply",
      erpType: "COM",
      appType: "COM",
      description: "Composition Scheme",
    },
    {
      type: "Supply",
      erpType: "DXP",
      appType: "DXP",
      description: "Deemed Export",
    },
    {
      type: "Supply",
      erpType: "NSY",
      appType: "NSY",
      description: "Non-supply transactions",
    },
    {
      type: "Supply",
      erpType: "DTA",
      appType: "DTA",
      description: "Supplies received from DTA by SEZ",
    },
    {
      type: "Supply",
      erpType: "CBW",
      appType: "CBW",
      description: "Custom Bonded Warehouse",
    },
    {
      type: "Supply",
      erpType: "EXP",
      appType: "EXP",
      description: "Export of Goods/Services",
    },
  ];

  const balanceData = [
    {
      Posting_Date: "9/30/2024",
      Document_Date: "9/30/2024",
      Vendor_Code: "ABCD1",
      TDS_Section: "194Q",
      Document_Type: "ADV",
      Supply_Type: "TAX",
    },
  ];

  const po_abc_motors = [
    {
      poNumber: "PO0000010399",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Sahibabad Factory Rent",
    },
    {
      poNumber: "PO0000011635",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Noida Office Rent",
    },
    {
      poNumber: "PO0000011640",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Lucknow Office Rent",
    },
    {
      poNumber: "PO0000012826",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription:
        "Table Saw - Bosch GTS 254 1800W 4300rpm Professional Table Saw",
    },
    {
      poNumber: "PO0000014272",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Lawyer Fees for case against ZZZ Limited",
    },
    {
      poNumber: "PO0000017795",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Catering for Office Party: TGIF",
    },
    {
      poNumber: "PO0000020173",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Chestnut",
    },
    {
      poNumber: "PO0000022812",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Oak",
    },
    {
      poNumber: "PO0000023884",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Oakwook Planks",
    },
    {
      poNumber: "PO0000026838",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Teak",
    },
    {
      poNumber: "PO0000029764",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Mahogany",
    },
    {
      poNumber: "PO0000029793",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Glass",
    },
    {
      poNumber: "PO0000031023",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Cushions",
    },
    {
      poNumber: "PO0000031095",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Oakwook Planks",
    },
    {
      poNumber: "PO0000032349",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Mahogany Wood Planks",
    },
    {
      poNumber: "PO0000036883",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Teak Woods Planks",
    },
    {
      poNumber: "PO0000037803",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Noida Office Cleaning and Maintenance",
    },
    {
      poNumber: "PO0000039240",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "TV Advertisement",
    },
    {
      poNumber: "PO0000039769",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Lucknow Office Cleaning and Maintenance",
    },
    {
      poNumber: "PO0000040097",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Consulting for future growth",
    },
    {
      poNumber: "PO0000040598",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Oakwook Planks",
    },
    {
      poNumber: "PO0000043326",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000046901",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000047670",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000048493",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000048772",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000049067",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000049527",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000052231",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000052875",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000053629",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000055172",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000055262",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000055913",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000058476",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000059106",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000059365",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000059451",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000060523",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000062138",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000062420",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000062955",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000066232",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000066989",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000067722",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000068941",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000069769",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000071129",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000071946",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000073191",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000075388",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000077358",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000078715",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000078812",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000080305",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000082436",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000082863",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000082920",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000083951",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000084423",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000084960",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000085736",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000089348",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000089645",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000090479",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000091836",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000092762",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000092992",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000093888",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000095299",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000095528",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000096596",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000097427",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000097505",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000097931",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000098210",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000098768",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000099335",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000013982",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000015061",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000015486",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000017655",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000018034",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000019043",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000021703",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000022080",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000022885",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000025778",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000028062",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000028930",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
  ];

  const po_abc_consultancy = [
    {
      poNumber: "PO0000010399",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Sahibabad Factory Rent",
    },
    {
      poNumber: "PO0000011635",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Noida Office Rent",
    },
    {
      poNumber: "PO0000011640",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Lucknow Office Rent",
    },
    {
      poNumber: "PO0000012826",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription:
        "Table Saw - Bosch GTS 254 1800W 4300rpm Professional Table Saw",
    },
    {
      poNumber: "PO0000014272",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Lawyer Fees for case against ZZZ Limited",
    },
    {
      poNumber: "PO0000017795",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Catering for Office Party: TGIF",
    },
    {
      poNumber: "PO0000020173",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Chestnut",
    },
    {
      poNumber: "PO0000022812",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Oak",
    },
    {
      poNumber: "PO0000023884",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Oakwook Planks",
    },
    {
      poNumber: "PO0000026838",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Teak",
    },
    {
      poNumber: "PO0000029764",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Wood Planks-Mahogany",
    },
    {
      poNumber: "PO0000029793",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Glass",
    },
    {
      poNumber: "PO0000031023",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Cushions",
    },
    {
      poNumber: "PO0000031095",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Oakwook Planks",
    },
    {
      poNumber: "PO0000032349",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Mahogany Wood Planks",
    },
    {
      poNumber: "PO0000036883",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Teak Woods Planks",
    },
    {
      poNumber: "PO0000037803",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Noida Office Cleaning and Maintenance",
    },
    {
      poNumber: "PO0000039240",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "TV Advertisement",
    },
    {
      poNumber: "PO0000039769",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Lucknow Office Cleaning and Maintenance",
    },
    {
      poNumber: "PO0000040097",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Consulting for future growth",
    },
    {
      poNumber: "PO0000040598",
      poLineNumber: 1,
      poDate: "01-04-2024",
      poDescription: "Oakwook Planks",
    },
    {
      poNumber: "PO0000043326",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000046901",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000047670",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000048493",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000048772",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000049067",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000049527",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000052231",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000052875",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000053629",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000055172",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000055262",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000055913",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000058476",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000059106",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000059365",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000059451",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000060523",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000062138",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000062420",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000062955",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000066232",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000066989",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000067722",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000068941",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000069769",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000071129",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000071946",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000073191",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000075388",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000077358",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000078715",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000078812",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000080305",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000082436",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000082863",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000082920",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000083951",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000084423",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000084960",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000085736",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000089348",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000089645",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000090479",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000091836",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000092762",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000092992",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000093888",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000095299",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000095528",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000096596",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000097427",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000097505",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000097931",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000098210",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000098768",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000099335",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000013982",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000015061",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000015486",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000017655",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000018034",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000019043",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000021703",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000022080",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000022885",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000025778",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000028062",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
    {
      poNumber: "PO0000028930",
      poLineNumber: 1,
      poDate: "",
      poDescription: "",
    },
  ];

  const section_mapping_abc_consultancy = [
    { clientERP: "192A", application: "192A" },
    { clientERP: "193", application: "193" },
    { clientERP: "194", application: "194" },
    { clientERP: "194A", application: "194A" },
    { clientERP: "194B", application: "194B" },
    {
      clientERP: "Proviso to section 194B",
      application: "Proviso to section 194B",
    },
    { clientERP: "194BA", application: "194BA" },
    {
      clientERP: "Sub-section (2) of section 194BA",
      application: "Sub-section (2) of section 194BA",
    },
    { clientERP: "194BB", application: "194BB" },
    { clientERP: "194C", application: "194C" },
    { clientERP: "194D", application: "194D" },
    { clientERP: "194DA", application: "194DA" },
    { clientERP: "194E", application: "194E" },
    { clientERP: "194EE", application: "194EE" },
    { clientERP: "194F", application: "194F" },
    { clientERP: "194G", application: "194G" },
    { clientERP: "194H", application: "194H" },
    { clientERP: "194-I(a)", application: "194-I(a)" },
    { clientERP: "194-I(b)", application: "194-I(b)" },
    { clientERP: "194J(a)", application: "194J(a)" },
    { clientERP: "194J(b)", application: "194J(b)" },
    { clientERP: "194K", application: "194K" },
    { clientERP: "194LA", application: "194LA" },
    { clientERP: "194LB", application: "194LB" },
    { clientERP: "194LBA(a)", application: "194LBA(a)" },
    { clientERP: "194LBA(b)", application: "194LBA(b)" },
    { clientERP: "194LBA(c)", application: "194LBA(c)" },
    { clientERP: "194LBB", application: "194LBB" },
    { clientERP: "194LBC", application: "194LBC" },
    {
      clientERP: "194LC (2)(i) and (ia)",
      application: "194LC (2)(i) and (ia)",
    },
    { clientERP: "194LC (2)(ib)", application: "194LC (2)(ib)" },
    { clientERP: "194LC (2)(ic)", application: "194LC (2)(ic)" },
    { clientERP: "194LD", application: "194LD" },
    { clientERP: "194N", application: "194N" },
    { clientERP: "194N First Proviso", application: "194N First Proviso" },
    { clientERP: "194N Third Proviso", application: "194N Third Proviso" },
    {
      clientERP: "194N First Proviso read with Third Proviso",
      application: "194N First Proviso read with Third Proviso",
    },
    { clientERP: "194-O", application: "194-O" },
    { clientERP: "194Q", application: "194Q" },
    { clientERP: "194R", application: "194R" },
    {
      clientERP: "First Proviso to sub-section (1) of section 194R",
      application: "First Proviso to sub-section (1) of section 194R",
    },
    { clientERP: "194S", application: "194S" },
    {
      clientERP: "Proviso to sub-section (1) of section 194S",
      application: "Proviso to sub-section (1) of section 194S",
    },
    { clientERP: "195", application: "195" },
    { clientERP: "196A", application: "196A" },
    { clientERP: "196B", application: "196B" },
    { clientERP: "196C", application: "196C" },
    { clientERP: "196D(1)", application: "196D(1)" },
    { clientERP: "196D(1A)", application: "196D(1A)" },
    { clientERP: "NOTDS", application: "NOTDS" },
  ];

  const section_mapping_abc_motors = [
    { clientERP: "192A", application: "192A" },
    { clientERP: "193", application: "193" },
    { clientERP: "194", application: "194" },
    { clientERP: "194A", application: "194A" },
    { clientERP: "194B", application: "194B" },
    {
      clientERP: "Proviso to section 194B",
      application: "Proviso to section 194B",
    },
    { clientERP: "194BA", application: "194BA" },
    {
      clientERP: "Sub-section (2) of section 194BA",
      application: "Sub-section (2) of section 194BA",
    },
    { clientERP: "194BB", application: "194BB" },
    { clientERP: "194C", application: "194C" },
    { clientERP: "194D", application: "194D" },
    { clientERP: "194DA", application: "194DA" },
    { clientERP: "194E", application: "194E" },
    { clientERP: "194EE", application: "194EE" },
    { clientERP: "194F", application: "194F" },
    { clientERP: "194G", application: "194G" },
    { clientERP: "194H", application: "194H" },
    { clientERP: "194-I(a)", application: "194-I(a)" },
    { clientERP: "194-I(b)", application: "194-I(b)" },
    { clientERP: "194J(a)", application: "194J(a)" },
    { clientERP: "194J(b)", application: "194J(b)" },
    { clientERP: "194K", application: "194K" },
    { clientERP: "194LA", application: "194LA" },
    { clientERP: "194LB", application: "194LB" },
    { clientERP: "194LBA(a)", application: "194LBA(a)" },
    { clientERP: "194LBA(b)", application: "194LBA(b)" },
    { clientERP: "194LBA(a)", application: "194LBA(a)" },
    { clientERP: "194LBA(b)", application: "194LBA(b)" },
    { clientERP: "194LBA(c)", application: "194LBA(c)" },
    { clientERP: "194LBB", application: "194LBB" },
    { clientERP: "194LBC", application: "194LBC" },
    {
      clientERP: "194LC (2)(i) and (ia)",
      application: "194LC (2)(i) and (ia)",
    },
    { clientERP: "194LC (2)(ib)", application: "194LC (2)(ib)" },
    { clientERP: "194LC (2)(ic)", application: "194LC (2)(ic)" },
    { clientERP: "194LD", application: "194LD" },
    { clientERP: "194N", application: "194N" },
    { clientERP: "194N First Proviso", application: "194N First Proviso" },
    { clientERP: "194N Third Proviso", application: "194N Third Proviso" },
    {
      clientERP: "194N First Proviso read with Third Proviso",
      application: "194N First Proviso read with Third Proviso",
    },
    { clientERP: "194-O", application: "194-O" },
    { clientERP: "194Q", application: "194Q" },
    { clientERP: "194R", application: "194R" },
    {
      clientERP: "First Proviso to sub-section (1) of section 194R",
      application: "First Proviso to sub-section (1) of section 194R",
    },
    { clientERP: "194S", application: "194S" },
    {
      clientERP: "Proviso to sub-section (1) of section 194S",
      application: "Proviso to sub-section (1) of section 194S",
    },
    { clientERP: "195", application: "195" },
    { clientERP: "196A", application: "196A" },
    { clientERP: "196B", application: "196B" },
    { clientERP: "196C", application: "196C" },
    { clientERP: "196D(1)", application: "196D(1)" },
    { clientERP: "196D(1A)", application: "196D(1A)" },
    { clientERP: "NOTDS", application: "NOTDS" },
  ];

  const hsnSACCodes2 = [
    {
      HSN_SAC_Code: "9982",
      Description: "Legal and accounting services",
      Nature_of_Payment:
        "Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.",
      TDS_Section: "194J",
    },
    {
      HSN_SAC_Code: "4407",
      Description:
        "WOOD SAWN OR CHIPPED LENGTHWISE, SLICED OR PEELED, WHETHER OR NOT PLANED, SANDED OR END-JOINTED, OF A THICKNESS EXCEEDING 6 MM",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "9963",
      Description: "Accommodation, food and beverage services",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "997212",
      Description:
        "Rental or leasing services involving own or leased non-residential property",
      Nature_of_Payment:
        "Payment of rent in case of Land or building or furniture or fitting",
      TDS_Section: "194I(b)",
    },
    {
      HSN_SAC_Code: "84672200",
      Description:
        "TOOLS FOR WORKING IN THE HAND, PNEUMATIC, HYDRAULIC OR WITH A SELF-CONTAINED ELECTRIC OR NON-ELECTRIC MOTOR - PNEUMATIC - WITH A SELF-CONTAINED ELECTRIC MOTOR: SAWS",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "996111",
      Description:
        "Services provided for a fee/commission or contract basis on wholesale trade",
      Nature_of_Payment:
        "Payment of commission (other than insurance commission) or brokerage",
      TDS_Section: "194H",
    },
    {
      HSN_SAC_Code: "70049099",
      Description:
        "DRAWN GLASS AND BLOWN GLASS, IN SHEETS, WHETHER OR NOT HAVING AN ABSORBENT, REFLECTING OR NON-REFLECTING LAYER, BUT NOT OTHERWISE WORKED - OTHER GLASS: OTHER: OTHER",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "9401",
      Description:
        "SEATS (OTHER THAN THOSE OF HEADING 9402), WHETHER OR NOT CONVERTIBLE INTO BEDS, AND PARTS THEREOF",
      Nature_of_Payment: "Purchase of Goods",
      TDS_Section: "194Q",
    },
    {
      HSN_SAC_Code: "998361",
      Description: "Advertising Services",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "9987",
      Description:
        "Maintenance, repair and installation (except construction) services",
      Nature_of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or fewer goods carriages & furnishes a declaration to that effect providing PAN details",
      TDS_Section: "194C",
    },
    {
      HSN_SAC_Code: "998312",
      Description:
        "Business consulting services including public relations services",
      Nature_of_Payment:
        "Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other sum referred to in Section 28(va) to the resident person.",
      TDS_Section: "194J",
    },
  ];

  const portalUsers2 = [
    {
      PortalUserID: "GSTIN",
      UserID: "*************",
      Password: "*************",
    },
    {
      PortalUserID: "TRACES",
      UserID: "*************",
      Password: "*************",
    },
    {
      PortalUserID: "Reporting Portal",
      UserID: "*************",
      Password: "*************",
    },
  ];

  const balanceData2 = [
    {
      Posting_Date: "9/30/2024",
      Document_Date: "9/30/2024",
      Vendor_Code: "ABCD1",
      TDS_Section: "194Q",
      Document_Type: "ADV",
      Supply_Type: "TAX",
    },
  ];

  let rowStyle = {};
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  switch (type) {
    case "Keyword":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
    case "DocumentSupply":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      };
      break;
    case "SectionMapping":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr",
      };
      break;
    case "Balance":
      rowStyle = {
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
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
    if (clientIdentity == "ABC Consultancy Limited") {
      switch (type) {
        case "Keyword":
          fileUrl = "/Keyword_Master_abc_consulting.xlsx";
          break;
        case "Po":
          fileUrl = "/PO_Master_abc_consulting.xlsx";
          break;
        case "GLmaster":
          fileUrl = "/GL_Master_abc_consulting.xlsx";
          break;
        case "Hsnsac":
          fileUrl = "/HSN SAC Master.xlsx";
          break;
        case "SectionMapping":
          fileUrl = "TDS_Section_Mapping_Master_abc_consulting.xlsx";
          break;
        case "DocumentSupply":
          fileUrl = "Document_and_Supply_Type_Mapping_Master_abc_consulting.xlsx";
          break;
        // Add more cases for other values as needed
        default:
          break;
      }
    } else {
      switch (type) {
        case "Keyword":
          fileUrl = "/Keyword_Master_abc_motors.xlsx";
          break;
        case "Po":
          fileUrl = "/PO_Master_abc_motors.xlsx";
          break;
        case "GLmaster":
          fileUrl = "/GL_Master_abc_motors.xlsx";
          break;
        case "Hsnsac":
          fileUrl = "/HSN SAC Master.xlsx";
          break;
        case "SectionMapping":
          fileUrl = "TDS_Section_Mapping_Master_abc_motors.xlsx";
          break;
        case "DocumentSupply":
          fileUrl = "Document_and_Supply_Type_Mapping_Master_abc_motors.xlsx";
          break;
        // Add more cases for other values as needed
        default:
          break;
      }
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
          <h4>Add/Edit Credentials</h4>
          <section>
            {/* <select name="" id="">
              <option value="">Select Portal</option>
              <option value="">Reporting Portal</option>
              <option value="">GSTIN</option>
              <option value="">TRACES</option>
            </select> */}

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <img src="/Captha.png" alt="" />
            <input type="text" placeholder="Enter Captcha" />
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
        {type != "Keyword" && (
          <button onClick={buttonToggler}>
            {type != "Keyword" ? (
              <FileDownloadOutlinedIcon className={classes.downloadicon} />
            ) : (
              <AddIcon className={classes.downloadicon} />
            )}
            {type == "Keyword"
              ? "Add User Credentials"
              : "Download Master Data"}
          </button>
        )}
        <table className={classes.table}>
          <tbody>
            <tr style={rowStyle}>
              {type == "Keyword" && (
                <>
                  <th>
                    Portal User ID
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    User ID
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Password
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>Actions</th>
                </>
              )}
              {type == "Po" && (
                <>
                  <th>
                    PO Number
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    PO Line Number
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    PO Date
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    PO Description
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
              {type == "GLmaster" && (
                <>
                  <th>
                    GL Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    GL Description
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    GL Type
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
                </>
              )}
              {type == "Hsnsac" && (
                <>
                  <th>
                    HSN/SAC Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Description
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
              {type == "DocumentSupply" && (
                <>
                  <th>
                    Document/Supply
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Document/Supply Type as per ERP
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Document/Supply Type as per Application
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Description
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
              {type == "SectionMapping" && (
                <>
                  <th>
                    TDS Section as per Client ERP
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    TDS Section as per Client Application
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
              {type == "Balance" && (
                <>
                  <th>
                    Posting Date
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Document Date
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Vendor Code
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    TDS Section
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Document Type
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                  <th>
                    Supply Type
                    {/* <KeyboardArrowDownIcon /> */}
                  </th>
                </>
              )}
            </tr>

            {type == "Po" &&
              clientIdentity == "ABC Consultancy Limited" &&
              po_abc_consultancy.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.poNumber}</td>
                    <td>{val.poLineNumber}</td>
                    <td>{val.poDate}</td>
                    <td>{val.poDescription}</td>
                  </tr>
                );
              })}
            {type == "Po" &&
              clientIdentity == "ABC Motors Limited" &&
              po_abc_motors.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.poNumber}</td>
                    <td>{val.poLineNumber}</td>
                    <td>{val.poDate}</td>
                    <td>{val.poDescription}</td>
                  </tr>
                );
              })}
            {type == "Hsnsac" &&
              clientIdentity == "ABC Consultancy Limited" &&
              hsnSACCodes.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.HSN_SAC_Code}</td>
                    <td>{val.Description}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                  </tr>
                );
              })}
            {type == "Hsnsac" &&
              clientIdentity == "ABC Motors Limited" &&
              hsnSACCodes2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.HSN_SAC_Code}</td>
                    <td>{val.Description}</td>
                    <td>{val.Nature_of_Payment}</td>
                    <td>{val.TDS_Section}</td>
                  </tr>
                );
              })}
            {type == "GLmaster" &&
              clientIdentity == "ABC Consultancy Limited" &&
              gl_abc_consultancy.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val["GL Code"]}</td>
                    <td>{val["GL Description"]}</td>
                    <td>{val["GL Type"]}</td>
                    <td>{val["Nature of Payment"]}</td>
                    <td>{val["TDS Section"]}</td>
                  </tr>
                );
              })}
            {type == "GLmaster" &&
              clientIdentity == "ABC Motors Limited" &&
              gl_abc_motors.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.glCode}</td>
                    <td>{val.glDescription}</td>
                    <td>{val.glType}</td>
                    <td>{val.natureOfPayment}</td>
                    <td>{val.tdsSection}</td>
                  </tr>
                );
              })}
            {type == "Keyword" &&
              clientIdentity == "ABC Consultancy Limited" &&
              portalUsers.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.PortalUserID}</td>
                    <td>{val.UserID}</td>
                    <td>{val.Password}</td>
                    <td>
                      <button
                        onClick={buttonToggler}
                        className={classes.bluebutton}
                      >
                        <EditIcon style={{ fontSize: "2.5rem" }} /> Add/Edit
                        Credentials
                      </button>
                      <DeleteForever className={classes.delete} />
                    </td>
                  </tr>
                );
              })}
            {type == "Keyword" &&
              clientIdentity == "ABC Motors Limited" &&
              portalUsers2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.PortalUserID}</td>
                    <td>{val.UserID}</td>
                    <td>{val.Password}</td>
                    <td>
                      <button
                        onClick={buttonToggler}
                        className={classes.bluebutton}
                      >
                        <EditIcon style={{ fontSize: "2rem" }} /> Add/Edit
                        Credentials
                      </button>
                      <DeleteForever className={classes.delete} />
                    </td>
                  </tr>
                );
              })}
            {type == "DocumentSupply" &&
              clientIdentity == "ABC Consultancy Limited" &&
              documentSupply_abc_consultancy.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.type}</td>
                    <td>{val.erpType}</td>
                    <td>{val.appType}</td>
                    <td>{val.description}</td>
                  </tr>
                );
              })}
            {type == "DocumentSupply" &&
              clientIdentity == "ABC Motors Limited" &&
              documentSupply_abc_motors.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.type}</td>
                    <td>{val.erpType}</td>
                    <td>{val.appType}</td>
                    <td>{val.description}</td>
                  </tr>
                );
              })}
            {type == "SectionMapping" &&
              clientIdentity == "ABC Consultancy Limited" &&
              section_mapping_abc_consultancy.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.clientERP}</td>
                    <td>{val.application}</td>
                  </tr>
                );
              })}
            {type == "SectionMapping" &&
              clientIdentity == "ABC Motors Limited" &&
              section_mapping_abc_motors.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.clientERP}</td>
                    <td>{val.application}</td>
                  </tr>
                );
              })}
            {type == "Balance" &&
              clientIdentity == "ABC Consultancy Limited" &&
              balanceData.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Posting_Date}</td>
                    <td>{val.Document_Date}</td>
                    <td>{val.Vendor_Code}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Document_Type}</td>
                    <td>{val.Supply_Type}</td>
                  </tr>
                );
              })}
            {type == "Balance" &&
              clientIdentity == "ABC Motors Limited" &&
              balanceData2.map((val, idx) => {
                return (
                  <tr style={rowStyle} id={idx}>
                    <td>{val.Posting_Date}</td>
                    <td>{val.Document_Date}</td>
                    <td>{val.Vendor_Code}</td>
                    <td>{val.TDS_Section}</td>
                    <td>{val.Document_Type}</td>
                    <td>{val.Supply_Type}</td>
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
