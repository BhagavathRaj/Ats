import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';

const AtsPolicy = () => {
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
            <h5 style={{ textAlign: 'center' }}> ATS POLICY</h5>
            <Grid item xs={12} md={4} lg={4}>
              ``
              <Box sx={{ minHeight: '500px' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li>
                    <a
                      style={{ color: '#777D74' }}
                      href="https://adityatrading.in/media/ats-policy/RMS-Policy.pdf"
                    >
                      RMS Policy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#777D74' }}
                      href="https://adityatrading.in/media/ats-policy/Internal-Control-Policy.pdf"
                    >
                      Internal Control Policy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#777D74' }}
                      href="https://adityatrading.in/media/ats-policy/PMLA-Policy.pdf"
                    >
                      PMLA Policy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#777D74' }}
                      href="https://adityatrading.in/media/ats-policy/Policy-for-Inactive-Clients.pdf"
                    >
                      Policy for Inactive Clients
                    </a>
                  </li>
                </ul>
              </Box>
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

export default AtsPolicy;
