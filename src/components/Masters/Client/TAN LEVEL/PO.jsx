import React, {useState} from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from './Data Type/Uploaded';
import ViewMaster from './Data Type/ViewMaster';
import classes from './PO.module.css'

const PO = (props) => {
  const [viewData, setViewData] = useState(false)
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }

  return (
    <div className={classes.po}>
       <span>
        {/* <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('none')}} href="">Client Level Master</a>
        <ChevronRightIcon className={classes.righticon}/> */}
        <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('none')}} href="">Client Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        {/* <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('')}} href="">Head Office</a> */}
        {/* <ChevronRightIcon className={classes.righticon} /> */}
        <a onClick={(e)=>{e.preventDefault();}} href="">PO Master</a>
      </span>
      <ul>
        <li style={!viewData?hoverStyle:{}} onClick={()=>setViewData(false)}>Uploaded Data</li>
        <li style={viewData?hoverStyle:{}} onClick={()=>setViewData(true)}>View Master Data</li>
      </ul>

      {!viewData&&<Uploaded type = 'Po'/>}
      {viewData&&<ViewMaster type = 'Po'/>}
    </div>
  )
}

export default PO