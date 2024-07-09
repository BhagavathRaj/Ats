import Layout from './component/Layout';

import AddUser from './component/AddUser';
import EditContent from './component/EditContent';
import Formula from './component/Formula';
import LandingPage from './LandingPage';
import Coversion from './Coversion';
import FF from './FF';
import Grids from './Grids';
import PlsLogin from './PlsLogin';
import './App.css';
import FooterContent from './Footer/FooterContent';
import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import CreateAlert from './CreateAlert/CreateAlert';
import HomePage from './Home/HomePage';
import CreatePortFolio from './CreatePortfolio/CreatePortFolio';
import Signin from './Signin/Signin';
import AccountOpen from './Account/AccountOpen';
function App() {
  return (
    <>
      {' '}
      {/* <LandingPage />
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
        
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create_alert" element={<CreateAlert />} />
        <Route path="/create_portfolio" element={<CreatePortFolio />} />
        <Route path="/sign-in/*" element={<Signin />} />
        <Route path="/account-opening/*" element={<AccountOpen />} />
      </Routes>
    </>
  );
}

export default App;
