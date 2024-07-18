import React from 'react';
import LandingPage from '../../LandingPage';
import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../../ContactUs/Contact.css';
import BankTable from '../../Tables/BankTable';

const RegisteredBankDetails = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <LandingPage />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          margin: '0px',
        }}
      >
        <Box
          sx={{
            width: '80%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Box>
                <h5>Details of Client Bank Accounts</h5>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <p>
                  “Investors are requested to note that Stock broker
                  <span
                    style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                  >
                    ATS SHARE BROKERS PVT LTD
                  </span>
                  is permitted to receive/pay money from/to investor through
                  designated bank accounts only named as client bank accounts.
                  Stock broker (name of stock broker) is also required to
                  disclose these client bank accounts to Stock Exchange. Hence,
                  you are requested to use following client bank accounts only
                  for the purpose of dealings in your trading account with us.
                  The details of these client bank accounts are also displayed
                  by Stock Exchanges on their website under “Know/ Locate your
                  Stock Broker”.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <p>
                  <b>
                    <u>Up streaming Client Nodal Bank Account (USCNBA)</u>
                  </b>
                </p>
                <div className="table-responsive">
                  <TableContainer
                    component={Paper}
                    className="table-responsive"
                  >
                    <Table
                      aria-label="simple table"
                      className="tables"
                      id="blank"
                    >
                      <TableHead
                        sx={{ backgroundColor: '#34a853', color: '#fff' }}
                      >
                        <TableRow>
                          <TableCell>S. No.</TableCell>
                          <TableCell align="right">Name of Bank</TableCell>
                          <TableCell align="right">
                            Name of Account Holder
                          </TableCell>
                          <TableCell align="right">Account No.</TableCell>
                          <TableCell align="right">IFSC Code</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right">ICICI Bank</TableCell>
                          <TableCell align="right">
                            ATS Share Brokers Pvt Ltd
                          </TableCell>
                          <TableCell align="right">000905023101</TableCell>
                          <TableCell align="right">ICIC0000009</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            2
                          </TableCell>
                          <TableCell align="right">Axis Bank</TableCell>
                          <TableCell align="right">
                            ATS Share Brokers Pvt Ltd
                          </TableCell>
                          <TableCell align="right">917020047720607</TableCell>
                          <TableCell align="right">UTIB0000114</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </div>
    </div>
  );
};

export default RegisteredBankDetails;
