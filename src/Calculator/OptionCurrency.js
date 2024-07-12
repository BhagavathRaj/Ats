import React from 'react';

const OptionCurrency = () => {
  return (
    <div className="tab-content">
      <div className="fade">
        <div>
          <table className="tablebrokerage">
            <tbody>
              <tr>
                <td className="textleft">Buy Value</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">Sell Value</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft"> Point for BreakEven</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">
                  <h5>Net P&L</h5>
                </td>
                <td className="textright">
                  <h5>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </h5>
                </td>
              </tr>
              <tr>
                <td className="textleft">Turn Over</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">Brokerage</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">STT Total</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">Exchange Txn Charges</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>

              <tr>
                <td className="textleft">GST</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">SEBI Charges</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">Stamp Duty</td>
                <td className="textright">
                  <b>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </b>
                </td>
              </tr>
              <tr>
                <td className="textleft">
                  <h5>Total Tax & Charges</h5>
                </td>
                <td className="textright">
                  <h5>
                    <span className="roboto">₹</span>
                    <span>0.00</span>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OptionCurrency;
