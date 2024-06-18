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
import BaseNature from "./Masters/Application/BaseNature";
import SubNature from "./Masters/Application/SubNature";
import Keyword from "./Masters/Application/Keyword";

export const Masters2 = ({ sidebar }) => {
  const [masterType, setMasterType] = useState("application");

  const [showEverything, setShowEverything] = useState(false);

  const [visibleFields, setVisibleFields] = useState({
    group: "",
    client: "",
  });

  const [panLevelMasters, setPanLevelMasters] = useState(0);

  const [tanLevelMasterType, setTanLevelMasterType] = useState("none");
  const [clientIdentity, setClientIdentity] = useState("");

  const [app1, setApp1] = useState(false);
  const [app2, setApp2] = useState(false);
  const [app3, setApp3] = useState(false);
  const [app4, setApp4] = useState(false);
  const [app5, setApp5] = useState(false);
  const [app6, setApp6] = useState(false);
  const [app7, setApp7] = useState(false);
  const [app8, setApp8] = useState(false);

  const panMasterSetter = (val) => {
    setPanLevelMasters(val);
  };

  const tanLevelMasterTypeSetter = (module) => {
    setTanLevelMasterType(() => {
      return module;
    });
    if (module == "none") {
      setMasterType("tan");
    }
  };

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const hoverStyle = {
    color: "var(--GT-Purple, #4f2d7f)",
    borderBottom: "2px solid #4f2d7f",
  };

  const superMastersTypeToggler = (type) => {
    setMasterType(type);
  };

  const activeAppMasterSetter = () => {
    setApp1(false);
    setApp2(false);
    setApp3(false);
    setApp4(false);
    setApp5(false);
    setApp6(false);
    setApp7(false);
    setApp8(false);
    setMasterType("application");
  };

  return (
    <div
      style={sidebar ? { width: "77.5%" } : { width: "100%" }}
      className={classes.masters}
    >
      {masterType == "application" && (
        <>
          <section style={{ marginTop: "3rem" }}>
            <span
              style={{
                border: "2px solid var(--core-purple-60, #9581B2)",
                background: "var(--core-purple-40, #B9ABCC)",
              }}
              onClick={() => {
                setApp1(true);
                return setMasterType("");
              }}
            >
              <p>Nature of Payment Rate & Threshold Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              style={{
                border: "2px solid var(--coral-60, #FF9792)",
                background: "var(--coral-40, #FFB9B6)",
              }}
              onClick={() => {
                setApp2(true);
                return setMasterType("");
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
                setApp3(true);
                return setMasterType("");
              }}
            >
              <p>Interest & Penalty Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
          <section>
            {/* <span
              onClick={() => {
                setApp4(true);
                return setMasterType("");
              }}
            >
              <p>Threshold Type & Value Master</p>
              <PeopleIcon className={classes.icon} />
            </span> */}
            <span
              style={{
                border: "2px solid var(--yellow-60, #FFDA8B)",
                background: "var(--yellow-40, #FFE7B1)",
              }}
              onClick={() => {
                setApp5(true);
                return setMasterType("");
              }}
            >
              <p>HSN/SAC Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span
              style={{
                border: "2px solid var(--dark-grey-80, #D6D0CA)",
                background: "var(--dark-grey-60, #E0DCD6)",
              }}
              onClick={() => {
                setApp6(true);
                return setMasterType("");
              }}
            >
              <p>Document & Supply Type Masters</p>
              <PeopleIcon className={classes.icon} />
            </span>

            <span
              style={{
                border: "2px solid var(--core-purple-60, #9581B2)",
                background: "var(--core-purple-40, #B9ABCC)",
              }}
              onClick={() => {
                setApp7(true);
                return setMasterType("");
              }}
            >
              <p>Base Nature of Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
          <section>
            {/* <span
              onClick={() => {
                setApp4(true);
                return setMasterType("");
              }}
            >
              <p>Threshold Type & Value Master</p>
              <PeopleIcon className={classes.icon} />
            </span> */}
            <span
              style={{
                border: "2px solid var(--teal-60, #66C8D1)",
                background: "var(--teal-40, #99DBE1)",
              }}
              onClick={() => {
                setApp8(true);
                return setMasterType("");
              }}
            >
              <p>Sub Base Nature of Master</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
        </>
      )}

      {app1 && <NaturePayment transactionHomeScreen={activeAppMasterSetter} />}
      {app2 && <Keyword transactionHomeScreen={activeAppMasterSetter} />}
      {app3 && (
        <InterestPenalty transactionHomeScreen={activeAppMasterSetter} />
      )}
      {app4 && <ThresholdType transactionHomeScreen={activeAppMasterSetter} />}
      {app5 && <HSNSAC transactionHomeScreen={activeAppMasterSetter} />}
      {app6 && <DocumentSupply transactionHomeScreen={activeAppMasterSetter} />}
      {app7 && <BaseNature transactionHomeScreen={activeAppMasterSetter} />}
      {app8 && <SubNature transactionHomeScreen={activeAppMasterSetter} />}
    </div>
  );
};
