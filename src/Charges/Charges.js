import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from '../LandingPage';
import FooterContent from '../Footer/FooterContent';
import './Charges.css';
import Equity from './Equity';
import Commodity from './Commodity';
import Currency from './Currency';
import OtherCharges from './OtherCharges';
import SelectButton from '../Buttons/SelectButton';
import './Transition.css'; // Import the CSS for transitions

const Charges = () => {
  const [selected, setSelected] = useState('Equity');
  const renderComponent = () => {
    switch (selected) {
      case 'Equity':
        return <Equity />;
      case 'Commodity':
        return <Commodity />;
      case 'Currency':
        return <Currency />;
      case 'OtherCharges':
        return <OtherCharges />;
      default:
        return <Equity />;
    }
  };

  return (
    <div>
      <LandingPage />
      <div className="charge-row">
        <div
          style={{ textAlign: 'center', flex: '0 0 100%', maxWidth: '100%' }}
        >
          <h2 className="charge-title">Charges</h2>
          <h6 style={{ fontSize: '16px' }}>
            Here is the list of all the Charges
          </h6>
        </div>
        <div className="grid-Charge1">
          <div className="price">
            <h2>
              <span className="fo-26">₹</span>
              <span className="fo-30">0</span>
            </h2>
          </div>
          <div className="price-head">
            <h3>Free Intraday Delivery & AMC</h3>
          </div>
          <div className="price-text">
            <h6>
              (All intraday trading, delivery investment (NSE,BSE), AMC, IPO &
              Mutual Fund Commission is absolutely free - ₹0)
            </h6>
          </div>
        </div>
        <div className="grid-Charge1">
          <div className="price">
            <h2>
              <span className="fo-30">0.01</span>
              <span className="fo-26">%</span>
            </h2>
          </div>
          <div className="price-head">
            <h3>Futures Trade</h3>
          </div>
          <div className="price-text">
            <h6>Equity, Commodity, Currency</h6>
          </div>
        </div>
        <div className="grid-Charge1">
          <div className="price">
            <h2>
              <span className="fo-26">₹</span>
              <span className="fo-30">10</span>
            </h2>
          </div>
          <div className="price-head">
            <h3>Options Trade</h3>
          </div>
          <div className="price-text">
            <h6>Equity, Commodity, Currency</h6>
          </div>
        </div>
        <div
          style={{ marginTop: '70px', textAlign: 'center' }}
          className="fullCharge"
        >
          <h2>Bifurcation Of Statutory Charges</h2>
        </div>
        <div className="fullCharge">
          <div className="charge-list">
            <div className="text-center">
              <ul className="charger-nav">
                <li className="charger-nav-li">
                  <SelectButton
                    onClick={() => setSelected('Equity')}
                    selected={selected === 'Equity'}
                  >
                    Equity
                  </SelectButton>
                </li>
                <li className="charger-nav-li">
                  <SelectButton
                    onClick={() => setSelected('Commodity')}
                    selected={selected === 'Commodity'}
                  >
                    Commodity
                  </SelectButton>
                </li>
                <li className="charger-nav-li">
                  <SelectButton
                    onClick={() => setSelected('Currency')}
                    selected={selected === 'Currency'}
                  >
                    Currency
                  </SelectButton>
                </li>
                <li className="charger-nav-li">
                  <SelectButton
                    onClick={() => setSelected('OtherCharges')}
                    selected={selected === 'OtherCharges'}
                  >
                    Other Charges
                  </SelectButton>
                </li>
              </ul>
            </div>
            <TransitionGroup className="chargetabcontent">
              <CSSTransition key={selected} timeout={300} classNames="fade">
                {renderComponent()}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default Charges;
