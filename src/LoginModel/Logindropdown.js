import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider, MenuList, useMediaQuery, useTheme } from '@mui/material';
import '../Footer/Footer.css';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import './Login.css';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import CalculateIcon from '@mui/icons-material/Calculate';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RedeemIcon from '@mui/icons-material/Redeem';
import HelpIcon from '@mui/icons-material/Help';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';

export default function Logindropdown({ anchorEl, handleClose }) {
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleAccount = () => {
    navigate('/account-opening/');
  };
  const handleCalculator = (e) => {
    console.log(e.target.value);
    // navigate(' /margin-calculator/')
  };
  const handleClick = (label) => {
    if (label === 'Calculator') {
      navigate('/margin-calculator/');
    } else if (label === 'Pricing') {
      navigate('/charges/');
    }
  };
  const signNavigate = () => {
    navigate('/sign-in/');
  };

  return (
    <div>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        disableScrollLock={true}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ marginRight: '30px' }}
      >
        <MenuList sx={{ paddingTop: '0px' }} dense>
          <MenuItem
            disableTouchRipple
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'auto',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <Button
              sx={{
                textTransform: 'none',
                backgroundColor: '#34a853',
                fontSize: isSmallScreen ? '10px' : '12px',
                '&:hover': {
                  backgroundColor: '#34a853',
                },
                marginRight: '5px',
                paddingLeft: isSmallScreen ? '8px' : '12px',
                paddingRight: isSmallScreen ? '8px' : '12px',
              }}
              variant="contained"
              onClick={handleAccount}
            >
              Open Account
            </Button>
            <Button
              sx={{
                textTransform: 'none',
                backgroundColor: '#dc3545',
                fontSize: isSmallScreen ? '10px' : '12px',
                '&:hover': {
                  backgroundColor: '#dc3545',
                },
                paddingLeft: isSmallScreen ? '8px' : '12px',
                paddingRight: isSmallScreen ? '8px' : '12px',
              }}
              variant="contained"
              onClick={signNavigate}
            >
              Login Now
            </Button>
          </MenuItem>

          <Divider />
          <div>
            {[
              { icon: <ShowChartIcon />, label: 'Trade' },
              { icon: <StackedBarChartIcon />, label: 'IPO' },
              { icon: <CalculateIcon />, label: 'Calculator' },
              { icon: <RedeemIcon />, label: 'Refer and Earn' },
              { icon: <HandshakeIcon />, label: 'FAQ’s' },
              { icon: <MonetizationOnIcon />, label: 'Pricing' },
              { icon: <HelpIcon />, label: 'Create Ticket' },
            ].map((item) => (
              <div
                className="items"
                key={item.label}
                onClick={() => handleClick(item.label)}
                style={{ fontSize: isSmallScreen ? '12px' : '14px' }}
              >
                {item.icon} <p className="hover-para">{item.label}</p>
              </div>
            ))}
          </div>
          <Divider />
          <div
            style={{ padding: '16px', display: 'inline-block', width: '100%' }}
          >
            <b
              style={{
                color: '#777D74',
                fontSize: isSmallScreen ? '12px' : '14px',
                lineHeight: '1.8',
                fontWeight: '500',
                fontStyle: 'normal',
              }}
            >
              Get in Touch With Us
            </b>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '150px',
                marginTop: '7px',
              }}
            >
              <WhatsAppIcon
                sx={{
                  color: '#34a853',
                  fontSize: isSmallScreen ? '18px' : '24px',
                }}
              />
              <PhoneIcon
                sx={{
                  color: '#17a2b853',
                  fontSize: isSmallScreen ? '18px' : '24px',
                }}
              />
              <TelegramIcon
                sx={{
                  color: '#007bff',
                  fontSize: isSmallScreen ? '18px' : '24px',
                }}
              />
              <EmailIcon
                sx={{
                  color: '#dc3545',
                  fontSize: isSmallScreen ? '18px' : '24px',
                }}
              />
            </div>
          </div>
          <Divider />
          <div
            className="items"
            style={{ fontSize: isSmallScreen ? '12px' : '14px' }}
          >
            <CommentIcon />{' '}
            <p style={{ width: '250px' }} className="hover-para">
              Send Feedback
            </p>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}
