import { CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SearchBox from './SearchBox';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import AnalystOption from './AnalystOption/AnalystOption';
import MarketTrends from './MarketTrends/MarketTrends';
import Mutualfunds from './Mutualfunds/Mutualfunds';
import ActiveFunds from './ActiveFunds/ActiveFunds';
import Financialnews from './Todays Financial News/Financialnews';
import EarningsCalender from './EarningsCalender/EarningsCalender';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Grids = () => {
  const [alignment, setAlignment] = React.useState('Stocks');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div
      style={{
        top: '110px',
        display: 'flex',
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        alignmentBaseline: 'center',
      }}
    >
      <div style={{ width: '85%', position: 'relative', marginTop: '20px' }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ mt: isSmallScreen ? '10px' : 0 }}
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
        ) : (
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

        <SearchBox />
        <Grid sx={{ marginTop: '50px' }} container spacing={2}>
          <Grid item xs={12} md={7}>
            <AnalystOption />
          </Grid>
          <Grid item xs={12} md={5}>
            <MarketTrends />
          </Grid>
          <Grid item xs={12} md={7}>
            <Mutualfunds />
          </Grid>
          <Grid item xs={12} md={5}>
            <ActiveFunds />
          </Grid>
          <Grid item xs={12} md={7}>
            <Financialnews />
          </Grid>
          <Grid item xs={12} md={5}>
            <EarningsCalender />
          </Grid>
          <Grid item xs={12} md={12}>
            <Carousel />
          </Grid>
          <Grid item xs={12} md={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Grids;
