import React, { useState } from 'react';
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Popover,
  MenuItem,
  Divider,
} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import AdsClickSharpIcon from '@mui/icons-material/AdsClickSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Link, NavLink } from 'react-router-dom';

const campaignsData = [
  {
    id: 1,
    name: 'Ajay',
    createdAt: '01 April, 12:43pm',
    platform: 'Adwords',
    status: 'Active',
    budgetSpent: 3,
    views: 0,
    clicked: 0,
    leads: 0,
    inquiry: 0,
  },
  {
    id: 2,
    name: 'kumar',
    createdAt: '10 April, 12:43pm',
    platform: 'Adwords',
    status: 'Active',
    budgetSpent: 7,
    views: 0,
    clicked: 0,
    leads: 0,
    inquiry: 0,
  },
  {
    id: 3,
    name: 'Mouni',
    createdAt: '21 April, 12:43pm',
    platform: 'Adwords',
    status: 'Active',
    budgetSpent: 0,
    views: 0,
    clicked: 3,
    leads: 0,
    inquiry: 0,
  },
];
const AdwordBody = ({ setOpenContent, openContent, handleCampaignName }) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Box sx={{ margin: '10px' }}>
      <TableContainer sx={{ overflow: 'hidden' }}>
        <Table size="small">
          <TableHead
            sx={{ border: '1px solid #E2E3E6', backgroundColor: '#F0F1F7' }}
          >
            <TableRow>
              <TableCell sx={{ fontSize: '14px', fontWeight: '600' }}>
                Campaigns Details
              </TableCell>
              <TableCell sx={{ fontSize: '14px', fontWeight: '600' }}>
                Report
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ cursor: 'pointer' }}>
            {campaignsData.map((campaign) => (
              <TableRow
                key={campaign.id}
                sx={{ '&:hover': { backgroundColor: '#F0F1F7' } }}
              >
                <TableCell
                  scope="row"
                  sx={{ border: 'none', paddingBottom: '0', width: '35%' }}
                >
                  {' '}
                  <NavLink
                    style={{ textDecoration: 'none' }}
                    to={`${campaign.id}`}
                    onClick={() => {
                      setOpenContent(campaign.id);
                      handleCampaignName(campaign.name);
                    }}
                  >
                    <Typography sx={{ color: 'black' }}>
                      {campaign.name}
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: { xs: 'start', sm: 'center' },
                        width: '435px',
                        paddingTop: '5px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#878787',
                          flexDirection: { xs: 'column', sm: 'row' },
                        }}
                      >
                        {campaign.status}
                        <span style={{ margin: '0 5px', color: '#878787' }}>
                          |
                        </span>
                      </Typography>{' '}
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#878787',
                          paddingLeft: { xs: 0, sm: '4px' },
                          flexDirection: { xs: 'column', sm: 'row' },
                        }}
                      >
                        Platform: {campaign.platform}
                      </Typography>
                      <span style={{ margin: '0 5px', color: '#878787' }}>
                        |
                      </span>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#878787',
                          paddingLeft: { xs: 0, sm: '4px' },
                          flexDirection: { xs: 'column', sm: 'row' },
                        }}
                      >
                        Created At: {campaign.createdAt}
                      </Typography>
                    </div>
                  </NavLink>
                </TableCell>
                <TableCell
                  sx={{
                    textDecoration: 'none',
                    border: 'none',
                    paddingBottom: '0',
                    paddingLeft: '19px',
                  }}
                >
                  <NavLink
                    style={{ textDecoration: 'none', color: '#878787' }}
                    to={`${campaign.id}`}
                    onClick={() => {
                      setOpenContent(campaign.id);
                    }}
                  >
                    <Typography>{campaign.budgetSpent}</Typography>
                    <Box
                      sx={{
                        paddingTop: '5px',
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <MailOutlineSharpIcon sx={{ paddingRight: '5px' }} />
                      Budget Spent
                    </Box>
                  </NavLink>
                </TableCell>
                <TableCell
                  sx={{
                    textDecoration: 'none',
                    border: 'none',
                    paddingBottom: '0',
                    paddingLeft: '19px',
                  }}
                >
                  <NavLink
                    style={{ textDecoration: 'none', color: '#878787' }}
                    to={`${campaign.id}`}
                    onClick={() => {
                      setOpenContent(campaign.id);
                    }}
                  >
                    <Typography>{campaign.views}</Typography>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',

                        paddingTop: '5px',
                      }}
                    >
                      <DraftsOutlinedIcon sx={{ paddingRight: '5px' }} />
                      Views
                    </Box>
                  </NavLink>
                </TableCell>
                <TableCell
                  sx={{
                    textDecoration: 'none',
                    border: 'none',
                    paddingBottom: '0',
                    paddingLeft: '19px',
                  }}
                >
                  <NavLink
                    style={{ textDecoration: 'none', color: '#878787' }}
                    to={`${campaign.id}`}
                    onClick={() => {
                      setOpenContent(campaign.id);
                    }}
                  >
                    <Typography>{campaign.clicked}</Typography>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        paddingTop: '5px',
                      }}
                    >
                      <AdsClickSharpIcon sx={{ paddingRight: '5px' }} />
                      Clicks
                    </Box>
                  </NavLink>
                </TableCell>
                <TableCell
                  sx={{
                    textDecoration: 'none',
                    border: 'none',
                    paddingBottom: '0',
                    paddingLeft: '19px',
                  }}
                >
                  <NavLink
                    style={{ textDecoration: 'none', color: '#878787' }}
                    to={`${campaign.id}`}
                    onClick={() => {
                      setOpenContent(campaign.id);
                    }}
                  >
                    <Typography>{campaign.leads}</Typography>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        paddingTop: '5px',
                      }}
                    >
                      <ForwardToInboxIcon sx={{ paddingRight: '5px' }} />
                      Leads
                    </Box>
                  </NavLink>
                </TableCell>
                <TableCell
                  sx={{
                    textDecoration: 'none',
                    border: 'none',
                    paddingBottom: '0',
                    paddingLeft: '19px',
                  }}
                >
                  <NavLink
                    style={{ textDecoration: 'none', color: '#878787' }}
                    to={`${campaign.id}`}
                    onClick={() => {
                      setOpenContent(campaign.id);
                    }}
                  >
                    <Typography>{campaign.inquiry}</Typography>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',

                        paddingTop: '5px',
                      }}
                    >
                      <MonetizationOnOutlinedIcon
                        sx={{ paddingRight: '5px' }}
                      />
                      Inquiry
                    </Box>
                  </NavLink>
                </TableCell>
                <TableCell
                  sx={{ border: 'none', color: '#878787', paddingTop: '30px' }}
                >
                  <Link to="new-campaign">
                    <CreateOutlinedIcon
                      sx={{
                        backgroundColor: '#EBEBEB',
                        cursor: 'pointer',
                        color: '#878787',
                        '&:hover': { backgroundColor: '#E5E5E5' },
                      }}
                    />
                  </Link>
                </TableCell>
                <TableCell
                  onClick={handleClickOpen}
                  sx={{ border: 'none', color: '#878787', paddingTop: '30px' }}
                >
                  <MoreHorizRoundedIcon
                    sx={{
                      backgroundColor: '#EBEBEB',
                      cursor: 'pointer',
                      color: '#878787',
                      alignItems: 'end',
                      '&:hover': { backgroundColor: '#E5E5E5' },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popover
        onClose={handleClose}
        open={open}
        sx={{ position: 'absolute', left: '80%', top: '200px' }}
      >
        {' '}
        <Box sx={{ width: '220px', height: '390px' }}>
          <MenuItem sx={{ height: '50px' }}>Add/Update Client</MenuItem>
          <MenuItem sx={{ height: '50px' }}>Add Tag</MenuItem>
          <MenuItem sx={{ height: '50px' }}>Duplicate Campaign</MenuItem>
          <MenuItem sx={{ height: '50px' }}>Add to folder</MenuItem>
          <Divider />
          <MenuItem sx={{ height: '50px' }}>Rename</MenuItem>
          <MenuItem sx={{ height: '50px' }}>Archive Campaign</MenuItem>
          <Divider />
          <MenuItem sx={{ height: '50px', color: 'red' }}>Delete</MenuItem>
        </Box>
      </Popover>
    </Box>
  );
};

export default AdwordBody;
