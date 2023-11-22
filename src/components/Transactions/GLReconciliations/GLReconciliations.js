import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from './GLReconciliations.module.css'

const GLReconciliations = (props) => {
  return (
    <div className={classes.gl}>
       <section>
        <a
          onClick={(e) => {
            e.preventDefault();
            return props.transactionHomeScreen("");
          }}
          href=""
        >
          Monthly Compliance
        </a>
        <ChevronRightIcon className={classes.righticon} />
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href=""
        >
          GL Reconcillations
        </a>

        {/* <PurpleButton>
          <DownloadIcon /> Upload Template
        </PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  )
}

export default GLReconciliations