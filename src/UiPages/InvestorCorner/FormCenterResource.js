import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';
import SuccessButton from '../../Buttons/Success';

const FormCenterResource = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const linkStyles = {
    color: '#374948',
    fontSize: '14px',
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
            <Grid container item spacing={2}>
              <Grid item xs={12} lg={12} md={12}>
                <h4
                  style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: '400',
                    color: '#131722',
                  }}
                >
                  Form Center/ Resources
                </h4>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h6> Account Opening</h6>
                  <div>
                    <ul>
                      <li>
                        {' '}
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/Individual-Account-Opening-Form.pdf"
                        >
                          Application Form - individual
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          Application Form - non individual
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          {' '}
                          Instructions
                        </a>
                      </li>
                    </ul>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h6> Change request forms</h6>
                  <div>
                    <ul>
                      <li>
                        {' '}
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/New-Modification.pdf"
                        >
                          Account modification form
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/New-Dematerialization-Request.pdf"
                        >
                          Dematerialization request from
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          {' '}
                          MF Demat request form
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/ATS-Account-Closure-Form.pdf"
                        >
                          {' '}
                          Account deactivation/closure form
                        </a>
                      </li>
                    </ul>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h6> Utilities</h6>
                  <div>
                    <ul>
                      <li>
                        {' '}
                        <a style={linkStyles} href="#">
                          NSE F&O list of approved scrips as collateral (with
                          haircut)
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          List of illiquid scrips
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          In-person verification (IPV)
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          {' '}
                          Consolidated list of scrips blocked/allowed by RMS
                        </a>
                      </li>
                    </ul>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h6> Other forms</h6>
                  <div>
                    <ul>
                      <li>
                        {' '}
                        <a style={linkStyles} href="#">
                          Application form – Trading only
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/Annexure%20A-%20Nomination.pdf"
                        >
                          Nomination form (after account opening)
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          In-person verification (IPV)
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/Annexure%20B-%20Opting%20out%20of%20Nomination.pdf"
                        >
                          {' '}
                          Opting Out of Nomination
                        </a>
                      </li>
                      <li>
                        <a style={linkStyles} href="#">
                          Segment addition
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/New-POA-Form.pdf"
                        >
                          Demat POA
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/Transmission-Form.pdf"
                        >
                          Transmission Request Form
                        </a>
                      </li>
                      <li>
                        <a
                          style={linkStyles}
                          href="https://adityatrading.in/media/forms/DIS-Requisition-form.pdf"
                        >
                          DIS - Requisition Form
                        </a>
                      </li>
                    </ul>
                  </div>
                </Box>
              </Grid>
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

export default FormCenterResource;
