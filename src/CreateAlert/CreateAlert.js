import React from 'react';
import LandingPage from '../LandingPage';
import { Button, Grid } from '@mui/material';
import FooterContent from '../Footer/FooterContent';
import { useLocation } from 'react-router-dom';
import './CreateAlert.css';
import { dark } from '@mui/material/styles/createPalette';
const CreateAlert = () => {
  const location = useLocation();

  return (
    <div>
      <LandingPage />
      <div
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
        }}
      >
        <div className="content-page">
          <Button
            sx={{
              color: '#34a853!important',
              backgroundColor: '#d1ffdd!important',
              // color:
              //   selectedComponent === component
              //     ? '#ffffff!important'
              //     : '#34a853!important',
              // backgroundColor:
              //   selectedComponent === component
              //     ? '#34a853!important'
              //     : '#d1ffdd!important',
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
              left: '50px !important',
            }}
          >
            Stocks
          </Button>
          <div className="container">
            <div className="rows">
              <div className="p-content">
                <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>
                  Free realtime market alerts
                </p>
                <p style={{ marginBottom: '0px', color: '#374948 !important' }}>
                  <small>
                    Create powerful market alerts on the cloud for stocks,
                    futures and options, and more for free.
                  </small>
                </p>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: '100%',
                flex: '16.6666',
                maxWidth: '16.6666',
              }}
            ></div>
            <div className="centre-content">
              <div className="form-inline">
                <label>Alert Me When</label>
                <input
                  className="search"
                  type="text"
                  placeholder="Search Stocks"
                  style={{ textTransform: 'uppercase' }}
                />
                <select>
                  <option>Price rises above</option>
                  <option>Price drops to</option>
                  <option>Change is over</option>
                  <option>Change is under</option>
                  <option>24H Change is over</option>
                  <option>24H Change is under</option>
                </select>
              </div>
              <div style={{ paddingLeft: '10%' }} className="form-inline">
                <input
                  className="search"
                  type="text"
                  placeholder="Enter a Value"
                  style={{ textTransform: 'uppercase' }}
                />
                <select>
                  <option>Only once</option>
                  <option>Once a day</option>
                  <option>Always</option>
                </select>
              </div>
              <div style={{ paddingLeft: '13%' }} className="form-inline">
                <input
                  className="search"
                  type="text"
                  placeholder="Name you Trigger"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: '100%',
                flex: '16.6666',
                maxWidth: '16.6666',
              }}
            ></div>
            <div
              style={{
                position: 'relative',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: '100%',
                flex: '16.6666',
                maxWidth: '16.6666',
                minHeight: '20px',
              }}
            ></div>
            <div
              style={{ float: 'right', textAlign: 'right' }}
              className="centre-content"
            >
              <Button
                sx={{
                  color: '#34a853!important',
                  backgroundColor: '#d1ffdd!important',
                  // color:
                  //   selectedComponent === component
                  //     ? '#ffffff!important'
                  //     : '#34a853!important',
                  // backgroundColor:
                  //   selectedComponent === component
                  //     ? '#34a853!important'
                  //     : '#d1ffdd!important',
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
                }}
              >
                Create
              </Button>
            </div>
            <div
              style={{
                position: 'relative',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: '100%',
                flex: '16.6666',
                maxWidth: '16.6666',
                minHeight: '20px',
              }}
            ></div>
            <div
              style={{
                border: '1px solid #b9b8b8',
                borderRadius: '4px',
                marginTop: '20px',
              }}
            >
              <div className="rows">
                <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
                  {' '}
                  <h6
                    style={{
                      marginBottom: '0px',
                      padding: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      margin: '0px',
                      lineHeight: '1.5',
                      color: '##374948',
                      position: 'relative',
                      left: '20px',
                    }}
                  >
                    My Triggers
                  </h6>
                </div>
                <div
                  style={{
                    flex: '0 0 50%',
                    maxWidth: '50%',
                    float: 'right',
                    textAlign: 'right',
                  }}
                >
                  <Button
                    sx={{
                      color: '#34a853!important',

                      // color:
                      //   selectedComponent === component
                      //     ? '#ffffff!important'
                      //     : '#34a853!important',
                      // backgroundColor:
                      //   selectedComponent === component
                      //     ? '#34a853!important'
                      //     : '#d1ffdd!important',

                      border: '1px solid #e5f2ff!important',
                      paddingTop: '2px',
                      paddingLeft: '8px',
                      paddingRight: '8px',
                      paddingBottom: '2px',
                      fontSize: '11px',
                      fontWeight: 600,
                      position: 'relative',

                      top: '7px',
                      textTransform: 'none',
                    }}
                  >
                    Download
                  </Button>{' '}
                </div>
                <div
                  style={{
                    flex: ' 0 0 100%',
                    maxwidth: '100%',
                    position: 'relative',
                    width: '100%',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  <div className="table">
                    <table style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Name{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Triggered{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Status{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Action{' '}
                          </th>
                        </tr>
                      </thead>
                      <tbody>" "</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </div>
    </div>
  );
};

export default CreateAlert;
