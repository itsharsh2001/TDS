import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import PurpleButton from "../../UI/PurpleButton";

import classes from "./ClientPositionReport.module.css";

const ClientPositionReport = (props) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const [viewData, setViewData] = useState(false);
  const [rowColor, setRowColor] = useState(false);

  const [modifySection, setModifySection] = useState(false);
  const [activateReason, setActivateReason] = useState(false);

  const [selectedAction, setSelectedAction] = useState("");

  const [extraRow, setExtraRow] = useState(true);

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };

  const grey = {
    border: "2px solid #B3B3B3",
    background: "#B3B3B3",
  };

  const viewDataTable = [
    {
      PostingDate: "4/1/2023",
      VendorCode: "VEN000032123",
      VendorName: "Aditi Arora",
      DocumentNumber: "010423000001",
      DocumentDate: "4/1/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/23-24/002",
      OriginalDocumentDate: "4/1/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "9982",
      Description: "Doc Review",
      GLAccountCode: "GL00071228",
      GLAccountName: "Legal Fees",
      PONumber: "PO0000014272",
      PODescription: "Lawyer Fees for case against ZZZ Limited",
      TaxableValue: "5000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "450",
      SGSTAmount: "450",
      IGSTAmount: "0",
      TotalGST: "900",
      InvoiceValue: "5900",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "50",
      HSN_SAC_Code: "194J",
      Vendor: "194J",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194J",
      SystemDeterminedSection: "194J",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000064548",
      VendorName: "BSK & Associates LLP",
      DocumentNumber: "010423000029",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/Apr/2023/0009",
      OriginalDocumentDate: "4/5/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "997212",
      Description: "Rent for April 2023",
      GLAccountCode: "GL00089459",
      GLAccountName: "Office Rent",
      PONumber: "PO0000011635",
      PODescription: "Noida Office Rent",
      TaxableValue: "80000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "7200",
      SGSTAmount: "7200",
      IGSTAmount: "0",
      TotalGST: "14400",
      InvoiceValue: "94400",
      TDSTaxCodeERP: "194I(a)",
      TDSRate: "10.00%",
      TDSAmount: "8000",
      HSN_SAC_Code: "194I(b)",
      Vendor: "194I(b)",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194I(b)",
      SystemDeterminedSection: "194I(b)",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/4/2023",
      VendorCode: "VEN000067792",
      VendorName: "Aarav Ahuja",
      DocumentNumber: "010423000004",
      DocumentDate: "4/4/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "20230401006",
      OriginalDocumentDate: "4/1/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "997212",
      Description: "Rent for April 2023",
      GLAccountCode: "GL00089459",
      GLAccountName: "Office Rent",
      PONumber: "PO0000011640",
      PODescription: "Lucknow Office Rent",
      TaxableValue: "18000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "1620",
      SGSTAmount: "1620",
      IGSTAmount: "0",
      TotalGST: "3240",
      InvoiceValue: "21240",
      TDSTaxCodeERP: "194I(a)",
      TDSRate: "10.00%",
      TDSAmount: "1800",
      HSN_SAC_Code: "194I(b)",
      Vendor: "194I(b)",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194I(b)",
      SystemDeterminedSection: "194I(b)",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/23/2023",
      VendorCode: "VEN000039015",
      VendorName: "EFGH Limtied",
      DocumentNumber: "010423000017",
      DocumentDate: "4/23/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "57342434245",
      OriginalDocumentDate: "4/15/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "84672200",
      Description: "Bosch GTS 254 1800W 4300rpm Professional Table Saw",
      GLAccountCode: "GL00097823",
      GLAccountName: "Table Saw",
      PONumber: "PO0000012826",
      PODescription:
        "Table Saw - Bosch GTS 254 1800W 4300rpm Professional Table Saw",
      TaxableValue: "74997",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "6749.73",
      SGSTAmount: "6749.73",
      IGSTAmount: "0",
      TotalGST: "13499.46",
      InvoiceValue: "88496.46",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "749.97",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/11/2023",
      VendorCode: "VEN000045590",
      VendorName: "MNOP Limited",
      DocumentNumber: "010423000011",
      DocumentDate: "4/11/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00145",
      OriginalDocumentDate: "4/10/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "4407",
      Description: "Oakwood Planks",
      GLAccountCode: "GL00031497",
      GLAccountName: "Wood",
      PONumber: "PO0000023884",
      PODescription: "Oakwook Planks",
      TaxableValue: "11500000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "1035000",
      SGSTAmount: "1035000",
      IGSTAmount: "0",
      TotalGST: "2070000",
      InvoiceValue: "13570000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "115000",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000045590",
      VendorName: "MNOP Limited",
      DocumentNumber: "010423000030",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00275",
      OriginalDocumentDate: "4/26/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "4407",
      Description: "Oakwood Planks",
      GLAccountCode: "GL00031497",
      GLAccountName: "Wood",
      PONumber: "PO0000023884",
      PODescription: "Oakwook Planks",
      TaxableValue: "22500000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "2025000",
      SGSTAmount: "2025000",
      IGSTAmount: "0",
      TotalGST: "4050000",
      InvoiceValue: "26550000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",

      TDSAmount: "115000",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000045590",
      VendorName: "MNOP Limited",
      DocumentNumber: "010423000030",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00275",
      OriginalDocumentDate: "4/26/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "4407",
      Description: "Oakwood Planks",
      GLAccountCode: "GL00031497",
      GLAccountName: "Wood",
      PONumber: "PO0000023884",
      PODescription: "Oakwook Planks",
      TaxableValue: "22500000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "2025000",
      SGSTAmount: "2025000",
      IGSTAmount: "0",
      TotalGST: "4050000",
      InvoiceValue: "26550000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "225000",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/15/2023",
      VendorCode: "VEN000052557",
      VendorName: "CSK & Associates LLP",
      DocumentNumber: "010423000013",
      DocumentDate: "4/15/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00024",
      OriginalDocumentDate: "4/10/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "996111",
      Description: "Sales Commission for Furniture Sold @ 5%",
      GLAccountCode: "GL00063342",
      GLAccountName: "Sales Commission",
      PONumber: "",
      PODescription: "",
      TaxableValue: "400000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "36000",
      SGSTAmount: "36000",
      IGSTAmount: "0",
      TotalGST: "72000",
      InvoiceValue: "472000",
      TDSTaxCodeERP: "194J",
      TDSRate: "10.00%",
      TDSAmount: "40000",
      HSN_SAC_Code: "194H",
      Vendor: "194H",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194H",
      SystemDeterminedSection: "194H",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000049276",
      VendorName: "ABC Private Limited",
      DocumentNumber: "010423000031",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV23523432",
      OriginalDocumentDate: "4/12/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "70049099",
      Description: "Glass",
      GLAccountCode: "GL00063307",
      GLAccountName: "Glass",
      PONumber: "PO0000029793",
      PODescription: "Glass",
      TaxableValue: "250000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "22500",
      SGSTAmount: "22500",
      IGSTAmount: "0",
      TotalGST: "45000",
      InvoiceValue: "295000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "2500",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000025310",
      VendorName: "DEF Limited",
      DocumentNumber: "010423000032",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "20230421056",
      OriginalDocumentDate: "4/21/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "9401",
      Description: "Cushions",
      GLAccountCode: "GL00041231",
      GLAccountName: "Cushions",
      PONumber: "PO0000031023",
      PODescription: "Cushions",
      TaxableValue: "570000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "51300",
      SGSTAmount: "51300",
      IGSTAmount: "0",
      TotalGST: "102600",
      InvoiceValue: "672600",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "5700",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000063391",
      VendorName: "GHI Limited",
      DocumentNumber: "040423000001",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "",
      OriginalDocumentDate: "4/12/2023",
      DocumentType: "PRV",
      SupplyType: "TAX",
      HSNorSAC: "70049099",
      Description: "Provision for Glass",
      GLAccountCode: "GL00059691",
      GLAccountName: "Provision for Glass",
      PONumber: "PO0000029793",
      PODescription: "Glass",
      TaxableValue: "150000",
      CGSTRate: "0",
      SGSTRate: "0",
      IGSTRate: "0",
      CGSTAmount: "0",
      SGSTAmount: "0",
      IGSTAmount: "0",
      TotalGST: "0",
      InvoiceValue: "150000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "1500",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
  ];

  const viewDataTable2 = [
    {
      PostingDate: "4/1/2023",
      VendorCode: "VEN000032123",
      VendorName: "Aditi Arora",
      DocumentNumber: "010423000001",
      DocumentDate: "4/1/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/23-24/002",
      OriginalDocumentDate: "4/1/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "9982",
      Description: "Doc Review",
      GLAccountCode: "GL00071228",
      GLAccountName: "Legal Fees",
      PONumber: "PO0000014272",
      PODescription: "Lawyer Fees for case against ZZZ Limited",
      TaxableValue: "5000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "450",
      SGSTAmount: "450",
      IGSTAmount: "0",
      TotalGST: "900",
      InvoiceValue: "5900",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "50",
      HSN_SAC_Code: "194J",
      Vendor: "194J",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194J",
      SystemDeterminedSection: "194J",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000064548",
      VendorName: "BSK & Associates LLP",
      DocumentNumber: "010423000029",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/Apr/2023/0009",
      OriginalDocumentDate: "4/5/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "997212",
      Description: "Rent for April 2023",
      GLAccountCode: "GL00089459",
      GLAccountName: "Office Rent",
      PONumber: "PO0000011635",
      PODescription: "Noida Office Rent",
      TaxableValue: "80000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "7200",
      SGSTAmount: "7200",
      IGSTAmount: "0",
      TotalGST: "14400",
      InvoiceValue: "94400",
      TDSTaxCodeERP: "194I(a)",
      TDSRate: "10.00%",
      TDSAmount: "8000",
      HSN_SAC_Code: "194I(b)",
      Vendor: "194I(b)",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194I(b)",
      SystemDeterminedSection: "194I(b)",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/4/2023",
      VendorCode: "VEN000067792",
      VendorName: "Aarav Ahuja",
      DocumentNumber: "010423000004",
      DocumentDate: "4/4/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "20230401006",
      OriginalDocumentDate: "4/1/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "997212",
      Description: "Rent for April 2023",
      GLAccountCode: "GL00089459",
      GLAccountName: "Office Rent",
      PONumber: "PO0000011640",
      PODescription: "Lucknow Office Rent",
      TaxableValue: "18000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "1620",
      SGSTAmount: "1620",
      IGSTAmount: "0",
      TotalGST: "3240",
      InvoiceValue: "21240",
      TDSTaxCodeERP: "194I(a)",
      TDSRate: "10.00%",
      TDSAmount: "1800",
      HSN_SAC_Code: "194I(b)",
      Vendor: "194I(b)",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194I(b)",
      SystemDeterminedSection: "194I(b)",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/23/2023",
      VendorCode: "VEN000039015",
      VendorName: "EFGH Limtied",
      DocumentNumber: "010423000017",
      DocumentDate: "4/23/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "57342434245",
      OriginalDocumentDate: "4/15/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "84672200",
      Description: "Bosch GTS 254 1800W 4300rpm Professional Table Saw",
      GLAccountCode: "GL00097823",
      GLAccountName: "Table Saw",
      PONumber: "PO0000012826",
      PODescription:
        "Table Saw - Bosch GTS 254 1800W 4300rpm Professional Table Saw",
      TaxableValue: "74997",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "6749.73",
      SGSTAmount: "6749.73",
      IGSTAmount: "0",
      TotalGST: "13499.46",
      InvoiceValue: "88496.46",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "749.97",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/11/2023",
      VendorCode: "VEN000045590",
      VendorName: "MNOP Limited",
      DocumentNumber: "010423000011",
      DocumentDate: "4/11/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00145",
      OriginalDocumentDate: "4/10/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "4407",
      Description: "Oakwood Planks",
      GLAccountCode: "GL00031497",
      GLAccountName: "Wood",
      PONumber: "PO0000023884",
      PODescription: "Oakwook Planks",
      TaxableValue: "11500000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "1035000",
      SGSTAmount: "1035000",
      IGSTAmount: "0",
      TotalGST: "2070000",
      InvoiceValue: "13570000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "115000",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000045590",
      VendorName: "MNOP Limited",
      DocumentNumber: "010423000030",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00275",
      OriginalDocumentDate: "4/26/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "4407",
      Description: "Oakwood Planks",
      GLAccountCode: "GL00031497",
      GLAccountName: "Wood",
      PONumber: "PO0000023884",
      PODescription: "Oakwook Planks",
      TaxableValue: "22500000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "2025000",
      SGSTAmount: "2025000",
      IGSTAmount: "0",
      TotalGST: "4050000",
      InvoiceValue: "26550000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",

      TDSAmount: "115000",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000045590",
      VendorName: "MNOP Limited",
      DocumentNumber: "010423000030",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00275",
      OriginalDocumentDate: "4/26/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "4407",
      Description: "Oakwood Planks",
      GLAccountCode: "GL00031497",
      GLAccountName: "Wood",
      PONumber: "PO0000023884",
      PODescription: "Oakwook Planks",
      TaxableValue: "22500000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "2025000",
      SGSTAmount: "2025000",
      IGSTAmount: "0",
      TotalGST: "4050000",
      InvoiceValue: "26550000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "225000",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/15/2023",
      VendorCode: "VEN000052557",
      VendorName: "CSK & Associates LLP",
      DocumentNumber: "010423000013",
      DocumentDate: "4/15/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV/2023/April/00024",
      OriginalDocumentDate: "4/10/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "996111",
      Description: "Sales Commission for Furniture Sold @ 5%",
      GLAccountCode: "GL00063342",
      GLAccountName: "Sales Commission",
      PONumber: "",
      PODescription: "",
      TaxableValue: "400000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "36000",
      SGSTAmount: "36000",
      IGSTAmount: "0",
      TotalGST: "72000",
      InvoiceValue: "472000",
      TDSTaxCodeERP: "194J",
      TDSRate: "10.00%",
      TDSAmount: "40000",
      HSN_SAC_Code: "194H",
      Vendor: "194H",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194H",
      SystemDeterminedSection: "194H",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000049276",
      VendorName: "ABC Private Limited",
      DocumentNumber: "010423000031",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "INV23523432",
      OriginalDocumentDate: "4/12/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "70049099",
      Description: "Glass",
      GLAccountCode: "GL00063307",
      GLAccountName: "Glass",
      PONumber: "PO0000029793",
      PODescription: "Glass",
      TaxableValue: "250000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "22500",
      SGSTAmount: "22500",
      IGSTAmount: "0",
      TotalGST: "45000",
      InvoiceValue: "295000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "2500",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000025310",
      VendorName: "DEF Limited",
      DocumentNumber: "010423000032",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "20230421056",
      OriginalDocumentDate: "4/21/2023",
      DocumentType: "INV",
      SupplyType: "TAX",
      HSNorSAC: "9401",
      Description: "Cushions",
      GLAccountCode: "GL00041231",
      GLAccountName: "Cushions",
      PONumber: "PO0000031023",
      PODescription: "Cushions",
      TaxableValue: "570000",
      CGSTRate: "0.09",
      SGSTRate: "0.09",
      IGSTRate: "0",
      CGSTAmount: "51300",
      SGSTAmount: "51300",
      IGSTAmount: "0",
      TotalGST: "102600",
      InvoiceValue: "672600",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "5700",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
    {
      PostingDate: "4/30/2023",
      VendorCode: "VEN000063391",
      VendorName: "GHI Limited",
      DocumentNumber: "040423000001",
      DocumentDate: "4/30/2023",
      LineNumber: "1",
      OriginalDocumentNumber: "",
      OriginalDocumentDate: "4/12/2023",
      DocumentType: "PRV",
      SupplyType: "TAX",
      HSNorSAC: "70049099",
      Description: "Provision for Glass",
      GLAccountCode: "GL00059691",
      GLAccountName: "Provision for Glass",
      PONumber: "PO0000029793",
      PODescription: "Glass",
      TaxableValue: "150000",
      CGSTRate: "0",
      SGSTRate: "0",
      IGSTRate: "0",
      CGSTAmount: "0",
      SGSTAmount: "0",
      IGSTAmount: "0",
      TotalGST: "0",
      InvoiceValue: "150000",
      TDSTaxCodeERP: "194C",
      TDSRate: "1.00%",
      TDSAmount: "1500",
      HSN_SAC_Code: "194Q",
      Vendor: "194Q",
      InvoiceDescription: "NULL",
      PODescription: "NULL",
      GLCode: "194Q",
      SystemDeterminedSection: "194Q",
      SectionMismatch: "Yes",
      Action: "",
      Reason: "",
      ModifiedTDSSection: "",
    },
  ];

  const uploadedData = [
    {
      Batch_ID: 7596048123,
      File_Name: "Apr_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "5/5/2023",
      Total_No_of_Records: 24,
      Error_Records: 1,
      Processed_Records: 23,
    },
    {
      Batch_ID: 7596048363,
      File_Name: "Apr_CPR1.xlsx",
      Username: "Ganesh Gupta",
      Date: "5/6/2023",
      Total_No_of_Records: 1,
      Error_Records: 0,
      Processed_Records: 1,
    },
    {
      Batch_ID: 3826715904,
      File_Name: "May_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "6/5/2023",
      Total_No_of_Records: 6,
      Error_Records: 0,
      Processed_Records: 6,
    },
    {
      Batch_ID: 9463851270,
      File_Name: "Jun_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "7/5/2023",
      Total_No_of_Records: 13,
      Error_Records: 0,
      Processed_Records: 13,
    },
    {
      Batch_ID: 5201498376,
      File_Name: "Jul_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "8/5/2023",
      Total_No_of_Records: 6,
      Error_Records: 0,
      Processed_Records: 6,
    },
  ];

  const uploadedData2 = [
    {
      Batch_ID: 7596048123,
      File_Name: "Apr_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "5/5/2023",
      Total_No_of_Records: 24,
      Error_Records: 1,
      Processed_Records: 23,
    },
    {
      Batch_ID: 7596048363,
      File_Name: "Apr_CPR1.xlsx",
      Username: "Ganesh Gupta",
      Date: "5/6/2023",
      Total_No_of_Records: 1,
      Error_Records: 0,
      Processed_Records: 1,
    },
    {
      Batch_ID: 3826715904,
      File_Name: "May_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "6/5/2023",
      Total_No_of_Records: 6,
      Error_Records: 0,
      Processed_Records: 6,
    },
    {
      Batch_ID: 9463851270,
      File_Name: "Jun_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "7/5/2023",
      Total_No_of_Records: 13,
      Error_Records: 0,
      Processed_Records: 13,
    },
    {
      Batch_ID: 5201498376,
      File_Name: "Jul_CPR.xlsx",
      Username: "Ganesh Gupta",
      Date: "8/5/2023",
      Total_No_of_Records: 6,
      Error_Records: 0,
      Processed_Records: 6,
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

  console.log(classes.grey, "custom style");
  return (
    <div className={classes.clientposition}>
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
          Client Position Report
        </a>

        {/* <PurpleButton>
          <DownloadIcon /> Upload Template
        </PurpleButton> */}
      </span>

      <ul>
        <li
          style={!viewData ? hoverStyle : {}}
          onClick={() => {
            return setViewData(false);
          }}
        >
          Uploaded Data
        </li>
        <li
          style={viewData ? hoverStyle : {}}
          onClick={() => {
            return setViewData(true);
          }}
        >
          View Data
        </li>
        {/* <li>Annual Compliances</li> */}
      </ul>

      <div>
        <PurpleButton
          onClick={() => {
            console.log("hello dbsar");
            if (viewData) {
              setExtraRow(false);
            }
          }}
          customStyle={viewData && !activateReason ? grey : {}}
        >
          {!viewData && (
            <>
              <FileUploadOutlinedIcon />
              Upload Reponse
            </>
          )}
          {viewData && "Submit Response"}
        </PurpleButton>

        <PurpleButton onClick={handleDownload}>
          <FileDownloadOutlinedIcon />
          Downlaod Report
        </PurpleButton>
      </div>

      <table className={classes.table}>
        <tbody>
          {!viewData && (
            <tr
              style={{ gridTemplateColumns: "14% 14% 14% 14% 14% 14% 14% 14%" }}
            >
              <th>Batch ID</th>
              <th>File Name</th>
              <th>Username</th>
              <th>Date</th>
              <th>Total No. of Records</th>
              <th>Error Records</th>
              <th>Process Records</th>
              <th>Actions</th>
            </tr>
          )}
          {!viewData && !extraRow && (
            <tr
              style={{ gridTemplateColumns: "14% 14% 14% 14% 14% 14% 14% 14%" }}
            >
              <td>5436271828</td>
              <td>CPR_Frontend_UI_1.xlsx</td>
              <td>Ganesh Gupta</td>
              <td>{formattedDate}</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
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
          )}


          {(!viewData && props.clientIdentity=='ABC Consultancy Limited') &&
            uploadedData.map((val, idx) => {
              return (
                <tr
                  style={{
                    gridTemplateColumns: "14% 14% 14% 14% 14% 14% 14% 14%",
                  }}
                  id={idx}
                >
                  <td>{val.Batch_ID}</td>
                  <td>{val.File_Name}</td>
                  <td>{val.Username}</td>
                  <td>{val.Date}</td>
                  <td>{val.Total_No_of_Records}</td>
                  <td>{val.Error_Records}</td>
                  <td>{val.Processed_Records}</td>
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
                  {/* <td>20</td>
                <td>140</td>
                <td>40</td>

                <td>2</td>
                <td>
                  <button>Download</button>
                </td>
                <td>
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

          {(!viewData && props.clientIdentity=='ABC Motors Limited') &&
            uploadedData2.map((val, idx) => {
              return (
                <tr
                  style={{
                    gridTemplateColumns: "14% 14% 14% 14% 14% 14% 14% 14%",
                  }}
                  id={idx}
                >
                  <td>{val.Batch_ID}</td>
                  <td>{val.File_Name}</td>
                  <td>{val.Username}</td>
                  <td>{val.Date}</td>
                  <td>{val.Total_No_of_Records}</td>
                  <td>{val.Error_Records}</td>
                  <td>{val.Processed_Records}</td>
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
                  {/* <td>20</td>
                <td>140</td>
                <td>40</td>

                <td>2</td>
                <td>
                  <button>Download</button>
                </td>
                <td>
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

          {viewData && (
            <tr
              style={{
                gridTemplateColumns:
                  "14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14%",
              }}
            >
              <th>Posting Date</th>
              <th>Vendor Code</th>
              <th>Vendor Name</th>
              <th>Document Number</th>
              <th>Document Date</th>
              <th>Line Number</th>
              <th>Original Document Number</th>
              <th>Original Document Date</th>
              <th>Document Type</th>
              <th>Supply Type</th>
              <th>HSNorSAC</th>
              <th>Description</th>
              <th>GLAccountCode</th>
              <th>GLAccountName</th>
              <th>PONumber</th>
              <th>PODescription</th>
              <th>Taxable Value</th>
              <th>CSST Rate</th>
              <th>SGST Rate</th>
              <th>IGST Rate</th>
              <th>CGST Amount</th>
              <th>SGST Amount</th>
              <th>IGST Amount</th>
              <th>Total GST</th>
              <th>Invoice Value</th>
              <th>TDS Tax Code ERP</th>
              <th>TDS Rate</th>
              <th>TDS Amount</th>
              <th>HSN/SAC Code</th>
              <th>Vendor</th>
              <th>Invoice Decription</th>
              <th>PO Description</th>
              <th>GL Code</th>
              <th>System Determined Section</th>
              <th>Section Mismatch</th>
              <th>Action</th>
              <th>Reason</th>
              <th>Modified TDS Section</th>
            </tr>
          )}

          {viewData && extraRow && (
            <tr
              style={{
                gridTemplateColumns:
                  "14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14%",
              }}
            >
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].VendorCode}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].VendorName}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].PostingDate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].DocumentNumber}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].DocumentDate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].LineNumber}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].OriginalDocumentNumber}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].OriginalDocumentDate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].DocumentType}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].SupplyType}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].HSN_SAC_Code}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].Description}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].GLAccountCode}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].GLAccountName}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].PONumber}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].PODescription}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].TaxableValue}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].CGSTRate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].SGSTRate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].IGSTRate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].CGSTAmount}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].SGSTAmount}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].IGSTAmount}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].TotalGST}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].InvoiceValue}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].TDSTaxCodeERP}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].TDSRate}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].TDSAmount}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].HSN_SAC_Code}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].Vendor}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].InvoiceDescription}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].PODescription}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].GLCode}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].SystemDeterminedSection}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {viewDataTable[6].SectionMismatch}
              </td>

              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                <select
                  onChange={(e) => {
                    setSelectedAction(e.target.value);
                    setActivateReason(true);
                    return setRowColor(true);
                  }}
                  name=""
                  id=""
                >
                  <option value="">Select Action</option>
                  <option value="accept">
                    <input type="radio" name="" id="" />
                    Accept
                  </option>
                  <option value="reject">
                    <input type="radio" name="" id="" />
                    Reject
                  </option>
                  <option value="modify">
                    <input type="radio" name="" id="" />
                    Modify
                  </option>
                </select>
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {activateReason ? (
                  <input placeholder="Type Reason" type="text" name="" id="" />
                ) : (
                  "--"
                )}
              </td>
              <td style={rowColor ? { background: "#B9ABCC" } : {}}>
                {selectedAction == "modify" ? (
                  <select name="" id="">
                    <option value="">Select Modification</option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194Q
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194C
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      192A
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194I(A)
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194I(B)
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194G
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194H
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      194O
                    </option>
                    <option value="">
                      <input type="radio" name="" id="" />
                      193
                    </option>
                  </select>
                ) : (
                  "--"
                )}
              </td>
            </tr>
          )}



          {(viewData && props.clientIdentity=='ABC Consultancy Limited') &&
            viewDataTable.map((val, idx) => {
              return (
                <tr
                  style={{
                    gridTemplateColumns:
                      "14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14%",
                  }}
                  id={idx}
                >
                  <td>{val.VendorCode}</td>
                  <td>{val.VendorName}</td>
                  <td>{val.PostingDate}</td>
                  <td>{val.DocumentNumber}</td>
                  <td>{val.DocumentDate}</td>
                  <td>{val.LineNumber}</td>
                  <td>{val.OriginalDocumentNumber}</td>
                  <td>{val.OriginalDocumentDate}</td>
                  <td>{val.DocumentType}</td>
                  <td>{val.SupplyType}</td>
                  <td>{val.HSN_SAC_Code}</td>
                  <td>{val.Description}</td>
                  <td>{val.GLAccountCode}</td>
                  <td>{val.GLAccountName}</td>
                  <td>{val.PONumber}</td>
                  <td>{val.PODescription}</td>
                  <td>{val.TaxableValue}</td>
                  <td>{val.CGSTRate}</td>
                  <td>{val.SGSTRate}</td>
                  <td>{val.IGSTRate}</td>
                  <td>{val.CGSTAmount}</td>
                  <td>{val.SGSTAmount}</td>
                  <td>{val.IGSTAmount}</td>
                  <td>{val.TotalGST}</td>
                  <td>{val.InvoiceValue}</td>
                  <td>{val.TDSTaxCodeERP}</td>
                  <td>{val.TDSRate}</td>
                  <td>{val.TDSAmount}</td>
                  <td>{val.HSN_SAC_Code}</td>
                  <td>{val.Vendor}</td>
                  <td>{val.InvoiceDescription}</td>
                  <td>{val.PODescription}</td>
                  <td>{val.GLCode}</td>
                  <td>{val.SystemDeterminedSection}</td>
                  <td>{val.SectionMismatch}</td>

                  <td>
                    <select
                      onChange={() => {
                        return setRowColor(true);
                      }}
                      name=""
                      id=""
                    >
                      <option value="">Select Action</option>
                      <option value="">
                        <input type="radio" name="" id="" />
                        Accept
                      </option>
                      <option value="">
                        <input type="radio" name="" id="" />
                        Reject
                      </option>
                      <option value="">
                        <input type="radio" name="" id="" />
                        Modify
                      </option>
                    </select>
                  </td>
                  <td>{val.Reason}</td>
                  <td>--</td>
                </tr>
              );
            })}

          {(viewData && props.clientIdentity=='ABC Motors Limited') &&
            viewDataTable2.map((val, idx) => {
              return (
                <tr
                  style={{
                    gridTemplateColumns:
                      "14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14% 14%",
                  }}
                  id={idx}
                >
                  <td>{val.VendorCode}</td>
                  <td>{val.VendorName}</td>
                  <td>{val.PostingDate}</td>
                  <td>{val.DocumentNumber}</td>
                  <td>{val.DocumentDate}</td>
                  <td>{val.LineNumber}</td>
                  <td>{val.OriginalDocumentNumber}</td>
                  <td>{val.OriginalDocumentDate}</td>
                  <td>{val.DocumentType}</td>
                  <td>{val.SupplyType}</td>
                  <td>{val.HSN_SAC_Code}</td>
                  <td>{val.Description}</td>
                  <td>{val.GLAccountCode}</td>
                  <td>{val.GLAccountName}</td>
                  <td>{val.PONumber}</td>
                  <td>{val.PODescription}</td>
                  <td>{val.TaxableValue}</td>
                  <td>{val.CGSTRate}</td>
                  <td>{val.SGSTRate}</td>
                  <td>{val.IGSTRate}</td>
                  <td>{val.CGSTAmount}</td>
                  <td>{val.SGSTAmount}</td>
                  <td>{val.IGSTAmount}</td>
                  <td>{val.TotalGST}</td>
                  <td>{val.InvoiceValue}</td>
                  <td>{val.TDSTaxCodeERP}</td>
                  <td>{val.TDSRate}</td>
                  <td>{val.TDSAmount}</td>
                  <td>{val.HSN_SAC_Code}</td>
                  <td>{val.Vendor}</td>
                  <td>{val.InvoiceDescription}</td>
                  <td>{val.PODescription}</td>
                  <td>{val.GLCode}</td>
                  <td>{val.SystemDeterminedSection}</td>
                  <td>{val.SectionMismatch}</td>

                  <td>
                    <select
                      onChange={() => {
                        return setRowColor(true);
                      }}
                      name=""
                      id=""
                    >
                      <option value="">Select Action</option>
                      <option value="">
                        <input type="radio" name="" id="" />
                        Accept
                      </option>
                      <option value="">
                        <input type="radio" name="" id="" />
                        Reject
                      </option>
                      <option value="">
                        <input type="radio" name="" id="" />
                        Modify
                      </option>
                    </select>
                  </td>
                  <td>{val.Reason}</td>
                  <td>--</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientPositionReport;
