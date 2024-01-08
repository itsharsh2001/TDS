import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import NaturePayment from "./Masters/Application/NaturePayment";
import SectionTDS from "./Masters/Application/SectionTDS";
import InterestPenalty from "./Masters/Application/InterestPenalty";
import ThresholdType from "./Masters/Application/ThresholdType";
import HSNSAC from "./Masters/Application/HSNSAC";
import DocumentSupply from "./Masters/Application/DocumentSupply";

import classes from "./Masters.module.css";
import TanLevelMasters from "./Masters/Client/TAN LEVEL/TanLevelMasters";
import KeywordOverriding from "./Masters/Client/TAN LEVEL/KeywordOverriding";
import GLMaster from "./Masters/Client/TAN LEVEL/GLMaster";
import HSNSACMaster from "./Masters/Client/TAN LEVEL/HSNSACMaster";
import PO from "./Masters/Client/TAN LEVEL/PO";

import VendorMaster from "./Masters/Client/PAN LEVEL/VendorMaster";
import LDC from "./Masters/Client/PAN LEVEL/LDC";
import KeywordReposory from "./Masters/Client/PAN LEVEL/KeywordRepository";

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
  const [clientMasters, setClientMasters] = useState(false);
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

  const [clientIdentity, setClientIdentity] = useState('')

  return (
    <div
      style={sidebar ? { width: "77.5%" } : { width: "100%" }}
      className={classes.masters}
    >
      <ul>
        <li
          style={applicationMasters ? hoverStyle : {}}
          onClick={() => {
            superMastersTypeToggler("application");
          }}
        >
          Application Level Masters
        </li>
        <li
          style={clientMasters ? hoverStyle : {}}
          onClick={() => {
            superMastersTypeToggler("client");
          }}
        >
          Client Level Masters
        </li>
      </ul>
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
              <option selected={visibleFields.group=='ABC'?true:false} value="">ABC</option>
              <option selected={visibleFields.group=='DEF'?true:false} value="">DEF</option>
              <option selected={visibleFields.group=='GHI'?true:false} value="">GHI</option>
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
              <option selected={visibleFields.client=='ABC Motors Limited'?true:false} value="ABC Motors Limited">ABC Motors Limited</option>
              <option selected={visibleFields.client=='ABC Consultancy Limited'?true:false} value="ABC Consultancy Limited">ABC Consultancy Limited</option>
            </select>
            <button
              onClick={() => {
                if (visibleFields.client != "" && visibleFields.group != "") {
                  setShowEverything(true);
                }
              }}
            >
              Proceed
            </button>
          </div>

          {showEverything && <><h5>PAN Level Masters</h5>
          <section>
            <span
              onClick={() => {
                return panMasterSetter(1);
              }}
            >
              <p>Vendor Master (PAN Level)</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              onClick={() => {
                return panMasterSetter(2);
              }}
            >
              <p>Keyword Repository</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              onClick={() => {
                return panMasterSetter(3);
              }}
            >
              <p>LDC Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
          <h5>TAN Level Masters</h5>

          <table className={classes.table}>
            <tbody>
              <tr>
                {/* <th>Select</th> */}
                <th>TAN Number</th>
                <th>Branch Name</th>
                <th>View Details</th>
                {/* <th>No. of Records</th>
            <th>Processed Records</th>
            <th>Error Records</th>
            <th>File Download</th>
            <th>Report Download</th>
            <th>Type</th>
            <th>Actions</th> */}
              </tr>

              {clientIdentity=='ABC Consultancy Limited'? tanBranchData.map((val, idx) => {
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
              }):tanBranchData2.map((val, idx) => {
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
          </table></>}
        </>
      )}
      {applicationMasters && (
        <>
          <section style={{ marginTop: "3rem" }}>
            <span
              onClick={() => {
                setApp1(true);
                return setApplicationMasters(false);
              }}
            >
              <p>Nature of Payment-To-Section Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              onClick={() => {
                setApp2(true);
                return setApplicationMasters(false);
              }}
            >
              <p>Section-To-TDS Rate</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              onClick={() => {
                setApp3(true);
                return setApplicationMasters(false);
              }}
            >
              <p>Interest & Penalty Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
          <section>
            <span
              onClick={() => {
                setApp4(true);
                return setApplicationMasters(false);
              }}
            >
              <p>Threshold Type & Value Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              onClick={() => {
                setApp5(true);
                return setApplicationMasters(false);
              }}
            >
              <p>HSN/SAC Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              onClick={() => {
                setApp6(true);
                return setApplicationMasters(false);
              }}
            >
              <p>Document & Supply Type Masters</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
        </>
      )}

      {panLevelMasters == 1 && (
        <VendorMaster clientIdentity={clientIdentity} panMasterSetter={panMasterSetter} />
      )}
      {panLevelMasters == 2 && (
        <KeywordReposory clientIdentity={clientIdentity} panMasterSetter={panMasterSetter} />
      )}
      {panLevelMasters == 3 && <LDC clientIdentity={clientIdentity} panMasterSetter={panMasterSetter} />}

      {app1 && <NaturePayment transactionHomeScreen={activeAppMasterSetter} />}
      {app2 && <SectionTDS transactionHomeScreen={activeAppMasterSetter} />}
      {app3 && (
        <InterestPenalty transactionHomeScreen={activeAppMasterSetter} />
      )}
      {app4 && <ThresholdType transactionHomeScreen={activeAppMasterSetter} />}
      {app5 && <HSNSAC transactionHomeScreen={activeAppMasterSetter} />}
      {app6 && <DocumentSupply transactionHomeScreen={activeAppMasterSetter} />}

      {tanLevelMasterType == "" && (
        <TanLevelMasters tanLevelMasterTypeSetter={tanLevelMasterTypeSetter} />
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
    </div>
  );
}

export default Masters;
