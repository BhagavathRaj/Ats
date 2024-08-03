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

const MorningReports = () => {
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
              Daily Research Report
            </GreenButton>
          </div>
          <h6 style={{ color: 'black' }}>Daily Research Report</h6>
          <p>
            <small>
              Research reports are prepared by our research analysts who have
              deep industry knowledge and experience
            </small>
          </p>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <select
              style={{
                border: '1px solid #c6c5ca',
                padding: '8px 5px',
                borderRadius: '3px',
                color: '#34a853',
              }}
            >
              <option>Sort By : Recent</option>
            </select>
          </div>

          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 16, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negative opening for the
                    broader index in India, with a potential loss of 12.5
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 15, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a positive opening for the
                    broader index in India, with a potential loss of 66 points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 12, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negative opening for the
                    broader index in India, with a potential loss of 25 points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 11, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negative opening for the
                    broader index in India, with a potential gain of 33.05
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 10, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negative opening for the
                    broader index in India, with a potential loss of 4.50
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 9, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negative opening for the
                    broader index in India, with a potential gain of 17.5
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 8, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negative opening for the
                    broader index in India, with a potential loss of 48.50
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 5, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a negaitive opening for the
                    broader index in India, with a potential loss of 47.50
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 4, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a positive opening for the
                    broader index in India, with a potential gain of 81 points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 3, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a positive opening for the
                    broader index in India, with a potential gain of 79.6
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 2, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a positive opening for the
                    broader index in India, with a potential gain of 41.50
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderBottom: '1px solid #c6c5ca ',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '30%' : '10%',
                    marginBottom: isMobile ? '10px' : 0,
                  }}
                >
                  <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="img"
                  />
                </div>
                <div
                  style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
                >
                  <h6 style={{ marginTop: '5px', marginBottom: '12px' }}>
                    Morning Note Jul. 1, 2024
                  </h6>
                  <p style={{ textAlign: isMobile ? 'center' : 'justify' }}>
                    The GIFT Nifty trends indicate a positive opening for the
                    broader index in India, with a potential gain of 18.50
                    points.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: isMobile ? 'center' : 'right',
                    marginTop: isMobile ? '10px' : '40px',
                  }}
                >
                  <h6 style={{ color: '#34a853' }}>
                    <a style={{ color: '#34a853' }}>View</a>
                  </h6>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '15px',
                  marginBottom: '7px',
                  justifyContent: 'center',
                }}
              >
                <div style={{ minHeight: '60vh', alignContent: 'end' }}>
                  <h5 style={{ textAlign: 'center' }}>DISCLAIMER</h5>
                  <p style={{ textAlign: 'center' }}>
                    This report is only for the information of our customers.
                    Recommendations, opinions, or suggestions are given with the
                    understanding that readers acting on this informationassume
                    all risks involved. The information provided herein is not
                    to be construed as an offer to buy or sell securities of any
                    kind. ATS and/or its group companies do not asassume any
                    responsibility or liability resulting from the use of such
                    information.
                  </p>
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

export default MorningReports;
