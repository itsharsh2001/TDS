import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./RevisedReturnModule.module.css";
const RevisedReturnModule = (props) => {
  return (
    <div className={classes.revised}>
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
          Revised Return
        </a>

        {/* <PurpleButton>
  <DownloadIcon /> Upload Template
</PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  )
}

export default RevisedReturnModule