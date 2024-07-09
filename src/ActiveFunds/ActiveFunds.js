import React, { useState } from 'react';
import OngoingIpo from './OngoingIpo';
import UpcomingIpo from './UpcomingIpo';
import { Button } from '@mui/material';
import ipos from './Ipo';
const ActiveFunds = () => {
  const [selectedComponent, setSelectedComponent] = useState('Ongoing Ipo');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Ongoing Ipo':
        return <OngoingIpo ipos={ipos} />;
      case 'Upcoming Ipo':
        return <UpcomingIpo />;
      default:
        return <OngoingIpo />;
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
        alignItems: 'center',
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
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          paddingLeft: '20px',
          marginTop: '15px',
        }}
      >
        Active Funds
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
            onClick={() => setSelectedComponent('Ongoing Ipo')}
            sx={getButtonStyles('Ongoing Ipo')}
          >
            Ongoing Ipo
          </Button>
          <Button
            onClick={() => setSelectedComponent('Upcoming Ipo')}
            sx={getButtonStyles('Upcoming Ipo')}
          >
            Upcoming Ipo
          </Button>
        </div>
        <hr style={{ marginLeft: '20px' }} />
        {renderComponent()}
      </div>
    </div>
  );
};

export default ActiveFunds;
