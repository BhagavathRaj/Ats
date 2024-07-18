import React, { useEffect } from 'react';
import LandingPage from '../LandingPage';
import FooterContent from '../Footer/FooterContent';
import '../CreateAlert/CreateAlert.css';
import './Contact.css';
import CallIcon from '@mui/icons-material/Call';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCreateTicketNavigate = () => {
    navigate('/createTicket/');
  };
  return (
    <div>
      <LandingPage />
      <div style={{ position: 'relative' }}>
        <div>
          <div
            style={{
              height: 'auto',
              padding: isSmallScreen ? '10px' : '20px',
            }}
            className="content-page"
          >
            <div
              className="container"
              style={{
                top: '70px',
                margin: isSmallScreen ? '10px' : '20px',
                fontSize: isSmallScreen ? '14px' : '16px',
              }}
            >
              <div className="rowsmb">
                <div className="lgContact">
                  <h2
                    style={{
                      fontSize: '22px',
                      borderBottom: '1px solid #ededed',
                      textAlign: 'center',
                    }}
                  >
                    Contact Us
                  </h2>
                </div>
              </div>
              <div className="rowsmb">
                <div className="smal25">
                  <div className="three">
                    <div className="contactsupportbox">
                      <h4>Support portal</h4>
                      <p>Have a query?</p>{' '}
                      <a
                        className="succesbtn"
                        style={{ textDecoration: 'none' }}
                        onClick={handleCreateTicketNavigate}
                      >
                        Create Ticket
                      </a>
                    </div>
                  </div>
                </div>

                <div className="smal25">
                  <div className="three">
                    <h5>New account opening</h5>
                    <p className="text-gry">
                      Monday – Friday <br />
                      9:00 AM - 7:00 PM
                    </p>{' '}
                    <p className="btm5">
                      <span>
                        {' '}
                        <CallIcon />
                      </span>
                      +91 7667273344
                    </p>
                    <p className="phonelink">(PRESS 3 FOR ACCOUNT OPENING)</p>
                  </div>
                </div>
                <div className="smal25">
                  <div className="three">
                    <h5>Support</h5>
                    <p className="text-gry">
                      Monday – Friday <br />
                      8:30 AM - 5:00 PM
                    </p>{' '}
                    <p className="btm5">
                      <span>
                        {' '}
                        <CallIcon />
                      </span>
                      +91 7667273344
                    </p>
                    <p className="phonelink">(PRESS 2 FOR SUPPORT)</p>
                  </div>
                </div>
                <div className="smal25">
                  <div className="three">
                    <h5>Call & trade</h5>
                    <p className="text-gry">
                      Monday – Friday <br />
                      9:00 AM - 11:30 PM
                    </p>{' '}
                    <p className="btm5">
                      <span>
                        {' '}
                        <CallIcon />
                      </span>
                      +91 7667273344
                    </p>
                    <p className="phonelink">(PRESS 1 FOR CALL & TRADE)</p>
                  </div>
                </div>
              </div>
              <div className="rowsmb">
                <div className="lgContact">
                  <h2
                    style={{
                      fontSize: '22px',
                      borderBottom: ' 1px solid #ededed',
                      textAlign: 'center',
                    }}
                  ></h2>
                </div>
              </div>
              <div className="rowsmb">
                <div className="hfContact">
                  <h2>
                    <span className="contact-blg-txt">
                      We are based in <br />
                      Bengaluru
                    </span>
                    <br />
                    <img
                      className="contact-bengaluru"
                      src="https://adityatrading.in/static/images/social/contact-bengaluru.svg"
                    />
                  </h2>
                </div>
                <div className="hfContact">
                  <h5>HQ</h5>
                  <p className="text-gry">
                    ATS Share Brokers Pvt Ltd, 2gethr,
                    <br />
                    1st Floor, Tower B, Mantri Commercio,
                    <br />
                    Kariyamana Agraharam,Bellandur
                    <br />
                    Bengaluru - 560103
                  </p>
                </div>
              </div>
              <div className="rowsmb">
                <div className="lgContact">
                  <h2
                    style={{
                      fontSize: '22px',
                      borderBottom: ' 1px solid #ededed',
                      textAlign: 'center',
                    }}
                  ></h2>
                </div>
              </div>
              <div className="rowsmb">
                <div className="lg3">
                  <h2 className="mt1">
                    <span className="contact-blg-txt">
                      Located 5+ branches and
                      <br />
                      offices in India
                    </span>
                  </h2>
                </div>
                <div className="mgimg">
                  <img
                    style={{
                      width: '300px',
                      verticalAlign: 'middle',
                      borderStyle: 'none',
                    }}
                    src="https://adityatrading.in/static/images/social/India-Map.png"
                  />
                </div>
              </div>
              <div className="rowsmb">
                <div className="lgContact">
                  <p>
                    Investor Grievance Escalation Matrix for NSE, BSE, MCX, CDSL
                    and NSDL
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{ borderCollapse: 'collapse' }}
                      className="bankTable"
                    >
                      <thead
                        style={{
                          backgroundColor: '#34a853',
                          borderCollapse: 'collapse',
                        }}
                      >
                        <tr>
                          <th
                            style={{
                              padding: '8px',
                              backgroundColor: '#34a853',
                              color: 'white',
                            }}
                          >
                            Level
                          </th>
                          <th
                            style={{
                              padding: '8px',
                              backgroundColor: '#34a853',
                              color: 'white',
                            }}
                          >
                            Contact Person
                          </th>
                          <th
                            style={{
                              padding: '8px',
                              backgroundColor: '#34a853',
                              color: 'white',
                            }}
                          >
                            Position
                          </th>
                          <th
                            style={{
                              padding: '8px',
                              backgroundColor: '#34a853',
                              color: 'white',
                            }}
                          >
                            Mail ID
                          </th>
                          <th
                            style={{
                              padding: '8px',
                              backgroundColor: '#34a853',
                              color: 'white',
                            }}
                          >
                            Contact No
                          </th>
                          <th
                            style={{
                              padding: '8px',
                              backgroundColor: '#34a853',
                              color: 'white',
                            }}
                          >
                            Availability
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
                            {' '}
                            Level 1
                          </td>
                          <td>Nandish</td>
                          <td>Client Servicing</td>
                          <td>nandish@adityatrading.com</td>
                          <td>+91 9611707986</td>
                          <td>08.00 AM to 06.00 PM</td>
                        </tr>
                        <tr>
                          <td>Akashatha</td>
                          <td>Client Servicing</td>
                          <td>akshatha@adityatrading.com</td>
                          <td>+91 7760346585 </td>
                          <td>02.00 PM to 12.00 AM</td>
                        </tr>
                        <tr>
                          <td>Level 2</td>
                          <td>Manu H L</td>
                          <td>Head of Client Servicing</td>
                          <td>manu@adityatrading.com</td>
                          <td>+91 6361069124 </td>
                          <td>08.00 AM to 06.00 PM</td>
                        </tr>
                        <tr>
                          <td>Level 3</td>
                          <td>Shreyas</td>
                          <td>Compliance Officer</td>
                          <td>shreyas@adityatrading.com</td>
                          <td>+91 8880053344 </td>
                          <td>09.00 AM to 07.00 PM</td>
                        </tr>
                        <tr>
                          <td>Level 4 </td>
                          <td>Gopalakrishnan Subramaniam</td>
                          <td>Head of Operations</td>
                          <td>gopalakrishnan@adityatrading.com</td>
                          <td>+91 8508094409</td>
                          <td>08.00 AM to 06.00 PM</td>
                        </tr>
                        <tr>
                          <td>Level 5</td>
                          <td>Vikas Jain</td>
                          <td>Managing Director</td>
                          <td>vikasjain@adityatrading.com</td>
                          <td>+91 7676004444 </td>
                          <td>10.00 AM to 05.00 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p
                    style={{ top: '70px', position: 'relative' }}
                    className="pgrey"
                  >
                    In absence of response/complaint not addressed to your
                    satisfaction, you may lodge a complaint with SEBI at
                    <a
                      href="https://scores.gov.in/scores/Welcome.html"
                      target="_blank"
                    >
                      https://scores.gov.in/scores/Welcome.html
                    </a>
                    or Exchange/Depository at
                  </p>
                  <p className="pgrey">
                    NSE –
                    <a
                      href='href="https://investorhelpline.nseindia.com/NICEPLUS/"'
                      target="_blank"
                    >
                      https://investorhelpline.nseindia.com/NICEPLUS/{' '}
                    </a>{' '}
                  </p>
                  <p className="pgrey">
                    BSE –
                    <a
                      href="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx"
                      target="_blank"
                    >
                      https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx
                    </a>
                  </p>
                  <p className="pgrey">
                    MCX –
                    <a
                      href="https://www.mcxindia.com/Investor-Services"
                      target="_blank"
                    >
                      https://www.mcxindia.com/Investor-Services
                    </a>
                  </p>

                  <p className="pgrey">
                    CDSL –
                    <a
                      href="https://www.cdslindia.com/Footer/grievances.aspx"
                      target="_blank"
                    >
                      https://www.cdslindia.com/Footer/grievances.aspx
                    </a>
                  </p>

                  <p className="pgrey">
                    Please quote your Service Ticket / Complaint Ref No. while
                    raising your complaint at SEBI SCORES / Exchange/ Depository
                    portal.
                  </p>
                  <p className="pgrey">
                    <b>
                      For Registering the complaint with SEBI SCORES, please
                      follow these -{' '}
                    </b>
                  </p>
                  <p className="pgrey">
                    "Filing Complaints on SCORES- Easy & quick
                  </p>
                  <ul className="icl">
                    <li>Register on SCORES portal</li>
                    <li>Mandatory details for filing complaints on SCORES:</li>
                    <li>
                      Benefits:
                      <ul>
                        <li>Effective Communication</li>
                        <li>Speedy redressal of the grievances"</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Grid
        item
        sx={{ top: '70px', position: 'relative' }}
        lg={12}
        xs={12}
        md={6}
      >
        <div style={{ minWidth: '550px' }}>
          <FooterContent />
        </div>
      </Grid>
    </div>
  );
};

export default Contact;
