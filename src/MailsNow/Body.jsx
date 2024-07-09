import React, { useState } from "react";
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
} from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AdsClickSharpIcon from "@mui/icons-material/AdsClickSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link, NavLink } from "react-router-dom";

const campaignsData = [
  {
    id: 1,
    name: "Untitled Campaign",
    createdAt: "01 April, 12:43pm",
    sequenceCount: 2,
    status: "Active",
    send: 3,
    opened: 0,
    clicked: 0,
    replied: 0,
    positiveReply: 0,
  },
  {
    id: 2,
    name: "Mouneshkumar",
    createdAt: "10 April, 12:43pm",
    sequenceCount: 3,
    status: "Active",
    send: 7,
    opened: 0,
    clicked: 0,
    replied: 0,
    positiveReply: 0,
  },
  {
    id: 3,
    name: "Mouni",
    createdAt: "21 April, 12:43pm",
    sequenceCount: 1,
    status: "Active",
    send: 0,
    opened: 0,
    clicked: 3,
    replied: 0,
    positiveReply: 0,
  },
];
const Body = ({ setOpenContent, openContent }) => {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ margin: "10px" }} >
      <TableContainer sx={{ overflow: "hidden" }}>
        <Table size="small">
          <TableHead
            sx={{ border: "1px solid #E2E3E6", backgroundColor: "#F0F1F7" }}
          >
            <TableRow>
              <TableCell sx={{ fontSize: "14px", fontWeight: "600" }}>
                Campaigns Details
              </TableCell>
              <TableCell sx={{ fontSize: "14px", fontWeight: "600" }}>
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
          <TableBody sx={{ cursor: "pointer" }}>
            {campaignsData.map((campaign) => (
              <TableRow
                key={campaign.id}
                sx={{"&:hover": { backgroundColor: "#F0F1F7" },}}
              >
                <TableCell
                 
                  scope="row"
                  sx={{ border: "none", paddingBottom: "0", width: "35%",   }}
                > <NavLink style={{ textDecoration: "none"}} to={`${campaign.id}`}
                onClick={() => {
                  setOpenContent(campaign.id);
                }} >
                  <Typography sx={{color:"black"}}>{campaign.name}</Typography>
                  <div  
                 
                    style={{
                      display: "flex",
                      alignItems: { xs: "start", sm: "center" },
                      width: "435px",
                      paddingTop: "5px",
                   
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#878787",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      {campaign.status}
                    </Typography>
                    <span style={{ margin: "0 5px", color: "#878787" }}>|</span>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#878787",
                        paddingLeft: { xs: 0, sm: "4px" },
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      Created At: {campaign.createdAt}
                    </Typography>
                    <span style={{ margin: "0 5px", color: "#878787" }}>|</span>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#878787",
                        paddingLeft: { xs: 0, sm: "4px" },
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      {campaign.sequenceCount} Sequence
                    </Typography>
                  </div></NavLink>
                </TableCell>
                <TableCell
                 
                  sx={{
                    textDecoration: "none",
                    border: "none",
                    paddingBottom: "0",
                    paddingLeft: "19px",
                  }}
                ><NavLink style={{ textDecoration: "none", color: "#878787",}} to={`${campaign.id}`}
                onClick={() => {
                  setOpenContent(campaign.id);
                }}>
                  <Typography >
                    {campaign.send}
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: "5px",
                      alignItems: "center",
                      display: "flex",
                     
                    }}
                  >
                    <MailOutlineSharpIcon sx={{ paddingRight: "5px" }} />
                    Send
                  </Box></NavLink>
                </TableCell>
                <TableCell
               
                 
                  sx={{
                    textDecoration: "none",
                    border: "none",
                    paddingBottom: "0",
                    paddingLeft: "19px",
                  }}
                ><NavLink  style={{ textDecoration: "none", color: "#878787",}} to={`${campaign.id}`}
                onClick={() => {
                  setOpenContent(campaign.id);
                }}>
                  <Typography >
                    {campaign.opened}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                     
                      paddingTop: "5px",
                    }}
                  >
                    <DraftsOutlinedIcon sx={{ paddingRight: "5px" }} />
                    Opened
                  </Box></NavLink>
                </TableCell>
                <TableCell
                  
                
                  sx={{
                    textDecoration: "none",
                    border: "none",
                    paddingBottom: "0",
                    paddingLeft: "19px",
                    
                  }}
                ><NavLink  style={{ textDecoration: "none",color: "#878787",}} to={`${campaign.id}`}
                onClick={() => {
                  setOpenContent(campaign.id);
                }}>
                  <Typography>
                    {campaign.clicked}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      paddingTop: "5px",
                    }}
                  >
                    <AdsClickSharpIcon sx={{ paddingRight: "5px" }} />
                    Clicked
                  </Box></NavLink>
                </TableCell>
                <TableCell
                 
                 
                  sx={{
                    textDecoration: "none",
                    border: "none",
                    paddingBottom: "0",
                    paddingLeft: "19px",
                    
                  }}
                ><NavLink style={{ textDecoration: "none",  color: "#878787"}} to={`${campaign.id}`}
                onClick={() => {
                  setOpenContent(campaign.id);
                }}>
                  <Typography >
                    {campaign.replied}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      paddingTop: "5px",
                    
                    }}
                  >
                    <ForwardToInboxIcon sx={{ paddingRight: "5px" }} />
                    Replied
                  </Box></NavLink>
                </TableCell>
                <TableCell
                  sx={{
                    textDecoration: "none",
                    border: "none",
                    paddingBottom: "0",
                    paddingLeft: "19px",
                  }}
                ><NavLink style={{ textDecoration: "none",color: "#878787"}}  to={`${campaign.id}`}
                onClick={() => {
                  setOpenContent(campaign.id);
                }}>
                  <Typography >
                    {campaign.positiveReply}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                     
                      paddingTop: "5px",
                    }}
                  >
                    <MonetizationOnOutlinedIcon sx={{ paddingRight: "5px" }} />
                    Positive Reply
                  </Box></NavLink>
                </TableCell>
                <TableCell
                  sx={{ border: "none", color: "#878787", paddingTop: "30px" }}
                >
                  <Link to="new-campaign">
                    <CreateOutlinedIcon
                      sx={{
                        backgroundColor: "#EBEBEB",
                        cursor: "pointer",
                        color: "#878787",
                        "&:hover": { backgroundColor: "#E5E5E5" },
                      }}
                    />
                  </Link>
                </TableCell>
                <TableCell
                  onClick={handleClickOpen}
                  sx={{ border: "none", color: "#878787", paddingTop: "30px" }}
                >
                  <MoreHorizRoundedIcon
                    sx={{
                      backgroundColor: "#EBEBEB",
                      cursor: "pointer",
                      color: "#878787",
                      alignItems: "end",
                      "&:hover": { backgroundColor: "#E5E5E5" },
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
        sx={{ position: "absolute", left: "80%", top: "200px" }}
      >
        {" "}
        <Box sx={{ width: "220px", height: "390px" }}>
          <MenuItem sx={{ height: "50px" }}>Add/Update Client</MenuItem>
          <MenuItem sx={{ height: "50px" }}>Add Tag</MenuItem>
          <MenuItem sx={{ height: "50px" }}>Duplicate Campaign</MenuItem>
          <MenuItem sx={{ height: "50px" }}>Add to folder</MenuItem>
          <Divider />
          <MenuItem sx={{ height: "50px" }}>Rename</MenuItem>
          <MenuItem sx={{ height: "50px" }}>Archive Campaign</MenuItem>
          <Divider />
          <MenuItem sx={{ height: "50px", color: "red" }}>Delete</MenuItem>
        </Box>
      </Popover>
    </Box>
  );
};

export default Body;
