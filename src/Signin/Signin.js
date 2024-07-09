import React from 'react';
import FooterContent from '../Footer/FooterContent';
import './Signin.css';
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import LandingPage from '../LandingPage';
import { Container } from '@mui/system';
import { useTheme } from '@mui/material/styles';
const Signin = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <LandingPage />
      <div className="content-page">
        <div className="container">
          <div className="box">
            <div className="center">
              <div className="container-fluid">
                {/* <div className="rows">
                  <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
                    <img
                      src="https://adityatrading.in/static/images/banners/trade-desktop.png"
                      alt="Banner Image"
                      style={{ marginTop: '20px', width: '100%' }}
                    />
                  </div>
                  <div
                    style={{
                      padding: '16px',
                      marginTop: '16px',
                      flex: '0 0 50%',
                      maxWidth: '50%',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '28px',
                        marginBottom: '5px',
                        margin: '0px',
                        color: '#131722',
                        fontWeight: '400',
                      }}
                    >
                      Join 1 Lac + investors & traders
                    </h4>
                    <p style={{ marginBottom: '16px' }}>
                      {' '}
                      Open a trading and Demat account online and start
                      investing for free
                    </p>
                    <p
                      style={{
                        marginTop: '6px',
                        marginBottom: '0px',
                        display: 'none',
                      }}
                    >
                      MobileNumber
                    </p>
                    <div className="phoneInput">
                      <input
                        type="number"
                        placeholder="Enetr Your Mobile Number"
                        maxLength={10}
                        style={{
                          border: 'none',
                          width: '100%',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div style={{ width: '100%' }}>
                      <Button
                        sx={{
                          color: '#e5f2ff!important',
                          top: '20px',
                          border: '1px solid #e5f2ff!important',
                          paddingTop: '7px',
                          paddingLeft: '8px',
                          paddingRight: '8px',
                          paddingBottom: '7px',
                          fontSize: '14px',
                          fontWeight: 500,
                          position: 'relative',
                          backgroundColor: '#34a853 ',
                          width: '100%',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: '#34a853',
                          },
                        }}
                      >
                        send otp
                      </Button>
                    </div>
                  </div>
                  <div></div>
                </div> */}

                <Container>
                  <Grid
                    container
                    className="box"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} lg={6} sm={8} md={6}>
                      <img
                        src="https://adityatrading.in/static/images/banners/trade-desktop.png"
                        alt="Banner Image"
                        style={{ marginTop: '20px', width: '100%' }}
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      lg={6}
                      sm={8}
                      md={6}
                      style={{ padding: '16px', marginTop: '16px' }}
                    >
                      <Typography
                        variant="h4"
                        style={{
                          fontSize: isSmallScreen ? '20px' : '28px',
                          marginBottom: '5px',
                          margin: '0px',
                          color: '#131722',
                          fontWeight: '400',
                        }}
                      >
                        Join 1 Lac + investors & traders
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          marginBottom: '16px',
                          fontSize: isSmallScreen ? '20px' : '28px',
                        }}
                      >
                        Open a trading and Demat account online and start
                        investing for free
                      </Typography>
                      <div className="phoneInput">
                        <input
                          type="number"
                          placeholder="Enter yout Number"
                          style={{ outline: 'none', border: 'none' }}
                        />
                      </div>
                      <div style={{ width: '100%', marginTop: '20px' }}>
                        <Button
                          sx={{
                            color: '#e5f2ff!important',
                            border: '1px solid #e5f2ff!important',
                            paddingTop: '7px',
                            paddingLeft: '8px',
                            paddingRight: '8px',
                            paddingBottom: '7px',
                            fontSize: '14px',
                            fontWeight: 500,
                            backgroundColor: '#34a853 ',
                            width: '100%',
                            left: '-1px !important',
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: '#34a853',
                            },
                          }}
                        >
                          Send OTP
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default Signin;
