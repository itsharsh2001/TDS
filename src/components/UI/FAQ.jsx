import React from "react";
import classes from "./FAQ.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function FAQ() {
  const [summaryView, setSummaryView] = useState(false);
  const viewHandler = () => {
    setSummaryView((prevState)=> {return !prevState})
  }
  return (
    <div className={classes.faq}>
      <h4>
        {summaryView && <ClearIcon className={classes.icon} onClick={viewHandler} />}
        {!summaryView && <AddIcon className={classes.icon} onClick={viewHandler} />}Lorem Ipsum dolor sit amet
      </h4>
      {summaryView && (
        <section>
          Ans: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          leo lacus, consectetur non sem non, malesuada ultricies mi. Ans: Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec leo lacus,
          consectetur non sem non, malesuada ultricies mi.{" "}
        </section>
      )}
    </div>
  );
}

export default FAQ;
