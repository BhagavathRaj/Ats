import React from 'react';
import './Charges.css';
const OtherCharges = () => {
  return (
    <div style={{ transition: 'opacity .15s linear' }}>
      <p>
        <b>Opening Charges</b>
      </p>
      <p>
        Please note that we don’t charge any amount for the account opening
        process but other charges are applicable, list of which are as follows
      </p>
      <ul className="othercharges-list">
        <li>
          <p>Signing of Power Of Attorney (POA) - ₹50</p>
        </li>

        <li>
          <p> KRA Registration - ₹50</p>
        </li>
      </ul>
      <p>
        <b> Account Maintenance Charges (AMC) </b>
      </p>
      <ul className="othercharges-list">
        <li>
          <p>For Individual Client - ₹0</p>
        </li>

        <li>
          <p>
            {' '}
            Other than Individual (e.g., HUF, Partnership firm, Company, etc.) -
            ₹1000 p.a. + GST charged on a quarterly basis
          </p>
        </li>
        <li>
          <p>For NRIs - ₹500 + GST charged on a quarterly basis</p>
        </li>
      </ul>
      <p>
        <b>Pledging Charges</b>
      </p>

      <ul className="othercharges-list">
        <li>
          <p> Margin Pledge/ Unpledge - ₹20 + ₹12 per request (CDSL Charges)</p>
        </li>

        <li>
          <p> Margin Repledge - ₹20/- (CDSL charges)</p>
        </li>
      </ul>
      <p>
        <b>Other Charges</b>
      </p>
      <ul className="othercharges-list">
        <li>
          <p>
            {' '}
            Transaction Charges (Market Trades): Buy-side - ₹0 Sell-side - ₹8 +
            ₹5.50 (CDSL Charges)
          </p>
        </li>

        <li>
          <p>
            {' '}
            Transaction Charges (Off-Market Trades): Buy-Side - ₹0 Sell-Side -
            0.03% of transaction value or ₹25 (whichever is higher)
          </p>
        </li>
        <li>
          <p>
            Dematerialisation - ₹150.00 per certificate + Actual courier charges
            (if any)
          </p>
        </li>
        <li>
          <p>
            {' '}
            Rematerilisation - ₹150.00 per certificate + CDSL Charges + Actual
            courier charges (if any)
          </p>
        </li>
        <li>
          <p>
            {' '}
            Physical CMR Request - ₹20 per request + Actual courier charges
          </p>
        </li>
        <li>
          <p>
            Physical Contract Note - ₹20 per request + Actual courier charges
          </p>
        </li>
        <li>
          <p>
            {' '}
            Physical Ledger/ P&L report/ Statement of Capital Gain - ₹50 per
            request + Actual Courier Charges
          </p>
        </li>
        <li>
          <p> Cheques Bounce Charges: ₹350</p>
        </li>
        <li>
          <p> First Delivery Instruction book: Free (10 Leaves)</p>
        </li>
        <li>
          <p>First Delivery Instruction book: Free (10 Leaves)</p>
        </li>
        <li>
          <p>Every Additional booklet (10 Leaves): ₹100 </p>
        </li>
      </ul>
      <p>
        <b>Charges that we have made Zero</b>
      </p>
      <ul className="othercharges-list">
        <li>
          <p>Call and Trade Charges - ₹0</p>
        </li>

        <li>
          <p> Auto Squareoff Charges - ₹0</p>
        </li>
        <li>
          <p>Corporate Action Charges - ₹0</p>
        </li>
        <li>
          <p>Payment Gateway Charges - ₹0</p>
        </li>
        <li>
          <p> Offline Account Opening Charges - ₹0 </p>
        </li>
        <li>
          <p>Periodical/ Adhoc Statement Request by email - ₹0</p>
        </li>
        <li>
          <p> Delay Payment Charges - 0% per annum </p>
        </li>
      </ul>
    </div>
  );
};

export default OtherCharges;
