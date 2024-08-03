import React from 'react';
import './Analyst.css';
const Intraday = () => {
  return (
    <div className="table-intra">
      <table className="tabint">
        <thead>
          <tr>
            <th>Rec.Date</th>
            <th>Name</th>
            <th>Action</th>
            <th>CMP</th>
            <th>Entry Price</th>
            <th>Stop Loss</th>
            <th>Target</th>
            <th style={{ textAlign: 'right' }}>Profit (%)</th>
            <th style={{ textAlign: 'right' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21 Aug 2022</td>
            <td>CYIENT LIMITED</td>
            <td>
              <p>
                <span className="btns">SELL</span>
              </p>
            </td>
            <td>
              <p className="gr" style={{ color: '#34a853!important' }}>
                851.65{' '}
              </p>
            </td>
            <td>850.00</td>
            <td>820.00</td>
            <td>895.00</td>
            <td style={{ textAlign: 'right' }}>5.79%</td>
            <td style={{ textAlign: 'right' }}>
              <p className="bl">Target Achieved</p>
            </td>
          </tr>
          <tr>
            <td>21 Aug 2022</td>
            <td>WIPRO LIMITED</td>
            <td>
              <p>
                <span className="red">BUY</span>
              </p>
            </td>
            <td>
              <p className="rd" style={{ color: '#34a853!important' }}>
                851.65{' '}
              </p>
            </td>
            <td>850.00</td>
            <td>820.00</td>
            <td>895.00</td>
            <td style={{ textAlign: 'right' }}>5.79%</td>
            <td style={{ textAlign: 'right' }}>
              <p className="grn">Open</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Intraday;
