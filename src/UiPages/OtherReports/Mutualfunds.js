import React from 'react';
import LandingPage from '../../LandingPage';
import FooterContent from '../../Footer/FooterContent';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GreenButton from '../../Buttons/GreenButton';
import DangerButton from '../../Buttons/Danger';

const Mutualfunds = () => {
  const location = useLocation();
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
        sx={{
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
            width: { xs: '90%', md: '80%' },
            top: '100px',
            position: 'relative',
            mx: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  borderBottom: '1px solid #ededed',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  sx={{
                    padding: '10px',
                    fontWeight: '600',
                    backgroundColor: '#d1ffdd',
                    color: '#34a853',
                    fontSize: '12px',
                    textAlign: 'center',
                    borderRadius: '30px',
                    width: 'fit-content',
                    mb: '20px',
                    borderBottom: '1px solid #ededed',
                  }}
                >
                  Mutual Funds
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #ededed',
                  mt: '20px',
                  mb: '20px',
                }}
              >
                <Box
                  sx={{
                    width: '50px',
                    height: '50px',
                    verticalAlign: 'middle',
                    flex: '0 0 8.333333%',
                    maxWidth: '8.333333%',
                    color: '#3c4043',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  <img
                    style={{ maxWidth: '100%', width: '42px', height: '42px' }}
                    src="https://assets.adityatrading.in/media/images/faq/images/image/image.png"
                    alt="Fund"
                  />
                </Box>
                <Box
                  sx={{
                    flex: '0 0 83.333333%',
                    maxWidth: '83.333333%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pl: '15px',
                    pr: '15px',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#3c4043',
                      fontSize: '14px',
                      fontWeight: '600',
                      pt: '7px',
                      pb: '7px',
                    }}
                  >
                    Tata Nifty Midcap 150 Momentum 50 Index Fund
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      pb: '7px',
                    }}
                  >
                    <Typography
                      sx={{
                        pl: '15px',
                        pr: '15px',
                        fontSize: '13px',
                        flex: '0 0 25%',
                        maxWidth: '25%',
                        color: '#3c4043',
                        fontSize: { xs: '10px', sm: '10px', md: '14px' },
                        fontWeight: '600',
                      }}
                    >
                      October 12 2022
                    </Typography>
                    <Typography
                      sx={{
                        pl: '15px',
                        pr: '15px',
                        flex: '0 0 75%',
                        maxWidth: '75%',
                        color: '#3c4043',
                        fontSize: { xs: '12px', sm: '13px', md: '14px' },
                        fontWeight: '600',
                      }}
                    >
                      Comments
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    onClick={handlePostView}
                    sx={{
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    View
                  </Typography>
                </Box>
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

export default Mutualfunds;
