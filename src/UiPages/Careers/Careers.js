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

const Careers = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <LandingPage />
      <div
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '80%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div style={{ display: 'flex' }}>
            <GreenButton sx={{ position: 'relative', left: '-20px' }}>
              Careers
            </GreenButton>
          </div>
          <p style={{ fontWeight: 'bold', color: 'black' }}>
            Find your Next Job with ATS
          </p>
          <p>
            <small>
              Make your career grow with us and have a beatiful work Experience
            </small>
          </p>
          <hr />

          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  border: '1px solid #dee2e6!important',
                  display: 'flex',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h5>Relationship Manager</h5>
                  <p>
                    Hello
                    <br />
                    Greetings of the day!
                    <br />
                    We have an urgent opening!!
                  </p>
                  <p>Designation - Re…</p>
                </div>
                <div>
                  <SuccessButton name="Apply Now" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  border: '1px solid #dee2e6!important',
                  display: 'flex',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h5>Equity Advisor</h5>
                  <p>
                    <strong>Equity Advisor</strong>
                    for<strong> Equity Dealer: </strong>
                  </p>
                </div>
                <div>
                  <SuccessButton name="Apply Now" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </div>
    </div>
  );
};

export default Careers;
