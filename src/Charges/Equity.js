import React from 'react';
import './Charges.css';
const Equity = () => {
  return (
    <div style={{ transition: 'opacity .15s linear' }}>
      <div className="chargeTableresponsive">
        <table className="table-borderless">
          <thead>
            <tr>
              <th className="text-left">Particular</th>
              <th className="text-left">Intraday</th>
              <th className="text-left">Delivery</th>
              <th className="text-left">Futures</th>
              <th className="text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">Brokerage</td>
              <td className="text-left">₹0</td>
              <td className="text-left">₹10 per lot</td>
              <td className="text-left">₹0</td>
              <td className="text-left">0.01% of tradevalue</td>
            </tr>
            <tr>
              <td className="text-left">STT</td>
              <td className="text-left">0.025% only on sell side</td>
              <td className="text-left">0.1% on buy & sell</td>
              <td className="text-left">0.01% on sellside </td>
              <td className="text-left">0.05% on sellside (onpremium)</td>
            </tr>
            <tr>
              <td className="text-left">Exchange Txn Charge</td>
              <td className="text-left">NSE: 0.00345% of trade value</td>
              <td className="text-left">NSE: 0.00345% of trade value</td>
              <td className="text-left">NSE: 0.05% of trade value</td>
              <td className="text-left">NSE: 0.053% on premium value</td>
            </tr>
            <tr>
              <td className="text-left"></td>
              <td className="text-left">BSE: 0.00345% of trade value</td>
              <td className="text-left">BSE: 0.00345% of trade value</td>
              <td className="text-left"></td>
              <td className="text-left"> </td>
            </tr>
            <tr>
              <td className="text-left">DP Charges</td>
              <td className="text-left">N0 Charges</td>
              <td className="text-left">₹15 per scriptonly on sellside</td>
              <td className="text-left">N0 Charges</td>
              <td className="text-left">N0 Charges</td>
            </tr>
            <tr>
              <td className="text-left">GST</td>
              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges)
              </td>
              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges + DP Charges)
              </td>
              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges)
              </td>
              <td className="text-left">
                18% on (Brokerage + Exchange Txn Charges)
              </td>
            </tr>
            <tr>
              <td className="text-left">SEBI Charges</td>
              <td className="text-left">₹20/crore</td>
              <td className="text-left">₹20/crore</td>
              <td className="text-left">₹20/crore</td>
              <td className="text-left">₹20/crore</td>
            </tr>
            <tr>
              <td className="text-left">Stamp Duty</td>
              <td className="text-left">0.015 % of trade value (Buy Side)</td>
              <td className="text-left">0.003 % of trade value (Buy Side)</td>
              <td className="text-left">0.002 % of trade value (Buy Side)</td>
              <td className="text-left">0.003 % on premium value (BuySide)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          STT on Exercised Options :
        </span>
        You will be charged STT @ 0.05% on sell-side on the premium amount, but
        if you carry out your option till expiry and if your in-the-money option
        gets exercised, then you will be charged 0.125% on the Entire Contract
        Value. The formula for STT on Exercised options on Expiry of Options =
        0.125% * (Strike price + Premium) * Quantity
      </p>
      <p>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          BTST Charges :
        </span>
        If a client has made a BTST trade, then brokerage will be charged as
        0.03% of turnover or ₹15 per transaction (whichever is higher)
      </p>
      <p>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          Stamp Charges :
        </span>
        Stamp charges is charged as per the Indian Stamp Act 1899 for
        transacting in instruments on the stock exchanges and depositories.
      </p>
    </div>
  );
};

export default Equity;
