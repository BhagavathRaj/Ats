import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Componet1 from './Componet1';
import Component2 from './Component2';
import Componet3 from './Componet3';
import Component4 from './Component4';
import '../App.css';

const AnalystOption = () => {
  const [selectedComponent, setSelectedComponent] = useState('Component1');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <Componet1 />;
      case 'Component2':
        return <Component2 />;
      case 'Component3':
        return <Componet3 />;
      case 'Component4':
        return <Component4 />;
      default:
        return <Componet1 />;
    }
  };

  const getButtonStyles = (component) => ({
    color: selectedComponent === component ? '#ffffff' : '#34a853',
    backgroundColor: selectedComponent === component ? '#34a853' : '#d1ffdd',
    borderRadius: '50px',
    border: '1px solid #e5f2ff',
    padding: '2px 12px',
    fontSize: '11px',
    fontWeight: 600,
    marginBottom: '10px',
    marginLeft: '10px',
    textTransform: 'none',
  });

  return (
    <div className="scrollable-container" style={{ width: '100%' }}>
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
      {renderComponent()}
    </div>
  );
};

export default AnalystOption;
