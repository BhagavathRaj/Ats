import React from 'react';
import Grids from '../Grids';
import { Grid } from '@mui/material';
import FooterContent from '../Footer/FooterContent';
import PlsLogin from '../PlsLogin';
import LandingPage from '../LandingPage';
import FF from '../FF';
const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <div
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          top: '90px',
        }}
      >
        <FF />
        <PlsLogin />
        <Grids />
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
