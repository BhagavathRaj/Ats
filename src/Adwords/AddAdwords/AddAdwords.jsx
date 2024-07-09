import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Styles from "../../MailsNow/AddCampaign/Add.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField, Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import Settings from "../../MailsNow/AddCampaign/Settings";

const steps = ["Sequences", "Setup", "Final Review"];

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddCampaign = () => {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      setOpen(false);
    }
  };
  const handleStepBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setCompleted((prevCompleted) => {
        const newCompleted = { ...prevCompleted };
        delete newCompleted[activeStep];
        return newCompleted;
      });
    }
  };



  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                width: "152px",
                height: "30px",
                fontSize: "12px",
                borderRadius: "5px",
                backgroundColor: "#000AFF",
                "&:hover": { backgroundColor: "#000AFF" },
              }}
            >
              Create Campaign
            </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div style={{ width: "100%" }}>
          <div style={{ padding: "20px", borderBottom: "1px solid gray" }}>
            <div className={Styles.AddHeader}>
              <div>
                {" "}
                <KeyboardBackspaceIcon
                  onClick={handleClose}
                  sx={{
                    fontSize: "30px",
                    color: "#9999A1",
                    cursor: "pointer",
                    marginTop: "6px",
                  }}
                />
              </div>
              <div>
                {" "}
                <CampaignOutlinedIcon
                  sx={{
                    fontSize: "30px",
                    color: "#FFF",
                    backgroundColor: "#000AFF",
                    borderRadius: "3px",
                    margin: "6px 20px 0 25px",
                  }}
                />
              </div>
              <div style={{ width: "30%", minWidth: "20%" }}>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ width: "80%" }}
                ></TextField>
              </div>
              <div style={{ width: "45%", minWidth: "40%", cursor: "pointer" }}>
                {" "}
                <Stepper
                  sx={{
                    ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active":
                      {
                        color: "#000AFF",
                      },
                    ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                      {
                        color: "#000AFF",
                      },
                    ".css-1hv8oq8-MuiStepLabel-label.Mui-completed": {
                      color: "#000AFF",
                    },
                  }}
                  nonLinear
                  activeStep={activeStep}
                >
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {
                      style: { color: "#000AFF" },
                      onClick: () => {
                        setActiveStep(index);
                      },
                    };
                    const isStepCompleted = completed[index];

                    return (
                      <Step
                        key={label}
                        {...stepProps}
                        completed={isStepCompleted}
                      >
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <BootstrapTooltip title="Campaign Settings">
                  <Settings />
                </BootstrapTooltip>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div className={Styles.AddBody}>Content</div>
          </div>
          <div className={Styles.AddFooterWrapper}>
            <div className={Styles.AddFooter}>
              {activeStep === steps.length || (
                <React.Fragment>
                  <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleStepBack}
                    sx={{ mr: 5, width: "120px" }}
                  >
                    Back
                  </Button>

                  <Button
                    onClick={handleComplete}
                    variant="contained"
                    //disabled={!completed[activeStep]}
                    sx={{
                      backgroundColor: "#000AFF",
                      "&:hover": { backgroundColor: "#000AFF" },
                    }}
                  >
                    {activeStep === steps.length - 1
                      ? "Start Campaign"
                      : "Save & Next"}{" "}
                  </Button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default AddCampaign;
