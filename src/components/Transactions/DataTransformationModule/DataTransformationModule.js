import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./DataTransformationModule.module.css";

const DataTransformationModule = (props) => {
  return (
    <div className={classes.datatransformation}>
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
          Data Transformation
        </a>

        {/* <PurpleButton>
      <DownloadIcon /> Upload Template
    </PurpleButton> */}
      </section>

      <img src="/comingsoon.png" alt="" />
    </div>
  );
};

export default DataTransformationModule;
