import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Star } from '@mui/icons-material';

const Debt = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <table style={{ width: '100%', marginBottom: '7px', color: '#212529' }}>
        <thead
          style={{
            color: '#707070',
            fontSize: isSmallScreen ? 'x-small' : 'small',
          }}
        >
          <tr>
            <th>NAME</th>
            {!isSmallScreen && <th>1Y</th>}
            {!isSmallScreen && <th>2Y</th>}
            <th>3Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                fontWeight: 500,
                fontSize: isSmallScreen ? '10px' : '13px',
                color: '#3c4043',
                padding: '5px',
                verticalAlign: 'top',
                borderTop: '1px solid #dee2e6',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div
                  style={{
                    width: isSmallScreen ? '40px' : '50px',
                    height: isSmallScreen ? '40px' : '50px',
                    padding: '3px',
                    border: '1px solid #eeeeee',
                    borderRadius: '6px',
                    verticalAlign: 'top',
                    marginLeft: isSmallScreen ? '0px' : '10px',
                    display: 'flex',
                  }}
                >
                  <img
                    src="https://assets.adityatrading.in/media/images/mutualfund/stocklogo/Aditya%20Birla%20Sun%20Life%20Money%20Manager%20Fund%20(Growth)/Aditya_Bir_LLTsp1D.jpg"
                    alt="Aditya Birla Sun Life Money Manager Fund"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    marginLeft: isSmallScreen ? '0px' : '5px',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    textAlign: isSmallScreen ? 'center' : 'left',
                  }}
                >
                  <p>
                    <span
                      style={{
                        marginBottom: '0px',
                        fontWeight: 600,
                        fontSize: '12px',
                        color: '#3c4043',
                        textTransform: 'uppercase',
                      }}
                    >
                      Aditya Birla Sun Life Money Manager Fund (Growth)
                    </span>
                  </p>
                  <p
                    style={{
                      marginBottom: '0px',
                      fontWeight: 600,
                      marginTop: '0px',
                      fontSize: '12px',
                      color: '#777D74!important',
                    }}
                  >
                    {' '}
                    <span>LOW</span> . Debit . 5{' '}
                    <Star
                      sx={{ fontSize: isSmallScreen ? 'small' : 'medium' }}
                    />
                  </p>
                </div>
              </div>
            </td>
            {!isSmallScreen && (
              <React.Fragment>
                <td
                  style={{
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#3c4043',
                    padding: '5px',
                    verticalAlign: 'top',
                    borderTop: '1px solid #dee2e6',
                  }}
                >
                  6.01%
                </td>
                <td
                  style={{
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#3c4043',
                    padding: '5px',
                    verticalAlign: 'top',
                    borderTop: '1px solid #dee2e6',
                  }}
                >
                  5.2%
                </td>
              </React.Fragment>
            )}
            <td
              style={{
                fontWeight: 500,
                fontSize: '13px',
                color: '#3c4043',
                padding: '5px',
                verticalAlign: 'top',
                borderTop: '1px solid #dee2e6',
              }}
            >
              6.2%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Debt;
