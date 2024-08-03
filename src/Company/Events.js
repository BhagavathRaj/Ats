import React from 'react';

const Events = () => {
  return (
    <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
      <table className="even" style={{ width: '100%' }}>
        <tr>
          <td>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h6
                  style={{
                    marginBottom: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1.5',
                    color: '#374948',
                  }}
                >
                  Divident
                </h6>
                <p style={{ fontWeight: '400' }}>A Divident of Rs.1.0(50%)</p>
              </div>
              <div>
                <h6
                  style={{
                    marginBottom: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1.5',
                    color: '#374948',
                  }}
                >
                  21 Jan 22
                </h6>
                <p style={{ fontWeight: '400' }}>Ex Date</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h6
                  style={{
                    marginBottom: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1.5',
                    color: '#374948',
                  }}
                >
                  Divident
                </h6>
                <p style={{ fontWeight: '400' }}>A Divident of Rs.1.0(50%)</p>
              </div>
              <div>
                <h6
                  style={{
                    marginBottom: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1.5',
                    color: '#374948',
                  }}
                >
                  21 Jan 22
                </h6>
                <p style={{ fontWeight: '400' }}>Ex Date</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Events;
