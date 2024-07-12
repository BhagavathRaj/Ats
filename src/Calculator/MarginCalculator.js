import { Button, useMediaQuery } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import SearchModel from './SearchModel';

const MarginCalculator = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <div
        style={{
          flex: '0 0 8.333333%',
          maxWidth: '8.333333%',
          position: 'relative',
          width: '100%',
        }}
      ></div>
      <div style={{ flex: '0 0 83.333333%', maxWidth: '83.333333' }}>
        <div onClick={handleOpen} className="margincalculator">
          <div className="searchicon">
            <span>
              {' '}
              <SearchIcon sx={{ marginTop: '10px' }} />
            </span>
            <p>Search for stocks</p>
          </div>
          <Button
            sx={{
              backgroundColor: '#dc3545',
              fontSize: '13px',
              transition: 'all 0.5s ease-out 0s',
              marginBottom: 'auto',
              marginTop: 'auto',
              paddingLeft: '22px',
              paddingRight: '22px',
              width: '50px',
              borderRadius: '50rem',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#dc3545',
                color: '#fff',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '10px',
                paddingLeft: '6px',
                paddingRight: '6px',
                width: '50px',
                left: '10px',
              },
            }}
          >
            Reset
          </Button>
        </div>
        <div className="table-responsive">
          <table
            className="tablecalaculator"
            style={{
              width: '100%',
              marginBottom: '16px',
              color: '#212529',
              borderCollapse: 'collapse',
            }}
          >
            <thead
              style={{
                backgroundColor: '#eeeeee',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
            >
              <tr>
                <th>Exchange</th>
                <th>Namme</th>
                <th>Type</th>
                <th>Strike</th>
                <th>Qty</th>
                <th>Initial Margin</th>
                <th>Exposure</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <SearchModel open={open} handleClose={handleClose} />
    </div>
  );
};

export default MarginCalculator;
