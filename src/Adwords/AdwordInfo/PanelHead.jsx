import React, { useEffect, useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const PanelHead = ({ setOpenContent, campaignName }) => {
  console.log(campaignName);
  const [activeTab, setActiveTab] = useState('analytics');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.split('/');
    const tab = path[path.length - 1];
    setActiveTab(tab);
  }, [location]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ borderBottom: '1px solid #DADFE2' }}>
      <Box
        sx={{
          display: 'flex',
          padding: ' 10px 20px  ',
          borderBottom: '1px solid #DADFE2',
        }}
      >
        <Typography
          sx={{ fontSize: '17px', fontWeight: '600', height: '25px' }}
        >
          {campaignName}
        </Typography>
        <ModeEditOutlineOutlinedIcon
          sx={{ fontSize: '20px', marginLeft: '10px', cursor: 'pointer' }}
        />
        <CloseSharpIcon
          sx={{ marginLeft: 'auto', fontSize: '20px', cursor: 'pointer' }}
          onClick={() => {
            setOpenContent(false);
            navigate('/adwords');
          }}
        />
      </Box>
      <Box sx={{ maxWidth: { xs: 350, sm: 780 } }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
        >
          <Tab
            component={NavLink}
            to="analytics"
            label="Analytics"
            value="analytics"
            sx={{ marginLeft: '5px' }}
          />
          <Tab
            component={NavLink}
            to="settings"
            label="Settings"
            value="settings"
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default PanelHead;
