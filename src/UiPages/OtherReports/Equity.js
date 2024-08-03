import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Shortterm from './Shortterm';
import Longterm from './Longterm';
import Intraday from './Intraday';

const Equity = () => {
  const [alignment, setAlignment] = React.useState('web');
  const [selected, setSelected] = useState('Intraday');
  const renderComponent = () => {
    switch (selected) {
      case 'Intraday':
        return <Intraday />;
      case 'Longterm':
        return <Longterm />;
      case 'Shortterm':
        return <Shortterm />;
      default:
        return <Intraday />;
    }
  };
  const getButtonStyles = (component) => ({
    color: selected === component ? '#34a853' : '#999',
    backgroundColor: selected === component ? '#d1ffdd' : 'auto',
    borderRadius: '50px',
    border: '1px solid #e5f2ff',
    padding: '3px 18px',
    fontSize: '13px',
    fontWeight: 600,

    marginBottom: '10px',
    marginLeft: '10px',
    textTransform: 'none',
    '&:hover': {
      color: '#34a853',
      backgroundColor: selected === component ? '#d1ffdd' : 'auto',
    },
  });

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <Grid container>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            padding: '10px',
          }}
          item
        >
          <div>
            <h5 style={{ fontSize: '1rem' }}>Analyst Opinion</h5>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                marginRight: { xs: '0', sm: '20px' },
                marginBottom: { xs: '10px', sm: '0' },
              }}
            >
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton
                  sx={{
                    textTransform: 'none',
                    color: '#888',
                    backgroundColor: '#fff',
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    '&.Mui-selected': {
                      color: '#fff',
                      backgroundColor: '#888',
                    },
                  }}
                  value="web"
                >
                  Day
                </ToggleButton>
                <ToggleButton
                  sx={{
                    textTransform: 'none',
                    color: '#888',
                    backgroundColor: '#fff',
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    '&.Mui-selected': {
                      color: '#fff',
                      backgroundColor: '#888',
                    },
                  }}
                  value="android"
                >
                  Week
                </ToggleButton>
                <ToggleButton
                  sx={{
                    textTransform: 'none',
                    color: '#888',
                    backgroundColor: '#fff',
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    '&.Mui-selected': {
                      color: '#fff',
                      backgroundColor: '#888',
                    },
                  }}
                  value="ios"
                >
                  Month
                </ToggleButton>
                <ToggleButton
                  sx={{
                    textTransform: 'none',
                    color: '#888',
                    backgroundColor: '#fff',
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    '&.Mui-selected': {
                      color: '#fff',
                      backgroundColor: '#888',
                    },
                  }}
                  value="is"
                >
                  3Month
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div>
              <Button
                sx={{
                  display: { xs: 'none' },
                  fontSize: { xs: '0.75rem', sm: '1rem' },
                }}
                variant="outlined" // Changed to "outlined" as it was likely intended
                startIcon={<ImportExportIcon />}
              >
                Export
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            onClick={() => setSelected('Intraday')}
            sx={getButtonStyles('Intraday')}
          >
            Intraday
          </Button>
          <Button
            onClick={() => setSelected('Shortterm')}
            sx={getButtonStyles('Shortterm')}
          >
            ShortTerm
          </Button>
          <Button
            onClick={() => setSelected('Longterm')}
            sx={getButtonStyles('Longterm')}
          >
            Longterm
          </Button>
        </Grid>
        <Grid item xs={12}>
          {renderComponent()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Equity;
