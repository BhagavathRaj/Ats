import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Popover,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddAdwords from './AddAdwords/AddAdwords';

const AdwordHead = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [tags, setTags] = useState("");
    const [team, setTeam] = useState("");
    const [client, setClient] = useState("");
  
    const handleChange = (e) => {
      setStatus(e.target.value);
      setTags(e.target.value);
      setClient(e.target.value);
      setTeam(e.target.value);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Box
        sx={{
          display: "flex",
          height: "46px",
          borderBottom: "1px solid #DADFE2",
        }}
      >
        <Box
          sx={{
            alignContent: "center",
            paddingLeft: "27px",
            paddingRight: "20px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            All Campaigns
          </Typography>
        </Box>
  
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            padding: "8px 20px 10px 10px ",
            alignItems: "center",
          }}
        >
          <FilterAltOutlinedIcon
            onClick={handleClickOpen}
            sx={{
              border: "1px solid #E5E5E5",
              height: "25px",
              marginTop: "2px",
              borderRadius: "2px",
              color: "#797979",
              backgroundColor: "#F4F4F4",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#E5E5E5",
                border: "1px solid #00000040",
              },
            }}
          />
          <Box sx={{ marginLeft: "30px" }}>
           <AddAdwords/>
          </Box>
        </Box>
  
        <Popover
          onClose={handleClose}
          open={open}
          sx={{ position: "absolute", left: "67.5%", top: "90px" }}
        >
          <Box sx={{ width: "250px", height: "420px" }}>
            <DialogTitle
              sx={{ display: "flex", borderBottom: "1px solid #DADFE2" }}
            >
              <Typography sx={{ fontSize: "14px" }}>Filter</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#000AFF",
                  marginLeft: "auto",
                  cursor: "pointer",
                }}
              >
                Clear all
              </Typography>
            </DialogTitle>
  
            <DialogContent>
              <FormControl sx={{ minWidth: 200 }}>
                <Typography sx={{ fontSize: "14px", padding: "10px 0 7px 0" }}>
                  Campaign Status
                </Typography>
                <Select
                  onChange={handleChange}
                  value={status}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="Draft">Draft</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Stopped">Stopped</MenuItem>
                  <MenuItem value="Paused">Paused</MenuItem>
                  <MenuItem value="Archived">Archived</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 200 }}>
                <Typography sx={{ fontSize: "14px", padding: "10px 0 7px 0" }}>
                  Tag Name
                </Typography>
                <Select
                  onChange={handleChange}
                  value={tags}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="none">No tags available</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 200 }}>
                <Typography sx={{ fontSize: "14px", padding: "10px 0 7px 0" }}>
                  Team Member
                </Typography>
                <Select
                  onChange={handleChange}
                  value={team}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="Mounesh">Mounesh</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 200 }}>
                <Typography sx={{ fontSize: "14px", padding: "10px 0 7px 0" }}>
                  Client Name
                </Typography>
                <Select
                  onChange={handleChange}
                  value={client}
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="null">No client available</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#F4F4F4",
                  color: "black",
                  "&:hover": { backgroundColor: "#FAF6FF" },
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#000AFF",
                  "&:hover": { backgroundColor: "#000AFF" },
                }}
              >
                Apply
              </Button>
            </DialogActions>
          </Box>
        </Popover>
      </Box>
    );
  };

export default AdwordHead
