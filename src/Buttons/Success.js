import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SuccessButton = ({ name }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        color: '#e5f2ff!important',

        border: '1px solid #e5f2ff!important',
        paddingTop: '2px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingBottom: '2px',
        fontSize: 'small',
        fontWeight: 600,
        position: 'relative',
        backgroundColor: '#34a853 ',

        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#34a853',
        },
      }}
    >
      {name}
    </Button>
  );
};

export default SuccessButton;
