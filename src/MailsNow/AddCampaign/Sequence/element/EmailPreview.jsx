import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Group from "../../../../component/images/Group.png";

const EmailPreview = () => {
  return (
    <Box sx={{ overflowY: "auto", height: "61.6vh" }}>
      <Box sx={{ padding: "20px" }}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          sx={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span style={{color:"#CCCCCC"}}>From</span> <span style={{padding:"0 5px 4px 5px",fontSize:"25px",color:"#E6E6E6"}}>|</span>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                 <span style={{color:"#CCCCCC"}}>To</span> <span style={{padding:"0 5px 4px 26px",fontSize:"25px",color:"#E6E6E6"}}>|</span>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ paddingTop: "25px" }}>
          <Box sx={{ display: "flex", paddingBottom: "15px" }}>
            <Typography sx={{ fontWeight: "600" }}>To: </Typography>
            <Typography>{`Example contact <example.googlr.com>`}</Typography>
          </Box>
          <Box sx={{ display: "flex", paddingBottom: "15px" }}>
            <Typography sx={{ fontWeight: "600" }}>Subject:</Typography>
            <Typography>Re: Test</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <img
            src={Group}
            alt="Group"
            style={{ height: "120px", width: "120px" }}
          />
          <Typography
            sx={{ fontSize: "14px", paddingTop: "15px", color: "#A1A3A7" }}
          >
            Write someting to generate the Email preview
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #E6E6E6",
          padding: "20px",
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000AFF",
            "&:hover": { backgroundColor: "#000AFF" },
          }}
        >
          Send Test Email
        </Button>
      </Box>
    </Box>
  );
};

export default EmailPreview;
