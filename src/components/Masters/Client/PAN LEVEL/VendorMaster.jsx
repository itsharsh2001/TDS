import React, { useState } from "react";
import classes from "./VendorMaster.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from "./Data Type/Uploaded";
import ViewMaster from "./Data Type/ViewMaster";
import Specified from "./Data Type/Specified";

const VendorMaster = (props) => {
  const [dataType, setDataType] = useState('uploaded')
  const [viewData, setViewData] = useState(false)
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }

  return (
    <div className={classes.vendor}>
      <span>
        {/* <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">Client Level Master</a>
        <ChevronRightIcon className={classes.righticon} /> */}
        <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">Client Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">Vendor Master</a>
      </span>
      <ul>
        <li style={dataType=='uploaded'?hoverStyle:{}} onClick={()=>setDataType('uploaded')}>Uploaded Data</li>
        <li style={dataType=='viewmaster'?hoverStyle:{}} onClick={()=>setDataType('viewmaster')}>View Master Data</li>
        <li style={dataType=='specified'?hoverStyle:{}} onClick={()=>setDataType('specified')}>Specified Person Check</li>
      </ul>

      {dataType=='uploaded' && <Uploaded clientIdentity={props.clientIdentity} type = 'Vendor' />}
      {dataType=='viewmaster' && <ViewMaster clientIdentity={props.clientIdentity} type = 'Vendor'/>}
      {dataType=='specified' && <Specified clientIdentity={props.clientIdentity} type = 'Vendor'/>}
    </div>
  );
};

export default VendorMaster;
