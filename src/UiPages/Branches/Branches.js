import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import {
  Box,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';
import { ArrowDownward } from '@mui/icons-material';

const Branches = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <LandingPage />
      <div
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Grid container spacing={2}>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Karnataka / Banglore / Hubli : </h6>
                <p>
                  <b>Branch Manager : Hemanth</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  203, 2nd Floor Marvel Artiza, Opp to KIMS, Vidyanagar,
                  Hubli-580021.
                </p>
                <p>PH : 6304542421 / 8553465134</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Karnataka / Mangalore : </h6>
                <p>
                  <b>Branch Manager : Sandeep</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  ESSEL WILLCON, #10, 2ND FLOOR, BENDOORWELL CIRCLE, MANGALORE-
                  575002
                </p>
                <p>PH : 9880496452 / 7676583344</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Karnataka / Banglore / Hebbal : </h6>
                <p>
                  <b>Branch Manager : Vinod Kumar K B</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  Sri Sheshadri Sampadha Bldng, # 92/1 & 2, 3rd Floor, Hebbal
                  ring road, Bengaluru – 560024
                </p>
                <p>PH : 8553465134</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Karnataka / Banglore / Indiranagar : </h6>
                <p>
                  <b>Branch Manager : Vinod Kumar K B</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  No. 648/A-3, 1st Floor, OM Chambers, Binnamangala, 1st Stage,
                  Indiranagar Bangalore – 560038
                </p>
                <p>PH : 8553465134</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Tamilnadu / Chennai / Sowcarpet : </h6>
                <p>
                  <b>Branch Manager : R. Pradheep</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  No.130, Dhanalakshmi complex, 3rd Floor, NSC Bose Road,
                  Sowcarpet, Chennai-600079
                </p>
                <p>PH : 9788696381</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Tamilnadu / Chennai / Perungudi : </h6>
                <p>
                  <b>Branch Manager : Sathish Kumar K</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  No 110 & 111, RRR Tower, 2nd Floor, Burma Colony Main Road,
                  Perungudi, OMR, Opp to Star Health Insurance, Chennai-600096.
                </p>
                <p>PH : 04443114894 / 9952152483</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Tamilnadu / SALEM : </h6>
                <p>
                  <b>Branch Manager : Sathish Kumar K</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  NO.3/1, JAWAHAR EMPORIUM, 4th FLOOR, ROYAL GARDEN, MEYYANUR,
                  Opp to ARRS MULTIPLEX, SALEM- 636004.
                </p>
                <p>PH : 9791241721 / 9952152483</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Tamilnadu / Coimbatore : </h6>
                <p>
                  <b>Branch Manager : Sathish Kumar K</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  3rd floor, city center, 14/15 E arokiasamy road, R.S. puram
                  coimbatore, Tamil nadu- 641002
                </p>
                <p>PH : 8072982752 / 9952152483</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Tamilnadu / Karur : </h6>
                <p>
                  <b>Branch Manager : Sathish Kumar K</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  No. 46, Ground Floor, Thiru-Vi-Ka Road, Yesbank Building,
                  Karur - 639001
                </p>
                <p>PH : 9600058691 / 9952152483</p>
              </CardContent>
            </Grid>
            <Grid
              sx={{
                paddingLeft: '0px',
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <CardContent
                sx={{
                  width: '100%',
                  height: 'auto',
                  padding: '20px',
                  boxShadow: '0 4px 24px 0 #1818185e',
                  borderRadius: '10px', // optional: to round the corners
                }}
              >
                <h6>Maharashtra / Pune : </h6>
                <p>
                  <b>Branch Manager : Vinod Kumar K B</b>
                </p>
                <p>
                  ATS SHARE BROKERS PVT LTD,
                  <br />
                  3rd Floor, Office no 301, Classic House, Senapati Bapat Rd,
                  above ICICI Bank, Shivaji Co operative Housing Society,
                  Gokhalenagar, Pune - 411016
                </p>
                <p>PH : 8553465134</p>
              </CardContent>
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

export default Branches;
