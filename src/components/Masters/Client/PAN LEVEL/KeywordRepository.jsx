import React, { useState } from "react";
import classes from "./KeywordRepository.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from "./Data Type/Uploaded";
import ViewMaster from "./Data Type/ViewMaster";

const KeywordRepository = (props) => {
  const [viewData, setViewData] = useState(false)
  const [templateFileUpload, setTemplateFileUpload] = useState(false);


  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }

  return (<>
    
    <div className={classes.keywordrepository}>
      <span>
        {/* <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">Client Level Master</a>
        <ChevronRightIcon className={classes.righticon} /> */}
        <a onClick={(e)=>{e.preventDefault(); return props.panMasterSetter(0)}} href="">Client Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">Keyword Repository Master</a>
      </span>
      <ul>
        <li style={!viewData?hoverStyle:{}} onClick={()=>setViewData(false)}>Uploaded Data</li>
        <li style={viewData?hoverStyle:{}} onClick={()=>setViewData(true)}>View Master Data</li>
      </ul>

      {!viewData && <Uploaded type = 'Keyword' />}
      {viewData && <ViewMaster clientIdentity={props.clientIdentity} type = 'Keyword'/>}
    </div>
    </>
  );
  
};

export default KeywordRepository;
