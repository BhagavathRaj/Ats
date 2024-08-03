import React, { useEffect, useState } from 'react';
import LandingPage from '../../LandingPage';
import { Box, Grid } from '@mui/material';
import FooterContent from '../../Footer/FooterContent';
import GreenButton from '../../Buttons/GreenButton';
import Nse from './Nse';
import Bse from './Bse';
import Mcx from './Mcx';
import Sebi from './Sebi';

const Circular = () => {
  const [selected, setSelected] = useState('NSE');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (label) => {
    setSelected(label);
  };

  const renderContent = () => {
    switch (selected) {
      case 'NSE':
        return <Nse />;
      case 'BSE':
        return <Bse />;
      case 'MCX':
        return <Mcx />;
      case 'SEBI':
        return <Sebi />;
      default:
        return <Nse />;
    }
  };

  return (
    <div>
      <LandingPage />
      <Box
        style={{
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
            width: '80%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <div style={{ borderBottom: '1px solid #ededed' }}>
                <h5>Circulars</h5>
              </div>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <GreenButton
                  onClick={() => handleSelect('NSE')}
                  sx={{ left: '0px!important' }}
                >
                  NSE
                </GreenButton>
                <GreenButton
                  onClick={() => handleSelect('BSE')}
                  sx={{ left: '0px!important' }}
                >
                  BSE
                </GreenButton>
                <GreenButton
                  onClick={() => handleSelect('MCX')}
                  sx={{ left: '0px!important' }}
                >
                  MCX
                </GreenButton>
                <GreenButton
                  onClick={() => handleSelect('SEBI')}
                  sx={{ left: '0px!important' }}
                >
                  SEBI
                </GreenButton>
              </div>

              {renderContent()}
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

export default Circular;
