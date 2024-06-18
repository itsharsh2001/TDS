import React, {useState} from "react";
import classes from "./Dumpyard.module.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PurpleButton from "../../UI/PurpleButton";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function Dumpyard(props) {
  const handleDownload = async () => {
    try {
      const response = await fetch("/assets/Excel101ExtraPractice01.xlsx");

      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      // Use the response object to get the file content
      const fileContent = await response.blob({ type: "application/xlsx" });

      // Now you can process the file content as needed
      console.log("File content:", fileContent);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(fileContent);
      link.download = "downloadedFiless.xlsx";

      // Trigger the click event
      link.click();
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  const [clicked, setClicked] = useState(false)

  return (
    <div className={classes.dumpyard}>
      <span>
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
          Data Dump Yard
        </a>
      </span>

      <section>
        {/* <PurpleButton
          customStyle={{
            fontWeight: "700",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "4rem",
            width: "25%",
            marginRight: "5rem",
          }}
        >
          <CableOutlinedIcon
            style={{ marginRight: "1rem", fontSize: "2.5rem" }}
          />
          Connection Setting
        </PurpleButton>
        <PurpleButton
          onClick={handleDownload}
          customStyle={{
            fontWeight: "700",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "4rem",
            width: "15%",
            marginRight: "5rem",
          }}
        >
          Fetch File
        </PurpleButton> */}
        <PurpleButton
          // onClick={handleDownload}
          customStyle={{
            fontWeight: "700",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "4rem",
            width: "15%",
          }}
        >
          Upload File
        </PurpleButton>
      </section>

      <main>
        <div style={{width: '100%',display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr',justifyContent:'space-between', gridTemplateRows:'1fr 1fr', gap:'2rem'}}>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
          <span>
            <img src="/File.png" alt="" />
            <p>File1.xlsx</p>
          </span>
        </div>
        {clicked && <section>
          <span>
            <img src="/File.png" alt="" />
          </span>
          <div>
            <img src="/File.png" alt="" />
            <p>File.xlsx</p>
          </div>
          <main>
            <span>
              <p>Type</p>
              <p>Excel File</p>
            </span>
            <span>
              <p>Size</p>
              <p>2.16mb</p>
            </span>
            <span>
              <p>Uploaded By</p>
              <p>Ganesh Gupta</p>
            </span>

            <span>
              <p>Uploaded On</p>
              <p>29-05-2023 11:16PM</p>
            </span>
          </main>
          <button>
            <FileDownloadOutlinedIcon />
            Download
          </button>
        </section>}
      </main>
    </div>
  );
}

export default Dumpyard;
