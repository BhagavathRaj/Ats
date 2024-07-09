import react from 'react';
import '../App.css';
import '../Todays Financial News/Politicalnews.css';
import classNames from 'classnames';
import { CalendarViewMonth } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const EarningsCalender = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid #cfc2c2',
        borderRadius: '10px',
        marginTop: '20px',
        alignItems: 'center',
      }}
    >
      <h5
        style={{
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '.3px',
          color: '#131722',
          lineHeight: '1.5px',
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          paddingLeft: '20px',
          marginTop: '15px',
        }}
      >
        Earnings Calender
      </h5>
      <p
        className="paragrey"
        style={{ width: '100%', paddingLeft: '20px', paddingTop: '15px' }}
      >
        Based on Popular stocks
        <hr />
      </p>

      <div
        style={{
          width: '100%',

          marginTop: '10px',
        }}
      >
        <div
          className={classNames(
            'politicalnewscontainer',
            'scrollable-container'
          )}
        >
          <div className="shadowbox">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex' }}>
                <div className="calender-box">
                  <p style={{ fontSize: '12px', marginTop: '12px' }}>2</p>
                  <p style={{ fontSize: '12px' }}>Jul</p>
                </div>
                <div style={{ marginLeft: '5px' }}>
                  <p className="paradark">CRESSAN</p>
                  <p
                    style={{
                      fontSize: '12px',
                      marginBottom: '0px',
                      paddingTop: '0px',
                    }}
                    className="paragrey"
                  >
                    Jul 2 11:50 pm
                  </p>
                </div>
              </div>
              <div style={{ marginRight: '10px' }}>
                <CalendarMonthIcon />
              </div>
            </div>
          </div>
          <div className="shadowbox">
            <div
              style={{
                width: '100%',

                marginTop: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div className="calender-box">
                    <p style={{ fontSize: '12px', marginTop: '12px' }}>2</p>
                    <p style={{ fontSize: '12px' }}>Jul</p>
                  </div>
                  <div style={{ marginLeft: '5px' }}>
                    <p className="paradark">CRESSAN</p>
                    <p
                      style={{
                        fontSize: '12px',
                        marginBottom: '0px',
                        paddingTop: '0px',
                      }}
                      className="paragrey"
                    >
                      Jul 2 11:50 pm
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: '10px' }}>
                  <CalendarMonthIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="shadowbox">
            <div
              style={{
                width: '100%',

                marginTop: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div className="calender-box">
                    <p style={{ fontSize: '12px', marginTop: '12px' }}>2</p>
                    <p style={{ fontSize: '12px' }}>Jul</p>
                  </div>
                  <div style={{ marginLeft: '5px' }}>
                    <p className="paradark">CRESSAN</p>
                    <p
                      style={{
                        fontSize: '12px',
                        marginBottom: '0px',
                        paddingTop: '0px',
                      }}
                      className="paragrey"
                    >
                      Jul 2 11:50 pm
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: '10px' }}>
                  <CalendarMonthIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="shadowbox">
            <div
              style={{
                width: '100%',

                marginTop: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div className="calender-box">
                    <p style={{ fontSize: '12px', marginTop: '12px' }}>2</p>
                    <p style={{ fontSize: '12px' }}>Jul</p>
                  </div>
                  <div style={{ marginLeft: '5px' }}>
                    <p className="paradark">CRESSAN</p>
                    <p
                      style={{
                        fontSize: '12px',
                        marginBottom: '0px',
                        paddingTop: '0px',
                      }}
                      className="paragrey"
                    >
                      Jul 2 11:50 pm
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: '10px' }}>
                  <CalendarMonthIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="shadowbox">
            <div
              style={{
                width: '100%',

                marginTop: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div className="calender-box">
                    <p style={{ fontSize: '12px', marginTop: '12px' }}>2</p>
                    <p style={{ fontSize: '12px' }}>Jul</p>
                  </div>
                  <div style={{ marginLeft: '5px' }}>
                    <p className="paradark">CRESSAN</p>
                    <p
                      style={{
                        fontSize: '12px',
                        marginBottom: '0px',
                        paddingTop: '0px',
                      }}
                      className="paragrey"
                    >
                      Jul 2 11:50 pm
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: '10px' }}>
                  <CalendarMonthIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsCalender;
