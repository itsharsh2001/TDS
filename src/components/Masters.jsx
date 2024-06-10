import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import NaturePayment from "./Masters/Application/NaturePayment";
import SectionTDS from "./Masters/Application/SectionTDS";
import InterestPenalty from "./Masters/Application/InterestPenalty";
import ThresholdType from "./Masters/Application/ThresholdType";
import HSNSAC from "./Masters/Application/HSNSAC";
// import DocumentSupply from "./Masters/Application/DocumentSupply";

import classes from "./Masters.module.css";
import TanLevelMasters from "./Masters/Client/TAN LEVEL/TanLevelMasters";
import KeywordOverriding from "./Masters/Client/TAN LEVEL/KeywordOverriding";
import GLMaster from "./Masters/Client/TAN LEVEL/GLMaster";
import HSNSACMaster from "./Masters/Client/TAN LEVEL/HSNSACMaster";
import PO from "./Masters/Client/TAN LEVEL/PO";
import DocumentSupply from "./Masters/Client/TAN LEVEL/DocumentSupply"

import VendorMaster from "./Masters/Client/PAN LEVEL/VendorMaster";
import LDC from "./Masters/Client/PAN LEVEL/LDC";
import KeywordReposory from "./Masters/Client/PAN LEVEL/KeywordRepository";
import SectionMapping from "./Masters/Client/TAN LEVEL/SectionMapping";
import TaxPosition from "./Masters/Client/TAN LEVEL/TaxPosition";
import TransactionBalance from "./Masters/Client/TAN LEVEL/TransactionBalance";

