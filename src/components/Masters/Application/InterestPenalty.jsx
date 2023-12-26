import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import classes from "./InterestPenalty.module.css";

const InterestPenalty = (props) => {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const interestRates = [
    { Type: "Short Payment", Interest_Rate: 1.5 },
    { Type: "Late Payment", Interest_Rate: 1.5 },
    { Type: "Short Deduction", Interest_Rate: 1 },
    { Type: "Late Deduction", Interest_Rate: 1 },
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch('/assets/Excel101ExtraPractice01.xlsx');
  
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
     
      // Use the response object to get the file content
      const fileContent = await response.blob({ type: 'application/xlsx' });

      // Now you can process the file content as needed
      console.log('File content:', fileContent);

      const link = document.createElement('a');
      link.href = URL.createObjectURL(fileContent);
      link.download = 'downloadedFiless.xlsx';

      // Trigger the click event
      link.click();
    } catch (error) {
        console.error('Error fetching file:', error);
    }
  };
  return (
    <div className={classes.interestpenalty}>
      <span>
        <a onClick={(e)=>{e.preventDefault(); return props.transactionHomeScreen()}} href="">Application Level Master</a>
        <ChevronRightIcon className={classes.righticon} />
        <a onClick={(e)=>{e.preventDefault();}} href="">Interest & Penalty Master</a>
      </span>
      <section>
        <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button>
        <button onClick={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Template File
        </button>
      </section>

      <table className={classes.table}>
        <tbody>
          <tr>
            {/* <th>Select</th> */}
            <th>
              Type
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
            </th>
            
            <th>
              Interest Rate
              {/* <KeyboardArrowDownIcon
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "#4f2d7f",
                  // background: "#4f2d7f",
                  // borderRadius: "50%",
                }}
              /> */}
            </th>
            
          </tr>
          
          {interestRates.map((val, idx) => {
            return (
              <tr id={idx}>
                
                <td>{val.Type}</td>
                
                <td>{val.Interest_Rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InterestPenalty;
