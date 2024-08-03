import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import '../App.css';
import '../Todays Financial News/Politicalnews.css';
import classNames from 'classnames';
import { Box } from '@mui/system';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './Component.css';
import { useNavigate } from 'react-router';
const Component2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div
      className={classNames('politicalnewscontainer', 'scrollable-container')}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-12px',
        }}
      >
        <div
          style={{
            padding: '0.7rem',
            marginTop: '0.5rem',
            boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
            borderRadius: '0.25rem',
            width: '100%', // Ensures the div takes the full width
            boxSizing: 'border-box',
          }}
        >
          <div
            className="content"
            // style={{
            //   display: 'flex',
            //   justifyContent: 'space-between',
            //   flexWrap: 'wrap',
            //   alignItems: 'center',
            //   paddingLeft: '20px',
            //   paddingRight: '20px',
            // }}
          >
            <div
              className="content-img"
              // style={{
              //   display: 'flex',
              //   justifyContent: 'start',
              //   alignItems: 'center',

              //   minWidth: '250px',
              //   width: '40%',
              // }}
            >
              <div
                className="imge"
                // style={{
                //   width: '50px',
                //   height: '50px',
                //   padding: '3px',
                //   border: '1px solid #eeeeee',
                //   borderRadius: '6px',
                //   marginRight: '10px',
                //   display: 'flex',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                // }}
              >
                <img
                  src="https://assets.adityatrading.in/media/images/stocklogo/NSE/CM/NIFTY/NIFTY.jpg"
                  alt="Nifty"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <div>
                <p
                  className="nifty"
                  // style={{
                  //   fontSize: '0.75rem',
                  //   color: '#3c4043',
                  //   fontWeight: 600,
                  //   marginBottom: '0px',
                  //   textTransform: 'uppercase',
                  // }}
                >
                  NIFTY23MAY22650CE
                </p>
                <p
                  className="opencls"
                  // style={{
                  //   fontSize: '12px',
                  //   color: '#34a853',
                  //   marginTop: '0px',
                  // }}
                >
                  Open
                </p>
              </div>
            </div>

            <div
              className="butn"
              onClick={() => handleNavigation('/companypage/colpal/')}
              // style={{
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   margin: '10px 0',
              //   height: '20px',
              //   width: '10%',
              // }}
            >
              <p
                style={{
                  padding: '0 12px',
                  backgroundColor: '#d1ffdd',
                  color: '#34a853',
                  fontSize: '12px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  height: '30px',
                  width: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
              >
                Buy
              </p>
            </div>

            <div
              className="cmp"
              // style={{
              //   textAlign: 'right',
              //   minWidth: '150px',
              //   width: '30%',
              // }}
            >
              <p
                style={{
                  marginBottom: '0px',
                  fontSize: '0.783rem',

                  fontFamily: 'sans-serif',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#777D74',
                  alignItems: 'center',
                }}
              >
                CMP:
                <span style={{ fontSize: '0.785rem', fontWeight: 600 }}>
                  {' '}
                  0.05
                </span>
              </p>
              <div
                className="rednumber"
                style={{ justifyContent: 'start', display: 'flex' }}
              >
                <p style={{ color: '#dc3545', fontSize: '12px' }}>
                  -7116414.91{' '}
                </p>
                <p
                  className="numberspan"
                  style={{
                    color: '#dc3545',
                    fontSize: '12px',
                    marginTop: '0px',
                  }}
                >
                  {' '}
                  (-100%)
                </p>
              </div>
            </div>

            <p
              className="icn"
              style={{
                padding: '0.2rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArrowDownward sx={{ height: '15px' }} />
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-12px',
        }}
      >
        <div
          style={{
            padding: '0.7rem',
            marginTop: '0.5rem',
            boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
            borderRadius: '0.25rem',
            width: '100%', // Ensures the div takes the full width
            boxSizing: 'border-box',
          }}
        >
          <div
            className="content"
            // style={{
            //   display: 'flex',
            //   justifyContent: 'space-between',
            //   flexWrap: 'wrap',
            //   alignItems: 'center',
            //   paddingLeft: '20px',
            //   paddingRight: '20px',
            // }}
          >
            <div
              className="content-img"
              // style={{
              //   display: 'flex',
              //   justifyContent: 'start',
              //   alignItems: 'center',

              //   minWidth: '250px',
              //   width: '40%',
              // }}
            >
              <div
                className="imge"
                // style={{
                //   width: '50px',
                //   height: '50px',
                //   padding: '3px',
                //   border: '1px solid #eeeeee',
                //   borderRadius: '6px',
                //   marginRight: '10px',
                //   display: 'flex',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                // }}
              >
                <img
                  src="https://assets.adityatrading.in/media/images/stocklogo/NSE/CM/NIFTY/NIFTY.jpg"
                  alt="Nifty"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <div>
                <p
                  className="nifty"
                  // style={{
                  //   fontSize: '0.75rem',
                  //   color: '#3c4043',
                  //   fontWeight: 600,
                  //   marginBottom: '0px',
                  //   textTransform: 'uppercase',
                  // }}
                >
                  NIFTY23MAY22650CE
                </p>
                <p
                  className="opencls"
                  // style={{
                  //   fontSize: '12px',
                  //   color: '#34a853',
                  //   marginTop: '0px',
                  // }}
                >
                  Open
                </p>
              </div>
            </div>

            <div
              className="butn"
              // style={{
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   margin: '10px 0',
              //   height: '20px',
              //   width: '10%',
              // }}
            >
              <p
                style={{
                  padding: '0 12px',
                  backgroundColor: '#d1ffdd',
                  color: '#34a853',
                  fontSize: '12px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  height: '30px',
                  width: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
              >
                Buy
              </p>
            </div>

            <div
              className="cmp"
              // style={{
              //   textAlign: 'right',
              //   minWidth: '150px',
              //   width: '30%',
              // }}
            >
              <p
                style={{
                  marginBottom: '0px',
                  fontSize: '0.783rem',

                  fontFamily: 'sans-serif',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#777D74',
                  alignItems: 'center',
                }}
              >
                CMP:
                <span style={{ fontSize: '0.785rem', fontWeight: 600 }}>
                  {' '}
                  0.05
                </span>
              </p>
              <div
                className="rednumber"
                style={{ justifyContent: 'start', display: 'flex' }}
              >
                <p style={{ color: '#dc3545', fontSize: '12px' }}>
                  -7116414.91{' '}
                </p>
                <p
                  className="numberspan"
                  style={{
                    color: '#dc3545',
                    fontSize: '12px',
                    marginTop: '0px',
                  }}
                >
                  {' '}
                  (-100%)
                </p>
              </div>
            </div>

            <p
              className="icn"
              style={{
                padding: '0.2rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArrowDownward sx={{ height: '15px' }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
