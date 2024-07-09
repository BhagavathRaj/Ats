import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import '../App.css';
import classNames from 'classnames';
import '../Todays Financial News/Politicalnews.css';

const OngoingIpo = ({ ipos }) => {
  return (
    <div
      className={classNames('politicalnewscontainer', 'scrollable-container')}
    >
      {ipos.map((ipo, index) => (
        <div
          key={index}
          style={{
            padding: '7px',
            borderRadius: '10px',
            flexWrap: 'wrap',
            marginRight: '-15px',
            marginLeft: '-15px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '0.7rem',
              marginTop: '0.5rem',
              boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
              borderRadius: '0.25rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex' }}>
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
                    src={ipo.logo}
                    alt="Nifty"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#282828',
                      fontWeight: 600,
                      lineHeight: '12px',
                      marginTop: '10px',
                    }}
                  >
                    {ipo.shares}
                  </p>
                  <p style={{ marginBottom: '0px' }}>
                    <small>Shares</small>
                  </p>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#282828',
                    fontWeight: 600,
                    lineHeight: '12px',
                    marginTop: '10px',
                  }}
                >
                  {ipo.priceRange}
                </p>
                <p style={{ marginBottom: '0px', marginTop: '0px' }}>
                  <small>Price range</small>
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#282828',
                    fontWeight: 600,
                    lineHeight: '12px',
                    marginTop: '10px',
                  }}
                >
                  {ipo.issueDate}
                </p>
                <p style={{ marginBottom: '0px', marginTop: '0px' }}>
                  <small>Issue date</small>
                </p>
              </div>
              <p
                style={{
                  padding: '0 12px',
                  backgroundColor: '#d1ffdd',
                  color: '#34a853',
                  fontSize: '12px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Apply
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingIpo;
