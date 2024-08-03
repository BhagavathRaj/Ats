import React, { useState, useEffect, useRef } from 'react';
import LandingPage from '../LandingPage';
import { Box, Grid } from '@mui/material';
import FooterContent from '../Footer/FooterContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { CardContent, Typography } from '@mui/material';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TradingChart from './TradingChrat';
import SelectButton from '../Buttons/SelectButton';
import Overview from './Overview';
import Events from './Events';
import Annual from './Annual';
import Daily from './Daily';
import Weekly from './Weekly';
import Monthly from './Monthly';
const CompanyPages = () => {
  const [col, setCol] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [alignment, setAlignment] = React.useState('Stocks');
  const [componet, setComponet] = useState('Overview');
  const [timeRange, setTimeRange] = useState('Daily');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const mainCanvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const sideMainCanvasRef = useRef(null);
  const sideOverlayCanvasRef = useRef(null);

  useEffect(() => {
    const mainCanvas = mainCanvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    const sideMainCanvas = sideMainCanvasRef.current;
    const sideOverlayCanvas = sideOverlayCanvasRef.current;

    if (mainCanvas && overlayCanvas && sideMainCanvas && sideOverlayCanvas) {
      const mainCtx = mainCanvas.getContext('2d');
      const overlayCtx = overlayCanvas.getContext('2d');
      const sideMainCtx = sideMainCanvas.getContext('2d');
      const sideOverlayCtx = sideOverlayCanvas.getContext('2d');

      // Example drawing on main canvas
      mainCtx.fillStyle = '#f0f0f0'; // Background color
      mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

      overlayCtx.fillStyle = '#e0e0e0'; // Background color
      overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);

      // Example drawing on side canvas
      sideMainCtx.fillStyle = '#d0d0d0'; // Background color
      sideMainCtx.fillRect(0, 0, sideMainCanvas.width, sideMainCanvas.height);

      sideOverlayCtx.fillStyle = '#b0b0b0'; // Overlay color
      sideOverlayCtx.fillRect(
        0,
        0,
        sideOverlayCanvas.width,
        sideOverlayCanvas.height
      );
    }
  }, []);
  const handleCol = () => {
    setCol(!col);
  };
  const handleSec = () => {
    setSecond(!second);
  };
  const handleThird = () => {
    setThird(!third);
  };
  const handleComponet = () => {
    switch (componet) {
      case 'Overview':
        return <Overview />;
      case 'events':
        return <Events />;
      case 'annual':
        return <Annual />;
      default:
        return <Overview />;
    }
  };

  const rendercomponent = () => {
    switch (timeRange) {
      case 'Daily':
        return <Daily />;
      case 'Weekly':
        return <Weekly />;
      case 'Monthly':
        return <Monthly />;
      default:
        return <Daily />;
    }
  };

  return (
    <div>
      <LandingPage />
      <Box
        sx={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
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
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{ mt: isSmallScreen ? '10px' : 0, marginBottom: '30px' }}
          >
            <ToggleButton
              sx={{
                borderRadius: '5px',
                paddingTop: '2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingBottom: '2px',
                fontSize: '11px',
                fontWeight: 'normal',
                marginRight: '20px',
                '&.Mui-selected': {
                  color: '#34a853',
                  backgroundColor: '#d1ffdd',
                },
                '&.MuiButtonBase-root': {
                  '&.MuiToggleButton-root': {
                    border: '1px solid rgba(0, 0, 0, 0.12)!important',
                  },
                },
              }}
              value="Stocks"
            >
              Stocks
            </ToggleButton>

            <ToggleButton
              sx={{
                borderRadius: '5px',
                paddingTop: '2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingBottom: '2px',
                fontSize: '11px',
                fontWeight: 'normal',
                marginRight: '20px',
                '&.Mui-selected': {
                  color: '#34a853',
                  backgroundColor: '#d1ffdd',
                },
                '&.MuiButtonBase-root': {
                  '&.MuiToggleButton-root': {
                    border: '1px solid rgba(0, 0, 0, 0.12)!important',
                  },
                },
              }}
              value="Commodity"
            >
              Commodity
            </ToggleButton>
            <ToggleButton
              sx={{
                borderRadius: '5px',
                paddingTop: '2px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingBottom: '2px',
                fontSize: '11px',
                fontWeight: 'normal',
                '&.Mui-selected': {
                  color: '#34a853',
                  backgroundColor: '#d1ffdd',
                },
                '&.MuiButtonBase-root': {
                  '&.MuiToggleButton-root': {
                    border: '1px solid rgba(0, 0, 0, 0.12)!important',
                  },
                },
              }}
              value="Currency"
            >
              Currency
            </ToggleButton>
          </ToggleButtonGroup>
          {alignment === 'Stocks' ? (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#ffdfe2',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowDownward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '#dc3545',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            NIFT IT
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#dc3545',
                            }}
                          >
                            <span style={{ color: '#dc3545' }}>0.14%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            43537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#dc3545' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#d1ffdd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowUpward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '34a853',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Nifty50
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#34a853',
                            }}
                          >
                            <span style={{ color: '#34a853' }}>0.23%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#34a853' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#ffdfe2',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowDownward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '#dc3545',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Currency
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#dc3545',
                            }}
                          >
                            <span style={{ color: '#dc3545' }}>0.34%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#dc3545' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              {/* Repeat similar Grid items as needed */}
            </Grid>
          ) : alignment === 'Commodity' ? (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#ffdfe2',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowDownward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '#dc3545',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            NIFT IT
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#dc3545',
                            }}
                          >
                            <span style={{ color: '#dc3545' }}>0.14%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            43537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#dc3545' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#d1ffdd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowUpward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '34a853',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Nifty50
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#34a853',
                            }}
                          >
                            <span style={{ color: '#34a853' }}>0.23%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#34a853' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#ffdfe2',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowDownward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '#dc3545',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Currency
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#dc3545',
                            }}
                          >
                            <span style={{ color: '#dc3545' }}>0.34%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#dc3545' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              {/* Repeat similar Grid items as needed */}
            </Grid>
          ) : (
            <Grid container sx={{ marginBottom: '20px' }} spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#d1ffdd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowUpward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '34a853',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Currency
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#34a853',
                            }}
                          >
                            <span style={{ color: '#34a853' }}>0.34%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#34a853' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              {/* Repeat similar Grid items as needed */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#d1ffdd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowUpward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '34a853',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Currency
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#34a853',
                            }}
                          >
                            <span style={{ color: '#34a853' }}>0.34%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#34a853' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#d1ffdd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowUpward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '34a853',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Currency
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#34a853',
                            }}
                          >
                            <span style={{ color: '#34a853' }}>0.34%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#34a853' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardContent sx={{ width: '294px', height: '74px' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'spacebetween',
                      alignItems: 'center',
                      border: '1px solid #eeeeee',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      marginBottom: '12px',
                      marginLeft: '4px',
                      borderRadius: '10px',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'spacebetween',
                        alignItems: 'center',
                      }}
                      variant="h6"
                      component="div"
                    >
                      {' '}
                      <div
                        style={{
                          backgroundColor: '#d1ffdd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <ArrowUpward
                          sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: '34a853',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '2px' }}>
                        <div>
                          <p
                            style={{
                              color: '#3c4043',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                            }}
                          >
                            Currency
                          </p>
                          <p
                            style={{
                              fontSize: '12px',
                              color: '#34a853',
                            }}
                          >
                            <span style={{ color: '#34a853' }}>0.34%</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        textAlign: 'right',
                      }}
                      variant="body2"
                    >
                      <div>
                        <div>
                          <p
                            style={{
                              color: '#777D74',
                              fontSize: '.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              marginLeft: '35px',
                            }}
                          >
                            23537.85
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            <span style={{ color: '#34a853' }}>0.00</span>
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          )}
          <hr style={{ marginBottom: '20px', marginTop: '30px' }} />
          <Box sx={{ marginTop: '10px' }}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <h4>COLPAL</h4>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <h4 style={{ marginRight: '10px' }}>₹NaN</h4>
                  <p>Nan</p>
                  <p> (Nan%)</p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginTop: '7px',
                  }}
                >
                  <div
                    style={{
                      border: '1px solid #ededed',
                      padding: '3px',
                      marginRight: '3px',
                      borderRadius: '3px',
                    }}
                  >
                    <img
                      src="https://adityatrading.in/static/images/icons/line-chart.png"
                      alt="img1"
                      style={{ display: 'none', width: '20px' }}
                    />
                    <img
                      src="	https://adityatrading.in/static/images/icons/bar-chart.png"
                      alt="img2"
                      style={{ width: '20px', display: 'block' }}
                    />
                  </div>
                  <div>
                    Technical
                    <svg
                      style={{ overflow: 'hidden', verticalAlign: 'middle' }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height={'24'}
                      width={'24'}
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  </div>
                </div>
              </Grid>
              {/* <Grid item xs={12}>
                <div
                  className="charts"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                  }}
                >
                  <table style={{ width: '100%', height: '100%' }}>
                    <tbody>
                      <tr>
                        <td style={{ width: '90%' }}>
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              overflow: 'hidden',
                              position: 'relative',
                            }}
                          >
                            <canvas
                              ref={mainCanvasRef}
                              width={'2160px'}
                              height={'544px'}
                              style={{
                                width: '1082px',
                                height: '272px',
                                position: 'absolute',
                                zIndex: 1,
                                left: '0px',
                                top: '0px',
                              }}
                            ></canvas>
                            <canvas
                              ref={overlayCanvasRef}
                              width={'2160px'}
                              height={'544px'}
                              style={{
                                width: '1082px',
                                height: '272px',
                                position: 'absolute',
                                zIndex: 2,
                                left: '0px',
                                top: '0px',
                              }}
                            ></canvas>
                            <a
                              id="tv-attr-logo"
                              href="https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart&utm_source=adityatrading.in/companypage/colpal/"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                '--fill': '#131722',
                                '--stroke': '#fff',
                                position: 'absolute',
                                left: '10px',
                                bottom: '10px',
                                height: '19px',
                                width: '35px',
                                margin: '0',
                                padding: '0',
                                border: '0',
                                zIndex: 3,
                              }}
                              data-dark
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 35 19"
                                width="35"
                                height="19"
                                fill="none"
                              >
                                <g
                                  clipPath="url(#a)"
                                  fill="var(--stroke)"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                >
                                  <path d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"></path>
                                  <path d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path
                                      fill="var(--stroke)"
                                      d="M0 0h35v19H0z"
                                    ></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </a>
                          </div>
                        </td>
                        <td style={{ width: '10%' }}>
                          <div
                            style={{
                              height: '272px',
                              width: '66px',
                              overflow: 'hidden',
                            }}
                          >
                            <canvas
                              ref={sideMainCanvasRef}
                              width={'132px'}
                              height={'544px'}
                              style={{
                                width: '66px',
                                height: '272px',
                                position: 'absolute',
                                zIndex: 1,
                              }}
                            ></canvas>
                            <canvas
                              ref={sideOverlayCanvasRef}
                              width={'132px'}
                              height={'544px'}
                              style={{
                                width: '66px',
                                height: '272px',
                                position: 'absolute',
                                zIndex: 2,
                              }}
                            ></canvas>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Grid> */}
            </Grid>
          </Box>
          <TradingChart />
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
            }}
            container
            xs={12}
          >
            <Grid item xs={12}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: '20px',
                  borderBottom: '1px solid #ededed',
                }}
              >
                <SelectButton
                  onClick={() => setComponet('Overview')}
                  selected={componet === 'Overview'}
                >
                  Overview
                </SelectButton>
                <SelectButton
                  onClick={() => setComponet('events')}
                  selected={componet === 'events'}
                >
                  Events
                </SelectButton>
                <SelectButton
                  onClick={() => setComponet('annual')}
                  selected={componet === 'annual'}
                >
                  Annual Reports
                </SelectButton>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              {' '}
              {handleComponet()}
            </Grid>
            <Grid item xs={12} md={6}>
              <h4
                style={{
                  fontSize: '20px',
                  color: '#131722',
                  fontWeight: '400',
                  textTransform: 'capitalize',
                  left: '10px',
                  position: 'relative',
                }}
              >
                News
              </h4>
              <div style={{ overflowY: 'auto', maxHeight: '265px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '7px',
                    marginTop: '10px',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '12px', color: '##0e0e0e' }}>
                      undefined • 30April 2015, 07:00:00 AM
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '##0e0e0e',
                        cursor: 'pointer',
                      }}
                    >
                      Product crack: Edelweiss Nifty EES | Mint
                    </p>
                  </div>
                  <div>
                    <img
                      className="img2"
                      src="https://lh3.googleusercontent.com/proxy/Bs4J7cXmHBmZ4zUZPxtwaB6592fXma51V3KLSuZ4s06XHBtDnbKpq7-fEuFTMrB2s5n4xBNGPYQDN0tKhntACHiSw9JXDAeui0okLLtbh9RBb5mifkYAMe1pKVR2X1YtC0h1dP2hXDEiMW9cLgFWXqbYQGpley92eHEpjBQFlpmkRExEzem8RTE6=s0-w100-h100-dclQGEi4UjVYQC"
                      style={{ maxHeight: '150px' }}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
              padding: '25px',
            }}
            container
            xs={12}
          >
            <Grid item xs={12}>
              {' '}
              <h4 className="hh4">Technicals</h4>{' '}
            </Grid>
            <Grid item xs={12} md={8}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: '20px',
                  borderBottom: '1px solid #ededed',
                }}
              >
                <SelectButton
                  onClick={() => setTimeRange('Daily')}
                  selected={timeRange === 'Daily'}
                >
                  Daily
                </SelectButton>
                <SelectButton
                  onClick={() => setTimeRange('Weekly')}
                  selected={timeRange === 'Weekly'}
                >
                  Weekly
                </SelectButton>
                <SelectButton
                  onClick={() => setTimeRange('Monthly')}
                  selected={timeRange === 'Monthly'}
                >
                  Monthly
                </SelectButton>
              </div>
              {rendercomponent()}
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              xs={12}
              md={4}
            >
              <Box
                sx={{
                  top: '-29px',
                  position: 'relative',
                  height: '330px',
                  width: '300px',
                  border: '1px solid #ededed',
                }}
              ></Box>
            </Grid>
          </Grid>
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
              padding: '25px',
            }}
            container
            xs={12}
          >
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <div>
                {' '}
                <h4 className="hh4">Profit & Loss</h4>{' '}
                <p>Consolidated Figures in Rs. Crores</p>
              </div>
              <div>
                <table className="smalltable">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Dec 2010
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Dec 2011
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Dec 2012
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2014
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2015
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2016
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2017
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2018
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2019
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2022
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        TTM
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Sales +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Grid>
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
              padding: '25px',
            }}
            container
            xs={12}
          >
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <div>
                {' '}
                <h4 className="hh4">Balance Sheet</h4>{' '}
                <p>Consolidated Figures in Rs. Crores</p>
              </div>
              <div>
                <table className="smalltable">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2011
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2012
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2013
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2014
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2015
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2016
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2017
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2018
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2019
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2022
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Share Capital +</th>
                      <td>3</td>
                      <td>24</td>
                      <td>26</td>
                      <td>27</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td> <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Reserves</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Borrowings +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Other Liabilities +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Liabilities</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Fixed Assets +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">CWIP</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Investments</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Other Assets +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Assets</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Grid>
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
              padding: '25px',
            }}
            container
            xs={12}
          >
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <div>
                {' '}
                <h4 className="hh4">Cash Flows </h4>{' '}
                <p>Consolidated Figures in Rs. Crores</p>
              </div>
              <div>
                <table className="smalltable">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2011
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2012
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2013
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2014
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2015
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2016
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2017
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2018
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2019
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2022
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Cash from Operating Activity +</th>
                      <td>3</td>
                      <td>24</td>
                      <td>26</td>
                      <td>27</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td> <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Cash from Investing Activity +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Cash from Financing Activity +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Net Cash Flow</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Grid>
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
              padding: '25px',
            }}
            container
            xs={12}
          >
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <div>
                {' '}
                <h4 className="hh4">Ratios </h4>{' '}
                <p>Consolidated Figures in Rs. Crores</p>
              </div>
              <div>
                <table className="smalltable">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2011
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2012
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2013
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2014
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2015
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2016
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2017
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2018
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2019
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2022
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Debtor Days</th>
                      <td>3</td>
                      <td>24</td>
                      <td>26</td>
                      <td>27</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td> <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Inventory Days</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Days Payable</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Cash Conversion Cycle</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Working Capital Days</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">ROCE %</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Grid>
          <Grid
            sx={{
              border: '1px solid #ededed',
              boxShadow: '0 .125rem .25rem rgba(0, 0, 0, .075) !important',
              marginTop: '40px',
              padding: '25px',
            }}
            container
            xs={12}
          >
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <div>
                {' '}
                <h4 className="hh4">ShareHolding Pattern</h4>{' '}
                <p>Consolidated Figures in Rs. Crores</p>
              </div>
              <div>
                <table className="smalltable">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Sep 2019
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Dec 2019
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Jun 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Sep 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Dec 2020
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Jun 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Sep 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Dec 2021
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Mar 2022
                      </th>
                      <th style={{ paddingLeft: '10px' }} scope="col">
                        Jun 2022
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Promoters +</th>
                      <td>3</td>
                      <td>24</td>
                      <td>26</td>
                      <td>27</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td> <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">FIIs +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">DIIs +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Public + </th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                    <tr>
                      <th scope="row">Others +</th>
                      <td>504</td>
                      <td>224</td>
                      <td>226.38</td>
                      <td>217.6</td>
                      <td>217.78</td>
                      <td>214</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                      <td>212.28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default CompanyPages;
