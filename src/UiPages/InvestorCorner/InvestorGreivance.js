import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';
import SuccessButton from '../../Buttons/Success';

const InvestorGreivance = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <Grid item xs={isMobile ? 12 : 8}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5> Investors’ Grievance </h5>
                  <p>All your grievances will be answered in 24 hrs!</p>

                  <p>
                    If you are not satisfied or facing any issue with our
                    products or services, you can raise a compliant with us!
                  </p>
                  <p>
                    Our Company’s Grievance Redressal Team will reach out to you
                    to understand the issue better. The Team will ensure that
                    your complaints will be solved at the earliest accordingly!
                  </p>
                  <p>
                    You can also write your queries and complaints to us at{' '}
                    <a
                      style={{ textDecoration: 'none', color: '#34a853' }}
                      href="mailto:grievances@adityatrading.com"
                    >
                      grievances@adityatrading.com
                    </a>
                    .
                  </p>
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                <Box>
                  <img
                    style={{ width: '100%', height: '222px' }}
                    src="https://adityatrading.in/static/images/Investors-Grievance.svg"
                    alt="people"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <h6>Investors’ Grievance</h6>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    ClIENT CODE*
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="Enter Client Code"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    EMAIL ADDRESS*
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="Enter Email address"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    MOBILE NUMBER*
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="Enter Mobile Number"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    YOUR GREIEVANCE
                  </Typography>
                  <textarea
                    type="text"
                    rows={5}
                    className="formcontroll"
                    autoComplete="off"
                    style={{
                      outline: 'none',
                      border: '1px solid #a7a4a4',
                      width: '100%',
                      padding: '8px',
                      fontSize: '16px',
                      borderRadius: '4px',
                      resize: 'vertical',
                      height: 'auto',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <SuccessButton name="Submit" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default InvestorGreivance;
