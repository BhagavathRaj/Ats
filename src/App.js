import Layout from './component/Layout';

import AddUser from './component/AddUser';
import EditContent from './component/EditContent';
import Formula from './component/Formula';
import LandingPage from './LandingPage';
import Coversion from './Coversion';
import FF from './FF';
import Grids from './Grids';
import PlsLogin from './PlsLogin';
import './App.css';
import FooterContent from './Footer/FooterContent';
import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import CreateAlert from './CreateAlert/CreateAlert';
import HomePage from './Home/HomePage';
import CreatePortFolio from './CreatePortfolio/CreatePortFolio';
import Signin from './Signin/Signin';
import AccountOpen from './Account/AccountOpen';
import ElementCalculator from './Calculator/ElementCalculator';
import PremiumCalculator from './Calculator/PremiumCalculator';
import BrokerageCalculator from './Calculator/BrokerageCalculator';
import Charges from './Charges/Charges';
import Contact from './ContactUs/Contact';
import Createticket from './UiPages/CreateTicket/Createticket';
import InvestmentPhilosophy from './UiPages/Investment/InvestmentPhilosophy';
import RegisteredBankDetails from './UiPages/BankDetails/RegisteredBankDetails';
import Careers from './UiPages/Careers/Careers';
import Branches from './UiPages/Branches/Branches';
import MorningReports from './UiPages/Research/MorningReports';
import InvestorGreivance from './UiPages/InvestorCorner/InvestorGreivance';
import AccountOpenProcess from './UiPages/InvestorCorner/AccountOpen';
import FormCenterResource from './UiPages/InvestorCorner/FormCenterResource';
import KycChecklist from './UiPages/InvestorCorner/KycChecklist';
import AtsPolicy from './UiPages/InvestorCorner/AtsPolicy';
import FileComplaint from './UiPages/InvestorCorner/FileComplaint';
import MarketCalender from './UiPages/Markets/MarketCalender';
import Posts from './UiPages/OtherReports/Posts';
import PostDetails from './UiPages/OtherReports/PostDetails';
import Circular from './UiPages/Circular/Circular';
import Mutualfunds from './UiPages/OtherReports/Mutualfunds';
import Analystopinion from './UiPages/OtherReports/Analystopinion';
import Dps from './UiPages/Investorcharter/Dps';
import Stockbroker from './UiPages/Investorcharter/Stockbroker';
import DpsMonthly from './UiPages/MonthlyDisclosur/DpsMonthly';
import StockMonthly from './UiPages/MonthlyDisclosur/StockMonthly';
import CompanyPages from './Company/CompanyPages';
import Theft from './theft/Theft';

function App() {
  return (
    <>
      {' '}
      {/* <LandingPage />
      <div
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          top: '90px',
        }}
      >
        <FF />
        <PlsLogin />
        <Grids />
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
        
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create_alert" element={<CreateAlert />} />
        <Route path="/create_portfolio" element={<CreatePortFolio />} />
        <Route path="/sign-in/*" element={<Signin />} />
        <Route path="/account-opening/*" element={<AccountOpen />} />
        <Route path="/margin-calculator/*" element={<ElementCalculator />} />
        <Route path="/premium-calculator/*" element={<PremiumCalculator />} />
        <Route
          path="/brokerage_calculator/"
          element={<BrokerageCalculator />}
        />
        <Route path="/charges/*" element={<Charges />} />
        <Route path="/contactus/*" element={<Contact />} />
        <Route path="/createTicket/*" element={<Createticket />} />
        <Route
          path="/investment-philosophy/*"
          element={<InvestmentPhilosophy />}
        />
        <Route
          path="/bank-account-details/*"
          element={<RegisteredBankDetails />}
        />
        <Route path="/careers/*" element={<Careers />} />
        <Route path="/branches/*" element={<Branches />} />
        <Route path="/share-market-news/" element={<MorningReports />} />
        <Route path="/investment-grievance/*" element={<InvestorGreivance />} />
        <Route
          path="/account-opening-process/*"
          element={<AccountOpenProcess />}
        />
        <Route
          path="/form-center-resources/*"
          element={<FormCenterResource />}
        />
        <Route path="/kyc-checklist/*" element={<KycChecklist />} />
        <Route path="/ats-policy/*" element={<AtsPolicy />} />
        <Route path="/how-to-file-complaint/*" element={<FileComplaint />} />
        <Route path="/holiday-calendar/*" element={<MarketCalender />} />
        <Route path="/posts/*" element={<Posts />} />
        <Route path="/posts/detail" element={<PostDetails />} />
        <Route path="/circulars/" element={<Circular />} />
        <Route path="/mutual-funds/*" element={<Mutualfunds />} />
        <Route path="/analyst_opinions/" element={<Analystopinion />} />
        <Route path="/investor-charter-dp/" element={<Dps />} />
        <Route
          path="/investor-charter-stock-broker/"
          element={<Stockbroker />}
        />
        <Route path="/monthly-disclosure-dp/" element={<DpsMonthly />} />
        <Route
          path="/monthly-disclosure-stockbroker/"
          element={<StockMonthly />}
        />
        <Route path="/companypage/colpal/" element={<CompanyPages />} />
        <Route path="/theft-identity/" element={<Theft />} />
      </Routes>
    </>
  );
}

export default App;
