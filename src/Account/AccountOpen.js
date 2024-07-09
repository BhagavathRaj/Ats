import { ArrowDownward } from '@mui/icons-material';
import { CardContent, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import '../Signin/Signin.css';
import LandingPage from '../LandingPage';
import { useTheme } from '@mui/material/styles';
import FooterContent from '../Footer/FooterContent';
import LoginModel from '../LoginModel/LoginModel';
const AccountOpen = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOnline = () => {
    window.open('https://kyc.adityatrading.in/');
  };
  return (
    <div>
      <LandingPage />
      <div
        className="content-page"
        style={{ marginTop: '5px', padding: '0px' }}
      >
        <div className="container" style={{ top: '-40px' }}>
          <div className="row">
            <div
              style={{
                flex: '0 0 100%',
                maxWidth: '100%',
                textAlign: 'center',
                margintop: '15px',
                position: 'relative',
                width: '100%',
                paddingLeft: '15px',
                paddingRight: '15px',
              }}
            >
              <h4 className="h4" style={{ fontWeight: '600' }}>
                Account Opening
              </h4>
              <p style={{ marginBottom: '20px' }}>What do you want to do?</p>
            </div>
            <Grid
              sx={{
                justifyContent: 'space-around',
              }}
              container
            >
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ minWidth: '320px', minHeight: '160px' }}>
                  <Typography
                    sx={{
                      flexDirection: 'column',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      minWidth: '350px',
                      minHeight: '160px',
                      boxShadow: '0 4px 24px 0 #1818185e',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      onClick={handleOnline}
                    >
                      <img
                        src="https://adityatrading.in/static/img/online.png"
                        style={{ width: '60px' }}
                      />

                      <h6
                        className="h6"
                        style={{ marginTop: '15px', fontSize: '15px' }}
                      >
                        Click here to Continue with Online Process
                      </h6>
                    </div>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent
                  sx={{
                    minWidth: '320px',
                    minHeight: '160px',
                  }}
                >
                  <Typography
                    sx={{
                      flexDirection: 'column',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      minWidth: '350px',
                      minHeight: '160px',
                      boxShadow: '0 4px 24px 0 #1818185e',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      onClick={handleOpen}
                    >
                      <img
                        src="https://adityatrading.in/static/img/offline.png"
                        style={{ width: '60px' }}
                      />

                      <h6
                        className="h6"
                        style={{ marginTop: '15px', fontSize: '15px' }}
                      >
                        Click here to Continue with Offline Process
                      </h6>
                    </div>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </div>
          <LoginModel open={open} handleClose={handleClose} />
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default AccountOpen;
