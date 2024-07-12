import React from 'react';
import Button from '@mui/material/Button';

const SelectButton = ({ onClick, selected, children }) => {
  const getButtonStyles = (selected) => ({
    color: selected ? '#ffffff' : '#34a853',
    backgroundColor: selected ? '#34a853' : '#d1ffdd',
    borderRadius: '50px',
    border: '1px solid #e5f2ff',
    padding: '2px 12px',
    fontSize: '11px',
    fontWeight: 600,
    marginBottom: '10px',
    marginLeft: '10px',
    textTransform: 'none',
  });

  return (
    <Button onClick={onClick} sx={getButtonStyles(selected)}>
      {children}
    </Button>
  );
};

export default SelectButton;
