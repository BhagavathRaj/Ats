import React from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';

const Createticket = () => {
  const location = useLocation();
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
              Create Ticket
            </GreenButton>
          </div>
          <hr />

          <Grid container direction="column" spacing={2}>
            <Grid container item spacing={2}>
              <Grid item xs={isMobile ? 12 : 6}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    Contact Name*
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="please enter contact name"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 6}>
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    Contact Name*
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="please enter contact email"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography
                  sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                >
                  Description <small>(Please provide complete details)</small>
                </Typography>
                <textarea
                  type="text"
                  rows={7}
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
              <Box
                sx={{ display: 'flex', justifyContent: 'center' }}
                width="100%"
                height="100px"
              >
                <DangerButton name="Create Ticket" />
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

export default Createticket;
