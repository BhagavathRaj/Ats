import React, { useEffect, useState } from 'react';
import LandingPage from '../../LandingPage';
import FooterContent from '../../Footer/FooterContent';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GreenButton from '../../Buttons/GreenButton';
import DangerButton from '../../Buttons/Danger';
// import './Analyst.css';
// import SuccessButton from '../../Buttons/Success';
// import './Equity';
// import './Commodity';
// import './Currency';
// import './F0';
// import Equity from './Equity';
// import FO from '../../Calculator/F&O';
// import Commodity from './Commodity';
// import Currency from './Currency';
const Dps = () => {
  //   const [selectedComponent, setSelectedComponent] = useState('Component1');

  //   const renderComponent = () => {
  //     switch (selectedComponent) {
  //       case 'Component1':
  //         return <Equity />;
  //       case 'Component2':
  //         return <FO />;
  //       case 'Component3':
  //         return <Commodity />;
  //       case 'Component4':
  //         return <Currency />;
  //       default:
  //         return <Equity />;
  //     }
  //   };
  //   const getButtonStyles = (component) => ({
  //     color: selectedComponent === component ? '#34a853' : '#999',
  //     backgroundColor: selectedComponent === component ? '#d1ffdd' : 'auto',
  //     borderRadius: '50px',
  //     border: '1px solid #e5f2ff',
  //     padding: '3px 18px',
  //     fontSize: '13px',
  //     fontWeight: 600,

  //     marginBottom: '10px',
  //     marginLeft: '10px',
  //     textTransform: 'none',
  //     '&:hover': {
  //       color: '#34a853',
  //       backgroundColor: selectedComponent === component ? '#d1ffdd' : 'auto',
  //     },
  //   });

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const handlePostView = () => {
    navigate('/posts/detail');
  };

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
                  INVESTOR CHARTER FOR DEPOSITORIES AND DEPOSITORY PARTICIPANTS
                  (Annexure – A)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <h5>Vision</h5>
              <p>
                Towards making Indian Securities Market - Transparent,
                Efficient, & Investor friendlyby providing safe, reliable,
                transparent and trusted record keeping platformforinvestors to
                hold and transfer securities in dematerialized form.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h5>Misson</h5>
              <ul style={{ marginLeft: '30px' }}>
                <li>
                  <p>
                    To hold securities of investors in dematerialized form and
                    facilitate its transfer, while ensuring safekeeping of
                    securities and protecting interest of investors.
                  </p>
                </li>
                <li>
                  <p>
                    To provide timely and accurate information to investors with
                    regard to their holdingand transfer of securities held by
                    them.
                  </p>
                </li>
                <li>
                  <p>
                    To provide the highest standards of investor education,
                    investor awarenessandtimely services so as to enhance
                    Investor Protection and create awarenessabout Investor
                    Rights.
                  </p>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <h5>
                Details of business transacted by the Depository and Depository
                Participant (DP)
              </h5>
              <p>
                A Depository is an organization which holds securities of
                investors in electronicform. Depositories provide services to
                various market participants - Exchanges, ClearingCorporations,
                Depository Participants (DPs), Issuers and Investors in both
                primaryaswell as secondary markets. The depository carries out
                its activities through its agentswhich are known as Depository
                Participants (DP). Details available on the link
                [https://www.cdslindia.com/DP/dplist.aspx].
              </p>
            </Grid>
            <Grid item xs={12}>
              <h5>
                Description of services provided by the Depository through
                DepositoryParticipants (DPs) to investors
              </h5>
              <p>Basic Services</p>
              <table className="dp-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Brief about the Activity / Service</th>
                    <th>
                      Expected Timelines for processing by the DP after receipt
                      of proper documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dematerialization of securities</td>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Rematerialization of securities</td>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mutual Fund Conversion / Destatementization</td>
                    <td>5 days</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <td>
                        Re-conversion / Restatementisation of Mutual fund units
                      </td>
                    </td>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Transmission of securities</td>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Registering pledge request</td>
                    <td>15 days</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Closure of demat account</td>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Settlement Instruction</td>
                    <td>
                      Depositories to accept physical DIS for pay-in of
                      securities up to 4 p.m. and DIS in electronic form up to 6
                      p.m. on T+1 day
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Depositories provide special services like pledge,
                hypothecation, internet-based services etc. in addition to their
                core services and these include
              </p>
              <table className="dp-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Type of Activity /Service</th>
                    <th>Brief about the Activity / Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Value Added Services</td>
                    <td>
                      Depositories also provide value added services such as
                      <ul>
                        <li>
                          <a>Basic Services Demat Account</a>
                        </li>{' '}
                        <li>
                          <a
                            target="_blank"
                            href="https://adityatrading.in/media/investorCharter/TRANSPOSITION_Form.pdf"
                          >
                            Transposition
                          </a>
                          cum dematerialization
                        </li>
                        <li>
                          Distribution of cash and non-cash corporate benefits
                          (Bonus, Rights, IPOs etc.), stock lending, demat of
                          NSC / KVP, demat of warehouse receipts etc.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>2 </td>
                    <td>Consolidated Account statement(CAS)</td>
                    <td>
                      CAS is issued 10 days from the end of the month (if there
                      were transactions in the previous month) or half yearly
                      (if no transactions).
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Digitalization of provided services by the depositories
                    </td>
                    <td>
                      Depositories offer below technology solutions and
                      e-facilities to their demat account holders through DPs:
                      <ul>
                        <li>
                          E-account opening: Details available on the
                          <a
                            target="_blank"
                            href="https://kyc.adityatrading.in/"
                          >
                            Link
                          </a>
                        </li>{' '}
                        <li>
                          Online instructions for execution: Details available
                          on the link
                          <ul>
                            <li>
                              <a
                                target="_blank"
                                href="https://web.cdslindia.com/myeasinew/Registration/EasiestRegistration"
                              >
                                Easiest
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="#">
                                Gift transfers
                              </a>
                              (Under Process)
                            </li>
                            <li>
                              <a target="_blank" href="#">
                                e-DIS / Demat Gateway: Details available on the{' '}
                              </a>{' '}
                              (Under Process)
                            </li>
                            <li>
                              <a target="_blank" href="#">
                                e-CAS facility: Details available on the{' '}
                              </a>{' '}
                              (Under Process)
                            </li>
                            <li>
                              Miscellaneous services: Details available on the
                              link
                              <ul>
                                <li>
                                  <a target="_blank" href="#">
                                    Online Closure
                                  </a>{' '}
                                </li>
                                <li>
                                  <a target="_blank" href="#">
                                    Monthly SOT
                                  </a>{' '}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <hr />
            <Grid item xs={12}>
              <h5>Details of Grievance Redressal Mechanism</h5>
              <p>The Process of investor grievance redressal</p>
              <table className="dp-table">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Investor Complaint/ Grievances</td>
                    <td>
                      Investor can lodge complaint/ grievance against the
                      Depository/DP in the following ways:
                      <br />
                      <ul>
                        <li>
                          <a>Basic Services Demat Account</a>
                        </li>{' '}
                        <li>Electronic mode-</li>
                        <li>
                          <a
                            href="https://adityatrading.in/media/investorCharter/Grievance-Redressal-Mechanism.pdf"
                            target="_blank"
                          >
                            {' '}
                            Offline mode
                          </a>
                        </li>
                      </ul>
                      <br />
                      The complaints/ grievances lodged directly with the
                      Depository shall be resolved within 30 days.
                    </td>
                  </tr>
                  <tr>
                    <td>2 </td>
                    <td>
                      Investor Grievance Redressal Committee of Depository
                    </td>
                    <td>
                      If no amicable resolution is arrived, then the Investor
                      has the option torefer thecomplaint/grievance to the
                      Grievance Redressal Committee(GRC)of the Depository. Upon
                      receipt of reference, the GRC will endeavor to resolve the
                      complaint/ grievance by hearing the parties and examining
                      the necessary information and documents.
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Arbitration proceedings</td>
                    <td>
                      The Investor may also avail the arbitration mechanism set
                      out in the Byelaws and Business Rules/Operating
                      Instructions of the Depository in relation to any
                      grievance, or dispute relating to depository services. The
                      arbitration reference shall be concluded by way of issue
                      of an arbitral award within 4 months from the date of
                      appointment of arbitrator(s).
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                For the Multi-level complaint resolution mechanism available at
                the Depositories please refer to
                <a
                  href="https://adityatrading.in/media/investorCharter/complaint-resolution.pdf"
                  target="_blank"
                >
                  Link
                </a>
              </p>
            </Grid>
            <Grid item xs={12}>
              <h5>
                Guidance pertaining to special circumstances related to market
                activities: Termination of the Depository Participant
              </h5>

              <table className="dp-table">
                <thead>
                  <tr>
                    <th>1</th>
                    <th>Type of special circumstances</th>
                    <th>Timelines for the Activity / Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <ul>
                        <li>
                          Depositories to terminate the participation in case a
                          participant no longer meets the eligibility criteria
                          and/or any other grounds as mentioned in the bye laws
                          like suspension of trading member by the Stock
                          Exchanges.
                        </li>{' '}
                        <li>
                          Participant surrenders the participation by its own
                          wish.
                        </li>
                      </ul>
                    </td>
                    <td>
                      Client will have a right to transfer all its securities to
                      any other Participant of its choice without any charges
                      for the transfer within 30 days from the date of
                      intimation by way of letter/email.
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12}>
              <h5>Dos and Don’ts for Investors</h5>
              <p>
                For Do’s and Don’ts please refer to the{' '}
                <a
                  href="https://adityatrading.in/media/investorCharter/Dos-and-Donts.pdf"
                  target="_blank"
                >
                  Link
                </a>
              </p>
            </Grid>
            <Grid item xs={12}>
              <h5>Rights of investors</h5>
              <p>
                For rights, please refer to the{' '}
                <a
                  href="https://adityatrading.in/media/investorCharter/Rights-of-Investors.pdf"
                  target="_blank"
                >
                  Link
                </a>
              </p>
            </Grid>
            <Grid item xs={12}>
              <h5>Responsibilities of Investors</h5>
              <p>
                For responsibilities, please refer to the{' '}
                <a
                  href="https://adityatrading.in/media/investorCharter/Responsibilities-of-Investors.pdf"
                  target="_blank"
                >
                  Link
                </a>
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

export default Dps;
