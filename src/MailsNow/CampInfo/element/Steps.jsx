import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Sreach from "../../../component/images/Screenshot.png";

const Steps = () => {
  return (
    <Box 
      sx={{
        padding:"25px",
        display: "flex",
        justifyContent: "center",
        height:"80%",overflowY:"auto"
      }}
    >
      <Box sx={{textAlign: "center", p: 3 }}>
        <img src={Sreach} alt="Search" />
        <Typography sx={{fontSize:"16px",fontWeight:"600",paddingBottom:"10px"}}>Start Your Sequence</Typography>
        <Typography sx={{fontSize:"14px",paddingBottom:"30px"}}>
          Automate the engagement with your prospects by adding steps in your
          sequence
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#000AFF","&:hover":{backgroundColor:"#000AFF"}}}>Add Step</Button>
      </Box>
    </Box>
  );
};

export default Steps;
