import React, { useState } from 'react'
import classes from './LDC.module.css'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from "./Data Type/Uploaded";
import ViewMaster from "./Data Type/ViewMaster";
import Utilization from './Data Type/Utilization';
import Specified from './Data Type/Specified';

const LDC = (props) => {
  const [dataType, setDataType] = useState('uploaded')
  const [viewData, setViewData] = useState(false)
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }

  return (
    <div className={classes.ldc}>
        <span>
        {/* <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">Client Level Master</a>
        <ChevronRightIcon className={classes.righticon} /> */}
        <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">Client Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">LDC Master</a>
      </span>
      <ul>
        <li style={dataType=='uploaded'?hoverStyle:{}} onClick={()=>setDataType('uploaded')}>Uploaded Data</li>
        <li style={dataType=='viewmaster'?hoverStyle:{}} onClick={()=>setDataType('viewmaster')}>View Master Data</li>
        <li style={dataType=='utilization'?hoverStyle:{}} onClick={()=>setDataType('utilization')}>LDC Utilization</li>
      </ul>

      {dataType=='uploaded' && <Uploaded type = 'LDC' />}
      {dataType=='viewmaster' && <ViewMaster clientIdentity={props.clientIdentity} type = 'LDC'/>}
      {dataType=='utilization' && <Specified clientIdentity={props.clientIdentity} type = 'LDC'/>}
    </div>
  )
}

export default LDC