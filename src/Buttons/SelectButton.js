import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme, selected }) => ({
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
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: selected ? '#2c8c3b' : '#b0e4b0',
    color: '#ffffff',
  },
}));

const SelectButton = ({ onClick, selected, children }) => (
  <StyledButton onClick={onClick} selected={selected}>
    {children}
  </StyledButton>
);

export default SelectButton;
