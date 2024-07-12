import React from 'react';
import './ElementCalculator.css';
import DangerButton from '../Buttons/Danger';
import SuccessButton from '../Buttons/Success';
import { Button } from '@mui/material';

const PremiumCalculator = () => {
  return (
    <div>
      <div className="column-full">
        <h6>Premium Calculator</h6>
      </div>
      <div className="column-full">
        <table
          className="tables"
          style={{
            width: '100%',
            marginBottom: '16px',
            color: '#212529',
            borderCollapse: 'collapse',
          }}
        >
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Search for stock"
                  className="formcontroll"
                  autoComplete="off"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Volatality(%)"
                  className="formcontroll"
                  autoComplete="off"
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Interest(%)"
                  className="formcontroll"
                  autoComplete="off"
                />
              </td>
              <td style={{ position: 'relative', left: '20px' }}>
                <DangerButton name="Reset" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="calc">
          <SuccessButton name="Calculate" />
        </div>
        <div style={{ borderRadius: '4px', border: '1px solid #b9b8b8' }}>
          <div
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              display: 'flex',
            }}
          >
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
              Option Values
            </h6>
            <div
              style={{
                color: '#34a853',
                fontSize: 'medium',
                paddingRight: '10px',
              }}
            >
              Download
            </div>
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
            <div>
              <table
                className="boxtable"
                style={{ width: '100%', borderCollapse: 'collapse' }}
              >
                <thead style={{ color: '##707070', fontWeight: '400' }}>
                  <tr>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      FairValue
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      {' '}
                      Delta
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      {' '}
                      Gamma
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      Theta
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      {' '}
                      Vega
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      {' '}
                      Rho
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      {' '}
                      CMP
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                      }}
                    >
                      {' '}
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      {' '}
                      <SuccessButton name="Proceed" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCalculator;
