import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

import classes from "./AdminPanel.module.css";
import PurpleButton from "../components/UI/PurpleButton";
import { useState } from "react";

const AdminPanel = () => {
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);

  const [step, setStep] = useState(1);
  return (
    <>
      {(popup || popup2) && (
        <div
          className={classes.overlay}
          onClick={() => {
            return setPopup(false);
          }}
        ></div>
      )}
      {popup && (
        <div className={classes.popup}>
          <CloseIcon
            onClick={() => {
              return setPopup(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.25rem",
              right: "2.25rem",
              cursor: "pointer",
            }}
          />
          {/* <h4>Grant Thornton</h4> */}
          <img className={classes.logoimg} src="/GTLogoWithImage.png" alt="" />

          {step == 1 && <img className={classes.normalimg} src="/Key.png" alt="" />}
          {step == 2 && <img className={classes.normalimg} src="/OK.png" alt="" />}
          {step == 1 && (
            <>
              <h6>Forgot Your Password?</h6>
              <h1>Enter your email To reset password</h1>
              <input type="email" placeholder="Enter Email" />
            </>
          )}
          {step == 2 && (
            <h6>A Reset Password Link has been sent to your email.</h6>
          )}

          <button
            onClick={() => {
              return setStep(2);
            }}
          >
            Submit
          </button>

          {step == 1 && (
            <h5>
              <ChevronLeftOutlinedIcon
                onClick={() => {
                  return setPopup(false);
                }}
                className={classes.lefticon}
              />
              Return to Login Screen
            </h5>
          )}
        </div>
      )}
      {popup2 && (
        <div className={classes.popup}>
          <CloseIcon
            onClick={() => {
              return setPopup2(false);
            }}
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              top: "2.25rem",
              right: "2.25rem",
              cursor: "pointer",
            }}
          />
          {/* <h4>Grant Thornton</h4> */}
          <img className={classes.logoimg} src="/GTLogoWithImage.png" alt="" />
          <img className={classes.normalimg} src="/Mail.png" alt="" />

          {/* <h6>Forgot Your Password?</h6> */}
          <h1>Enter your email To proceed</h1>
          <input type="email" placeholder="Enter Email" />

          <button
            onClick={() => {
              return setStep(2);
            }}
          >
            Continue
          </button>

          <h5>
            <ChevronLeftOutlinedIcon
              onClick={() => {
                return setPopup(false);
              }}
              className={classes.lefticon}
            />
            Return to Login Screen
          </h5>
        </div>
      )}
      <div className={classes.admin}>
        <img src="/loginimages.png" alt="" />
        <section>
          <img src="/GTLogoWithImage.png" alt="" />
          <h1>Welcome to TDS Analytics</h1>
          <h2>Login</h2>

          <input type="email" placeholder="Email" name="" id="" />
          <input type="password" placeholder="Password" name="" id="" />

          <div>
            <label htmlFor="staysignedin">
              <input type="checkbox" name="staysignedin" id="staysignedin" />
              Stay Signed In
            </label>

            <p
              onClick={() => {
                return setPopup(true);
              }}
            >
              Forgot Password
            </p>
          </div>
          {/* <button>Login</button> */}
          <PurpleButton
            onClick={() => {
              return setPopup2(true);
            }}
          >
            Login
          </PurpleButton>
          <h3>Or</h3>
          <button className={classes.otherbutton}>
            {" "}
            <img src="/microsoft.png" alt="Microsoft Icon" /> Login With
            Microsoft
          </button>
        </section>
      </div>
    </>
  );
};

export default AdminPanel;
