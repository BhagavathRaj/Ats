import { Box, Tab } from "@mui/material";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import React, { useState } from "react";
import FollowUp from "./element/FollowUp";
import EmailPreview from "./element/EmailPreview";
import ContentGuide from "./element/ContentGuide";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";

const EmailGuide = () => {
  const [activeTab, setActiveTab] = useState("Content Guide");

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{  borderLeft: "1px solid #DADFE2" }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{borderBottom: "1px solid #DADFE2",
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab
            sx={{ marginLeft: "5px" }}
            icon={<DescriptionOutlinedIcon sx={{ fontSize: "20px" }} />}
            label="Content Guide"
            value="Content Guide"
            iconPosition="start"
          />
          <Tab
            icon={<ViewQuiltOutlinedIcon sx={{ fontSize: "20px" }} />}
            label="Email Preview"
            value="Email Preview"
            iconPosition="start"
          />
          <Tab
            icon={<MailOutlinedIcon sx={{ fontSize: "20px" }} />}
            label="Email follow up"
            value="Email follow up"
            iconPosition="start"
          />
        </Tabs>
     
      <Box>
        {activeTab === "Content Guide" && <ContentGuide />}
        {activeTab === "Email Preview" && <EmailPreview />}
        {activeTab === "Email follow up" && <FollowUp />}
      </Box>
    </Box>
  );
};

export default EmailGuide;
