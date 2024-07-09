import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router';

const EditContent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    navigate(`/employees/${id}`);
  };
  return (
    <div>
      <div>
        <WestOutlinedIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
        <Typography sx={{ paddingLeft: '16px' }}>EditContent</Typography>
      </div>
      <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
        <form
          style={{
            overflowY: 'auto',
            position: 'relative',
            maxWidth: '600px',
          }}
          onSubmit={handleSubmit()}
        >
          <Grid
            container
            spacing={3}
            // style={{
            //   minHeight: '70vh',

            //   // display: 'flex',
            //   // marginLeft: '20px',
            //   overflowY: 'auto',

            //   // alignItems: 'center',
            // }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              // style={{
              //   paddingLeft: '2%',
              //   paddingRight: '2%',
              //   paddingBottom: '1%',
              //   paddingTop: '4%',
              //   alignItems: 'center',
              // }}
            >
              <Typography>First Name *</Typography>
              <TextField
                {...register('firstName')}
                // label="First Name"

                fullWidth
                size="small"
                // style={{ paddingBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography>Email *</Typography>
              <TextField
                {...register('email')}
                fullWidth
                size="small"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                // style={{ paddingBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography>Phone</Typography>
              <TextField
                {...register('phone')}
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              // style={{ position: 'relative', top: '-30px' }}
            >
              <Typography>Last Name </Typography>
              <TextField
                {...register('lastName')}
                // value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
                fullWidth
                size="small"
                // style={{ paddingBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography>Branch</Typography>
              <Select
                {...register('branch')} // Register the field with react-hook-form
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                fullWidth
                // value={branch}
                // onChange={handleBranchChnage}
                // style={{ width: '100%' }}
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={50}>Admin</MenuItem>
                <MenuItem value={60}>User</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Box
            style={{
              display: 'flex',

              alignItems: 'center',
              position: 'relative',
              padding: '1%',
              justifyContent: 'center',
            }}
            // sx={{ position: 'relative', width: '1050px', top: '523px' }}
          >
            <Button
              // onClick={() => setOpenModal(false)}
              style={{
                color: 'black',
                borderRadius: '5px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                marginLeft: '40px',
                marginRight: '10px',
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style={{
                background: 'rgba(0, 10, 255, 1)',
                color: 'white',
                borderRadius: '5px',
                marginRight: '1%',
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default EditContent;
