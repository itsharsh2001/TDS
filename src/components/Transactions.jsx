import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";

import classes from "./Transactions.module.css";
import TransactionData from "./Transactions/TransactionData/TransactionData";
import BIReport from "./Transactions/BIReports/BIReport";
import Challans from "./Transactions/Challans/Challans";
import ClientPositionReport from "./Transactions/ClientPositionReport/ClientPositionReport";
import TransactionProcessing from "./Transactions/TransactionProcessing/TransactionProcessing";
import GLReconciliations from "./Transactions/GLReconciliations/GLReconciliations";
import DataTransformationModule from "./Transactions/DataTransformationModule/DataTransformationModule";

import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Transactions = () => {
  const [monthly, setMonthly] = useState(true);
  const [quarterly, setQuarterly] = useState(false);
  const [annually, setAnnually] = useState(false);

  const [activeModule, setActiveModule] = useState("");

  const [visibleFields, setVisibleFields] = useState({
    client: false,
    tan: false,
    financial: false,
  });

  const [monthSelected, setMonthSelected] = useState(false);

  const activeModuleSetter = (module) => {
    setMonthly(false);
    setAnnually(false);
    setQuarterly(false);

    setActiveModule(module);
    if (module == "") {
      setMonthly(true);
    }
  };

  const compliancesSetter = (type) => {
    setMonthly(false);
    setAnnually(false);
    setQuarterly(false);

    if (type == "monthly") {
      setMonthly(true);
    } else if (type == "quarterly") {
      setQuarterly(true);
    } else if (type == "annually") {
      setAnnually(true);
    }
  };

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };

  const [clientIdentity, setClientIdentity] = useState("");

  return (
    <div className={classes.transactions}>
      <div>
        <select
          onChange={(e) => {
            setClientIdentity(e.target.value);
            return setVisibleFields({ ...visibleFields, client: true });
          }}
          name=""
          id=""
        >
          <option value="">Select Client</option>
          <option value="ABC Consultancy Limited">
            ABC Consultancy Limited - BKICA9561K
          </option>
          <option value="ABC Motors Limited">
            ABC Motors Limited - BKICD9828K
          </option>
          {/* <option value="">ABC Chemicals Limited - BKICG6641K</option>
          <option value="">ABC Powers Limited - BKICG6641K</option>
          <option value="">ABC Steel Limited - BKICM7469K</option> */}
          {/* <option value="">BKICJ1426K</option> */}
          {/* <option value="">BKICM7469K</option> */}
        </select>
        <select
          onChange={() => {
            return setVisibleFields({ ...visibleFields, tan: true });
          }}
          name=""
          id=""
        >
          <option value="">Select TAN</option>
          {clientIdentity == "ABC Consultancy Limited" && (
            <>
              <option value="">Head Office - PDMS01068F</option>
              <option value="">Sahibabad Office - BFES03018Z</option>
              <option value="">Faridabad Office - RSEX13028F</option>
            </>
          )}
          {clientIdentity == "ABC Motors Limited" && (
            <>
              <option value="">Head Office - AVMS01248W</option>
            </>
          )}
        </select>
        <select
          onChange={() => {
            return setVisibleFields({ ...visibleFields, financial: true });
          }}
          name=""
          id=""
        >
          <option value="">Select Financial Year</option>
          <option value="">FY 2023-24</option>
          {/* <option value="">FY 2022-23</option> */}
          {/* <option value="">FY 2021-22</option> */}
        </select>
        {activeModule == "transactiondata" && (
          <select
            onChange={() => {
              return setMonthSelected(true);
            }}
            name=""
            id=""
          >
            <option value="">Select Month</option>
            <option value="">July(Current Month)</option>
            <option value="">June</option>
            <option value="">May</option>
            <option value="">April</option>
          </select>
        )}
        {/* {activeModule == "bireport" && (
          <select name="" id="">
            <option value="">July</option>
          </select>
        )} */}
      </div>

      {/* {(monthly||quarterly||annually) && 
      } */}
      {/* {( visibleFields.client && visibleFields.tan && visibleFields.financial )&&<ul>
        <li
          style={monthly ? hoverStyle : {}}
          onClick={() => {
            setActiveModule("");
            return compliancesSetter("monthly");
          }}
        >
          Monthly Compliances
        </li>
        <li
          style={quarterly ? hoverStyle : {}}
          onClick={() => {
            setActiveModule("");
            return compliancesSetter("quarterly");
          }}
        >
          Quarterly Compliances
        </li>
        <li
          style={annually ? hoverStyle : {}}
          onClick={() => {
            setActiveModule("");
            return compliancesSetter("annually");
          }}
        >
          Annual Compliances
        </li>
      </ul>} */}

      {visibleFields.client &&
        visibleFields.tan &&
        visibleFields.financial &&
        monthly && (
          <>
            <section>
              <span
                style={{
                  border: "2px solid var(--bright-purple-60, #C6A7FF)",
                  background: "var(--bright-purple-40, #D9C5FF)",
                }}
                onClick={() => {
                  return activeModuleSetter("transactiondata");
                }}
              >
                <p>Transaction Data</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span
                style={{
                  border: "2px solid var(--coral-60, #FF9792)",
                  background: "var(--coral-40, #FFB9B6)",
                }}
                onClick={() => {
                  return activeModuleSetter("clientpositionreport");
                }}
              >
                <p>Client Position Report</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span
                style={{
                  border: "2px solid var(--teal-60, #66C8D1)",
                  background: "var(--teal-40, #99DBE1)",
                }}
                onClick={() => {
                  return activeModuleSetter("datatransformation");
                }}
              >
                <p>Data Transformation Module</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
            <section>
              <span
                style={{
                  border: "2px solid var(--yellow-60, #FFDA8B)",
                  background: "var(--yellow-40, #FFE7B1)",
                }}
                onClick={() => {
                  return activeModuleSetter("transactionprocessing");
                }}
              >
                <p>Transaction Processing Center</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span
                style={{
                  border: "2px solid var(--dark-grey-80, #D6D0CA)",
                  background: "var(--dark-grey-60, #E0DCD6)",
                }}
                onClick={() => {
                  return activeModuleSetter("bireport");
                }}
              >
                <p>BI Report</p>
                <PeopleIcon className={classes.icon} />
              </span>
              <span
                style={{
                  border: "2px solid var(--core-purple-60, #9581B2)",
                  background: "var(--core-purple-40, #B9ABCC)",
                }}
                onClick={() => {
                  return activeModuleSetter("glreconcillations");
                }}
              >
                <p>GL Reconciliations</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
            <section>
              <span
                style={{
                  border: "2px solid var(--dark-purple-60, #807294)",
                  background: "var(--dark-purple-40, #AAA1B7)",
                }}
                onClick={() => {
                  return activeModuleSetter("challans");
                }}
              >
                <p>Challans</p>
                <PeopleIcon className={classes.icon} />
              </span>
            </section>
          </>
        )}

      {activeModule == "transactiondata" && (
        <TransactionData
          clientIdentity={clientIdentity}
          monthSelected={monthSelected}
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "bireport" && (
        <BIReport
          clientIdentity={clientIdentity}
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "challans" && (
        <Challans
          clientIdentity={clientIdentity}
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "clientpositionreport" && (
        <ClientPositionReport
          clientIdentity={clientIdentity}
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "transactionprocessing" && (
        <TransactionProcessing
          clientIdentity={clientIdentity}
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "glreconcillations" && (
        <GLReconciliations
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "datatransformation" && (
        <DataTransformationModule
          compliancesSetter={compliancesSetter}
          transactionHomeScreen={activeModuleSetter}
        />
      )}
    </div>
  );
};

export default Transactions;
