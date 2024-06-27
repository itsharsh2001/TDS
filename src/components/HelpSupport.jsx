import React, { useState } from "react";
import FAQ from "./UI/FAQ";
import SearchIcon from "@mui/icons-material/Search";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

import classes from "./HelpSupport.module.css";
import { ChevronRightOutlined } from "@mui/icons-material";

function HelpSupport({ sidebar }) {
  const [expandedWindow, setExpandedWindow] = useState(false);
  return (
    <div
      style={sidebar ? { width: "77.5%" } : { width: "100%" }}
      className={classes.helpsupport}
    >
      {!expandedWindow && (
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
      )}
      {!expandedWindow && (
        <div>
          <section>
            <h5>
              Application Related Questions{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return setExpandedWindow(true);
                }}
                href=""
              >
                View All
              </a>{" "}
            </h5>
            <FAQ
              title="What is Tax Position Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload Vendor Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload PO Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload GL Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload HSN SAC Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to update Tax Position Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
          </section>
          <section>
            <h5>
              Tax Related Questions{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return setExpandedWindow(true);
                }}
                href=""
              >
                View All
              </a>{" "}
            </h5>
            <FAQ
              title="What is Tax Position Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload Vendor Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload PO Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload GL Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to upload HSN SAC Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
            <FAQ
              title="How to update Tax Position Master"
              description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
            />
          </section>
          <span>
            <h5>
              Templates{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return setExpandedWindow(true);
                }}
                href=""
              >
                View All
              </a>{" "}
            </h5>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              Vendor Master
            </h4>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              PO Master
            </h4>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              GL Master
            </h4>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              Keyword Master
            </h4>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              Document Master
            </h4>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              HSN/SAC Master
            </h4>
            <h4>
              <SystemUpdateAltIcon className={classes.icon} />
              Nature of Payment Master
            </h4>
            {/* <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4>
          <h4><SystemUpdateAltIcon className={classes.icon}/>Lorem ipsum dolor sit amet?</h4> */}
          </span>
        </div>
      )}

      {expandedWindow && (
        <>
          <span className={classes.breadcrumb}>
            <a
              onClick={(e) => {
                e.preventDefault();
                return setExpandedWindow(false);
              }}
              href=""
            >
              Help & Support
            </a>
            
            <ChevronRightOutlined className={classes.righticon} />
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href=""
            >
              FAQ
            </a>
          </span>
          <span className={classes.headerspan}>
            <h1>Frequently Asked Questions</h1>
            <div>
              <input type="text" placeholder="Search here..." name="" id="" />
              <SearchIcon style={{ fontSize: "2.5rem", color: "#a3a3a3" }} />
            </div>
          </span>
          <div style={{ height: "100%" }}>
            <section style={{ height: "100%" }}>
              <FAQ
                title="What is Tax Position Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload Vendor Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload PO Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload GL Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload HSN SAC Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to update Tax Position Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload Vendor Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload PO Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload GL Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to upload HSN SAC Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
              <FAQ
                title="How to update Tax Position Master"
                description="Ans: Tax Position Master is a TAN Level Master that contains all the relevant tax positions basis which critical functionality such as section determination, tax liability determination, etc., of the application shall be determined."
              />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default HelpSupport;
