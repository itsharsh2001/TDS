import React, {useState} from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Uploaded from './Data Type/Uploaded';
import ViewMaster from './Data Type/ViewMaster';


import classes from "./DocumentSupply.module.css";

const DocumentSupply = (props) => {

  const [viewData, setViewData] = useState(false)
  const [templateFileUpload, setTemplateFileUpload] = useState(false);


  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }
  

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
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
    <div className={classes.documentsupply}>
      <span>
        <a
          onClick={(e) => {
            e.preventDefault();
            return props.transactionHomeScreen();
          }}
          href=""
        >
          Application Level Master
        </a>
        <ChevronRightIcon className={classes.righticon} />
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href=""
        >
          Document Supply Master
        </a>
      </span>
      <ul>
        <li style={!viewData?hoverStyle:{}} onClick={()=>setViewData(false)}>Uploaded Data</li>
        <li style={viewData?hoverStyle:{}} onClick={()=>setViewData(true)}>View Master Data</li>
      </ul>
      {/* <section>
        <button>
          <FileUploadOutlinedIcon className={classes.buttonicon} />
          Upload Template File
        </button>
        <button onClick={handleDownload}>
          <FileDownloadOutlinedIcon className={classes.buttonicon} />
          Download Masters
        </button>
      </section> */}

      {/* <table className={classes.table}>
        <tbody>
          <tr>
           
            <th>
              Document/Supply
             
            </th>
            <th>
              Type
             
            </th>
            <th>
              Decription
              
            </th>
          </tr>

          {documentsAndSupply.map((val, idx) => {
            return (
              <tr id={idx}>
                <td>{val.Document}</td>
                <td>{val.Type}</td>
                <td>{val.Description}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}

{!viewData && <Uploaded type = 'DocumentSupply'/>}
      {viewData && <ViewMaster type = 'DocumentSupply'/>}
    </div>
  );
};

export default DocumentSupply;
