import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation, useNavigate } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';

const Posts = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const handlePostView = () => {
    navigate('/posts/detail');
  };

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
            <Grid item xs={12}>
              <div style={{ borderBottom: '1px solid #ededed' }}>
                <p
                  style={{
                    padding: '10px',
                    fontWeight: '600',
                    backgroundColor: '#d1ffdd',
                    color: '#34a853',
                    fontSize: '12px',
                    textAlign: 'center',
                    borderRadius: '30px',
                    width: '5%',
                    marginBottom: '20px',
                    borderBottom: '1px solid #ededed',
                  }}
                >
                  Posts
                </p>
              </div>
              <Box
                sx={{
                  display: 'flex',
                  borderBottom: '1px solid #ededed',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    verticalAlign: 'middle',
                    flex: '0 0 8.333333%',
                    maxWidth: ' 8.333333%',
                    color: '#3c4043',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  <img
                    style={{ width: '100%' }}
                    src="https://assets.adityatrading.in/media/images/ipo/stocklogo/Popular%20Vehicles%20%26%20Services%20Limited/Popular_Vehicles__Services_Limited.jpeg"
                  />
                </div>
                <div
                  style={{
                    flex: '0 0 83.333333%',
                    maxwidth: '83.333333%',
                    flexDirection: 'column',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  <a
                    style={{
                      color: '#3c4043',
                      fontSize: '14px',
                      fontWeight: '600',
                      paddingTop: '7px',
                      paddingBottom: '7px',
                    }}
                  >
                    Srm Contractors Limited
                  </a>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '7px',
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        fontSize: '13px',
                        flex: '0 0 25%',
                        maxWidth: '25%',
                        color: '#3c4043',
                        fontSize: '14px',
                        fontWeight: '600',
                      }}
                    >
                      March 24
                    </div>
                    <div
                      style={{
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        flex: '0 0 75%',
                        maxWidth: '75%',
                        color: '#3c4043',
                        fontSize: '14px',
                        fontWeight: '600',
                      }}
                    >
                      <spna>Comments</spna>
                    </div>
                  </div>
                </div>
                <div>
                  <p onClick={() => handlePostView()}>
                    <a style={{ fontSize: '14px', fontWeight: '600' }}>View</a>
                  </p>
                </div>
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

export default Posts;
