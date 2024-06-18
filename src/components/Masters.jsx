import React, { useState } from "react";
import classes from "./Masters.module.css";

import PeopleIcon from "@mui/icons-material/People";
import KeywordOverriding from "./Masters/Client/TAN LEVEL/KeywordOverriding";
import GLMaster from "./Masters/Client/TAN LEVEL/GLMaster";
import HSNSACMaster from "./Masters/Client/TAN LEVEL/HSNSACMaster";
import PO from "./Masters/Client/TAN LEVEL/PO";
import DocumentSupply from "./Masters/Client/TAN LEVEL/DocumentSupply";

import VendorMaster from "./Masters/Client/PAN LEVEL/VendorMaster";
import LDC from "./Masters/Client/PAN LEVEL/LDC";
import KeywordReposory from "./Masters/Client/PAN LEVEL/KeywordRepository";
import SectionMapping from "./Masters/Client/TAN LEVEL/SectionMapping";
import TaxPosition from "./Masters/Client/TAN LEVEL/TaxPosition";
import TransactionBalance from "./Masters/Client/TAN LEVEL/TransactionBalance";

function Masters({ sidebar }) {
  const [panLevelMasters, setPanLevelMasters] = useState(0);
  const [clientMasters, setClientMasters] = useState(true);

  const [showEverything, setShowEverything] = useState(false);

  const [tanLevelMasterType, setTanLevelMasterType] = useState("none");

  const [visibleFields, setVisibleFields] = useState({
    group: "",
    client: "",
    branch: "",
  });

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
              {
                visibleFields.client=='ABC Consultancy Limited' &&
                <>
                  <option value="Sahibabad Office">Sahibabad Office</option>
                  <option value="Faridabad Office">Faridabad Office</option>
                </>
              }
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
                  <p>Keyword Master</p>
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
                  <p>Transition Balance Master</p>
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
        <KeywordOverriding clientIdentity={clientIdentity}
          tanLevelMasterTypeSetter={tanLevelMasterTypeSetter}
        />
      )}
      {tanLevelMasterType == "gl" && (
        <GLMaster clientIdentity={clientIdentity} tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "hsnsac" && (
        <HSNSACMaster clientIdentity={clientIdentity} tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "po" && (
        <PO clientIdentity={clientIdentity} tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "documentsupply" && (
        <DocumentSupply clientIdentity={clientIdentity} tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "sectionmapping" && (
        <SectionMapping clientIdentity={clientIdentity} tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "taxposition" && (
        <TaxPosition clientIdentity={clientIdentity} tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
      )}
      {tanLevelMasterType == "transactionbalance" && (
        <TransactionBalance clientIdentity={clientIdentity}
          tanLevelMasterTypeSetter={tanLevelMasterTypeSetter}
        />
      )}
    </div>
  );
}

export default Masters;
