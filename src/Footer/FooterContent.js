import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import './Footer.css';
import { useNavigate } from 'react-router';

const FooterContent = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        position: 'relative',
        top: '70px',
      }}
    >
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="menu-row">
                <ul
                  style={{ listStyle: 'none', margin: '0px', padding: '0px' }}
                >
                  <li>
                    <h4 className="footer-title">About Us</h4>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() =>
                      window.open(
                        'https://adityatrading.in/media/KMP/Key-Managerial-Personnel-ATS.pdf',
                        '_blank'
                      )
                    }
                  >
                    <p>Key Managerial Personnel</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/investment-philosophy/')}
                  >
                    <p>Investment Philosophy</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/bank-account-details/')}
                  >
                    <p>Registered Bank Details</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://adityatrading.greythr.com/login.do');
                    }}
                  >
                    <p>Greytip</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://neuron.adityatrading.in/');
                    }}
                  >
                    <p>Neuron</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/careers/')}
                  >
                    <p>Careers</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/branches/')}
                  >
                    <p>Branches</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/contactus/')}
                  >
                    <p>Contact us</p>
                  </li>
                  <li>
                    <h4 className="footer-title">Investor Charter</h4>
                  </li>
                  <li className="hover-para">
                    <p>- DPs</p>
                  </li>
                  <li className="hover-para">
                    <p>- Stock Broker</p>
                  </li>
                  <li>
                    <h4 className="footer-title">Monthly Disclosure</h4>
                  </li>
                  <li className="hover-para">
                    <p>- DPs</p>
                  </li>
                  <li className="hover-para">
                    <p>- Stock Broker</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="menu-row">
                <ul
                  style={{ listStyle: 'none', margin: '0px', padding: '0px' }}
                >
                  <li>
                    <h4 className="footer-title">Research</h4>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/')}
                  >
                    <p>Campaign Login</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/')}
                  >
                    <p>Knowledge Center</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/share-market-news/')}
                  >
                    <p>Daily Morning Reports</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/')}
                  >
                    <p>Company Reports</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/')}
                  >
                    <p>Sector Reports</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/')}
                  >
                    <p>Commodity Reports</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/')}
                  >
                    <p>IPO Reports</p>
                  </li>
                  <li>
                    <h4 className="footer-title">Other Reports</h4>
                  </li>
                  <li className="hover-para">
                    <p>Posts</p>
                  </li>
                  <li className="hover-para">
                    <p>Mutual Funds</p>
                  </li>
                  <li>
                    <h4 className="footer-title">FAQ’s</h4>
                  </li>
                  <li className="hover-para">
                    <p>Circulars</p>
                  </li>
                  <li className="hover-para">
                    <p>Analyst Opinions</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="menu-row">
                <ul
                  style={{ listStyle: 'none', margin: '0px', padding: '0px' }}
                >
                  <li>
                    <h4 className="footer-title">Investor Corner</h4>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() =>
                      window.open('http://pg.adityatrading.com/WebClient/')
                    }
                  >
                    <p>Back Office Login</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() =>
                      handleNavigation('/account-opening-process/')
                    }
                  >
                    <p>Account Opening Process</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/investment-grievance/')}
                  >
                    <p>Investors Grievance</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() =>
                      window.open('https://adityatrading.in/static/download/')
                    }
                  >
                    <p>XTS Terminal Download</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/form-center-resources/')}
                  >
                    <p>Form Center/ Resources</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/kyc-checklist/')}
                  >
                    <p>KYC Checklist</p>
                  </li>
                  <li className="hover-para">
                    <p>Rights and Obligations</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() =>
                      window.open(
                        'https://adityatrading.in/media/riskdisclosure/Risk-Disclosure-Document-ATS.pdf'
                      )
                    }
                  >
                    <p>Risk Disclosure Document</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/ats-policy/')}
                  >
                    <p>ATS Policy</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() =>
                      window.open(
                        'https://adityatrading.in/media/authorized-persons-details/ATS-AP.pdf'
                      )
                    }
                  >
                    <p>Authorized Persons Details</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/how-to-file-complaint/')}
                  >
                    <p>How to file a complaint</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="menu-row">
                <ul
                  style={{ listStyle: 'none', margin: '0px', padding: '0px' }}
                >
                  <li>
                    <h4 className="footer-title">Markets</h4>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://nseindia.com/');
                    }}
                  >
                    <p>NSE</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('http://www.bseindia.com/');
                    }}
                  >
                    <p>BSE</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://www.mcxindia.com/');
                    }}
                  >
                    <p>MCX</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('http://www.sebi.gov.in/');
                    }}
                  >
                    <p>SEBI</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://scores.sebi.gov.in/');
                    }}
                  >
                    <p>SCORES</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://www.cdslindia.com/');
                    }}
                  >
                    <p>CDSL</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => handleNavigation('/holiday-calendar/')}
                  >
                    <p>Market Holidays</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open(
                        'https://evoting.cdslindia.com/Evoting/EvotingLogin'
                      );
                    }}
                  >
                    <p>CDSL e-Voting</p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://smartodr.in/login');
                    }}
                  >
                    <p>ODR Portal</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="menu-row">
                <ul
                  style={{ listStyle: 'none', margin: '0px', padding: '0px' }}
                >
                  <li>
                    <h4 className="footer-title">Head Office</h4>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('https://goo.gl/maps/7A41Dv4QhSaTWa5u6');
                    }}
                  >
                    <p>
                      ATS Share Brokers Pvt Ltd, 2gethr, 1st Floor, Tower B,
                      Mantri Commercio, Kariyamana Agraharam, Bellandur
                      Bengaluru- 560 103.
                    </p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('tel:+917667273344');
                    }}
                  >
                    <p>
                      <CallIcon sx={{ width: '15px', height: '15px' }} /> +91
                      766 727 3344
                    </p>
                  </li>
                  <li
                    className="hover-para"
                    onClick={() => {
                      window.open('mailto:support@adityatrading.com');
                    }}
                  >
                    <p>
                      <EmailIcon sx={{ width: '15px', height: '15px' }} />{' '}
                      support@adityatrading.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-content-heading">
              <div className="footer-content">
                <p>
                  ATS is India’s Most Preferred & Trusted Financial Services
                  Company with more than 1 Lakh Satisfied Clients who enjoy the
                  service from 800+ Locations, backed by 24x7 Expert Support and
                  offers the Lowest Brokerage in the market. ATS Share Brokers
                  Pvt.Ltd. is an Authorised Member of NSE, BSE, MCX, MCX-SX and
                  NCDEX. We provide one of the best investment and online
                  trading platforms to our clients which runs on all platforms
                  including web, mobile and so on. To know more you’ll have to
                  experience our services. We have made trading easy to our
                  customers in such a way that our customers can trade anywhere,
                  anytime.
                </p>
                <p>
                  ATS: CDSL SEBI- Registration Number-IN-DP-CDSL-656-2012 | DP
                  ID- 12074300 | BSE Membership Code-6481| BSE SEBI Registration
                  Number- Capital Market -INB011384030 | Derivatives-
                  INF011384030 | NSE Membership Code-13840 | NSE SEBI
                  Registration Number – Capital Market –INB231384034 |
                  Derivatives- INF231384034 Currency Market-INE231384034 |
                  MCX-SX Membership Code- 73800 | MCX-SX SEBI Registration
                  Number -Currency Market-INE261384031| ATS: MCX Membership Code
                  : 10795 | FMC Code: MCX/TCM/CORP/0039 | NCDEX Membership Code:
                  00278 | FMC Registration Code: NCDEX/TCM/CORP/0322.
                </p>
                <p>
                  The Stock Exchange, Mumbai is not in any manner answerable,
                  responsible or liable to any person or persons for any acts of
                  omission or commission, errors, mistakes and/or violation,
                  actual or perceived, by us or our partners, agents, associates
                  etc., of any of the Rules, Regulations, Bye-laws of the Stock
                  Exchange, Mumbai, SEBI Act or any other laws in force from
                  time to time. The Stock Exchange, Mumbai is not answerable,
                  responsible or liable for any information on this Website or
                  for any services rendered by our employees, our servants, and
                  us.
                </p>
                <p>
                  No need to issue cheques by investors while subscribing to
                  IPO. Just write the bank account number and sign in the
                  application form to authorise your bank to make payment in
                  case of allotment. No worries for refund as the money remains
                  in investor's account.
                </p>
                <p>
                  KYC is one time exercise while dealing in securities markets -
                  once KYC is done through a SEBI registered intermediary
                  (broker, DP, Mutual Fund etc.), you need not undergo the same
                  process again when you approach another intermediary
                </p>
                <p>
                  "Attention investors: 1) Stock brokers can accept securities
                  as margins from clients only by way of pledge in the
                  depository system w.e.f September 01, 2020. 2) Update your
                  e-mail and phone number with your stock broker / depository
                  participant and receive OTP directly from depository on your
                  e-mail and/or mobile number to create pledge. 3) Check your
                  securities / MF / bonds in the consolidated account statement
                  issued by NSDL/CDSL every month.......... Issued in the
                  interest of Investors"
                </p>
                <p>
                  "Prevent unauthorised transactions in your account. Update
                  your mobile numbers/email IDs with your stock brokers. Receive
                  information of your transactions directly from Exchange on
                  your mobile/email at the end of the day. Issued in the
                  interest of investors. KYC is one time exercise while dealing
                  in securities markets - once KYC is done through a SEBI
                  registered intermediary (broker, DP, Mutual Fund etc.), you
                  need not undergo the same process again when you approach
                  another intermediary." Dear Investor, if you are subscribing
                  to an IPO, there is no need to issue a cheque. Please write
                  the Bank account number and sign the IPO application form to
                  authorize your bank to make payment in case of allotment. In
                  case of non allotment the funds will remain in your bank
                  account. As a business we don't give stock tips, and have not
                  authorized anyone to trade on behalf of others. If you find
                  anyone claiming to be part of ATS and offering such services,
                  please create a{' '}
                </p>
                <p>
                  <u>Registered Office Address:</u> ATS Share Brokers Pvt Ltd,
                  62/6871, Shop No. A11, Jos Annex Building, 4th Floor, Jos
                  Junction, M.G. Road, Cochin, Ernakulam,682016 Tel.
                  <a style={{ color: '#34a853' }} href="callto:+91-7667273344">
                    +91-7667273344
                  </a>
                  , Email id.
                  <a
                    style={{ color: '#34a853' }}
                    href="mailto:support@adityatrading.com"
                  >
                    support@adityatrading.com
                  </a>
                </p>
                <p>
                  <u>Correspondence Address:</u> ATS Share Brokers Pvt Ltd, 1st
                  Floor, Tower B(2gethr), Mantri Commercio, Outer Ring Road,
                  Near Sakra World Hospital, Bellandur, Bangalore, Karnataka,
                  560103. Tel.
                  <a style={{ color: '#34a853' }} href="callto:+91-7667273344">
                    +91-7667273344
                  </a>
                  , Email id.
                  <a
                    style={{ color: '#34a853' }}
                    href="mailto:support@adityatrading.com"
                  >
                    support@adityatrading.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="rowfoot">
            <div>
              <p className="para">
                <PublicIcon /> English (India)
              </p>
            </div>
            <div className="last">
              <ul className="row">
                <li>Disclaimer</li>
                <li>Sitemap</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
                <li>Theft Identity</li>
              </ul>
            </div>
            <div className="icn">
              <ul className="row">
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <TelegramIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterContent;
