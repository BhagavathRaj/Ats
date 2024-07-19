import React from 'react';
import LandingPage from '../../LandingPage';
import './Markets.css';
import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';

const MarketCalender = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <LandingPage />
      <Box
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease-out 0s',
        }}
      >
        <Box
          sx={{
            width: '80%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid container item spacing={2}>
              <Grid item xs={isMobile ? 12 : 6}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h1
                    style={{
                      fontSize: '18px',
                      color: '#374948',
                      fontWeight: '600',
                    }}
                  >
                    Market Holiday Calendar 2024—NSE,
                    <br />
                    BSE And MCX
                  </h1>
                  <p>
                    <b>
                      Here’s the trading/stock market holiday calendar for 2024
                      for equity
                    </b>
                  </p>
                  <p>
                    <b>and F&O segments.</b>
                  </p>
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 6}>
                <Box>
                  <img
                    style={{ width: '100%', height: '165px' }}
                    src="https://adityatrading.in/static/images/Holiday-Calender.svg"
                    alt="people"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: isMobile ? '300px' : 'auto',
                minWidth: { xs: '300px', sm: '300px' },
              }}
            >
              <p>
                Trading Holidays for 2024 – Equity Segment, Equity Derivative
                Segment and SLB Segment
              </p>
              <div className="market-responsive">
                <table
                  style={{
                    width: '100%',

                    borderCollapse: 'collapse',
                  }}
                  className="table-market"
                >
                  <thead>
                    <tr>
                      <th style={{ width: '33.33%' }}>Holiday</th>
                      <th style={{ width: '33.33%' }}>Date</th>
                      <th style={{ width: '33.33%' }}>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Republic Day</td>
                      <td>January 26, 2024</td>
                      <td>Friday</td>
                    </tr>
                    <tr>
                      <td>Mahashivratri </td>
                      <td>March 08, 2024</td>
                      <td>Friday</td>
                    </tr>
                    <tr>
                      <td>Holi </td>
                      <td>March 25, 2024</td>
                      <td>Monday</td>
                    </tr>
                    <tr>
                      <td>Good Friday </td>
                      <td>March 29, 2024</td>
                      <td>Friday</td>
                    </tr>
                    <tr>
                      <td>Id-Ul-Fitr (Ramadan Eid)</td>
                      <td>April 11, 2024</td>
                      <td>Thursday</td>
                    </tr>
                    <tr>
                      <td>Shri Ram Navmi</td>
                      <td>April 17, 2024</td>
                      <td>Wednesday</td>
                    </tr>
                    <tr>
                      <td>Maharashtra Day</td>
                      <td>May 01, 2024</td>
                      <td>Wednesday</td>
                    </tr>
                    <tr>
                      <td>Bakri Id</td>
                      <td>June 17, 2024</td>
                      <td>Monday</td>
                    </tr>
                    <tr>
                      <td>Moharram</td>
                      <td>July 17, 2024</td>
                      <td>Wednesday</td>
                    </tr>
                    <tr>
                      <td>Independence Day</td>
                      <td>August 15, 2024</td>
                      <td>Thursday</td>
                    </tr>
                    <tr>
                      <td>Mahatma Gandhi Jayanti</td>
                      <td>October 02, 2024</td>
                      <td>Wednesday</td>
                    </tr>
                    <tr>
                      <td>Diwali Laxmi Pujan* </td>
                      <td>November 01, 2024</td>
                      <td>Friday</td>
                    </tr>
                    <tr>
                      <td>Gurunanak Jayanti </td>
                      <td>November 15, 2024</td>
                      <td>Friday</td>
                    </tr>
                    <tr>
                      <td>Gurunanak Jayanti </td>
                      <td>November 15, 2024</td>
                      <td>Friday</td>
                    </tr>
                    <tr>
                      <td>Christmas </td>
                      <td>December 25, 2024</td>
                      <td>Wednesday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: isMobile ? '300px' : 'auto',
              }}
            >
              <p>The holidays falling on Saturday / Sunday are as follows:</p>
              <div className="market-responsive">
                <table
                  style={{
                    width: '100%',

                    borderCollapse: 'collapse',
                  }}
                  className="table-market"
                >
                  <thead>
                    <tr>
                      <th style={{ width: '33.33%' }}>Holiday</th>
                      <th style={{ width: '33.33%' }}>Date</th>
                      <th style={{ width: '33.33%' }}>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dr. Baba Saheb Ambedkar Jayanti</td>
                      <td>April 14, 2024</td>
                      <td>Sunday</td>
                    </tr>
                    <tr>
                      <td>Shri Mahavir Jayanti </td>
                      <td>April 21, 2024</td>
                      <td>Sunday</td>
                    </tr>
                    <tr>
                      <td>Ganesh Chaturthi </td>
                      <td>September 07, 2024</td>
                      <td>Saturday</td>
                    </tr>
                    <tr>
                      <td>Dussehra </td>
                      <td>October 12, 2024</td>
                      <td>Saturday</td>
                    </tr>
                    <tr>
                      <td>Diwali-Balipratipada</td>
                      <td>November 02, 2024</td>
                      <td>Saturday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: isMobile ? '300px' : 'auto',
              }}
            >
              <h5>MCX Holidays</h5>

              <div className="market-responsive">
                <table
                  style={{
                    width: '100%',

                    borderCollapse: 'collapse',
                  }}
                  className="table-market5"
                >
                  <thead>
                    <tr>
                      <th>Holiday</th>
                      <th>Date</th>
                      <th>Day</th>
                      <th>Morning session</th>
                      <th>Evening session</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>New Year Day</td>
                      <td>01-Jan-2024</td>
                      <td>Monday</td>
                      <td>Open </td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td>Republic Day</td>
                      <td>26-Jan-2024</td>
                      <td>Friday</td>
                      <td>Closed </td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td>Mahashivratri</td>
                      <td>08-Mar-2024</td>
                      <td>Friday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Holi (2nd day)</td>
                      <td>25-Mar-2024</td>
                      <td>Monday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Good Friday</td>
                      <td>29-Mar-2024</td>
                      <td>Friday</td>
                      <td>Closed </td>
                      <td>Closed </td>
                    </tr>
                    <tr>
                      <td>Id-Ul-Fitr (Ramadan Eid)</td>
                      <td>11-Apr-2024</td>
                      <td>Thursday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Shri Ram Navmi</td>
                      <td>17-Apr-2024 </td>
                      <td>Wednesday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Maharashtra Day</td>
                      <td>01-May-2024 </td>
                      <td>Wednesday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Bakri Id</td>
                      <td>17-Jun-2024 </td>
                      <td>Monday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Moharram</td>
                      <td>17-Jul-2024 </td>
                      <td>Wednesday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Independence Day</td>
                      <td>15-Aug-2024 </td>
                      <td>Thursday</td>
                      <td>Closed </td>
                      <td>Closed </td>
                    </tr>
                    <tr>
                      <td>Mahatma Gandhi Jayanti</td>
                      <td>02-Oct-2024 </td>
                      <td>Wednesday</td>
                      <td>Closed </td>
                      <td>Closed </td>
                    </tr>
                    <tr>
                      <td>Diwali Laxmi Pujan*</td>
                      <td>01-Nov-2024 </td>
                      <td>Friday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Guru Nanak Jayanti</td>
                      <td>15-Nov-2024 </td>
                      <td>Friday</td>
                      <td>Closed </td>
                      <td>Open </td>
                    </tr>
                    <tr>
                      <td>Christmas</td>
                      <td>25-Dec-2024 </td>
                      <td>Wednesday</td>
                      <td>Closed </td>
                      <td>Closed </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: isMobile ? '300px' : 'auto',
              }}
            >
              <p>The holidays falling on Saturday / Sunday are as follows:</p>
              <div className="market-responsive">
                <table
                  style={{
                    width: '100%',

                    borderCollapse: 'collapse',
                  }}
                  className="table-market"
                >
                  <thead>
                    <tr>
                      <th style={{ width: '33.33%' }}>Holiday</th>
                      <th style={{ width: '33.33%' }}>Date</th>
                      <th style={{ width: '33.33%' }}>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dr. Baba Saheb Ambedkar Jayanti</td>
                      <td>April 14, 2024</td>
                      <td>Sunday</td>
                    </tr>
                    <tr>
                      <td>Shri Mahavir Jayanti </td>
                      <td>April 21, 2024</td>
                      <td>Sunday</td>
                    </tr>
                    <tr>
                      <td>Ganesh Chaturthi </td>
                      <td>September 07, 2024</td>
                      <td>Saturday</td>
                    </tr>
                    <tr>
                      <td>Dussehra </td>
                      <td>October 12, 2024</td>
                      <td>Saturday</td>
                    </tr>
                    <tr>
                      <td>Diwali-Balipratipada</td>
                      <td>November 02, 2024</td>
                      <td>Saturday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: isMobile ? '300px' : 'auto',
              }}
            >
              <p>
                <b>Note:</b>
              </p>
              <p>
                Muhurat Trading will be held on Sunday, November 01, 2024. We’ll
                update the timings of Muhurat Trading when the exchanges notify
                the time.{' '}
              </p>
              <p>
                You can add all these holidays to your Google calendar to get an
                alert, <a href="#">here’s the link.</a>
              </p>
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={12}>
          <div>
            <FooterContent />
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default MarketCalender;
