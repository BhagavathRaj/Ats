import React from 'react';
import Button from '@mui/material/Button';

const BorderButton = ({ onClick, selected, children }) => {
  const getButtonStyles = (selected) => ({
    color: '#34a853',
    backgroundColor: '#fff',

    borderBottom: selected ? '2px solid #34a853' : 'none', // Highlight bottom border when selected
    padding: '0px 12px',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '10px',
    marginLeft: '0px',
    textTransform: 'none',
  });

  return (
    <Button onClick={onClick} sx={getButtonStyles(selected)}>
      {children}
    </Button>
  );
};

export default BorderButton;
