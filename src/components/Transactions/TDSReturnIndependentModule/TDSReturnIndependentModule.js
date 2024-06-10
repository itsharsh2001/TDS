import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./TDSReturnIndependentModule.module.css";

const TDSReturnIndependentModule = (props) => {
  return (
    <div className={classes.independent}>
         <section>
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
          TDS Return Filing Via Independent Module
        </a>

        {/* <PurpleButton>
  <DownloadIcon /> Upload Template
</PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  )
}

export default TDSReturnIndependentModule