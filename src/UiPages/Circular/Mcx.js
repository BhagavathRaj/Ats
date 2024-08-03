import { Box } from '@mui/system';
import React from 'react';

const Mcx = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #ededed',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            flex: '0 0 83.333333%',
            maxWidth: '83.333333%',
            flexDirection: 'column',
            paddingLeft: '15px',
            paddingRight: '15px',
          }}
        >
          <a
            style={{
              color: '#3c4043',
              fontSize: '14px',
              fontWeight: '600',
              paddingTop: '7px',
              paddingBottom: '7px',
            }}
            href="#"
          >
            Approval of Surrender of Membership 05/09/2023
          </a>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '7px',
            }}
          >
            <div
              style={{
                paddingLeft: '15px',
                paddingRight: '15px',
                fontSize: '13px',
                flex: '0 0 25%',
                maxWidth: '25%',
                color: '#3c4043',
                fontSize: '14px',
                fontWeight: '600',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
            >
              5 Sep 2023
            </div>
            <div
              style={{
                paddingLeft: '15px',
                paddingRight: '15px',
                paddingTop: '10px',
                flex: '0 0 75%',
                maxWidth: '75%',
                color: '#3c4043',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              <span
                style={{
                  color: '#880002',
                  border: '1px solid',
                  padding: '5px',
                  fontSize: '12px',
                }}
              >
                Tech
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>
            <a style={{ fontSize: '14px', fontWeight: '600' }} href="#">
              View
            </a>
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Mcx;
