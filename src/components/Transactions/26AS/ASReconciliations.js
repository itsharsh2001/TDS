import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./ASReconciliations.module.css";
const ASReconciliations = (props) => {
  return (
    <div className={classes.as}>
      <section>
        <a
          onClick={(e) => {
            e.preventDefault();
            return props.transactionHomeScreen("");
          }}
          href=""
        >
          Annual Compliance
        </a>
        <ChevronRightIcon className={classes.righticon} />
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href=""
        >
          26AS Reconciliations
        </a>

        {/* <PurpleButton>
  <DownloadIcon /> Upload Template
</PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  )
}

export default ASReconciliations