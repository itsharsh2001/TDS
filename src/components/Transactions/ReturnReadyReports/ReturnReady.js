import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./ReturnReady.module.css";
const ReturnReady = (props) => {
  return (
    <div className={classes.ready}>
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
          Return Ready Reports
        </a>

        {/* <PurpleButton>
  <DownloadIcon /> Upload Template
</PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  )
}

export default ReturnReady