import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DangerButton = ({ name }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        backgroundColor: '#dc3545',
        fontSize: '13px',
        transition: 'all 0.5s ease-out 0s',
        marginBottom: 'auto',
        marginTop: 'auto',
        paddingLeft: '22px',
        paddingRight: '22px',
        width: 'auto',
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
      {name}
    </Button>
  );
};

export default DangerButton;
