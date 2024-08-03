import React, { useEffect, useState } from 'react';
import LandingPage from '../../LandingPage';
import FooterContent from '../../Footer/FooterContent';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GreenButton from '../../Buttons/GreenButton';
import DangerButton from '../../Buttons/Danger';
import './Analyst.css';
import SuccessButton from '../../Buttons/Success';
import './Equity';
import './Commodity';
import './Currency';
import './F0';
import Equity from './Equity';
import FO from '../../Calculator/F&O';
import Commodity from './Commodity';
import Currency from './Currency';
const Analystopinion = () => {
  const [selectedComponent, setSelectedComponent] = useState('Component1');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <Equity />;
      case 'Component2':
        return <FO />;
      case 'Component3':
        return <Commodity />;
      case 'Component4':
        return <Currency />;
      default:
        return <Equity />;
    }
  };
  const getButtonStyles = (component) => ({
    color: selectedComponent === component ? '#34a853' : '#999',
    backgroundColor: selectedComponent === component ? '#d1ffdd' : 'auto',
    borderRadius: '50px',
    border: '1px solid #e5f2ff',
    padding: '3px 18px',
    fontSize: '13px',
    fontWeight: 600,

    marginBottom: '10px',
    marginLeft: '10px',
    textTransform: 'none',
    '&:hover': {
      color: '#34a853',
      backgroundColor: selectedComponent === component ? '#d1ffdd' : 'auto',
    },
  });

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
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    padding: '10px',
                    fontWeight: '400',

                    color: '#131722',
                    fontSize: '20px',
                  }}
                >
                  Analyst Opinion
                </Typography>
                <p>
                  Stocks/company/scrips that have the potential to offer smart
                  gains by investing in the share market.
                </p>
                <p style={{ marginTop: '0px' }}>
                  Recommendations are provided post adequate research & analysis
                  by our core research team.
                </p>
              </Box>
            </Grid>
            <Grid container alignItems={'center'}>
              <Grid
                style={{ display: 'flex', justifyContent: 'center' }}
                item
                xs={12}
                md={2}
                lg={2}
                sm={2}
              >
                <div className="inputopinion">
                  <label>Recommendation</label>
                  <select className="formopinion">
                    <option>All</option>
                    <option>Buy</option>
                    <option>Sell</option>
                  </select>
                </div>
              </Grid>
              <Grid
                style={{ display: 'flex', justifyContent: 'center' }}
                item
                xs={12}
                md={2}
                lg={2}
                sm={2}
              >
                <div className="inputopinion">
                  <label>Company</label>
                  <input type="text" className="formopinion" />
                </div>
              </Grid>
              <Grid
                style={{ display: 'flex', justifyContent: 'center' }}
                item
                xs={12}
                md={2}
                lg={2}
                sm={2}
              >
                <div className="inputopinion">
                  <label>Segment</label>
                  <select className="formopinion">
                    <option>All</option>
                    <option>Equity</option>
                    <option>F&O</option>
                    <option>Commodity</option>
                    <option>Currency</option>
                  </select>
                </div>
              </Grid>
              <Grid
                style={{ display: 'flex', justifyContent: 'center' }}
                item
                xs={12}
                md={2}
                lg={2}
                sm={2}
              >
                <div className="inputopinion">
                  <label>Position</label>
                  <select className="formopinion">
                    <option>All</option>
                    <option>Close</option>
                    <option>Open</option>
                    <option>Target Hit</option>
                    <option>Stop Loss Hit</option>
                    <option>Exit on Cost</option>
                    <option>Partial Profit</option>
                    <option>Hold</option>
                  </select>
                </div>
              </Grid>
              <Grid
                style={{ display: 'flex', justifyContent: 'center' }}
                item
                xs={12}
                md={2}
                lg={2}
                sm={2}
              >
                <div className="inputopinion">
                  <label>Investment Horizon</label>
                  <select className="formopinion">
                    <option>All</option>
                    <option>Intraday</option>
                    <option>ShortTerm</option>
                    <option>LongTerm</option>
                  </select>
                </div>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <SuccessButton name="Apply" />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <h5
              style={{
                fontSize: '20px',
                fontWeight: 400,
                letterSpacing: '.3px',
                color: '#131722',
                lineHeight: '1.5',
              }}
            >
              Analyst Opinion
            </h5>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginTop: '20px',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={() => setSelectedComponent('Component1')}
                sx={getButtonStyles('Component1')}
              >
                Equity
              </Button>
              <Button
                onClick={() => setSelectedComponent('Component2')}
                sx={getButtonStyles('Component2')}
              >
                F&O
              </Button>
              <Button
                onClick={() => setSelectedComponent('Component3')}
                sx={getButtonStyles('Component3')}
              >
                Commodity
              </Button>
              <Button
                onClick={() => setSelectedComponent('Component4')}
                sx={getButtonStyles('Component4')}
              >
                Currency
              </Button>
            </div>
            <hr />
            <div
              style={{
                width: '100%',
                minHeight: '249px',
                height: 'auto',
                border: '1px solid #a9a6a6',
              }}
            >
              {renderComponent()}
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

export default Analystopinion;
