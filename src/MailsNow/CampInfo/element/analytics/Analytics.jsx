import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AnalyticChart from "./AnalyticChart";
import AnalyticTable from "./AnalyticTable";
import AnalyticPie from "./AnalyticPie";

const Analytics = () => {
  return (
    <Box sx={{ padding: "20px", overflowY: "auto", height: "80%" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "110px",
            height: "110px",
            border: "1px solid #DADFE2",
            flexShrink: 0,
          }}
        ></Box>
        <Box sx={{ paddingLeft: "5px", width: "100%" }}>
          <Box
            sx={{
              backgroundColor: "#F2F7FB",
              borderBottom: "1px solid #DADFE2",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "600", paddingLeft: "15px" }}
            >
              Overall Email Reach
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#878787", paddingLeft: "15px" }}
            >
              The date is from 29 Mar, 12:43 pm till now
            </Typography>
          </Box>
          <Grid
            container
            sx={{ padding: "11px 15px", backgroundColor: "#F2F7FB" }}
          >
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  height: "44px",
                  border: "1px solid #DADFE2",
                  borderLeft: "2px solid #000AFF",
                  padding: "5px",
                  backgroundColor: "#FFFFFF",
                  marginLeft: "5px",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>1</Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Total Leads Contacted
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  height: "44px",
                  border: "1px solid #DADFE2",
                  borderLeft: "2px solid #000AFF",
                  padding: "5px",
                  backgroundColor: "#FFFFFF",
                  marginLeft: "5px",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>0</Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Unique Replied
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  height: "44px",
                  border: "1px solid #DADFE2",
                  borderLeft: "2px solid #000AFF",
                  padding: "5px",
                  backgroundColor: "#FFFFFF",
                  marginLeft: "5px",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>0</Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Unique Positive Replies
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            padding: "5px 15px",
            marginTop: "25px",
            border: "1px solid #DADFE2",
          }}
        >
          {" "}
          <AnalyticChart />
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            padding: "5px 15px",
            marginTop: "25px",
            border: "1px solid #DADFE2",
          }}
        >
          {" "}
          <AnalyticTable />
        </Grid>
      </Grid>
      <Box sx={{marginTop:"25px"}}>
        <AnalyticPie />
      </Box>
    </Box>
  );
};

export default Analytics;
