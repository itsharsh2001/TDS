import React from "react";
import FAQ from "./UI/FAQ";
import SearchIcon from "@mui/icons-material/Search";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

import classes from "./HelpSupport.module.css";

function HelpSupport({sidebar}) {
  return (
    <div style={sidebar?{width:'77.5%'}:{width:'100%'}} className={classes.helpsupport}>
      <main>
        <section>
          <h1>Searching for something?</h1>
          <span>
            <input type="text" placeholder="Search here..." />
            <SearchIcon className={classes.icon} />
          </span>
        </section>
        <img src="/HelpSupport.png" alt="" />
      </main>
      <div>
        <section>
          <h5>
            Frequently Asked Questions <a onClick={(e)=>{e.preventDefault()}} href="">View All</a>{" "}
          </h5>
          <FAQ title='What is Tax Position Master' description='Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined.' />
          <FAQ title='How to upload Vendor Master' description='Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined.' />
          <FAQ title='How to upload PO Master' description='Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined.' />
          <FAQ title='How to upload GL Master' description='Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined.' />
          <FAQ title='How to upload HSN SAC Master' description='Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined.' />
          <FAQ title='How to update Tax Position Master' description='Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined.' />
        </section>
        <span>
          <h5>
            Templates <a onClick={(e)=>{e.preventDefault()}} href="">View All</a>{" "}
          </h5>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Vendor Master</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>PO Master</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>GL Master</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Keyword Master</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Document Master</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>HSN/SAC Master</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Nature of Payment Master</h4>
          {/* <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4> */}
        </span>
      </div>
    </div>
  );
}

export default HelpSupport;
