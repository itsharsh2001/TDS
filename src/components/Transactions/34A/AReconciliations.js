import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./AReconciliations.module.css";

export const AReconciliations = (props) => {
  return (
    <div className={classes.a}>
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
          34a Reconciliations
        </a>

        {/* <PurpleButton>
  <DownloadIcon /> Upload Template
</PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  )
}
