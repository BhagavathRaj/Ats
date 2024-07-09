import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CompanyNews from './CompanyNews';
import PoliticalNews from './PoliticalNews';
import EconomyNews from './EconomyNews';
import MarketNews from './MarketNews';
import { Box } from '@mui/material';
import '../App.css';

const FinancialNews = () => {
  const [selectedComponent, setSelectedComponent] = useState('Component1');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <CompanyNews />;
      case 'Component2':
        return <EconomyNews />;
      case 'Component3':
        return <MarketNews />;
      case 'Component4':
        return <PoliticalNews />;
      default:
        return <CompanyNews />;
    }
  };

  const getButtonStyles = (component) => ({
    color: selectedComponent === component ? '#ffffff' : '#34a853',
    backgroundColor: selectedComponent === component ? '#34a853' : '#d1ffdd',
    borderRadius: '50px',
    border: '1px solid #e5f2ff',
    padding: '2px 8px',
    fontSize: '11px',
    fontWeight: 600,
    marginBottom: '10px',
    marginLeft: '15px',
    textTransform: 'none',
  });

  return (
    <Box
      className="scrollable-container"
      sx={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}
    >
      <h5
        style={{
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '.3px',
          color: '#131722',
          lineHeight: '1.5',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Today's Financial News
      </h5>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',

          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Button
          onClick={() => setSelectedComponent('Component1')}
          sx={getButtonStyles('Component1')}
        >
          Company News
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component2')}
          sx={getButtonStyles('Component2')}
        >
          Economy News
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component3')}
          sx={getButtonStyles('Component3')}
        >
          Market News
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component4')}
          sx={getButtonStyles('Component4')}
        >
          Political News
        </Button>
      </Box>
      <hr />
      <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
        {renderComponent()}
      </Box>
    </Box>
  );
};

export default FinancialNews;
