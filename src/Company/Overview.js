import React from 'react';
import './Company.css';
const Overview = () => {
  return (
    <div style={{ marginLeft: '10px' }}>
      <div>
        <h5>Market Depth</h5>
      </div>
      <div>
        <table
          className="tbl"
          style={{ color: '#212529', marginBottom: '16px' }}
        >
          <thead>
            <tr>
              <th
                style={{ fontSize: '12px', textAlign: 'left', padding: '7px' }}
              >
                BID
              </th>
              <th
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  padding: '7px',
                }}
              >
                ORDERS
              </th>
              <th
                style={{ fontSize: '12px', textAlign: 'right', padding: '7px' }}
              >
                QTY
              </th>
              <th></th>
              <th
                style={{ fontSize: '12px', textAlign: 'left', padding: '7px' }}
              >
                BID
              </th>
              <th
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  padding: '7px',
                }}
              >
                ORDERS
              </th>
              <th
                style={{ fontSize: '12px', textAlign: 'right', padding: '7px' }}
              >
                QTY
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="greenText">1862</td>
              <td className="greenTextCenter">4</td>
              <td className="greenTextRight">1000</td>
              <td></td>
              <td className="redText">1862.15</td>
              <td className="redTextcenter">1</td>
              <td className="redTextright">5</td>
            </tr>
            <tr>
              <td className="greenText">1862</td>
              <td className="greenTextCenter">4</td>
              <td className="greenTextRight">470</td>
              <td></td>
              <td className="redText">1862.15</td>
              <td className="redTextcenter">1</td>
              <td className="redTextright">5</td>
            </tr>
            <tr>
              <td className="greenText">1862</td>
              <td className="greenTextCenter">4</td>
              <td className="greenTextRight">470</td>
              <td></td>
              <td className="redText">1862.15</td>
              <td className="redTextcenter">1</td>
              <td className="redTextright">5</td>
            </tr>
            <tr>
              <td className="greenText">1862</td>
              <td className="greenTextCenter">4</td>
              <td className="greenTextRight">470</td>
              <td></td>
              <td className="redText">1862.15</td>
              <td className="redTextcenter">1</td>
              <td className="redTextright">5</td>
            </tr>
            <tr>
              <td className="greenText">1862</td>
              <td className="greenTextCenter">4</td>
              <td className="greenTextRight">470</td>
              <td></td>
              <td className="redText">1862.15</td>
              <td className="redTextcenter">1</td>
              <td className="redTextright">5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
