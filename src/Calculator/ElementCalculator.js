import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../CreateAlert/CreateAlert.css';
import LandingPage from '../LandingPage';
import FooterContent from '../Footer/FooterContent';
import BrokerageCalculator from './BrokerageCalculator';
import PremiumCalculator from './PremiumCalculator';
import MarginCalculator from './MarginCalculator';
import './ElementCalculator.css';
import { useNavigate } from 'react-router';

const ElementCalculator = () => {
  const [alignment, setAlignment] = useState('BrokerageCalculator');
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handlePremiumNavigate = () => {
    navigate('/premium-calculator/');
  };
  const handleComponent = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const handleMargin = () => {
    navigate('/margin-calculator/');
  };

  const renderComponent = () => {
    switch (alignment) {
      case 'BrokerageCalculator':
        return <BrokerageCalculator />;
      case 'PremiumCalculator':
        return <PremiumCalculator />;
      case 'MarginCalculator':
        return <MarginCalculator />;
      default:
        return <BrokerageCalculator />;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <LandingPage />
      <div style={{ height: 'auto', top: '20px' }} className="content-page">
        <div className="container">
          <div className="row">
            <div className="column">
              <h5>Calculators</h5>
              <p>Track your Overall Performance</p>
            </div>
            <div className="column">
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleComponent}
                aria-label="Platform"
                orientation={isMobile ? 'vertical' : 'horizontal'}
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: isMobile ? 'center' : ' ',
                  left: isMobile ? '40px' : 'auto',
                  width: isMobile ? 'fit-content' : 'auto',
                  position: isMobile ? 'relative' : 'auto',
                }}
              >
                <ToggleButton
                  value="BrokerageCalculator"
                  sx={{
                    width: isMobile ? '150px' : 'auto',
                    borderRadius: '16px !important',
                    boxShadow: '2px 2px 10px 5px #ededed',
                    paddingTop: '7px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingBottom: '7px',
                    fontSize: '14px',
                    left: '10px',
                    textTransform: 'none',
                    fontWeight: '400',
                    marginRight: isMobile ? '0' : '20px',
                    marginBottom: isMobile ? '10px' : '0',
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
                >
                  BrokerageCalculator
                </ToggleButton>
                <ToggleButton
                  value="PremiumCalculator"
                  sx={{
                    width: isMobile ? '150px' : 'auto',
                    borderRadius: '16px !important',
                    boxShadow: '2px 2px 10px 5px #ededed',
                    paddingTop: '7px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingBottom: '7px',
                    fontSize: '14px',
                    textTransform: 'none',
                    fontWeight: '400',
                    left: '10px',
                    marginRight: isMobile ? '0' : '20px',
                    marginBottom: isMobile ? '10px' : '0',
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
                >
                  PremiumCalculator
                </ToggleButton>
                <ToggleButton
                  onClick={handleMargin}
                  value="MarginCalculator"
                  sx={{
                    width: isMobile ? '150px' : 'auto',
                    borderRadius: '16px !important',
                    boxShadow: '2px 2px 10px 5px #ededed',
                    paddingTop: '7px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingBottom: '7px',
                    fontSize: '14px',
                    textTransform: 'none',
                    fontWeight: '400',
                    position: 'relative',
                    left: '10px',

                    marginRight: isMobile ? '0' : '20px',
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
                >
                  MarginCalculator
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="column-full ">{renderComponent()}</div>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default ElementCalculator;
