import React, { useEffect, useState } from 'react';
import LandingPage from '../../LandingPage';
import { Box, Grid, Typography } from '@mui/material';
import FooterContent from '../../Footer/FooterContent';

const StockMonthly = () => {
  const [col, setCol] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCol = () => {
    setCol(!col);
  };
  const handleSec = () => {
    setSecond(!second);
  };
  const handleThird = () => {
    setThird(!third);
  };

  return (
    <div>
      <LandingPage />
      <Box
        sx={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease-out 0s',
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', md: '80%' },
            top: '100px',
            position: 'relative',
            mx: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Monthly Disclosure Stock Broker
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  marginTop: '10px',

                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderColor: '#ddd',
                }}
              >
                <button
                  onClick={handleCol}
                  style={{
                    display: 'block',
                    margin: '0px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  2022-23
                </button>
              </div>
              {col && (
                <div
                  style={{
                    boxSizing: 'border-box',
                    border: '1px solid  color: #123455;',
                  }}
                >
                  <ul style={{ border: '1px solid #bba8a8', padding: '0px' }}>
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-July.pdf"
                        target="_blank"
                      >
                        July
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-August.pdf"
                        target="_blank"
                      >
                        August
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-September.pdf"
                        target="_blank"
                      >
                        September
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-October.pdf"
                        target="_blank"
                      >
                        October
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-November.pdf"
                        target="_blank"
                      >
                        November
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-December.pdf"
                        target="_blank"
                      >
                        December
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-January.pdf"
                        target="_blank"
                      >
                        January
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-February.pdf"
                        target="_blank"
                      >
                        February
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-March.pdf"
                        target="_blank"
                      >
                        March
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  marginTop: '5px',

                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderColor: '#ddd',
                }}
              >
                <button
                  onClick={handleSec}
                  style={{
                    display: 'block',
                    margin: '0px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  2023-24
                </button>
              </div>
              {second && (
                <div
                  style={{
                    boxSizing: 'border-box',
                    border: '1px solid  color: #123455;',
                  }}
                >
                  <ul style={{ border: '1px solid #bba8a8', padding: '0px' }}>
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-April-2023.pdf"
                        target="_blank"
                      >
                        April
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-May-2023.pdf"
                        target="_blank"
                      >
                        May
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-June-2023.pdf"
                        target="_blank"
                      >
                        June
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-July-2023.pdf"
                        target="_blank"
                      >
                        July
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-August-2023.pdf"
                        target="_blank"
                      >
                        August
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-Sep-2023.pdf"
                        target="_blank"
                      >
                        September
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-Oct-2023.pdf"
                        target="_blank"
                      >
                        October
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-Nov-2023.pdf"
                        target="_blank"
                      >
                        November
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-DEC-2023.pdf"
                        target="_blank"
                      >
                        December
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-JAN-2024.pdf"
                        target="_blank"
                      >
                        January
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-FEB-2024.pdf"
                        target="_blank"
                      >
                        February
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-MAR-2024.pdf"
                        target="_blank"
                      >
                        March
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  marginTop: '5px',
                  marginBottom: '20px',
                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderColor: '#ddd',
                }}
              >
                <button
                  onClick={handleThird}
                  style={{
                    display: 'block',
                    margin: '0px',
                    outline: 'none',
                    border: 'none',
                    backgroundColor: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  2024-25
                </button>
              </div>
              {third && (
                <div
                  style={{
                    boxSizing: 'border-box',
                    border: '1px solid  color: #123455;',
                  }}
                >
                  <ul style={{ border: '1px solid #bba8a8', padding: '0px' }}>
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-April-2024.pdf"
                        target="_blank"
                      >
                        April
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/stockbroker/File-Stock-Broker-April-2024.pdf"
                        target="_blank"
                      >
                        June
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default StockMonthly;
