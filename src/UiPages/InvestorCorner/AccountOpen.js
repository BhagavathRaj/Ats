import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';

const AccountOpenProcess = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
              <Box>
                <div style={{ textAlign: 'center' }}>
                  <h5>
                    Demat Account Opening Flow at ATS{' '}
                    <small>(for Individuals)</small>
                  </h5>
                </div>

                <p>
                  An individual can open the Demat account online if the mobile
                  number is linked with Aadhaar card.
                </p>
                <p>
                  To open an account, visit
                  <a href="https://kyc.adityatrading.in/">
                    {' '}
                    https://kyc.adityatrading.in/{' '}
                  </a>{' '}
                  and follow the instructions given on the screen and complete
                  the e-sign process.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <h6>
                  <u>DOCUMENTS REQUIRED</u>
                </h6>
                <p>
                  To open the demat account, an Individual should be ready with
                  the following documents.
                </p>
                <ul
                  style={{
                    marginLeft: isMobile ? '5px' : '25px',
                    padding: '0px',
                  }}
                >
                  <li>
                    <p>Photo/ scan copy of PAN card.</p>
                  </li>
                  <li>
                    <p>
                      Photo/ scan copy of Aadhaar Card. Make sure the Aadhaar
                      card is masked i.e., completely black out the first 8
                      digits of the Aadhaar card. You can also download the
                      masked aadhaar by visiting
                      <a href="https://myaadhaar.uidai.gov.in/">
                        https://myaadhaar.uidai.gov.in/
                      </a>
                      and follow the instructions.
                    </p>
                  </li>
                  <li>
                    <p>Mobile number linked with Aadhaar and email ID.</p>
                  </li>
                  <li>
                    <p>
                      A scanned copy of the signature on white paper. The
                      signature should be matching with the PAN card. The
                      signature must be with blue or black ball point pen or
                      with an ink pen only.
                    </p>
                  </li>
                  <li>
                    <p>
                      An income proof, if a client wants to trade in F&O, any of
                      the following documents can be accepted as an income
                      proof.
                    </p>
                  </li>
                  <ol>
                    <li>
                      <p>
                        Last 6-month bank statement with your name, account
                        number, and IFSC mentioned on it.
                      </p>
                    </li>
                    <li>
                      <p>ITR acknowledgment.</p>
                    </li>
                    <li>
                      <p>Form 16 provided by your employer.</p>
                    </li>
                    <li>
                      <p>Certificate of Net-worth.</p>
                    </li>
                    <li>
                      <p>Latest 3-month salary slip.</p>
                    </li>
                  </ol>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <h6>
                  <u>STEPS TO OPEN DEMAT ACCOUNT</u>
                </h6>
                <p>
                  This will provide individual a detailed, step by step process
                  on How to Open a Demat Account and answering all the relevant
                  questions.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <p>
                1. Visit,
                <a href="https://kyc.adityatrading.in/">
                  https://kyc.adityatrading.in/
                </a>
                and enter your Mobile Number and Email ID you want to register
                at ATS.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/1.jpg"
              />
              <p>
                2. Enter the OTP. You will receive the first 3-digits of OTP on
                your mobile number and the next 3-digits in your email.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/2.jpg"
              />
              <p>
                3. Enter you PAN number and Date of Birth. Your Date of Birth
                should be as per PAN.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/3.jpg"
              />
              <p>
                4. You must give access to your aadhaar details by clicking into
                “Continue to DigiLocker” button. For this process you must
                ensure that your mobile number is linked with aadhaar.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/4.jpg"
              />
              <p>
                <b>Note:</b>
                If you do not have an account with DigiLocker, you can click on
                the “Next” and can fill all the details manually.
              </p>
              <p>
                3. Enter you PAN number and Date of Birth. Your Date of Birth
                should be as per PAN.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/3.jpg"
              />
              <p>5. Click on “Send Code to Mobile” and enter the OTP.</p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/5.jpg"
              />
              <p>
                6. Enter your Aadhaar number along with the Captcha followed by
                Aadhaar OTP.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/6.jpg"
              />
              <p>
                7. Enter your DigiLocker Security PIN that you have set at the
                time of creating the account in DigiLocker and click on Allow
                button.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/7.jpg"
              />
              <p>
                8. In the next two steps you have to enter your Personal
                details, if you have provided access to DigiLocker then most of
                the details will be prefilled. Please note that your father's
                name should be exactly as per PAN.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/8.jpg"
              />
              <p>
                9. Click on the Nominee and Enter the Nominee Details and click
                on “Process Request”.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/9.jpg"
              />
              <p>
                10. Enter some personal information. We are taking this
                information in accordance with The Foreign Account Tax
                Compliance Act (FATCA)
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/10.jpg"
              />
              <p>
                11. Enter your Bank Details and Click on Validate. Our system
                will run a Penny Drop verification and once you have double
                checked the information click on Next.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/11.jpg"
              />
              <p>
                12. Now it’s time to take the Selfie!! Write down the code on
                white paper and place it against your chest and click the
                Capture button. Please ensure that OTP is clearly visible in the
                photo. To get the best results, stand against the light.
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/12.jpg"
              />
              <p>
                13. Upload all the required documents, including PAN, Signature,
                and Income Proof and click on Esign. If you have provided access
                to DigiLocker then the system will automatically capture the
                Aadhaar card from DigiLocker and if not, then you have to upload
                the Masked Aadhaar Card.{' '}
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/13.jpg"
              />

              <p>
                14. An electronic account opening form will appear. You can read
                this document if you want or else click on “Sign Now”{' '}
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/14.jpg"
              />
              <p>
                15. This is the Final Step, enter your Aadhaar number followed
                by Aadhaar OTP.{' '}
              </p>
              <img
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  verticalAlign: 'middle',
                  borderStyle: 'none',
                }}
                src="https://adityatrading.in/media/kyc/15.jpg"
              />
              <p>16. Account Opening Process is Completed Now</p>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <h6>
                  <u>PLEASE NOTE</u>
                </h6>
                <ul style={{ marginLeft: isMobile ? '5px' : '25px' }}>
                  <li>
                    <p>
                      After successfully completing the process the ATS backend
                      team will open your account. This process will take 2
                      working days and post that your Trading ID and Password on
                      your registered email.
                    </p>
                  </li>
                  <li>
                    <p>
                      If your mobile number is not linked to your aadhaar card,
                      you can open your ATS account offline. Visit,{' '}
                      <a href="https://adityatrading.in/form-center-resources/">
                        https://adityatrading.in/form-center-resources/
                      </a>{' '}
                      to download the offline account opening form and follow
                      the instructions given on the first page. It is an
                      editable PDF therefore you can fill in the form on your
                      computer and take a print-out later
                    </p>
                  </li>
                  <li>
                    <p>
                      You can also view our YouTube video on How to open a demat
                      account by visit this link,
                      <a
                        href="https://www.youtube.com/watch?v=kGN7OLHU55o&ab_channel=ATS"
                        target="_blank"
                      >
                        https://www.youtube.com/watch?v=kGN7OLHU55o&ab_channel=ATS
                      </a>
                    </p>
                  </li>
                </ul>
              </Box>
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

export default AccountOpenProcess;