function Masters({ sidebar }) {
  const tanBranchData = [
    { TAN_Number: "PDMS01068F", Branch_Name: "Head Office" },
    { TAN_Number: "BFES03018Z", Branch_Name: "Sahibabad Office" },
    { TAN_Number: "RSEX13028F", Branch_Name: "Faridabad Office" },
  ];

  const tanBranchData2 = [
    { TAN_Number: "AVMS01248W", Branch_Name: "Head Office" },
  ];

  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const [panLevelMasters, setPanLevelMasters] = useState(0);
  const [clientMasters, setClientMasters] = useState(true);
  const [applicationMasters, setApplicationMasters] = useState(true);

  const [tanLevelMasters, setTanLevelMasters] = useState(false);

  const [showEverything, setShowEverything] = useState(false);

  const [app1, setApp1] = useState(false);
  const [app2, setApp2] = useState(false);
  const [app3, setApp3] = useState(false);
  const [app4, setApp4] = useState(false);
  const [app5, setApp5] = useState(false);
  const [app6, setApp6] = useState(false);

  const [tanLevelMasterType, setTanLevelMasterType] = useState("none");

  const [visibleFields, setVisibleFields] = useState({
    group: "",
    client: "",
    branch: "",
  });

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };

  const activeAppMasterSetter = () => {
    setApp1(false);
    setApp2(false);
    setApp3(false);
    setApp4(false);
    setApp5(false);
    setApp6(false);
    setApplicationMasters(true);
  };

  const superMastersTypeToggler = (module) => {
    setApp1(false);
    setApp2(false);
    setApp3(false);
    setApp4(false);
    setApp5(false);
    setApp6(false);
    setTanLevelMasters(false);
    setTanLevelMasterType("none");
    setPanLevelMasters(0);

    if (module == "client") {
      setClientMasters(true);
      setApplicationMasters(false);
    }

    if (module == "application") {
      setClientMasters(false);
      setApplicationMasters(true);
    }
  };

  const tanLevelMasterTypeSetter = (module) => {
    setTanLevelMasterType(() => {
      return module;
    });
    if (module == "none") {
      setClientMasters(true);
    }
  };

  const panMasterSetter = (module) => {
    setPanLevelMasters(module);
    setClientMasters((prevState) => {
      return !prevState;
    });
  };

  const [clientIdentity, setClientIdentity] = useState("");

  return (
    <div
      style={sidebar ? { width: "77.5%" } : { width: "100%" }}
      className={classes.masters}
    >
      {clientMasters && (
        <>
          <div>
            <select
              // value={visibleFields.group}
              onChange={() => {
                return setVisibleFields({ ...visibleFields, group: "ABC" });
              }}
              name=""
              id=""
            >
              <option value="">Choose Group</option>
              <option
                selected={visibleFields.group == "ABC" ? true : false}
                value=""
              >
                ABC
              </option>
              <option
                selected={visibleFields.group == "DEF" ? true : false}
                value=""
              >
                DEF
              </option>
              <option
                selected={visibleFields.group == "GHI" ? true : false}
                value=""
              >
                GHI
              </option>
            </select>
            <select
              // value={visibleFields.client}
              onChange={(e) => {
                console.log(e.target.value);
                setClientIdentity(e.target.value);
                return setVisibleFields({
                  ...visibleFields,
                  client: e.target.value,
                });
              }}
              name=""
              id=""
            >
              <option value="">Choose Client</option>
              {/* <option value="">ABC Chemicals Limited</option> */}
              <option
                selected={
                  visibleFields.client == "ABC Motors Limited" ? true : false
                }
                value="ABC Motors Limited"
              >
                ABC Motors Limited
              </option>
              <option
                selected={
                  visibleFields.client == "ABC Consultancy Limited"
                    ? true
                    : false
                }
                value="ABC Consultancy Limited"
              >
                ABC Consultancy Limited
              </option>
            </select>

            <select
              onChange={(e) => {
                console.log(e.target.value);
                // setClientIdentity(e.target.value);
                return setVisibleFields({
                  ...visibleFields,
                  branch: e.target.value,
                });
              }}
              name=""
              id=""
            >
              <option value="">Choose Branch</option>
              {/* <option value="">ABC Chemicals Limited</option> */}
              <option
                // selected={
                //   visibleFields.client == "ABC Motors Limited" ? true : false
                // }
                value="Head Office"
              >
                Head Office
              </option>
              <option
                // selected={
                //   visibleFields.client == "ABC Consultancy Limited"
                //     ? true
                //     : false
                // }
                value="Sahibabad Office"
              >
                Sahibabad Office
              </option>
              <option
                // selected={
                //   visibleFields.client == "ABC Consultancy Limited"
                //     ? true
                //     : false
                // }
                value="Faridabad Office"
              >
                Faridabad Office
              </option>
            </select>
            <button
              onClick={() => {
                if (
                  visibleFields.client != "" &&
                  visibleFields.group != "" &&
                  visibleFields.branch != ""
                ) {
                  setShowEverything(true);
                }
              }}
            >
              Proceed
            </button>
          </div>

          {showEverything && (
            <>
              {/* <h5>PAN Level Masters</h5> */}
              <section style={{ marginTop: "3rem" }}>
                <span
                  style={{
                    border: "2px solid var(--core-purple-60, #9581B2)",
                    background: "var(--bright-purple-40, #D9C5FF)",
                  }}
                  onClick={() => {
                    return panMasterSetter(1);
                  }}
                >
                  <p>Vendor Master (PAN Level)</p>
                  <PeopleIcon className={classes.icon} />
                </span>
                <span
                  style={{
                    border: "2px solid var(--coral-60, #FF9792)",
                    background: "var(--coral-40, #FFB9B6)",
                  }}
                  onClick={() => {
                    return panMasterSetter(2);
                  }}
                >
                  <p>Keyword Repository</p>
                  <PeopleIcon className={classes.icon} />
                </span>
                <span
                  style={{
                    border: "2px solid var(--teal-60, #66C8D1)",
                    background: "var(--teal-40, #99DBE1)",
                  }}
                  onClick={() => {
                    return panMasterSetter(3);
                  }}
                >
                  <p>LDC Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
              </section>
              <section style={{ marginTop: "3rem" }}>
                <span
                  style={{
                    border: "2px solid var(--yellow-60, #FFDA8B)",
                    background: "var(--yellow-40, #FFE7B1)",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("keyword");
                  }}
                >
                  <p>Government Portal Login Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
                <span
                  style={{
                    border: "2px solid var(--dark-grey-80, #D6D0CA)",
                    background: "var(--dark-grey-60, #E0DCD6)",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("gl");
                  }}
                >
                  <p>GL Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
                <span
                  style={{
                    border: "2px solid var(--core-purple-60, #9581B2)",
                    background: "var(--core-purple-40, #B9ABCC)",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("hsnsac");
                  }}
                >
                  <p>HSN/SAC Master</p>
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
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("po");
                  }}
                >
                  <p>PO Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
                <span
                  style={{
                    border: "2px solid var(--core-purple-60, #9581B2)",
                    background: "#D9C5FF",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("taxposition");
                  }}
                >
                  <p>Tax Position Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
                <span
                  style={{
                    border: "2px solid var(--coral-60, #FF9792)",
                    background: "var(--coral-40, #FFB9B6)",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("sectionmapping");
                  }}
                >
                  <p>TDS Section Mapping Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
              </section>
              <section>
                <span
                  style={{
                    border: "2px solid var(--teal-60, #66C8D1)",
                    background: "var(--teal-40, #99DBE1)",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("documentsupply");
                  }}
                >
                  <p>Document & Supply Type Mapping Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>

                <span
                  style={{
                    border: "2px solid var(--coral-60, #FF9792)",
                    background: "var(--coral-40, #FFB9B6)",
                  }}
                  onClick={() => {
                    setClientMasters(false);
                    return tanLevelMasterTypeSetter("transactionbalance");
                  }}
                >
                  <p>Transaction Balance Master</p>
                  <PeopleIcon className={classes.icon} />
                </span>
              </section>
              {/* <h5>TAN Level Masters</h5>

              <table className={classes.table}>
                <tbody>
                  <tr>
                    
                    <th>TAN Number</th>
                    <th>Branch Name</th>
                    <th>View Details</th>
                    
                  </tr>

                  {clientIdentity == "ABC Consultancy Limited"
                    ? tanBranchData.map((val, idx) => {
                        return (
                          <tr id={idx}>
                            <td>{val.TAN_Number}</td>
                            <td>{val.Branch_Name}</td>
                            <td>
                              <ChevronRightIcon
                                onClick={() => {
                                  setApplicationMasters(false);
                                  setClientMasters(false);
                                  setTanLevelMasters(true);
                                  setTanLevelMasterType("");
                                }}
                                style={{
                                  fontSize: "2rem",
                                  color: "white",
                                  background: "#4f2d7f",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })
                    : tanBranchData2.map((val, idx) => {
                        return (
                          <tr id={idx}>
                            <td>{val.TAN_Number}</td>
                            <td>{val.Branch_Name}</td>
                            <td>
                              <ChevronRightIcon
                                onClick={() => {
                                  setApplicationMasters(false);
                                  setClientMasters(false);
                                  setTanLevelMasters(true);
                                  setTanLevelMasterType("");
                                }}
                                style={{
                                  fontSize: "2rem",
                                  color: "white",
                                  background: "#4f2d7f",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table> */}
            </>
          )}
        </>
      )}

      {panLevelMasters == 1 && (
        <VendorMaster
          clientIdentity={clientIdentity}
          panMasterSetter={panMasterSetter}
        />
      )}
      {panLevelMasters == 2 && (
        <KeywordReposory
          clientIdentity={clientIdentity}
          panMasterSetter={panMasterSetter}
        />
      )}
      {panLevelMasters == 3 && (
        <LDC
          clientIdentity={clientIdentity}
          panMasterSetter={panMasterSetter}
        />
      )}

      {tanLevelMasterType == "keyword" && (
        <KeywordOverriding
          tanLevelMasterTypeSetter={tanLevelMasterTypeSetter}
        />
      )}
      {tanLevelMasterType == "gl" && (
        <GLMaster tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "hsnsac" && (
        <HSNSACMaster tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "po" && (
        <PO tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "documentsupply" && (
        <DocumentSupply tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "sectionmapping" && (
        <SectionMapping tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "taxposition" && (
        <TaxPosition tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "transactionbalance" && (
        <TransactionBalance tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
    </div>
  );
}

export default Masters;
