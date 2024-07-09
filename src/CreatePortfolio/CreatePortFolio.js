import React from 'react';
import LandingPage from '../LandingPage';
import { Button, Grid } from '@mui/material';
import FooterContent from '../Footer/FooterContent';

import '../CreateAlert/CreateAlert.css';

const CreatePortFolio = () => {
  return (
    <div>
      <LandingPage />
      <div
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          top: '90px',
        }}
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
            left: '100px',
          }}
        >
          PortFolio
        </Button>
        <div style={{ paddingTop: '0px' }} className="content-page">
          <div className="container">
            <div className="rows">
              <div className="p-content">
                <p
                  style={{
                    marginBottom: '0px',
                    fontWeight: 'bold',
                    fontSize: 'medium',
                    color: 'black',
                  }}
                >
                  Welcome to PortFolio
                </p>
                <p style={{ marginBottom: '0px', color: '#374948 !important' }}>
                  <small>
                    Create powerful market alerts on the cloud for stocks,
                    futures and options, and more for free.
                  </small>
                </p>
              </div>
              <div style={{ position: 'static' }} className="B-content">
                <Button
                  sx={{
                    color: '#e5f2ff!important',

                    border: '1px solid #e5f2ff!important',
                    paddingTop: '2px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    paddingBottom: '2px',
                    fontSize: '11px',
                    fontWeight: 600,
                    position: 'relative',
                    backgroundColor: '#34a853 ',
                    top: '-10px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#34a853',
                    },
                  }}
                >
                  + Add Stock
                </Button>
              </div>
              <div className="Inves">
                <h5 style={{ marginBottom: '16px' }}>My Investments</h5>
              </div>
              <div className="cards">
                <p className="Title" style={{ marginBottom: '0px' }}>
                  My Net Worth
                </p>
                <p
                  style={{
                    marginBottom: '0px',
                    marginTop: '0px',
                    color: '#777D74',
                  }}
                >
                  <b>₹0.0</b>
                </p>
              </div>
              <div className="cards">
                <p className="Title" style={{ marginBottom: '0px' }}>
                  Amount Invested
                </p>
                <p
                  style={{
                    marginBottom: '0px',
                    marginTop: '0px',
                    color: '#777D74',
                  }}
                >
                  <b>₹0.0</b>
                </p>
              </div>
              <div className="cards">
                <p className="Title" style={{ marginBottom: '0px' }}>
                  OverAll P&L
                </p>
                <p
                  style={{
                    marginBottom: '0px',
                    marginTop: '0px',
                    color: '#777D74',
                  }}
                >
                  <b>₹0.0</b>
                </p>
              </div>
              <div className="cards">
                <p className="Title" style={{ marginBottom: '0px' }}>
                  Today's P&L
                </p>
                <p
                  style={{
                    marginBottom: '0px',
                    marginTop: '0px',
                    color: '#777D74',
                  }}
                >
                  <b>₹0.0</b>
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
                minHeight: '20px',
              }}
            ></div>
            <div
              style={{ float: 'right', textAlign: 'right' }}
              className="centre-content"
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
                    My Accounts
                  </h6>
                </div>
                <div
                  style={{
                    flex: '0 0 100%',
                    maxWidth: '100%',
                    float: 'left',
                    left: '30px',
                    position: 'relative',
                    textAlign: 'left',
                  }}
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
                    Stocks
                  </Button>
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
                      <thead style={{ color: '##707070', fontWeight: '400' }}>
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
                            Qty{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Avg.Cost{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            LTP{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Cur.Value{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            P&L{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Net Chg{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Day Chg{' '}
                          </th>
                          <th
                            style={{
                              fontSize: '12px',
                              fontWeight: 'normal',
                              textAlign: 'left',
                            }}
                          >
                            {' '}
                            Actions{' '}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ display: 'none' }}>Name </span>
                            <p
                              style={{
                                fontSize: '13px',
                                color: '#3c4043',
                                fontWeight: '500',
                              }}
                            >
                              Please add stocks to your portfolio to view
                              portfolio data
                            </p>
                          </td>
                        </tr>
                      </tbody>
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

export default CreatePortFolio;
