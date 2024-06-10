import React, { useState } from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from './Data Type/Uploaded';

import classes from './SubNature.module.css'
import ViewMaster from './Data Type/ViewMaster';

const SubNature = (props) => {
  const [viewData, setViewData] = useState(false)
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }
  return (
    <div className={classes.subbase}>
       <span>
        {/* <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('none')}} href="">Client Level Master</a>
        <ChevronRightIcon className={classes.righticon}/> */}
        <a onClick={(e)=>{e.preventDefault(); return props.transactionHomeScreen()}} href="">Client Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        {/* <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('')}} href="">Head Office</a> */}
        {/* <ChevronRightIcon className={classes.righticon} /> */}
        <a onClick={(e)=>{e.preventDefault();}} href="">Sub Base Nature of Payment Master</a>
      </span>
      <ul>
        <li style={!viewData?hoverStyle:{}} onClick={()=>setViewData(false)}>Uploaded Data</li>
        <li style={viewData?hoverStyle:{}} onClick={()=>setViewData(true)}>View Master Data</li>
      </ul>

      {!viewData && <Uploaded type = 'SubBase'/>}
      {viewData && <ViewMaster type = 'SubBase'/>}
    </div>
  )
}

export default SubNature