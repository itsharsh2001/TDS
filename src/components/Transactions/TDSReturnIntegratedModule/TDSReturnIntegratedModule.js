import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./TDSReturnIntegratedModule.module.css";

const TDSReturnIntegratedModule = (props) => {
  return (
    <div className={classes.integrated}><section>
    <a
      onClick={(e) => {
        e.preventDefault();
        return props.transactionHomeScreen("");
      }}
      href=""
    >
      Quarterly Compliance
    </a>
    <ChevronRightIcon className={classes.righticon} />
    <a
      onClick={(e) => {
        e.preventDefault();
      }}
      href=""
    >
      TDS Return Filing Via Integrated Module
    </a>

    {/* <PurpleButton>
<DownloadIcon /> Upload Template
</PurpleButton> */}
  </section>

  <img src="/comingsoon.png" alt="" /></div>
  )
}

export default TDSReturnIntegratedModule