import React, { useEffect } from 'react';

import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './kyc.css';

const FileComplaint = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const tds = {
    border: '1px solid #b7b1b1',
    lineheight: '1.2',
    padding: '5px',
    fontsize: '12px',
    textAlign: 'center',
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
              <h5 style={{ textAlign: 'center' }}>
                Grievances Redressal at ATS
              </h5>
            </Grid>

            <Grid item xs={12}>
              {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
              <Box>
                <p>
                  Customers can approach ATS support team for their grievances
                  via three channels.
                </p>
              </Box>

              <Box>
                <div
                  style={{ width: '100%', display: 'block', overflowX: 'auto' }}
                >
                  <table
                    style={{
                      padding: '5px',
                      textAlign: 'center',
                      color: '#212529',
                      borderCollapse: 'collapse',
                    }}
                  >
                    <tbody style={{ width: '100%' }}>
                      <tr>
                        <td style={tds}>
                          <PhoneIcon sx={{ paddingTop: '8px' }} /> Call
                        </td>
                        <td style={tds}>+91 7667273344</td>
                        <td style={tds}>
                          From 9:00 AM to 6:00 PM (Monday to Saturday)
                        </td>
                      </tr>

                      <tr>
                        <td style={tds}>
                          <WhatsAppIcon sx={{ paddingTop: '8px' }} /> WhatsApp
                        </td>
                        <td style={tds}>+91 7667273344</td>
                        <td style={tds}>
                          From 9:00 AM to 6:00 PM (Monday to Saturday)
                        </td>
                      </tr>

                      <tr>
                        <td style={tds}>
                          <EmailIcon sx={{ paddingTop: '8px' }} /> Email
                        </td>
                        <td style={tds}>support@adityatrading.com</td>
                        <td style={tds}>
                          From 9:00 AM to 6:00 PM (Monday to Saturday)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Once the customer raises via any channel, the interaction gets
                  recorded in the ATS backend. Every channel has its own Turn
                  Around Time (TAT). The customer will get the response within
                  that TAT
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <img
                src="https://adityatrading.in/media/complaint/1.jpg"
                alt="complaint"
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <h6>
                <u>Filing complaint via Call</u>
              </h6>
              <p>
                Customers can call our support number and after listening to the
                IVR option, can select the appropriate option to connect with
                the support team. The TAT for a call is instant.
              </p>
              <p>
                The customer can place a call from any number for
                general-purpose enquiries. But, any specific request such as
                placing an order, payout request, and enquiries regarding ledger
                balance and holdings can only be taken from a registered mobile
                number or after due verification of identity.
              </p>
              <p>
                Once the agent receives your call your query will be heard
                instantly and an agent will try to resolve it there and then
                itself.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h6>
                <u>Filing complaint via WhatsApp</u>
              </h6>
              <p>
                Customers can connect with the support team via WhatsApp just by
                sending ‘Hi’. Once the customer initiates the message, it
                automatically gets assigned to our customer agent. The TAT for
                WhatsApp is two minutes.
              </p>
              <p>
                The customer can WhatsApp from any number for general-purpose
                enquiries. But, any specific request such as placing an order,
                payout request, and enquiries regarding ledger balance and
                holdings can only be taken from a registered mobile number or
                after due verification of identity.
              </p>
            </Grid>
            <img
              src="https://adityatrading.in/media/complaint/2.jpg"
              alt="complaint"
              style={{
                maxWidth: '400px',
                width: '100%',
                verticalAlign: 'middle',
                borderStyle: 'none',
              }}
            />
            <Grid item xs={12}>
              <h6>
                <u>Filing complaint via email</u>
              </h6>
              <p>
                Customers can connect with the support team via email. Once the
                customer sends the mail with the proper subject, the support
                team will revert back to the mail. The TAT for email replies is
                24 hours.
              </p>
              <p>
                The customer can mail from any email address for general-purpose
                enquiries. But, any specific request, such as payout request or
                enquiries regarding ledger balance and holdings, can only be
                taken from a registered email address.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h6>
                <u>Filing complaint via email</u>
              </h6>
              <p>
                Customers can connect with the support team via email. Once the
                customer sends the mail with the proper subject, the support
                team will revert back to the mail. The TAT for email replies is
                24 hours.
              </p>
              <p>
                The customer can mail from any email address for general-purpose
                enquiries. But, any specific request, such as payout request or
                enquiries regarding ledger balance and holdings, can only be
                taken from a registered email address.
              </p>
            </Grid>
            <Grid item xs={12}>
              <h6>
                <u>FAQ’s</u>
              </h6>
              <p>
                We have curated all the frequently asked questions under one
                single module, where you have yourself search your query and get
                the answers instantly.
              </p>
              <ul>
                <li>
                  <p>Visit, </p>
                </li>
                <li>
                  <p>
                    Click on the menu option on the top-right corner of the
                    screen.{' '}
                  </p>
                </li>
                <li>
                  <p>Click on the FAQ’s </p>
                </li>
              </ul>
            </Grid>
            <img
              src="	https://adityatrading.in/media/complaint/3.jpg"
              alt="complaint3"
              style={{
                width: '100%',
                verticalAlign: 'middle',
                borderStyle: 'none',
              }}
            />
            <Grid item xs={12}>
              <h6>
                <u>Creating Complaint Tickets</u>
              </h6>
              <p>Customers can raise the issue directly through the web.</p>
              <ul>
                <li>
                  <p>Visit, </p>
                </li>
                <li>
                  <p>
                    Click on the menu option on the top-right corner of the
                    screen.
                  </p>
                </li>
                <li>
                  <p>Click on the Create Ticket</p>
                </li>
              </ul>
              <p>
                <b>
                  <u>NOTE:</u>
                </b>
                Enter the Client Code if you are the customer. If not, enter
                your name and leave your phone number in the description box.
              </p>
            </Grid>

            <img
              src="https://adityatrading.in/media/complaint/4.jpg"
              alt="complaint4"
              style={{
                width: '100%',
                verticalAlign: 'middle',
                borderStyle: 'none',
              }}
            />
            <Grid item xs={12}>
              <h6>
                <u>Tracking Complaint Status: Applicable to all modalities</u>
              </h6>
              <p>
                Regardless of which modality has been used to raise a complaint,
                ATS backend system will automatically assign a ticket number.
                Customers can check the status/ take followup through any mode.
              </p>
              <p>
                Once the issue is resolved, ATS support team will inform the
                customers through email and WhatsApp.
              </p>
            </Grid>

            <img
              src=" https://adityatrading.in/media/complaint/5.jpg"
              alt="complaint5"
              style={{
                width: '100%',
                maxWidth: '300px',
                verticalAlign: 'middle',
                borderStyle: 'none',
              }}
            />
          </Grid>
        </Box>
        <Grid
          item
          sx={{ top: '70px', position: 'relative', minWidth: '410px' }}
          xs={12}
          md={6}
        >
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default FileComplaint;
