import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import EmailForm from "./EmailForm";
import EmailGuide from "./EmailGuide";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SequeLayout = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleIconClick = () => {
    setIsToggled((prev) => !prev);
  };

  const leftGridSize = isToggled ? 11.7 : 8.4;
  const rightGridSize = isToggled ? 0.3 : 3.6;
  const icon = isToggled ? (
    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "14px" }} />
  ) : (
    <ArrowForwardIosOutlinedIcon sx={{ fontSize: "14px" }} />
  );
  const iconLeftPosition = isToggled ? "96.8%" : "69.4%";

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: iconLeftPosition,
          top: "145px",
          backgroundColor: "#F1F1F1",
          borderRadius: "50%",
          width: "20px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "20px",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={handleIconClick}
      >
        {icon}
      </Box>
      <Grid container>
        <Grid item sm={leftGridSize}>
          <EmailForm />
        </Grid>
        <Grid item sm={rightGridSize}>
          <EmailGuide />
        </Grid>
      </Grid>
    </>
  );
};

export default SequeLayout;
