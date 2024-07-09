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

const AddUser = () => {
  const schema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    empType: yup.string().required('Worker Type is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Mobile Number is required'),
    designation: yup.string().required('Designation is required'),
    gender: yup.string().required('Gender is required'),
    branch: yup.string().required('Branch is required'),
    address: yup.string().required('Address is required'),
    shift: yup.string().required('Shift is required'),
    departments: yup.string().required('Departments are required'),
    roles: yup.string().required('Roles are required'),
    dob: yup.date().required('Date of Birth is required').nullable(),
  });

  const [openModal, setOpenModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [empType, setEmpType] = useState('');
  const [gender, setGender] = useState('');
  const [designation, setDesignation] = useState('');
  const [branch, setBranch] = useState('');
  const [value, setValue] = useState(null);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  const onSubmit = (data) => {
    console.log('hi', data);
  };

  const handleChange = (e) => {
    setEmpType(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleDesignationChnage = (e) => {
    setDesignation(e.target.value);
  };
  const handleBranchChnage = (e) => {
    setBranch(e.target.value);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#000AFF',
          '&:hover': { backgroundColor: '#000AFF' },
        }}
        onClick={() => setOpenModal(true)}
      >
        Invite User
      </Button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        style={{
          top: '10%',
          left: '5%',
          width: '90vw',
          height: '50vh',
        }}
      >
        <Paper elevation={1}>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: '2%',
              paddingRight: '2%',
              paddingBottom: '1%',
              paddingTop: '2%',
            }}
          >
            <Typography style={{ color: 'black' }}>Add Employees</Typography>
            <CloseOutlinedIcon
              style={{
                color: 'black',
                width: '25px',
                height: '25px',
                position: 'relative',
                paddingLeft: '10px',
                cursor: 'pointer',
              }}
              onClick={() => setOpenModal(false)}
            />
          </Box>
          <Box style={{ display: 'flex', height: '100%' }}> </Box>
          <Box>
            {/* <Box style={{ display: 'inline-block', height: '100%' }}>
              <Grid
                item
                xs={3}
                sm={3}
                style={{
                  background: 'rgba(0, 10, 255, 0.1)',
                  padding: '20px',
                }}
              >
                <Typography variant="h6">Sections</Typography>
                <List>
                  <ListItem button>
                    <ListItemText primary="Basic Info" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Work Details" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Personal Info" />
                  </ListItem>
                </List>
              </Grid>
            </Box> */}

            <Box>
              <form
                style={{
                  height: '70vh',
                  overflowY: 'auto',
                  position: 'relative',
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid
                  container
                  style={{
                    minHeight: '70vh',
                    maxWidth: '800px',
                    display: 'flex',
                    left: '300px',
                    overflowY: 'auto',
                    alignItems: 'center',
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    style={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '1%',
                      paddingTop: '4%',
                      alignItems: 'center',
                    }}
                  >
                    <Typography>First Name *</Typography>
                    <TextField
                      {...register('firstName')}
                      // label="First Name"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      fullWidth
                      size="small"
                      style={{ paddingBottom: '10px' }}
                    />
                    <Typography>Email *</Typography>
                    <TextField
                      {...register('email')}
                      error={!!errors.email} // Set error state based on validation
                      helperText={errors.email?.message} // Display error message if there is a validation error
                      fullWidth
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ paddingBottom: '10px' }}
                    />
                    <Typography>Worker Type</Typography>
                    <Select
                      {...register('empType')}
                      error={!!errors.empType}
                      helperText={errors.empType && errors.empType.message}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={empType}
                      onChange={handleChange}
                      style={{ width: '100%', height: '45px' }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Developer</MenuItem>
                      <MenuItem value={30}>Sales</MenuItem>
                      <MenuItem value={40}>Support</MenuItem>
                    </Select>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    style={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '0%',
                      paddingTop: '2%',
                    }}
                  >
                    <Typography>Last Name / Family Name*</Typography>
                    <TextField
                      {...register('lastName')}
                      error={!!errors.lastName}
                      helperText={errors.lastName && errors.lastName.message}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      fullWidth
                      size="small"
                      style={{ paddingBottom: '10px' }}
                    />
                    <Typography>Designation</Typography>
                    <Select
                      {...register('designation')}
                      error={!!errors.designation}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={designation}
                      onChange={handleDesignationChnage}
                      style={{ width: '100%' }}
                      size="small"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={50}>Manager</MenuItem>
                      <MenuItem value={60}>CE0</MenuItem>
                      <MenuItem value={70}>Employee</MenuItem>
                    </Select>

                    <Typography>Mobile Number*</Typography>
                    <TextField
                      {...register('phone')}
                      error={!!errors.phone}
                      helperText={errors.phone && errors.phone.message}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    style={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '0%',
                      paddingTop: '1%',
                    }}
                  >
                    <Typography>Gender</Typography>
                    <Select
                      {...register('gender')}
                      error={!!errors.gender}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={gender}
                      onChange={handleGenderChange}
                      style={{ width: '100%' }}
                      size="small"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={50}>Male</MenuItem>
                      <MenuItem value={60}>Female</MenuItem>
                      <MenuItem value={70}>Trans</MenuItem>
                    </Select>
                    <Typography>Address *</Typography>
                    <TextField
                      {...register('address')}
                      error={!!errors.address}
                      // helperText={errors.address.message}
                      helperText={errors.address && errors.address.message}
                      fullWidth
                      size="small"
                    />
                    <Typography>Employee No</Typography>
                    <TextField fullWidth size="small" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    style={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '0%',
                      paddingTop: '-1%',
                      alignItems: 'center',
                      position: 'relative',
                      top: '-20px',
                    }}
                  >
                    {' '}
                    <Typography>Shift *</Typography>
                    <TextField
                      {...register('shift')}
                      error={!!errors.shift}
                      helperText={errors.shift && errors.shift.message}
                      fullWidth
                      size="small"
                    />
                    <Typography>Departments</Typography>
                    <TextField
                      {...register('departments')}
                      error={!!errors.departments}
                      helperText={
                        errors.departments && errors.departments.message
                      }
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    style={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '0%',
                      paddingTop: '0%',
                      position: 'relative',
                      top: '-20px',
                    }}
                  >
                    {' '}
                    <Typography>Branch</Typography>
                    <Select
                      {...register('branch')} // Register the field with react-hook-form
                      error={!!errors.branch} // Check if there's an error for the field
                      helperText={errors.branch ? errors.branch.message : ''}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={branch}
                      onChange={handleBranchChnage}
                      style={{ width: '100%' }}
                      size="small"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={50}>Admin</MenuItem>
                      <MenuItem value={60}>User</MenuItem>
                    </Select>
                    <Typography>Roles</Typography>
                    <TextField
                      {...register('roles')}
                      error={!!errors.roles}
                      helperText={errors.roles && errors.roles.message}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    style={{
                      paddingLeft: '2%',
                      paddingRight: '2%',
                      paddingBottom: '0%',
                      paddingTop: '0%',
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DesktopDatePicker']}>
                        <DemoItem label="Date of Birth">
                          <DesktopDatePicker
                            {...register('dob')} // Register the field with react-hook-form
                            value={selectedDate}
                            onChange={handleDateChange}
                            error={!!errors.dob} // Check if there's an error for the field
                            helperText={errors.dob ? errors.dob.message : ''}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                </Grid>

                <Box
                  style={{
                    display: 'flex',

                    alignItems: 'center',
                    position: 'relative',
                    padding: '1%',
                    justifyContent: 'flex-end',
                    top: '-70px',
                  }}
                  // sx={{ position: 'relative', width: '1050px', top: '523px' }}
                >
                  <Button
                    type="submit"
                    style={{
                      background: 'rgba(0, 10, 255, 1)',
                      color: 'white',
                      borderRadius: '5px',
                      marginRight: '1%',
                    }}
                  >
                    Add Employees
                  </Button>
                  <Button
                    onClick={() => setOpenModal(false)}
                    style={{
                      color: 'black',
                      borderRadius: '5px',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default AddUser;
