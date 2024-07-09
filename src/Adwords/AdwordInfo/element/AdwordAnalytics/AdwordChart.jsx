import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from '@mui/material';
import dayjs from 'dayjs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const data = [
  {
    name: '05 Apr',
    send: 4000,
    Opened: 2400,
    Clicked: 4900,
    Replied: 2456,
    Bounced: 1356,
    amt: 2400,
  },
  {
    name: '06 Apr',
    send: 4450,
    Opened: 3400,
    Clicked: 4100,
    Replied: 3556,
    Bounced: 2356,
    amt: 2210,
  },
  {
    name: '07 Apr',
    send: 4000,
    Opened: 2400,
    Clicked: 4900,
    Replied: 2456,
    Bounced: 1356,
    amt: 2290,
  },
  {
    name: '08 Apr',
    send: 3450,
    Opened: 3400,
    Clicked: 3100,
    Replied: 2556,
    Bounced: 2356,
    amt: 2000,
  },
  {
    name: '09 Apr',
    send: 4450,
    Opened: 2300,
    Clicked: 4200,
    Replied: 2556,
    Bounced: 2356,
    amt: 2181,
  },
];

const AdwordChart = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const ct = require('countries-and-timezones');
  const timezones = ct.getAllTimezones();

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ alignItems: 'center', borderBottom: '1px solid #DADFE2' }}
      >
        <Grid item xs={12} sm={5}>
          <Typography
            sx={{ fontSize: '14px', fontWeight: '600', paddingBottom: '5px' }}
          >
            Campaign Reach and Sequencing Distribution
          </Typography>
          <Typography sx={{ fontSize: '13px' }}>
            {`The data is displayed in ${selectedTimezone} timezone ${
              selectedDate
                ? 'from ' + dayjs(selectedDate).format('dddd, MMM D, YYYY')
                : ''
            }`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-select-small-label">Timezone</InputLabel>
            <Select
              variant="outlined"
              label="Timezone"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedTimezone}
              onChange={handleTimezoneChange}
            >
              {Object.values(timezones).map((timezone) => (
                <MenuItem key={timezone.name} value={timezone.name}>
                  {`${timezone.name} (UTC ${timezone.dstOffsetStr})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker onChange={handleDateChange} value={selectedDate} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{ overflowX: 'auto', overflowY: 'hidden' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              padding: '10px 0px 20px',
            }}
          >
            Email Reach Breakup
          </Typography>

          <LineChart width={720} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Sent"
              stroke="#757AE9"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Opened" stroke="#BF51C1" />
            <Line type="monotone" dataKey="Clicked" stroke="#EEB728" />
            <Line type="monotone" dataKey="Replied" stroke="#51C1C1" />
            <Line type="monotone" dataKey="Bounced" stroke="#E9758A" />
          </LineChart>
        </Grid>
      </Grid>
    </>
  );
};

export default AdwordChart;
