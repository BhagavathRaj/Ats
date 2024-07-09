import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ProgressBar from "../ProgressBar";

const innerstyle = { fontSize: "12px", color: "#82858A", fontWeight: "400" };
const spanBar = { fontSize: "14px", color: "#82858A", fontWeight: "400" };
const ContentGuide = () => {
  const [subjectStrength, setSubjectStrength] = React.useState(0);
  const [contentStrength, setContentStrength] = React.useState(0);

  const [mergetype, setMergetype] = React.useState([]);
  const [mergetype1, setMergetype1] = React.useState([]);
  const [subject, setSubject] = React.useState([]);
  const [preheader, setPreheader] = React.useState([]);
  const [content, setcontent] = React.useState([]);

  React.useEffect(() => {
    let subjectStrength1 = subject.join(" ");
    setSubjectStrength(subjectStrength1.length);
  }, [subject]);

  React.useEffect(() => {
    setContentStrength(content.length);
  }, [content]);

  React.useEffect(() => {
    setSubject((sub) => [...sub, mergetype]);
  }, [mergetype]);

  React.useEffect(() => {
    setPreheader((pre) => [...pre, mergetype1]);
  }, [mergetype1]);

  return (
    <Box sx={{ padding: "20px" , overflowY: "auto",height: "61.6vh",}}>
      <Box sx={{ backgroundColor: "#E6E7FF" }}>
        <Typography sx={{ padding: "10px 20px 7px 20px", fontWeight: "600",fontSize:"14px" }}>
          Personalize the Subject line using meerge tags
        </Typography>
        <Typography
          sx={{ fontSize: "14px", paddingLeft: "20px", color: "#82858A" }}
        >
          An email with personalized subject lines gets 6% higher open rates.
        </Typography>
        <Box sx={{ display: "flex", padding: "15px 20px 10px 20px" }}>
          <Typography sx={{ fontSize: "16px", color: "#000AFF" }}>
            Code Email Tips 2/7
          </Typography>
          <Box sx={{ marginLeft: "auto", color: "#82858A",cursor:"pointer" }}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "16px" }} />
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: "16px" }} />
          </Box>
        </Box>
      </Box>
      <div className="guide-status" >
        <div className="guide-status-div" style={{paddingTop:"20px"}}>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="guide-status-title"> Subject Length</span>{" "}
            <span style={innerstyle}>{subjectStrength} characters</span>
          </p>
          <ProgressBar
            bgcolor={
              subjectStrength > 12 && subjectStrength <= 30
                ? "#d97706"
                : subjectStrength > 30
                ? "#047857"
                : "#b91c1c"
            }
            progress={
              subjectStrength > 12 && subjectStrength <= 30
                ? "50"
                : subjectStrength > 30
                ? "100"
                : "20"
            }
            height={5}
          />
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={spanBar}> 30-60 characters suggested. </span>{" "}
            <span
              style={{
                fontSize: "14px",
                color:
                  subjectStrength > 12 && subjectStrength <= 30
                    ? "#d97706"
                    : subjectStrength > 30
                    ? "#047857"
                    : "#b91c1c",
                fontWeight: "400",
              }}
            >
              {subjectStrength > 12 && subjectStrength <= 30
                ? "Short"
                : subjectStrength > 30
                ? "Ideal"
                : "Too short"}
            </span>
          </p>
        </div>

        <div className="guide-status-div" style={{paddingTop:"10px"}}>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="guide-status-title">Word Count</span>{" "}
            <span style={innerstyle}>{subjectStrength} Word</span>
          </p>
          <ProgressBar
            bgcolor={
              subjectStrength > 12 && subjectStrength <= 30
                ? "#d97706"
                : subjectStrength > 30
                ? "#047857"
                : "#b91c1c"
            }
            progress={
              subjectStrength > 12 && subjectStrength <= 30
                ? "50"
                : subjectStrength > 30
                ? "100"
                : "20"
            }
            height={5}
          />
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={spanBar}> 30-60 characters suggested. </span>{" "}
            <span
              style={{
                fontSize: "14px",
                color:
                  subjectStrength > 12 && subjectStrength <= 30
                    ? "#d97706"
                    : subjectStrength > 30
                    ? "#047857"
                    : "#b91c1c",
                fontWeight: "400",
              }}
            >
              {subjectStrength > 12 && subjectStrength <= 30
                ? "Short"
                : subjectStrength > 30
                ? "Ideal"
                : "Too short"}
            </span>
          </p>
        </div>

        <div className="guide-status-div" style={{paddingTop:"20px"}}>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="guide-status-title"> Personalization</span>{" "}
            <span style={innerstyle}>0 merge tag</span>
          </p>
          <ProgressBar bgcolor={""} progress={"0"} height={5} />
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={spanBar}> 2 or more merge tags suggested. </span>{" "}
            <span style={{ fontSize: "14px", color: "", fontWeight: "400" }}>
              {"Poor"}
            </span>
          </p>
        </div>

        <div className="guide-status-div" style={{paddingTop:"20px"}}>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="guide-status-title">Links</span>{" "}
            <span style={innerstyle}>0 link</span>
          </p>
          <ProgressBar
            bgcolor={contentStrength > 100 ? "#047857" : ""}
            progress={contentStrength > 100 ? "100" : "0"}
            height={5}
          />
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={spanBar}> We suggest minimal usage. </span>{" "}
            <span
              style={{
                fontSize: "14px",
                color: contentStrength > 100 ? "#047857" : "",
                fontWeight: "400",
              }}
            >
              {contentStrength > 100 ? "Excellent" : ""}
            </span>
          </p>
        </div>

        <div className="guide-status-div" style={{paddingTop:"20px"}}>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="guide-status-title">Spamminess</span>{" "}
            <span style={innerstyle}>0 word</span>
          </p>
          <ProgressBar
            bgcolor={contentStrength > 100 ? "#047857" : ""}
            progress={contentStrength > 100 ? "100" : "0"}
            height={5}
          />
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={spanBar}> We suggest minimal usage. </span>{" "}
            <span
              style={{
                fontSize: "14px",
                color: contentStrength > 100 ? "#047857" : "",
                fontWeight: "400",
              }}
            >
              {contentStrength > 100 ? "Excellent" : ""}
            </span>
          </p>
        </div>
      </div>
     <Box sx={{display:"flex",justifyContent:"center",padding:"20px 0"}}>
     <Typography sx={{backgroundColor:"#0AA607",color:"white",padding:"0 5px "}}>New</Typography>
      <Typography sx={{paddingLeft:"7px"}}>Improve Deliverability With Text Only Email</Typography>
     </Box>
    </Box>
  );
};

export default ContentGuide;
