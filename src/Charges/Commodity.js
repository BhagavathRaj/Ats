import React from 'react';
import './Charges.css';
const Commodity = () => {
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
              <td className="text-left">Brokerage</td>

              <td className="text-left">0.01% of trade value</td>
              <td className="text-left">₹10 per lot</td>
            </tr>
            <tr>
              <td className="text-left">CTT</td>

              <td className="text-left">0.01% on sell side (Non -Agri) </td>
              <td className="text-left">0.05% on sellside (onpremium)</td>
            </tr>
            <tr>
              <td className="text-left">Exchange Txn Charge</td>

              <td className="text-left">0.0026% on turnover</td>
              <td className="text-left">NSE: 0.053% on premium value</td>
            </tr>

            <tr>
              <td className="text-left">GST</td>

              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges)
              </td>
              <td className="text-left">N0 Charges</td>
            </tr>
            <tr>
              <td className="text-left">SEBI Charges</td>

              <td className="text-left">₹20/crore</td>
              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges)
              </td>
            </tr>

            <tr>
              <td className="text-left">Stamp Duty</td>

              <td className="text-left">0.002 % of trade value (Buy Side)</td>
              <td className="text-left">0.003 % on premium value (BuySide)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commodity;
