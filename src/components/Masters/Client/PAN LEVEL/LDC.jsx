import React, { useState } from 'react'
import classes from './LDC.module.css'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from "./Data Type/Uploaded";
import ViewMaster from "./Data Type/ViewMaster";

const LDC = (props) => {
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
        <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">PAN Level Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">LDC Master</a>
      </span>
      <ul>
        <li style={!viewData?hoverStyle:{}} onClick={()=>setViewData(false)}>Uploaded Data</li>
        <li style={viewData?hoverStyle:{}} onClick={()=>setViewData(true)}>View Master Data</li>
      </ul>

      {!viewData && <Uploaded type = 'LDC' />}
      {viewData && <ViewMaster type = 'LDC'/>}
    </div>
  )
}

export default LDC