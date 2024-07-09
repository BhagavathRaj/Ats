import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import '../App.css';
import classNames from 'classnames';
import '../Todays Financial News/Politicalnews.css';
const MostActive = () => {
  return (
    <div>
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
              width: '92%', // Ensures the div takes the full width
              marginLeft: '20px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  minWidth: '150px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    padding: '3px',
                    border: '1px solid #eeeeee',
                    borderRadius: '6px',
                    marginRight: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://assets.adityatrading.in/media/images/stocklogo/NSE/CM/SBIN/SBIN.png"
                    alt="Nifty"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#3c4043',
                      fontWeight: 600,
                      marginBottom: '0px',
                      textTransform: 'uppercase',
                    }}
                  >
                    SBIN
                  </p>
                  <p
                    style={{
                      marginBottom: '0px',
                      fontSize: '12px',
                      fontWeight: 600,
                      marginTop: '0px',

                      color: '#777D74',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    CMP:
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#777D74',
                      }}
                    >
                      {' '}
                      0.05
                    </span>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '10px 0',
                  height: '20px',
                  width: '10%',
                }}
              >
                <p
                  style={{
                    padding: '0 12px',
                    backgroundColor: '#d1ffdd',
                    color: '#34a853',
                    fontSize: '12px',
                    cursor: 'pointer',
                    borderRadius: '7px',
                    height: '20px',
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Buy
                </p>
              </div>

              <p
                style={{
                  color: '#34a853',
                  fontSize: '14px',
                  fontWeight: 400,
                  marginRight: '10px',
                  marginTop: '0px',
                }}
              >
                +9.55{' '}
              </p>

              <p
                style={{
                  padding: '0 12px',
                  backgroundColor: '#d1ffdd',
                  color: '#34a853',
                  fontSize: '10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '70px',
                  height: 'auto',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  marginTop: '0px',
                  justifyContent: 'center',
                }}
              >
                <ArrowDownward sx={{ height: '12px', position: 'relative' }} />{' '}
                +1.55%
              </p>
            </div>
          </div>
          <div
            style={{
              padding: '0.7rem',
              marginTop: '0.5rem',
              boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
              borderRadius: '0.25rem',
              width: '92%', // Ensures the div takes the full width
              marginLeft: '20px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  minWidth: '150px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    padding: '3px',
                    border: '1px solid #eeeeee',
                    borderRadius: '6px',
                    marginRight: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://assets.adityatrading.in/media/images/stocklogo/NSE/CM/SBIN/SBIN.png"
                    alt="Nifty"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#3c4043',
                      fontWeight: 600,
                      marginBottom: '0px',
                      textTransform: 'uppercase',
                    }}
                  >
                    SBIN
                  </p>
                  <p
                    style={{
                      marginBottom: '0px',
                      fontSize: '12px',
                      fontWeight: 600,
                      marginTop: '0px',

                      color: '#777D74',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    CMP:
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#777D74',
                      }}
                    >
                      {' '}
                      0.05
                    </span>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '10px 0',
                  height: '20px',
                  width: '10%',
                }}
              >
                <p
                  style={{
                    padding: '0 12px',
                    backgroundColor: '#d1ffdd',
                    color: '#34a853',
                    fontSize: '12px',
                    cursor: 'pointer',
                    borderRadius: '7px',
                    height: '20px',
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Buy
                </p>
              </div>

              <p
                style={{
                  color: '#34a853',
                  fontSize: '14px',
                  fontWeight: 400,
                  marginRight: '10px',
                  marginTop: '0px',
                }}
              >
                +9.55{' '}
              </p>

              <p
                style={{
                  padding: '0 12px',
                  backgroundColor: '#d1ffdd',
                  color: '#34a853',
                  fontSize: '10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '70px',
                  height: 'auto',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  marginTop: '0px',
                  justifyContent: 'center',
                }}
              >
                <ArrowDownward sx={{ height: '12px', position: 'relative' }} />{' '}
                +1.55%
              </p>
            </div>
          </div>
          <div
            style={{
              padding: '0.7rem',
              marginTop: '0.5rem',
              boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
              borderRadius: '0.25rem',
              width: '92%', // Ensures the div takes the full width
              marginLeft: '20px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  minWidth: '150px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    padding: '3px',
                    border: '1px solid #eeeeee',
                    borderRadius: '6px',
                    marginRight: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="https://assets.adityatrading.in/media/images/stocklogo/NSE/CM/SBIN/SBIN.png"
                    alt="Nifty"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#3c4043',
                      fontWeight: 600,
                      marginBottom: '0px',
                      textTransform: 'uppercase',
                    }}
                  >
                    SBIN
                  </p>
                  <p
                    style={{
                      marginBottom: '0px',
                      fontSize: '12px',
                      fontWeight: 600,
                      marginTop: '0px',

                      color: '#777D74',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    CMP:
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#777D74',
                      }}
                    >
                      {' '}
                      0.05
                    </span>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '10px 0',
                  height: '20px',
                  width: '10%',
                }}
              >
                <p
                  style={{
                    padding: '0 12px',
                    backgroundColor: '#d1ffdd',
                    color: '#34a853',
                    fontSize: '12px',
                    cursor: 'pointer',
                    borderRadius: '7px',
                    height: '20px',
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Buy
                </p>
              </div>

              <p
                style={{
                  color: '#34a853',
                  fontSize: '14px',
                  fontWeight: 400,
                  marginRight: '10px',
                  marginTop: '0px',
                }}
              >
                +9.55{' '}
              </p>

              <p
                style={{
                  padding: '0 12px',
                  backgroundColor: '#d1ffdd',
                  color: '#34a853',
                  fontSize: '10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '70px',
                  height: 'auto',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  marginTop: '0px',
                  justifyContent: 'center',
                }}
              >
                <ArrowDownward sx={{ height: '12px', position: 'relative' }} />{' '}
                +1.55%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostActive;
