import React from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation, useNavigate } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';
import './PostDetails.css';
import SuccessButton from '../../Buttons/Success';

const PostDetails = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const handlePostView = () => {
    navigate('/posts/ detail');
  };

  return (
    <div>
      <LandingPage />
      <Box
        style={{
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
            width: '80%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <div style={{ borderBottom: '1px solid #ededed' }}>
                <p
                  style={{
                    padding: '10px',
                    fontWeight: '600',
                    backgroundColor: '#d1ffdd',
                    color: '#34a853',
                    fontSize: '12px',
                    textAlign: 'center',
                    borderRadius: '30px',
                    width: '5%',
                    marginBottom: '20px',
                    borderBottom: '1px solid #ededed',
                  }}
                >
                  Posts
                </p>
              </div>
              <Box
                sx={{
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <h2
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '##3c4043',
                  }}
                >
                  SRM Contractors Limited
                </h2>
                <p style={{ width: '150px', height: '149px' }}>
                  <img
                    style={{ width: '100%' }}
                    src="https://assets.adityatrading.in/media/images/ipo/stocklogo/Popular%20Vehicles%20%26%20Services%20Limited/Popular_Vehicles__Services_Limited.jpeg"
                  />
                </p>
                <p>SRM Contractors Limited–IPO DETAILS </p>
                <table
                  className="styled-table"
                  aria-rowcount={6}
                  border={1}
                  style={{
                    borderCollapse: 'collapse',
                    padding: '4px,0px',
                    color: '#3c4043',
                    fontWeight: '500',
                  }}
                >
                  <tbody>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>IPO Date </p>
                      </td>

                      <td role="columnheader">
                        <p> Mar 26, 2024, to Mar 28, 2024 </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Price Band</p>
                      </td>

                      <td role="columnheader">
                        <p> ₹200 to ₹210 per share </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Lot Size</p>
                      </td>

                      <td role="columnheader">
                        <p> 70 Shares</p>
                      </td>
                    </tr>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Issue Size </p>
                      </td>

                      <td role="columnheader">
                        <p> ₹130.20 Cr. </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Allotment Date </p>
                      </td>

                      <td role="columnheader">
                        <p>01 April 2024 </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Listing Date </p>
                      </td>

                      <td role="columnheader">
                        <p> 03 April 2024 </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>Company OverView</p>
                <p>
                  SRM Contractors is a multidisciplinary engineering,
                  construction, and development firm specializing in various
                  civil construction endeavors such as roads, tunnels, slope
                  stabilization, and other related projects. Operating primarily
                  in the challenging terrains of the Union Territories of Jammu
                  &amp; Kashmir and Ladakh, SRM undertakes both independent
                  projects and subcontracting assignments for infrastructure
                  developers.&nbsp;&nbsp;
                </p>
                <p>
                  Registered as a Class A contractor with the Public Work
                  Department of Jammu & Kashmir, SRM is authorized to bid
                  autonomously on EPC Contracts worth up to Rs. 300 Cr and
                  tunnel construction projects up to Rs. 500 Cr. Since
                  establishment, the company, either independently or through
                  joint ventures, has successfully completed 37 infrastructure
                  projects totaling Rs. 771 Cr, comprising 31 road projects, 3
                  tunnel projects, 1 slope stabilization project, and 2
                  miscellaneous civil activities. As of September 15, 2023, the
                  company's current order book stands at Rs. 707 Cr,
                  encompassing both individual projects and subcontracting
                  endeavors.
                </p>
                <p>Objective of the IPO </p>
                <p>
                  Here are a few quick reasons why company is going public:{' '}
                </p>
                <ol>
                  <li>
                    <p>
                      Meeting capital expenditure needs for acquiring
                      equipment/machinery;{' '}
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      Repaying either fully or partially and/or prepaying
                      specific outstanding secured borrowings obtained by the
                      company;
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>Fulfilling the company's working capital needs;</p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      Investing in project-specific joint venture initiatives;
                      and
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>Utilization for general corporate purposes. </p>
                  </li>
                </ol>
                <p>Company Financials </p>

                {/* <table
                  className="styled-table"
                  aria-rowcount={4}
                  border={1}
                  style={{
                    borderCollapse: 'collapse',
                    padding: '4px,0px',
                    color: '#3c4043',
                    fontWeight: '500',
                    overflowX: 'hidden',
                  }}
                >
                  <tbody>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Period Ended </p>
                      </td>
                      <td>
                        <p>Total Assets </p>
                      </td>
                      <td>
                        <p>Total Revenue </p>
                      </td>
                      <td>
                        <p>Profit After Tax </p>
                      </td>
                      <td>
                        <p>Net Worth </p>
                      </td>
                      <td>
                        <p>Reserves and Surplus </p>
                      </td>
                      <td>
                        <p>Borrowing </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={2} role="row">
                      <td role="rowheader">
                        <p>31-Mar-21 </p>
                      </td>
                      <td>
                        <p>112.47 </p>
                      </td>
                      <td>
                        <p>161.95 </p>
                      </td>
                      <td>
                        <p>8.27 </p>
                      </td>
                      <td>
                        <p>26.85 </p>
                      </td>
                      <td>
                        <p>25.32 </p>
                      </td>
                      <td>
                        <p>31.96 </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={3} role="row">
                      <td role="rowheader">
                        <p>31-Mar-22 </p>
                      </td>
                      <td>
                        <p>120.22 </p>
                      </td>
                      <td>
                        <p>265.51 </p>
                      </td>
                      <td>
                        <p>8.27 </p>
                      </td>
                      <td>
                        <p>26.85 </p>
                      </td>
                      <td>
                        <p>25.32 </p>
                      </td>
                      <td>
                        <p>31.96 </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={4} role="row">
                      <td role="rowheader">
                        <p>31-Mar-22 </p>
                      </td>
                      <td>
                        <p>120.22 </p>
                      </td>
                      <td>
                        <p>265.51 </p>
                      </td>
                      <td>
                        <p>8.27 </p>
                      </td>
                      <td>
                        <p>26.85 </p>
                      </td>
                      <td>
                        <p>25.32 </p>
                      </td>
                      <td>
                        <p>31.96 </p>
                      </td>
                    </tr>
                  </tbody>
                </table> */}
                <div
                  style={{ marginBottom: '70px' }}
                  className="table-responsive"
                >
                  <table
                    style={{ borderCollapse: 'collapse' }}
                    className="bankTable"
                  >
                    <tbody style={{ marginBottom: '30px' }}>
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
                    </tbody>
                  </table>
                </div>
                <p>Key Performance Indicator </p>
                <table
                  className="styled-table"
                  aria-rowcount={3}
                  border={1}
                  style={{
                    borderCollapse: 'collapse',
                    padding: '4px,0px',
                    color: '#3c4043',
                    fontWeight: '500',
                  }}
                >
                  <tbody>
                    <tr aria-rowindex={1} role="row">
                      <td role="rowheader">
                        <p>Market Cap. (Cr.) </p>
                      </td>
                      <td>
                        <p>481.83 </p>
                      </td>
                      <td>
                        <p>EPS (Rs) </p>
                      </td>
                      <td>
                        <p>12.24 </p>
                      </td>
                      <td>
                        <p>Net Worth </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={2} role="row">
                      <td role="rowheader">
                        <p>31-Mar-21 </p>
                      </td>
                      <td>
                        <p>112.47 </p>
                      </td>
                      <td>
                        <p>161.95 </p>
                      </td>
                      <td>
                        <p>8.27 </p>
                      </td>
                      <td>
                        <p>26.85 </p>
                      </td>
                    </tr>
                    <tr aria-rowindex={3} role="row">
                      <td role="rowheader">
                        <p>31-Mar-22 </p>
                      </td>
                      <td>
                        <p>120.22 </p>
                      </td>
                      <td>
                        <p>265.51 </p>
                      </td>
                      <td>
                        <p>8.27 </p>
                      </td>
                      <td>
                        <p>26.85 </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>Pros </p>
                <ol>
                  <li>
                    <p>
                      SRM Contractors boasts a proven track record in
                      efficiently executing projects involving roads, tunnels,
                      and slope stabilization within the challenging terrain of
                      Jammu & Kashmir.{' '}
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      The company strategically selects contracts for multiple
                      projects located in proximity, thereby minimizing
                      transportation costs and optimizing profitability.{' '}
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      {' '}
                      SRM follows an asset-heavy model, owning all construction
                      equipment and machinery internally, ensuring long-term
                      cost efficiency and expedited project completion.{' '}
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      Over time, SRM has vertically integrated its operations,
                      acquiring machinery and technology to carry out
                      construction activities in-house. This includes ownership
                      of various equipment such as boomers, shotcrete machines,
                      excavators, hot mix plants, and compactors.{' '}
                    </p>
                  </li>
                </ol>
                <p>Cons </p>
                <ol>
                  <li>
                    <p>
                      SRM Contractors faces a significant risk due to its
                      primary business concentration in Jammu &amp; Kashmir and
                      Ladakh. This region is susceptible to regional civil
                      unrest, political instability, and adverse climate
                      conditions, among other factors, all of which could
                      substantially impede the company's operations.&nbsp;
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      The company relies heavily on government-awarded projects
                      or those funded by the Government of India, leading to a
                      concentration of revenue sources. This reliance may result
                      in a limited number of available projects in the market or
                      lower profit margins compared to privately funded
                      projects.{' '}
                    </p>
                  </li>
                </ol>
                <ol>
                  <li>
                    <p>
                      SRM Contractors must navigate a highly competitive bidding
                      process for infrastructure projects, where factors such as
                      past performance, quality of work, and project costs play
                      crucial roles. The intense competition in this arena poses
                      challenges for the company in securing contracts.{' '}
                    </p>
                  </li>
                </ol>

                <p>How to Apply for this IPO </p>
                <p>
                  1. Go to{' '}
                  <a href="https://ipo.adityatrading.in/" target="_blank">
                    https://ipo.adityatrading.in/
                  </a>
                </p>
                <p>2. Enter your Client ID </p>
                <p>
                  3. Enter the OTP received in your registered mobile number.{' '}
                </p>
                <p>4. Choose the IPO and click on apply button. </p>
                <p>5. Enter the UPI ID, Quantity, and Cut off the price. </p>
                <p>6. Click on submit button </p>
                <p>
                  7. Confirm the mandate request received on your phone by
                  entering the UPI Pin.{' '}
                </p>
                <p>
                  You can also watch our youtube video on “How to Apply on IPO”
                  by clicking on the link “
                  <a href="https://www.youtube.com/watch?v=1qOI8dCpl1I&ab_channel=ATS">
                    https://www.youtube.com/watch?v=1qOI8dCpl1I&ab_channel=ATS
                  </a>
                  ”
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <h5>Post a Comment</h5>
            </Grid>
            <Grid container spacing={2}>
              <Grid sx={{ maxWidth: 'none' }} item md={3} lg={3}>
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    Name(required)
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="Enter Email address"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
              <Grid sx={{ maxWidth: 'none' }} item md={4} lg={4}>
                <Box>
                  <Typography
                    sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                  >
                    Mail(will not be published)(required)
                  </Typography>
                  <input
                    type="text"
                    className="formcontroll"
                    autoComplete="off"
                    placeholder="Enter Mobile Number"
                    style={{
                      outline: 'none',
                      border: 'none',
                      border: ' 1px solid #a7a4a4',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <Typography
                  sx={{ color: '#374948 !important', fontWeight: 'normal' }}
                >
                  YOUR GREIEVANCE
                </Typography>
                <textarea
                  type="text"
                  rows={5}
                  className="formcontroll"
                  autoComplete="off"
                  style={{
                    outline: 'none',
                    border: '1px solid #a7a4a4',
                    width: '100%',
                    padding: '8px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    resize: 'vertical',
                    height: 'auto',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <SuccessButton name="Submit" />
              </Box>
            </Grid>
            <p style={{ textAlign: 'center' }}>
              <strong
                style={{
                  fontSize: 'medium',
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                DISCLAIMER
              </strong>
            </p>
            <p>
              <span
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: 'medium',
                  fontWeight: '400',
                }}
              >
                This report is only for the information of our customers.
                Recommendations, opinions, or suggestions are given with the
                understanding that readers acting on this information assume all
                risks involved. The information provided herein is not to be
                construed as an offer to buy or sell securities of any kind. ATS
                and/or its group companies do not as assume any responsibility
                or liability resulting from the use of such information.
              </span>
            </p>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default PostDetails;
