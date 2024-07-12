import React from 'react';
import './Charges.css';
const Currency = () => {
  return (
    <div style={{ transition: 'opacity .15s linear' }}>
      <div className="chargeTableresponsive">
        <table className="table-borderless">
          <thead>
            <tr>
              <th className="text-left">Particular</th>

              <th className="text-left">Futures</th>
              <th className="text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">STT</td>

              <td className="text-left">No STT</td>
              <td className="text-left">No STT</td>
            </tr>
            <tr>
              <td className="text-left">Exchange Txn Charge</td>

              <td className="text-left">NSE: 0.0009% of the trade value </td>
              <td className="text-left">NSE: 0.035% of the trade value</td>
            </tr>
            <tr>
              <td className="text-left"> </td>

              <td className="text-left">BSE: 0.00022% of trade value</td>
              <td className="text-left">BSE: 0.001% of trade value</td>
            </tr>

            <tr>
              <td className="text-left">GST</td>

              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges)
              </td>
              <td className="text-left">
                {' '}
                18% on (Brokerage + Exchange Txn Charges)
              </td>
            </tr>
            <tr>
              <td className="text-left">SEBI Charges</td>

              <td className="text-left">₹20/crore</td>
              <td className="text-left">₹20/crore</td>
            </tr>

            <tr>
              <td className="text-left">Stamp Duty</td>

              <td className="text-left">0.002% of trade value(Buy Side)</td>
              <td className="text-left">0.0001% of trade value(Buy Side)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currency;
