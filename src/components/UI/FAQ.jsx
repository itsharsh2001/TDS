import React from "react";
import classes from "./FAQ.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function FAQ(props) {
  const [summaryView, setSummaryView] = useState(false);
  const viewHandler = () => {
    setSummaryView((prevState)=> {return !prevState})
  }
  return (
    <div className={classes.faq}>
      <h4>
        {summaryView && <ClearIcon className={classes.icon} onClick={viewHandler} />}
        {!summaryView && <AddIcon className={classes.icon} onClick={viewHandler} />}{props.title}
      </h4>
      {summaryView && (
        <section>
          Ans: {props.description}
        </section>
      )}
    </div>
  );
}

export default FAQ;
