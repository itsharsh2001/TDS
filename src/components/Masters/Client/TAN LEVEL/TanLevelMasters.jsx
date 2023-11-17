import React,{useState} from "react";
import PeopleIcon from "@mui/icons-material/People";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./TanLevelMasters.module.css";

const TanLevelMasters = (props) => {
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  return (
    <div className={classes.tan}>
      <span>
        <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('none')}} href="">TAN Level Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">Head Office</a>
      </span>

      <section style={{ marginTop: "3rem" }}>
        <span onClick={()=>{return props.tanLevelMasterTypeSetter('keyword')}}>
          <p>Government Portal Login Master</p>
          <PeopleIcon className={classes.iconpeople} />
        </span>
        <span onClick={()=>{return props.tanLevelMasterTypeSetter('gl')}}>
          <p>GL Master</p>
          <PeopleIcon className={classes.iconpeople} />
        </span>
        <span onClick={()=>{return props.tanLevelMasterTypeSetter('hsnsac')}}>
          <p>HSN/SAC Master</p>
          <PeopleIcon className={classes.iconpeople} />
        </span>
      </section>
      <section>
        <span onClick={()=>{return props.tanLevelMasterTypeSetter('po')}}>
          <p>PO Master</p>
          <PeopleIcon className={classes.iconpeople} />
        </span>
      </section>
    </div>
  );
};

export default TanLevelMasters;
