import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import FooterContent from '../../Footer/FooterContent';
import './dp.css';
const Stockbroker = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LandingPage />
      <Box
        sx={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease-out 0s',
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', md: '80%' },
            top: '100px',
            position: 'relative',
            mx: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    padding: '10px',
                    fontWeight: '400',

                    color: '#131722',
                    fontSize: '20px',
                  }}
                >
                  Investor Charter Stock Broker
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <h5>Vision</h5>
              <p>
                To follow highest standards of ethics and compliances while
                facilitating the trading byclientsin securities in a fair and
                transparent manner, so as to contribute in creation of
                wealthforinvestors.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h5>Misson</h5>
              <ul>
                <li>
                  <p>
                    To provide high quality and dependable service through
                    innovation, capacity enhancement and use of technology.
                  </p>
                </li>
                <li>
                  <p>
                    To establish and maintain a relationship of trust and ethics
                    with the investors.
                  </p>
                </li>
                <li>
                  <p>
                    To observe highest standard of compliances and transparency.
                  </p>
                </li>
                <li>
                  <p>
                    To always keep ‘protection of investors’ interest’ as goal
                    while providing service.
                  </p>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <h5>Services provided to Investors</h5>
              <ul>
                <li>
                  <p>Execution of trades on behalf of investors.</p>
                </li>
                <li>
                  <p>Issuance of Contract Notes.</p>
                </li>
                <li>
                  <p>Issuance of intimations regarding margin due payments.</p>
                </li>
                <li>
                  <p>
                    Facilitate execution of early pay-in obligation
                    instructions.
                  </p>
                </li>
                <li>
                  <p>Settlement of client’s funds.</p>
                </li>
                <li>
                  <p>
                    Intimation of securities held in Client Unpaid Securities
                    Account (CUSA) Account.
                  </p>
                </li>
                <li>
                  <p>Issuance of retention statement of funds.</p>
                </li>
                <li>
                  <p>
                    Risk management systems to mitigate operational and market
                    risk.
                  </p>
                </li>
                <li>
                  <p>
                    Facilitate client profile changes in the system as
                    instructed by the client.
                  </p>
                </li>
                <li>
                  <p>
                    Information sharing with the client w.r.t. exchange
                    circulars.
                  </p>
                </li>
                <li>
                  <p>Redressal of Investor’s grievances.</p>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <h5>Rights of Investors</h5>
              <ul>
                <li>
                  <p>
                    Ask for and receive information from a firm about the work
                    history and backgroundof the person handling your account,
                    as well as information about the firmitself.
                  </p>
                </li>
                <li>
                  <p>
                    Receive complete information about the risks, obligations,
                    and costs of any investment before investing.
                  </p>
                </li>
                <li>
                  <p>
                    Receive recommendations consistent with your financial needs
                    and investment objectives.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    Receive a copy of all completed account forms and
                    agreements.
                  </p>
                </li>
                <li>
                  <p>
                    Receive account statements that are accurate and
                    understandable.
                  </p>
                </li>
                <li>
                  <p>
                    Understand the terms and conditions of transactions you
                    undertake.
                  </p>
                </li>
                <li>
                  <p>
                    Access your funds in a timely manner and receive information
                    about any restrictionsor limitations on access.
                  </p>
                </li>
                <li>
                  <p>
                    Receive complete information about maintenance or service
                    charges, transactionor redemption fees, and penalties.
                  </p>
                </li>
                <li>
                  <p>
                    Discuss your grievances with compliance officer of the firm
                    and receive prompt attention to and fair consideration of
                    your concerns.
                  </p>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <h5>Various activities of Stock Brokers with timelines </h5>

              <table className="dp-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Activities </th>
                    <th>Expected Timelines</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>KYC entered into KRA System and CKYCR </td>
                    <td>10 days of account opening</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Client Onboarding</td>
                    <td>Immediate, but not later than one week</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Order execution</td>
                    <td>
                      Immediate on receipt of order, but not later than the same
                      day
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <td>Allocation of Unique Client Code</td>
                    </td>
                    <td>Before trading</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      Copy of duly completed Client Registration Documents to
                      clients
                    </td>
                    <td>
                      7 days from the date of upload of Unique Client Code to
                      the Exchange by thetrading member
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Issuance of contract notes</td>
                    <td>24 hours of execution of trades</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Collection of upfront margin from client</td>
                    <td>Before initiation of trade</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      Issuance of intimations regarding other margin due
                      payments
                    </td>
                    <td>At the end of the T day</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Settlement of client funds</td>
                    <td>
                      30 days / 90 days for running account settlement (RAS) as
                      per the preferenceof client. If consent not given for RAS
                      - within 24 hours of pay-out
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      ‘Statement of Accounts’ for Funds, Securities and
                      Commodities
                    </td>
                    <td>
                      Weekly basis (Within four tradingdaysof Securities and
                      Commodities following week)
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      Issuance of retention statement of funds/commodities
                    </td>
                    <td>5 days from the date of settlement</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Issuance of Annual Global Statement</td>
                    <td>30 days from the end of the financial year</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Investor grievances redressal</td>
                    <td>30 days from the receipt of the complaint</td>
                  </tr>
                </tbody>
              </table>
              <h5>DOs and DON’Ts for Investors</h5>
              <table className="dp-table">
                <thead>
                  <tr>
                    <th>Dos</th>
                    <th>DON’Ts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Read all documents and conditions being agreed before
                      signing the account opening
                    </td>
                    <td>Do not deal with unregistered stockbroker.</td>
                  </tr>
                  <tr>
                    <td>
                      Receive a copy of KYC, copy of account opening documents
                      and Unique Client Code.
                    </td>
                    <td>
                      Do not forget to strike off blanks in your account opening
                      and KYC.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Read the product / operational framework / timelines
                      related to various Trading and Clearing & Settlement
                      processes.
                    </td>
                    <td>
                      Do not submit an incomplete account opening and KYC form.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Receive all information about brokerage, fees and other
                      charges levied.
                    </td>
                    <td>
                      Do not forget to inform any change in information linked
                      to trading account and obtain confirmation of updation in
                      the system.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Register your mobile number and email ID in your trading,
                      demat and bank accounts to get regular alerts on your
                      transactions.
                    </td>
                    <td>
                      Do not transfer funds, for the purposes of trading to
                      anyone other than a stock broker. No payment should be
                      made in name of employee of stock broker.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      If executed, receive a copy of Power of Attorney. However,
                      Power of Attorney is not a mandatory requirement as per
                      SEBI / Stock Exchanges. Before granting Power of Attorney,
                      carefully examine the scope and implications of powers
                      being granted.{' '}
                    </td>
                    <td>
                      Do not ignore any emails / SMSs received with regards to
                      trades done, from the Stock Exchange and raise a concern,
                      if discrepancy is observed.{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Receive contract notes for trades executed, showing
                      transaction price, brokerage, GST and STT etc. as
                      applicable, separately, within 24 hours of execution of
                      trades.
                    </td>
                    <td>
                      Do not opt for digital contracts, if not familiar with
                      computers.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Receive funds and securities / commodities on time within
                      24 hours from pay-out.
                    </td>
                    <td>Do not share trading password.</td>
                  </tr>
                  <tr>
                    <td>
                      Verify details of trades, contract notes and statement of
                      account and approach relevant authority for any
                      discrepancies. Verify trade details on the Exchange
                      websites from the trade verification facility provided by
                      the Exchanges.
                    </td>
                    <td>
                      Do not fall prey to fixed / guaranteed returns schemes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Receive statement of accounts periodically. If opted for
                      running account settlement, account has to be settled by
                      the stock broker as per the option given by the client (30
                      or 90days).
                    </td>
                    <td>
                      Do not fall prey to fraudsters sending emails and SMSs
                      luring to trade in stocks / securities promising huge
                      profits.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      In case of any grievances, approach stock broker or Stock
                      Exchange or SEBI for getting the same resolved within
                      prescribed timelines.
                    </td>
                    <td>
                      Do not follow herd mentality for investments. Seek expert
                      and professional advice for your investments.
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12}>
              <h5>Grievance Redressal Mechanism</h5>
              <p>
                {' '}
                <b>Level 1</b>
                Approach the Stock Broker at the designated Investor Grievance
                e-mail ID of the stock broker. The Stock Broker will strive to
                redress the grievance immediately, but not later than 30 days of
                the receipt of the grievance.
              </p>
              <p>
                <b>Level 2</b> Approach the Stock Exchange using the grievance
                mechanism mentioned at the website of the respective exchange.
              </p>
              <p>
                Complaints Resolution Process at Stock Exchange explained
                graphically{' '}
                <a
                  href="https://adityatrading.in/media/investorCharter/Grievance.pdf"
                  target="_blank"
                >
                  Link
                </a>
              </p>
            </Grid>

            <Grid item xs={12}>
              <h5>
                Timelines for complaint resolution process at Stock Exchanges
                against stock brokers
              </h5>
              <p>The Process of investor grievance redressal</p>
              <table className="dp-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Type of Activity</th>
                    <th>Timelines for activity</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Receipt of Complaint</td>
                    <td>Day of complaint (C Day).</td>
                  </tr>
                  <tr>
                    <td>2 </td>
                    <td>
                      Additional information sought from the investor, if any,
                      and provisionally forwarded to stock broker.
                    </td>
                    <td>C + 7 Working days.</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Registration of the complaint and forwarding to the stock
                      broker.
                    </td>
                    <td>C+8 Working Days i.e. T day.</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Amicable Resolution</td>
                    <td>T+15 Working Days.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      Refer to Grievance Redressal Committee (GRC), in case of
                      no amicable resolution.
                    </td>
                    <td>T+16 Working Days.</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Complete resolution process post GRC.</td>
                    <td>T+30 Working Days.</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      In case where the GRC Member requires additional
                      information, GRC order shall be completed within.
                    </td>
                    <td>T+45 Working Days.</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Implementation of GRC Order.</td>
                    <td>
                      On receipt of GRC Order, if the order is in favour of the
                      investor, debit the funds of the stock broker. Order for
                      debit is issued immediately or as per the directions given
                      in GRC order.
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      In case the stock broker is aggrieved by the GRC order,
                      will provide intention to avail arbitration
                    </td>
                    <td>Within 7 days from receipt of order</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      If intention from stock broker is received and the GRC
                      order amount is upto Rs.20 lakhs
                    </td>
                    <td>
                      Investor is eligible for interim relief from Investor
                      Protection Fund (IPF).The interim relief will be 50% of
                      the GRC order amount or Rs.2 lakhs whichever is less. The
                      same shall be provided after obtaining and Undertaking
                      from the investor.
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Stock Broker shall file for arbitration</td>
                    <td>Within 6 months from the date of GRC recommendation</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>
                      In case the stock broker does not file for arbitration
                      within 6 months
                    </td>
                    <td>
                      The GRC order amount shall be released to the investor
                      after adjusting the amount released as interim relief, if
                      any.
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12}>
              <h5>
                Handling of Investor’s claims / complaints in case of default of
                a Trading Member / Clearing Member (TM/CM)
              </h5>
              <h5>Default of TM/CM</h5>
              <p>
                Following steps are carried out by Stock Exchange for benefit of
                investor, in case stockbroker defaults:
              </p>
              <ul>
                <li>
                  <p>
                    Circular is issued to inform about declaration of Stock
                    Broker as Defaulter.
                  </p>
                </li>
                <li>
                  <p>
                    Information of defaulter stock broker is disseminated on
                    Stock Exchange website.
                  </p>
                </li>
                <li>
                  <p>
                    Information of defaulter stock broker is disseminated on
                    Stock Exchange website.
                  </p>
                </li>
                <li>
                  <p>
                    Public Notice is issued informing declaration of a stock
                    broker as defaulter andinviting claims within specified
                    period
                  </p>
                </li>
                <li>
                  <p>
                    Intimation to clients of defaulter stock brokers via emails
                    and SMS for facilitatinglodging of claims within the
                    specified period.{' '}
                  </p>
                </li>
              </ul>
              <p>
                Following information is available on Stock Exchange website for
                information of investors:
              </p>
              <ul>
                <li>
                  <p>
                    Norms for eligibility of claims for compensation from IPF
                  </p>
                </li>
                <li>
                  <p>
                    Claim form for lodging claim against defaulter stock broker.
                  </p>
                </li>
                <li>
                  <p>
                    FAQ on processing of investors’ claims against Defaulter
                    stock broker.
                  </p>
                </li>
                <li>
                  <p>Provision to check online status of client’s claim.</p>
                </li>
              </ul>
              <p>
                {' '}
                <b>Level 3</b>
                The complaint not redressed at Stock Broker / Stock Exchange
                level, maybelodged with SEBI on SCORES (a web based centralized
                grievance redressal systemof SEBI) @
                https://scores.gov.in/scores/Welcome.html
              </p>
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default Stockbroker;
