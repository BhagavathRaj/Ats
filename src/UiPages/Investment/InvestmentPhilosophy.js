import React from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';

const InvestmentPhilosophy = () => {
  const location = useLocation();
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
            <Grid container item spacing={2}>
              <Grid item xs={isMobile ? 12 : 6}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5> ATS Investment Philosophy </h5>
                  <p>
                    <b>Clients Have Earned Money The Hard Way</b>
                  </p>
                  <p>
                    We believe our clients have worked very hard to earn money
                    and with that in mind we also work equally hard in making
                    sure our client’s wealth is preserved in the best way
                    possible. We spend considerable amount of time making sure
                    that our client’s wealth is protected in the best way
                    possible.
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    “Rule No. 1 – Not to lose client’s hard earned money
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    Rule No.2 -- Not to forget the Rule number 1”
                  </p>
                </Box>
              </Grid>
              <Grid item xs={isMobile ? 12 : 6}>
                <Box>
                  <img
                    style={{ width: '100%', height: 'auto' }}
                    src="https://adityatrading.in/static/images/INVESTMENT-PHILOSOPHY.svg"
                    alt="people"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <p>
                  <b>Alpha Generation</b>
                </p>
                <p>
                  We have strong belief that for generating alpha returns over a
                  long period of time, we need to have a mix of both Equity and
                  Derivatives to beat index returns during all facets of market.
                  As most of our investments are in Index Stocks, replicating
                  market return becomes easier. With randomness in market one
                  could generate Alpha by investing in few stocks in short run,
                  for long term outperformance we need to have a mix of both
                  Quality Equity Investment clubbed with exposure to
                  derivatives.
                </p>
                <p>
                  <b>Invest Only Profitable Stocks</b>
                </p>
                <p>
                  We do not believe in turnaround stories until they have a
                  proven track record. Most important philosophy while selecting
                  a stock is the consistency in returns over a long period of
                  time. There are no good or bad stocks. The company is either
                  good or bad. Stocks are just stocks.
                </p>
                <p>
                  <b>Large Cap And Large - Mid Caps Alone</b>
                </p>
                <p>
                  We do not risk our client’s hard earned by investing into a
                  small cap or a low midcap stock, for us considerable size of
                  business is extremely important while committing any
                  investment.
                </p>
                <p>
                  <b>Our Bullish View On Indian Markets</b>
                </p>
                <p>
                  As any other asset class, equity markets in India will
                  continue to grow! Previous decades of upward market movement
                  is a testimony to that. Our bullish view is not for few months
                  or few years, but for entire life time of Equity Markets.
                  Indian corporates will make money and the same will reflect as
                  performance of Equity Market.
                </p>
                <p>
                  <b>Consumption Will Continue To Grow</b>
                </p>
                <p>
                  India’s current per capital income while compared to several
                  other western countries is way lesser. As the per capita
                  income increases, focus will shift from basic necessity to
                  several other consumption led items. There will be more number
                  of people buying cars, houses, jewelry, watches, premium
                  clothing, and will travel with higher disposable incomes.
                  Consumption industry in western countries is vast; there is no
                  reason why India cannot match up to their consumptions levels
                  with income levels improving every year. “Those bathing in
                  Lifebuoy will soon buy Lux”
                </p>
                <p>
                  <b>Price Is What We Pay And Value Is What We Get</b>
                </p>
                <p>
                  When we buy a stock we actually buy ownership in a company.
                  Future value of a stock is a function of present value and
                  higher the price we pay, lower our returns would be. It is
                  unsustainable optimism which makes stock too expensive and
                  during time of pessimism it is the lesser price of a stock
                  that makes its too cheap. As long as we are able to buy a
                  stock which has a value commensurate with its price or lesser
                  than its value, is when we are making the right decision. Our
                  investment team spends lot of time in trying to understand the
                  hidden values before we go on comparing them with the prices.
                </p>
                <p>
                  <b>Risk Management</b>
                </p>
                <p>
                  Our view on our Quant Fund is that, markets in general will
                  continue to have random movement. Considering volatility as
                  our friend, we build positions on derivatives by selling
                  volatility. While such act alone can be risky at times, can be
                  managed well with robust risk management system and that is
                  where our schemes do well.
                </p>
                <p>
                  <b>
                    Managing Others Money Requires More Of A Character Than
                    Brain
                  </b>
                </p>
                <p>
                  “It is remarkable how much long-term advantage; people like us
                  have gotten by trying to be consistently not stupid, instead
                  of trying to be very intelligent.” - Munger We strongly
                  believe that for anyone to do well in market, a solid strong
                  framework of mind is required than the knowledge alone.
                </p>
                <p>
                  <b>Only Long Term And No Churns</b>
                </p>
                <p>
                  “If you aren’t thinking about owning a stock for ten years,
                  don’t even think about owning it for ten minutes.” None of our
                  investments made so far in any of our clients portfolio are
                  ever churned, unless something goes terribly wrong with a
                  business. We do not churn our portfolio by changing our
                  investment decision; our view is intact and continues to be so
                  forever.
                </p>
                <p>
                  <b>Be A Contrarian</b>
                </p>
                <p>
                  Just think about it – if you believe in the same things that
                  everyone around you believes in, your returns will be more or
                  less same as people around you. It takes a different thinking
                  that enables you to outperform. Being different is necessary
                  but not sufficient. You also need to be right.
                </p>
                <p>
                  <b>No Technical And Fundamentals</b>
                </p>
                <p>
                  We have banned Technical analysis in our offices. We do not
                  believe in any technical analysis, when it comes to investing
                  in stocks, for us, these are great businesses led by great
                  managements.
                </p>
                <p style={{ textAlign: 'center' }}>
                  “If I’d only followed CNBC’s advice, I’d have a million
                  dollars today. Provided I’d started with a hundred million
                  dollars.” - – Jon Stewart
                </p>
                <p>
                  ATS offers PMS Service where professional portfolio managers,
                  backed by efficient and experienced researchers manage your
                  investments with an aim to deliver consistent returns. We
                  offer tailor made solutions to meet every client’s financial
                  objectives. We at ATS understand that each individual has
                  different financial goals, and so the portfolio managers offer
                  flexible and customized investment strategies pertaining to
                  each client’s portfolio.
                </p>{' '}
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

export default InvestmentPhilosophy;
