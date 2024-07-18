import React from 'react';
import Button from '@mui/material/Button';

const GreenButton = ({
  children, // The text or elements to display inside the button
  sx = {}, // Additional styles to merge with the default styles
  ...props // Any other props to pass to the Button component
}) => {
  return (
    <Button
      sx={{
        color: '#34a853!important',
        backgroundColor: '#d1ffdd!important',
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
        left: '100px',
        ...sx, // Merge additional styles
      }}
      {...props} // Pass any other props
    >
      {children}
    </Button>
  );
};

export default GreenButton;
