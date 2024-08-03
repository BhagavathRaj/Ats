import React, { useEffect, useState } from 'react';
import LandingPage from '../../LandingPage';
import { Box, Grid, Typography } from '@mui/material';
import FooterContent from '../../Footer/FooterContent';

const DpsMonthly = () => {
  const [col, setCol] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);

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
                Monthly Disclosure DPs
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
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-July-2022.pdf"
                        target="_blank"
                      >
                        July
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-August-2022.pdf"
                        target="_blank"
                      >
                        August
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-September-2022.pdf"
                        target="_blank"
                      >
                        September
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-October-2022.pdf"
                        target="_blank"
                      >
                        October
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-November-2022.pdf"
                        target="_blank"
                      >
                        November
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-December-2022.pdf"
                        target="_blank"
                      >
                        December
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-January-2023.pdf"
                        target="_blank"
                      >
                        January
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-February-2023.pdf"
                        target="_blank"
                      >
                        February
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-March-2023.pdf"
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
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-April-2023.pdf"
                        target="_blank"
                      >
                        April
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-May-2023.pdf"
                        target="_blank"
                      >
                        May
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-June-2023.pdf"
                        target="_blank"
                      >
                        June
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-July-2023.pdf "
                        target="_blank"
                      >
                        July
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-Aug-2023.pdf"
                        target="_blank"
                      >
                        August
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-Sep-2023.pdf"
                        target="_blank"
                      >
                        September
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-Oct-2023.pdf"
                        target="_blank"
                      >
                        October
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-Nov-2023.pdf"
                        target="_blank"
                      >
                        November
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-Dec-2023.pdf  "
                        target="_blank"
                      >
                        December
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-JAN-2024.pdf"
                        target="_blank"
                      >
                        January
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-FEB-2024.pdf"
                        target="_blank"
                      >
                        February
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-MAR-2024.pdf"
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
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-April-2024.pdf"
                        target="_blank"
                      >
                        April
                      </a>
                    </li>
                    <hr />
                    <li style={{ listStyle: 'none', paddingLeft: '10px' }}>
                      <a
                        href="https://adityatrading.in/media/monthly-disclosures/DP/File-DP-June-2024.pdf"
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

export default DpsMonthly;
