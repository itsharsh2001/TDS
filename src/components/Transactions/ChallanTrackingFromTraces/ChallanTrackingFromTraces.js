import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./ChallanTrackingFromTraces.module.css";

const ChallanTrackingFromTraces = (props) => {
  return (
    <div className={classes.tracking}>
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
          Challan Tracking from TRACES
        </a>

        {/* <PurpleButton>
  <DownloadIcon /> Upload Template
</PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  );
};

export default ChallanTrackingFromTraces;
