import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import Logindropdown from './LoginModel/Logindropdown';
import Logoutdropdown from './LoginModel/Logoutdropdown';

const navItems = ['CreateAlert', 'CreatePortFolio'];

function LandingPage(props) {
  const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [disable, setDisable] = React.useState(false);
  const [showLogout, setShowLogout] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/create_portfolio') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [location.pathname]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    if (
      location.pathname === '/account-opening/' ||
      location.pathname === '/create_portfolio'
    ) {
      setShowLogout(true);
    } else {
      console.log('Setting showLogout to false');
      setShowLogout(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomenav = () => {
    navigate('/');
  };

  const handleNavItemClick = (item) => {
    if (item === 'CreateAlert') {
      navigate('/create_alert');
    } else if (item === 'CreatePortFolio') {
      navigate('/create_portfolio');
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box
        sx={{
          display: 'inline-block',
          position: 'fixed',
          zIndex: '999',
          backgroundColor: '#ffffff',
          paddingBottom: '20px',
          borderBottom: '1px solid #d4d4d4',
          width: '100%',
          height: '90px',
          top: '-12px',
        }}
      >
        <CssBaseline />
        <AppBar
          sx={{
            backgroundColor: '#fff',
            boxShadow: 'none',
            color: 'black',
          }}
          component="nav"
        >
          <Toolbar
            sx={{ position: 'absolute', top: '12px', cursor: 'pointer' }}
          >
            <img
              onClick={handleHomenav}
              src="https://adityatrading.in/static/images/logo.png"
              alt="Ats"
              style={{ width: '107px', height: '47px', cursor: 'pointer' }}
            />
          </Toolbar>
          <Box
            sx={{
              position: 'relative',
              justifyContent: 'end',
              top: '25px',
              marginRight: '140px',
              display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
            }}
          >
            {navItems.map((item) => (
              <Button
                sx={{
                  textTransform: 'none',
                  color: '#777D74',
                }}
                key={item}
                onClick={() => handleNavItemClick(item)}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    '&:hover': {
                      color: '#81c784',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleClick}
            disabled={disable}
            sx={{
              ml: 2,
              fontSize: '14px',
              display: 'inline-block',
              position: 'absolute',
              right: { xs: '10%', md: '10%', lg: '5%', sm: '10%' },
              top: '25px',
            }}
          >
            <MenuIcon
              sx={{ fontSize: '14px', height: '17px', width: '17px' }}
            />
          </IconButton>
        </AppBar>
        {showLogout ? (
          <Logoutdropdown
            anchorEl={anchorEl}
            handleClose={handleClose}
            open={Boolean(anchorEl)}
          />
        ) : (
          <Logindropdown
            anchorEl={anchorEl}
            handleClose={handleClose}
            open={Boolean(anchorEl)}
          />
        )}
      </Box>
    </div>
  );
}

LandingPage.propTypes = {
  window: PropTypes.func,
};

export default LandingPage;
