import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./NaturePayment.module.css";

const NaturePayment = (props) => {
  const paymentData = [
    {
      Nature_Of_Payment:
        "Interest on securities in case of 8% Savings (taxable) Bonds, 2003, 7.75% Savings (Taxable Bonds), 2018",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest on securities in case of Interest payable on debentures issued by a company in which the public is substantially interested and where payment is made by cheque",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest on securities in case of Interest on 6% Gold bonds, 1977 or 7% Gold bonds, 1980 paid to a resident individual and provided the nominal value of bonds exceeds INR 10,000",
      Section: "193",
    },
    {
      Nature_Of_Payment: "Interest payable on 4% National Defence Bonds, 1972",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable on 4% National Defence Loan, 1968 or 4% National Defence Loan, 1972",
      Section: "193",
    },
    {
      Nature_Of_Payment: "Interest payable on National Development Bonds",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable on 7-Year National Savings Certificates (IV) issue",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable on 6% Gold Bonds 1977 or 7% Gold Bonds 1980 where the nominal value of the bonds does not exceed INR 10,000 at any time during the period to which the interest relates.",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable on Security of the Central Government or a State Government",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable to LIC in respect of any securities owned by it or in which it has full beneficial interest",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable to GIC in respect of any securities owned by it or in which it has full beneficial interest",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable to any other insurer in respect of any securities owned by it or in which it has full beneficial interest",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Interest payable on any security which is in dematerialized form & is listed on a recognized stock exchange in India",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income by way of interest on securities",
      Section: "193",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities by the Banking company to which the Banking Regulation Act, 1949 (10 of 1949) applies (including any bank or banking institution, referred to in section 51 of that Act)",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in the case of Senior Citizen by the Banking company to which the Banking Regulation Act, 1949 (10 of 1949) applies (including any bank or banking institution, referred to in section 51 of that Act)",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income by the way of compensation amount awarded by the Motor Accidents Claims Tribunal.",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in any other cases as specified in sub clause (d) of clause (i) of Section 194A(3)",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities by a co-operative society (other than a co-operative bank) to a member thereof or to any other co-operative society in respect to clause (v) of Section 194A(3), where total sales, gross receipts, turnover of the cooperative society exceeds fifty crore rupees during the previous financial year",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities by a co-operative society to a senior citizen (other than a co-operative bank) to a member thereof or to any other co-operative society in respect to clause (v) of Section 194A(3), where total sales, gross receipts, turnover of the cooperative society exceeds fifty crore rupees during the previous financial year",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities by the co-operative society engaged in carrying on the business of banking",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in case of any deposit with the post office under any scheme framed by the Central Government and notified by it in this behalf.",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in case of Senior Citizen by the Co-operative society engaged in carrying on the business of banking.",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in case of Senior Citizen from any deposit with the post office under any scheme framed by the Central Government and notified by it in this behalf",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities to a Senior citizen as specified in Clause (viia) of sub section (3) to Section 194A in respect of:- deposits with a primary agricultural credit society or a primary credit society or a co-operative land mortgage bank or a co-operative land development bank;- deposits (other than time deposits made on or after 1 July 1995) with a co-operative society, other than a co-operative society or bank referred to in sub clause (a), engaged in carrying on the business of banking where such society is engaged in carrying on the business of banking, which includes carrying on of any other business, under any law for the time being in force; deposits with a co-operative society, other than a co-operative bank, by such individual or individuals, formed or constituted under any Central or State Act, which the Central Government may, by notification in the Official Gazette, specify in this behalf;",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities to a Senior citizen as specified in Clause (viia) of sub section (3) to Section 194A in respect of: -deposits with a primary agricultural credit society or a primary credit society or a co-operative land mortgage bank or a co-operative land development bank;- deposits (other than time deposits made on or after 1 July 1995) with a co-operative society, other than a co-operative society or bank referred to in sub clause (a), engaged in carrying on the business of banking where such society is engaged in carrying on the business of banking, which includes carrying on of any other business, under any law for the time being in force; deposits with a co-operative society, other than a co-operative bank, by such individual or individuals, formed or constituted under any Central or State Act, which the Central Government may, by notification in the Official Gazette, specify in this behalf;",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities by a banking company to which the Banking Regulation Act, 1949 (10 of 1949) applies (including any bank or banking institution, referred to in section 51 of that Act), and which is also engaged in business of insurance",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities to a business trust as defined in clause (13A) of section 2 of the Securities and Exchange Board of India Act, 1992 (15 of 1992), referred to in Section 194LBA(2) in respect to interest paid or payable by SPV to the business trust;",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in case of National Bank for Agriculture and Rural Development",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities to non-resident person or to a foreign company, being a person, responsible for paying to a non-resident, not being a company, or to a foreign company, any sum, whether or not chargeable to tax, referred to in Section 195(1)",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities to a foreign company, being a person, responsible for paying to a non-resident, whether or not chargeable to tax, referred to in Section 195(1)",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities to any person as referred to in Section 196A",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities by a co-operative society (other than a co-operative bank) to a member thereof or to any other co-operative society in respect of deposits",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in the case of Senior Citizen by a co-operative society (other than a co-operative bank) to a member thereof or to any other co-operative society in respect of deposits",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of income other than income by way of interest on securities in the case of any other person",
      Section: "194A",
    },
    {
      Nature_Of_Payment:
        "Interest other than 'income by way of interest on securities' payable by Central Government or a State Government.",
      Section: "194B",
    },
    { Nature_Of_Payment: "Winnings from lotteries", Section: "194B" },
    {
      Nature_Of_Payment: "Winnings from games including horse races",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income other than income by way of 'Income by way of winnings from lotteries, crossword puzzles, races including horse races, card games and other games of any sort, gambling or betting of any form or nature whatsoever' and income by way of winnings from such games.",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income other than income by way of winnings from 'Income by way of winnings from lotteries, crossword puzzles, races including horse races, card games and other games of any sort, gambling or betting of any form or nature whatsoever' and income by way of winnings from such games.",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income in respect of units of a Mutual Fund, the income to be in the nature of 'income by way of long-term capital gains' as referred to in Section 112A",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income other than income by way of long-term capital gains as referred to in Section 112A.",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income in respect of units of a Mutual Fund, the income to be in the nature of 'income by way of long-term capital gains' as referred to in Section 112A",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income other than income by way of long-term capital gains as referred to in Section 112A.",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income by way of interest other than 'income by way of 'Interest on securities', 'Income by way of winnings from lotteries, crossword puzzles, races including horse races, card games and other games of any sort, gambling or betting of any form or nature whatsoever' and income by way of 'interest on bonds and Government Securities' referred to in Section 194LD",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income other than income by way of interest other than 'income by way of 'Interest on securities', 'Income by way of winnings from lotteries, crossword puzzles, races including horse races, card games and other games of any sort, gambling or betting of any form or nature whatsoever' and income by way of 'interest on bonds and Government Securities' referred to in Section 194LD",
      Section: "194B",
    },
    {
      Nature_Of_Payment:
        "Income by way of fees for technical services payable by the Government or a person who is a resident, other than an individual or a Hindu undivided family, and is responsible for paying to a resident, any income by way of fees for technical services to a foreign company or to a foreign government or to a foreign concern, which is given",
      Section: "194B",
    },
    { Nature_Of_Payment: "Winnings from horse races", Section: "194BB" },
    {
      Nature_Of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work who owns ten or less goods carriages & furnishes a declaration to that effect providing PAN details",
      Section: "194C",
    },
    {
      Nature_Of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for work in case of manufacturing or supplying product according to the requirement of the customer by using material purchased from a person other than such customer or associate of such customer",
      Section: "194C",
    },
    {
      Nature_Of_Payment:
        "Payment or credit to a resident contractor / sub-contractor for carrying out any work (including the supply of labor for carrying out any work) in pursuance of a contract between the contractor and a specified person",
      Section: "194C",
    },
    {
      Nature_Of_Payment:
        "Payment or credit to a resident contractor/ sub-contractor for the carriage of goods or passengers by railways",
      Section: "194C",
    },
    {
      Nature_Of_Payment:
        "Income by way of remuneration or reward, whether by way of commission or otherwise for soliciting or procuring insurance business",
      Section: "194D",
    },
    {
      Nature_Of_Payment: "Payment in respect of a life insurance policy",
      Section: "194DA",
    },
    {
      Nature_Of_Payment:
        "Payment of a sum in respect of a life insurance policy which is not includible in the total income of the assessee under clause (10D) of Section 10",
      Section: "194DA",
    },
    {
      Nature_Of_Payment:
        "Income paid or payable to a non-resident Sportsman (including an athlete) by way of - participation in India in any game (other than a game the winnings wherefrom are taxable under section 115BB) or sport; - advertisement; or - contribution of articles relating to any game or sport in India in newspapers, magazines, or journals",
      Section: "194E",
    },
    {
      Nature_Of_Payment:
        "Income paid or payable to a non-resident sports association or institution in relation to any game (other than a game the winnings wherefrom are taxable under Section 115BB) or sport played in India",
      Section: "194E",
    },
    {
      Nature_Of_Payment:
        "Income paid or payable to a non-resident entertainer from his performance in India",
      Section: "194E",
    },
    {
      Nature_Of_Payment:
        "Payment in respect of deposits under National Savings Scheme, 1987",
      Section: "194EE",
    },
    {
      Nature_Of_Payment:
        "Payment in respect of deposits under National Savings Scheme, 1987 to the heirs of the assessee",
      Section: "194EE",
    },
    {
      Nature_Of_Payment:
        "Payment on account of repurchase of units of MF or UTI",
      Section: "194F",
    },
    {
      Nature_Of_Payment:
        "Payment or credit of Commission, remuneration, or prize to a person engaged in stocking, distributing, purchasing, or selling lottery tickets",
      Section: "194G",
    },
    {
      Nature_Of_Payment:
        "Payment of commission (other than insurance commission) or brokerage",
      Section: "194H",
    },
    {
      Nature_Of_Payment:
        "Commission or brokerage payable by Bharat Sanchar Nigam Limited or Mahanagar Telephone Nigam Limited to their public call office franchisees",
      Section: "194H",
    },
    {
      Nature_Of_Payment: "Payment of rent in case of Plant & Machinery",
      Section: "194I(a)",
    },
    {
      Nature_Of_Payment:
        "Payment of rent in case of Land or building or furniture or fitting",
      Section: "194I(b)",
    },
    {
      Nature_Of_Payment:
        "Rental income credited or paid to a business trust, being a real estate investment trust in respect of any real estate asset referred to in Section 10(23FCA)",
      Section: "194I(b)",
    },
    {
      Nature_Of_Payment:
        "Payment / credit of consideration to a resident transferor for the transfer of any immovable property (other than agricultural land and consideration or enhanced consideration from acquisition of immovable property)",
      Section: "194IA",
    },
    {
      Nature_Of_Payment:
        "Payment / credit of consideration to a resident transferor for the transfer of agricultural land",
      Section: "194IA",
    },
    {
      Nature_Of_Payment:
        "Rent paid or payable by an individual or HUF (whose total sales, gross receipts, or turnover from the business or profession carried on by him does not exceed 1 crore rupees in case of business or 50 lakh rupees in case of profession as the case may be) to a resident where the payment exceeds Rs. 50,000.",
      Section: "194IB",
    },
    {
      Nature_Of_Payment:
        "Payment of monetary consideration under Joint Development Agreements in respect of land or building or both",
      Section: "194IC",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for technical services to the resident person",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of any other sum to the resident person as specified in Section 194J(d)",
      Section: "194J(b)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of royalty excluding royalty which is in the nature of consideration for the sale, distribution, or exhibition of cinematographic films to the resident person",
      Section: "194J(b)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for professional services to the resident person",
      Section: "194J(b)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of remuneration or fees or commission by whatever name called to a director of a company",
      Section: "194J(b)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for professional services to the resident person who is engaged only in the business of the operation of a call center",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for technical services or royalty for sale, distribution, or exhibition of cinematographic films or to a person who is engaged in the business of the operation of a call center",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for professional services, or any remuneration or fees or commission by whatever name called to a director of a company or royalty (other than for the sale, distribution, or exhibition of cinematographic films) or any other sum referred to in Section 28(va) to the resident person",
      Section: "194J(b)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of any other sum to the resident person who is engaged only in the business of the operation of a call center as specified in Section 194J(d)",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for technical services to the resident person who is engaged only in the business of the operation of a call center",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of royalty in the nature of consideration for the sale, distribution, or exhibition of cinematographic films to the resident person",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of royalty to the resident person who is engaged only in the business of the operation of a call center",
      Section: "194J(a)",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other other sum referred to in Section 28(va) to the resident person.",
      Section: "194J",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees to a person who is engaged in the business of the operation of a call center.",
      Section: "194J",
    },
    {
      Nature_Of_Payment:
        "Payment or credit the amount of fees for professional services, or fees for technical services or any remuneration or fees or commission by whatever name called to a director of a company or royalty or any other other sum referred to in Section 28(va) to the resident person or to a person who is engaged in the business of the operation of a call center.",
      Section: "194J",
    },
    {
      Nature_Of_Payment:
        "Income in respect of -(a) units of a Mutual Fund specified under clause (23D) of section 10; or (b) units from the Administrator of the specified undertaking; or (c) units from the specified company paid or payable to a resident (other than in the nature of capital gain)",
      Section: "194K",
    },
    {
      Nature_Of_Payment:
        "Income in the nature of capital gains paid or payable to a resident in respect of units of a Mutual Fund or from the Administrator of the specified undertaking or from a specified company.",
      Section: "194K",
    },
    {
      Nature_Of_Payment:
        "Payment of compensation or enhanced compensation or consideration or enhanced consideration on the acquisition of certain immovable property (excluding compensation in case of agricultural land)",
      Section: "194LA",
    },
    {
      Nature_Of_Payment:
        "Payment of compensation or enhanced compensation or consideration or enhanced consideration in respect of any award or agreement which has been exempted from the levy of income-tax under section 96 of the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 (30 of 2013).",
      Section: "194LA",
    },
    {
      Nature_Of_Payment:
        "Payment of compensation or enhanced compensation or consideration or enhanced consideration on the account of compulsory acquisition of agricultural land",
      Section: "194LA",
    },
    {
      Nature_Of_Payment:
        "Interest payable to a non-resident by an infrastructure debt fund referred to under section 10(47)",
      Section: "194LB",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of interest by business trust (received or receivable from a special purpose vehicle referred to in Section 10(23FC)(a)) to resident unit holders",
      Section: "194LBA(a)",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of dividend by business trust [received or receivable from a special purpose vehicle referred to in Section 10(23FC)(b) who has not exercised the option under Section 115BAA] to resident unit holders",
      Section: "194LBA",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of interest or dividend by business trust (received or receivable from a special purpose vehicle referred to in Section 10(23FC)(a) or Section 10(23FC)(b)) respectively or in the nature of renting or leasing or letting out any real estate asset owned directly by the business trust (referred to in Section 10(23FCA)) to resident unit holders",
      Section: "194LBA",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of dividend by business trust (received or receivable from a special purpose vehicle referred to in Section 10(23FC)(b)) to resident unit holders if the special purpose vehicle referred to in said clause has exercised the option under Section 115BAA.",
      Section: "194LBA(b)",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of renting or leasing or letting out any real estate asset owned directly by business trust being a real estate investment trust referred to in Section 10(23FCA) to resident unit holders.",
      Section: "194LBA",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of interest by business trust (received or receivable from a special purpose vehicle referred to in Section 10(23FC)(a)) to non-resident unit holders",
      Section: "194LBA(a)",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of dividend by business trust (received or receivable from a special purpose vehicle referred to in Section 10(23FC)(b)) to non-resident unit holders if the special purpose vehicle referred to in said clause has exercised the option under Section 115BAA.",
      Section: "194LBA(b)",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of dividend by business trust (received or receivable from a special purpose vehicle referred to in Section 10(23FC)(b) to non-resident unit holders if the special purpose vehicle referred to in said clause has not exercised the option under Section 115BAA.",
      Section: "194LBA(2)",
    },
    {
      Nature_Of_Payment:
        "Payment in the nature of renting or leasing or letting out any real estate asset owned directly by business trust referred in section 10(23FCA) to non-resident unit holders.",
      Section: "194LBA(c)",
    },
    {
      Nature_Of_Payment:
        "Payment to unit holder in respect of units of the investment fund specified in Section 115UB [other than income referred to in Section 10(23FBB) which is of the same nature as income chargeable under the head 'Profits & gains of business or profession'",
      Section: "194LBB",
    },
    {
      Nature_Of_Payment:
        "Income in respect of units of the investment fund referred to in Section 115UB which is of the same nature as income chargeable under the head 'Profits & gains of business or profession' [Section 10(23FBB)]",
      Section: "194LBB",
    },
    {
      Nature_Of_Payment:
        "Income in respect of units of the investment fund in the case of a non-resident (not being a company) or a foreign company which is not chargeable to tax under the provisions of the Act",
      Section: "194LBB",
    },
    {
      Nature_Of_Payment:
        "Income in respect of investment made in a securitization trust (specified in Explanation (d) of section 115TCA)",
      Section: "194LBC",
    },
    {
      Nature_Of_Payment:
        "Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor (between 1 June 2013 to 1 July 2020)",
      Section: "194LD",
    },
    {
      Nature_Of_Payment:
        "Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor (between 1 June 2013 to 1 July 2023)",
      Section: "194LD",
    },
    {
      Nature_Of_Payment:
        "Payment of interest on municipal debt securities to a Foreign Institutional Investor or a Qualified Foreign Investor (between 1 April 2020 to 1 July 2023)",
      Section: "194LD",
    },
    {
      Nature_Of_Payment:
        "Payment of commission (not being insurance commission), brokerage, contractual fee, professional fee to a resident person by an Individual or a HUF who is not liable to deduct TDS under section 194C, 194H, or 194J.",
      Section: "194M",
    },
    {
      Nature_Of_Payment:
        "Payment or credit of an amount by the e-commerce operator to an e-commerce participant where the sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator through its digital or electronic facility or platform and where such e-commerce participant, being an individual or HUF, has provided a valid PAN or Aadhar Number to the e-commerce operator.",
      Section: "194O",
    },
    {
      Nature_Of_Payment:
        "Payment or credit of an amount by the e-commerce operator to an e-commerce participant in case of where the sale of goods or provision of services of an e-commerce participant is facilitated by an e-commerce operator through its digital or electronic facility or platform.",
      Section: "194O",
    },
    {
      Nature_Of_Payment:
        "Payment or credit of an amount by the e-commerce operator to an e-commerce participant.",
      Section: "194O",
    },
    { Nature_Of_Payment: "Royalty", Section: "195" },
    {
      Nature_Of_Payment:
        "Royalty in pursuance of an agreement made by such non-resident with Government or Indian Company where the agreement is made after the 31st day of March, 1961 but before the 1st day of April, 1976",
      Section: "195",
    },
    { Nature_Of_Payment: "Fee for Technical Services", Section: "195" },
    {
      Nature_Of_Payment:
        "Fee for Technical Services in pursuance of an agreement made by such non-resident with Government or Indian Company where the agreement is made after the 31st day of March, 1961 but before the 1st day of April, 1976",
      Section: "195",
    },
    { Nature_Of_Payment: "Business Income", Section: "195" },
    { Nature_Of_Payment: "Any other income", Section: "195" },
    { Nature_Of_Payment: "Dividend Income", Section: "195" },
    {
      Nature_Of_Payment:
        "Income in respect of investment made by a Non-resident Indian Citizen",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Income by way of long-term capital gains referred to in Section 115E in the case of a Non-resident Indian Citizen",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Income by way of long-term capital gains referred to in sub-clause (iii) of clause (c) of sub-Section (1) of Section 112",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Income by way of long-term capital gains as referred to in Section 112A",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Income by way of short-term capital gains referred to in Section 111A",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Any other income by way of long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36), and 112A",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred by Government or the Indian concern in foreign currency (not being income by way of interest referred to in Section 194LB or Section 194LC)",
      Section: "195",
    },
    {
      Nature_Of_Payment:
        "Income in respect of units of Mutual Fund specified under section 10(23D)",
      Section: "196A",
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
    <div className={classes.naturepayment}>
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
          Nature of Payment-To-Section Master
        </a>
      </span>
      <section>
        {/* <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button> */}
        <button onClick={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Masters
        </button>
      </section>

      <table className={classes.table}>
        <tbody>
          <tr>
            {/* <th>Select</th> */}
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
              Section
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
            {/* <th>No. of Pages</th> */}
            {/* <th>No. of Records</th>
            <th>Processed Records</th>
            <th>Error Records</th>
            <th>File Download</th>
            <th>Report Download</th>
            <th>Type</th>
            <th>Actions</th> */}
          </tr>
          
          {paymentData.slice(0, 10).map((val, idx) => {
            return (
              <tr id={idx}>
                {/* <td>
                  <input type="checkbox" name="" id="" />
                </td> */}
                <td>{val.Nature_Of_Payment}</td>
                <td>{val.Section}</td>
                {/* <td>
                      <ChevronRightIcon
                        style={{
                          fontSize: "2rem",
                          color: "white",
                          background: "#4f2d7f",
                          borderRadius: "50%",
                        }}
                      />
                    </td> */}
                {/* <td>140</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default NaturePayment;
