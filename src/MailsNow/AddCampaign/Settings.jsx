import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import {
  Modal,
  Box,
  Typography,
  Tab,
  Button,
  TextField,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Slider,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import WebhookIcon from "@mui/icons-material/Webhook";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const columns = [
  { field: "name", headerName: "Name", width: 450 },
  { field: "email", headerName: "Email", width: 450 },
  { field: "reputation", headerName: "Reputation" },
];

const rows = [
  { id: 1, name: "Snow", email: "Jon", reputation: "NA" },
  { id: 2, name: "Lannister", email: "Cersei", reputation: "NA" },
  { id: 3, name: "Lannister", email: "Jaime", reputation: "NA" },
  { id: 4, name: "Stark", email: "Arya", reputation: "NA" },
  { id: 5, name: "Targaryen", email: "Daenerys", reputation: "NA" },
  { id: 6, name: "Melisandre", email: "asdftr", reputation: "NA" },
  { id: 7, name: "Clifford", email: "Ferrara", reputation: "NA" },
  { id: 8, name: "Frances", email: "Rossini", reputation: "NA" },
  { id: 9, name: "Roxie", email: "Harvey", reputation: "NA" },
];
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

const initialMarks = [
  { value: 0, label: "0% follow ups" },
  { value: 100, label: "100% new leads" },
];

const Settings = () => {
  const [openModel, setOpenModel] = useState(false);
  const [value, setValue] = useState("1");
  const [dynamicMarks, setDynamicMarks] = useState(initialMarks);
  const [track, setTrack] = useState(false);
  const [optimise, setOptimise] = useState(false);
  const [level, setLevel] = useState(false);
  const [enhanced, setEnhanced] = useState(false);
  const [intelligent, setIntelligent] = useState(false);
  const [unsubscribe, setUnsubscribe] = useState(false);
  const [unsubscribeChecked, setUnsubscribeChecked] = useState(false);

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;

    switch (name) {
      case "track":
        setTrack(checked);
        break;
      case "optimise":
        setOptimise(checked);
        break;
      case "level":
        setLevel(checked);
        break;
      case "enhanced":
        setEnhanced(checked);
        break;
      case "intelligent":
        setIntelligent(checked);
        break;
      case "unsubscribe":
        setUnsubscribe(checked);
        if (checked) {
          setUnsubscribeChecked(true);
        } else {
          setUnsubscribeChecked(false);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  const handleModel = () => {
    setOpenModel(true);
  };
  const handleModelClose = () => {
    setOpenModel(false);
  };

  const handleSlider = (event, value) => {
    const followUpPercentage = value;
    const newLeadsPercentage = 100 - followUpPercentage;

    const updatedMarks = [
      {
        value: followUpPercentage,
        label: `${followUpPercentage}% follow ups`,
      },
      {
        value: newLeadsPercentage,
        label: `${newLeadsPercentage}% new leads`,
      },
    ];
    setDynamicMarks(updatedMarks);
  };
  return (
    <div>
      <SettingsOutlinedIcon
        onClick={handleModel}
        sx={{
          fontSize: "30px",
          color: "#9999A1",
          cursor: "pointer",
          marginTop: "6px",
        }}
      />
      <Modal
        open={openModel}
        onClose={handleModelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "87%",
            height: "90%",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            borderRadius: "7px",
            marginLeft: "0",
            outline: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "20px 20px 5px 20px",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ marginBottom: "6px", fontWeight: "bold" }}
            >
              Campaign Settings
            </Typography>
            <CloseIcon
              sx={{ fontSize: 20, marginLeft: "auto", cursor: "pointer" }}
              onClick={handleModelClose}
            />
          </Box>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="General" value="1" />
                <Tab label="Email Accounts" value="2" />
                <Tab label="Webhooks" value="3" />
              </TabList>
            </Box>
            <Box sx={{ height: "63%", overflowY: "auto" }}>
              <TabPanel value="1">
                <Box
                  sx={{
                    padding: "5px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Typography sx={{ paddingBottom: "10px", fontWeight: "600" }}>
                    Campaign Name
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ width: "30%" }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{ paddingBottom: "10px", fontWeight: "600" }}
                    >
                      Stop sending messages when your lead
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="replies to a message"
                        color="red"
                        control={<Radio />}
                        sx={{
                          ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                            { color: "#000AFF" },
                        }}
                        label="Replies to a message"
                      />
                      <FormControlLabel
                        value="clicks on a link"
                        control={<Radio />}
                        sx={{
                          ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                            { color: "#000AFF" },
                        }}
                        label="Clicks on a link"
                      />
                      <FormControlLabel
                        value="opens an email"
                        control={<Radio />}
                        sx={{
                          ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                            { color: "#000AFF" },
                        }}
                        label="Opens an email"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Typography sx={{ paddingBottom: "10px", fontWeight: "600" }}>
                    What shouldn't we track
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      sx={{ "&.Mui-checked": { color: "#000AFF" } }}
                      checked={track}
                      name="track"
                      onChange={handleCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      DON'T track email opens
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      sx={{ "&.Mui-checked": { color: "#000AFF" } }}
                      checked={track}
                      name="track"
                      onChange={handleCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      DON'T track link clicks
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ paddingBottom: "10px", fontWeight: "600" }}
                    >
                      Optimise Email Delivery
                    </Typography>
                    <BootstrapTooltip title="When optimizing email delivery, Open Rate and Click Tracking will be disabled, and unsubscribe links, along with other HTML links, will be removed from the email.">
                      <ErrorOutlineOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          color: "#9EA0B6",
                          marginTop: "2px",
                          marginLeft: "5px",
                        }}
                      />
                    </BootstrapTooltip>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      sx={{ "&.Mui-checked": { color: "#000AFF" } }}
                      checked={optimise}
                      name="optimise"
                      onChange={handleCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <BootstrapTooltip title="can only activate on campaigns that haven't started">
                      <Typography sx={{ fontSize: "15px" }}>
                        Boost your deliverability by sending emails in plain
                        text, without HTML
                      </Typography>
                    </BootstrapTooltip>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ paddingBottom: "10px", fontWeight: "600" }}
                    >
                      Prioritise sending pattern
                    </Typography>
                    <BootstrapTooltip title="80% new leads to 20% follow means - e.g 10 connected mailboxes. 100 new leads left, 400 follow ups lrft for today. If 10 email account are connnected, then 10 emails will be sent out on each trigger. So 8 new leads and 2 follow up. And this will follow till all 100 new leads are cleared after which full dedication will be given to follow ups.">
                      <ErrorOutlineOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          color: "#9EA0B6",
                          marginTop: "2px",
                          marginLeft: "5px",
                        }}
                      />
                    </BootstrapTooltip>
                  </Box>
                  <Slider
                    sx={{ color: "#000AFF", width: "85%", marginLeft: "30px" }}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks={dynamicMarks}
                    min={10}
                    max={100}
                    onChange={handleSlider}
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ paddingBottom: "10px", fontWeight: "600" }}
                    >
                      Company Level Auto-Pause
                    </Typography>
                    <BootstrapTooltip title="The following domains will be ignored: gmail.com, outlook.com, yahoo.com, aol.com, icloud.com, zoho.com, protonmail.com, yandex.com">
                      <ErrorOutlineOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          color: "#9EA0B6",
                          marginTop: "2px",
                          marginLeft: "5px",
                        }}
                      />
                    </BootstrapTooltip>
                  </Box>
                  <Typography sx={{ fontSize: "15px" }}>
                    Stops messaging other people within a company once a person
                    replies from that company.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      sx={{ "&.Mui-checked": { color: "#000AFF" } }}
                      checked={level}
                      name="level"
                      onChange={handleCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      Auto-pause if one of the leads from the same domain
                      replies.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ paddingBottom: "10px", fontWeight: "600" }}
                    >
                      Enhanced Email Sending & Delivery
                    </Typography>
                    <BootstrapTooltip title="We will auto-analyse your leads mailbox ESPs (Email Service Providers) and re-calibrate the sending patterns to match your uploaded mailboxes' ESPs so (for e.g) your outlook mailboxes will be used to send emails to leads that are also using outlook etc.">
                      <ErrorOutlineOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          color: "#9EA0B6",
                          marginTop: "2px",
                          marginLeft: "5px",
                        }}
                      />
                    </BootstrapTooltip>
                  </Box>
                  <Typography sx={{ fontSize: "15px" }}>
                    AI Auto-matches your leads email providers + Your mailbox
                    providers for boosted deliver ( e.g Gmail to Gmail, Outlook
                    to Outlook)
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#000AFF",
                        },
                      }}
                      checked={enhanced}
                      name="enhanced"
                      onChange={handleCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      Auto-analyse leads mailbox email service providers
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ paddingBottom: "10px", fontWeight: "600" }}
                    >
                      Intelligent AI Lead Categorisation (Max: 5)
                    </Typography>
                    <BootstrapTooltip title="Our ML engine willparse every single reply from this campaign and analyse the content of the reply. If the reply is an Out of Office response, it will auto-categorise this based on multiple factors, without you having to lift a finger.">
                      <ErrorOutlineOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          color: "#9EA0B6",
                          marginTop: "2px",
                          marginLeft: "5px",
                        }}
                      />
                    </BootstrapTooltip>
                  </Box>
                  <Typography sx={{ fontSize: "15px" }}>
                    Our Machine Learning Engine will auto-categorise replies.
                    (Beta)
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      sx={{ "&.Mui-checked": { color: "#000AFF" } }}
                      checked={intelligent}
                      name="intelligent"
                      onChange={handleCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      Intelli-categorise replies using Smartlead's AI
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px 0 20px 0",
                    borderBottom: "1px solid #EDEDF4",
                  }}
                >
                  <Typography sx={{ paddingBottom: "10px", fontWeight: "600" }}>
                    Unsubscribe
                  </Typography>
                  <BootstrapTooltip
                    title='Can only activate on campaigns with Plain Text Emails Turned " Off "'
                    disableHoverListener={!optimise}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        sx={{ "&.Mui-checked": { color: "#000AFF" } }}
                        checked={unsubscribe}
                        name="unsubscribe"
                        onChange={handleCheckBox}
                        inputProps={{ "aria-label": "controlled" }}
                        disabled={optimise}
                      />
                      <Typography sx={{ fontSize: "15px" }}>
                        Add unsubscribe message in all emails
                      </Typography>
                    </Box>
                  </BootstrapTooltip>
                  {unsubscribeChecked && (
                    <TextField
                      label="Unsubscribe from my emails"
                      variant="outlined"
                      size="small"
                      sx={{ width: "50%", marginLeft: "12px" }}
                    />
                  )}
                </Box>
              </TabPanel>

              <TabPanel value="2" sx={{ height: "85.5%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Email List (1)
                  </Typography>
                  <FilterAltOutlinedIcon
                    //onClick={handleClickOpen}
                    sx={{
                      border: "1px solid #E5E5E5",
                      height: "35px",
                      width: "35px",
                      marginTop: "2px",
                      borderRadius: "2px",
                      color: "#797979",
                      backgroundColor: "#F4F4F4",
                      cursor: "pointer",
                      marginLeft: "auto",
                      marginRight: "30px",

                      "&:hover": {
                        backgroundColor: "#E5E5E5",
                        border: "1px solid #00000040",
                      },
                    }}
                  />
                  <TextField
                    size="small"
                    placeholder="Search Email Account"
                  ></TextField>
                </Box>

                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 3 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </TabPanel>

              <TabPanel
                value="3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <WebhookIcon sx={{ fontSize: "180px", color: "#000AFF" }} />
                <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                  No Webhooks Yet
                </Typography>
                <Typography sx={{ fontSize: "20px", paddingTop: "10px" }}>
                  Webhooks send real time notification about each campaign
                  activity on the go
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000AFF",
                    marginTop: "30px",
                    "&:hover": { backgroundColor: "#000AFF" },
                  }}
                >
                  Add Webhook
                </Button>
              </TabPanel>
            </Box>
          </TabContext>

          <Box
            sx={{
              position: "relative",
              bottom: "0",
              left: 0,
              right: 0,
              padding: "20px",
              justifyContent: "end",
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
              Save General Settings
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Settings;
