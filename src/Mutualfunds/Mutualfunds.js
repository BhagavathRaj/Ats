import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Solution from './Solution';
import Other from './Other';
import Hybrid from './Hybrid';
import Equity from './Equity';
import Debt from './Debt';
import { Box } from '@mui/material';

const Mutualfunds = () => {
  const [selectedComponent, setSelectedComponent] = useState('Component1');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <Debt />;
      case 'Component2':
        return <Equity />;
      case 'Component3':
        return <Hybrid />;
      case 'Component4':
        return <Solution />;
      case 'Component5':
        return <Other />;
      default:
        return <Debt />;
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
    <Box sx={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
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
        Mutual Funds
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
          Debt
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component2')}
          sx={getButtonStyles('Component2')}
        >
          Equity
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component3')}
          sx={getButtonStyles('Component3')}
        >
          Hybrid
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component4')}
          sx={getButtonStyles('Component4')}
        >
          Solution Oriented
        </Button>
        <Button
          onClick={() => setSelectedComponent('Component5')}
          sx={getButtonStyles('Component5')}
        >
          Other
        </Button>
      </Box>
      <hr />
      <Box sx={{ width: '100%', boxSizing: 'border-box' }}>
        {renderComponent()}
      </Box>
    </Box>
  );
};

export default Mutualfunds;
