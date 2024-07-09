import React, { useState } from 'react';
import MostActive from './MostActive';
import Gainer from './Gainer';
import Lossers from './Lossers';
import { Button } from '@mui/material';

const MarketTrends = () => {
  const [selectedComponent, setSelectedComponent] = useState('MostActive');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'MostActive':
        return <MostActive />;
      case 'Gainers':
        return <Gainer />;
      case 'Lossers':
        return <Lossers />;
      default:
        return <MostActive />;
    }
  };

  const getButtonStyles = (component) => ({
    color:
      selectedComponent === component
        ? '#ffffff!important'
        : '#34a853!important',
    backgroundColor:
      selectedComponent === component
        ? '#34a853!important'
        : '#d1ffdd!important',
    borderRadius: '50px',
    border: '1px solid #e5f2ff!important',
    paddingTop: '2px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '2px',
    fontSize: '11px',
    fontWeight: 600,
    marginBottom: '10px',
    marginLeft: '15px',
    textTransform: 'none',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid #cfc2c2',
        borderRadius: '10px',
        marginTop: '20px',
        minHeight: '350px',
      }}
    >
      <h5
        style={{
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '.3px',
          color: '#131722',
          lineHeight: '1.5px',
          paddingLeft: '20px',
          marginTop: '15px',
        }}
      >
        Market Trends
      </h5>

      <div
        style={{
          width: '100%',

          marginTop: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            onClick={() => setSelectedComponent('MostActive')}
            sx={getButtonStyles('MostActive')}
          >
            MostActive
          </Button>
          <Button
            onClick={() => setSelectedComponent('Gainers')}
            sx={getButtonStyles('Gainers')}
          >
            Gainers
          </Button>
          <Button
            onClick={() => setSelectedComponent('Lossers')}
            sx={getButtonStyles('Lossers')}
          >
            Lossers
          </Button>
        </div>
        <hr style={{ marginLeft: '20px' }} />
        {renderComponent()}
        {/* Content for Market Trends */}
      </div>
    </div>
  );
};

export default MarketTrends;
