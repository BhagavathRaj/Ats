import React, { useState } from 'react';
import './ElementCalculator.css';
import './Commodity';
import './Currency';
import './Equity';
import './F&O';
import Equity from './Equity';
import FO from './F&O';
import Currency from './Currency';
import Commodity from './Commodity';
import SelectButton from '../Buttons/SelectButton';
const BrokerageCalculator = () => {
  const [selected, setSelected] = useState('Equity');
  const renderComponent = () => {
    switch (selected) {
      case 'Equity':
        return <Equity />;
      case 'F&O':
        return <FO />;
      case 'Currency':
        return <Currency />;
      case 'Commodity':
        return <Commodity />;

      default:
        return <Equity />;
    }
  };
  return (
    <div className="row">
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        className="Broker-container"
      >
        <h5 style={{ marginBottom: '12px' }}> BrokerageCalculator</h5>
        <p>
          Calculate your Net P&L after deducting all the charges like Tax,
          Brokerage, etc.
        </p>
      </div>
      <div className="Broker-container">
        <ul className="Broker-nav">
          <li className="Broker-nav-li">
            <SelectButton
              onClick={() => setSelected('Equity')}
              selected={selected === 'Equity'}
            >
              Equity
            </SelectButton>
          </li>
          <li className="Broker-nav-li">
            <SelectButton
              onClick={() => setSelected('F&O')}
              selected={selected === 'F&O'}
            >
              F&O
            </SelectButton>
          </li>
          <li className="Broker-nav-li">
            <SelectButton
              onClick={() => setSelected('Currency')}
              selected={selected === 'Currency'}
            >
              Currency
            </SelectButton>
          </li>
          <li className="Broker-nav-li">
            <SelectButton
              onClick={() => setSelected('Commodity')}
              selected={selected === 'Commodity'}
            >
              Commodity
            </SelectButton>
          </li>
        </ul>
      </div>
      <div className="Broker-container">{renderComponent()}</div>
    </div>
  );
};

export default BrokerageCalculator;
