import React, { useState } from 'react';
import './ElementCalculator.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SuccessButton from '../Buttons/Success';
import BorderButton from '../Buttons/BorderButton';
import IntraDay from './IntraDay';
import Delivery from './Delivery';
const Equity = () => {
  const [selected, setSelected] = useState('IntraDay');
  const renderComponent = () => {
    switch (selected) {
      case 'IntraDay':
        return <IntraDay />;
      case 'Delivery':
        return <Delivery />;

      default:
        return <IntraDay />;
    }
  };

  return (
    <div>
      <div className="Broker-container">
        <div className="column-md">
          <div className="Broker-container">
            <div className="brokerage-calc">
              <div className="Broker-container">
                <div className="Broker-Small-container">
                  <p>
                    <b style={{ fontSize: '14px', fontWeight: '400' }}>
                      Enter these details to calculate brokerage
                    </b>
                  </p>
                  <div className="form-group">
                    <label className="labels">Buy Price</label>

                    <div className="BoxContent">
                      <CurrencyRupeeIcon sx={{ height: '20px' }} />
                      <input
                        type="text"
                        className="formcontroll"
                        autoComplete="off"
                        style={{ outline: 'none', border: 'none' }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="labels">Sell Price</label>

                    <div className="BoxContent">
                      <CurrencyRupeeIcon sx={{ height: '20px' }} />
                      <input
                        type="text"
                        className="formcontroll"
                        autoComplete="off"
                        style={{ outline: 'none', border: 'none' }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="labels">Qty</label>

                    <div className="BoxContent">
                      <CurrencyRupeeIcon sx={{ height: '20px' }} />
                      <input
                        type="text"
                        className="formcontroll"
                        autoComplete="off"
                        style={{ outline: 'none', border: 'none' }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="labels">Brokerage</label>

                    <div className="BoxContent">
                      <CurrencyRupeeIcon sx={{ height: '20px' }} />
                      <input
                        type="text"
                        className="formcontroll"
                        autoComplete="off"
                        style={{ outline: 'none', border: 'none' }}
                      />
                    </div>
                  </div>
                  <div style={{ minWidth: '250px' }} className="form-group">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <label className="labels">
                        Nse
                        <input type="radio" />
                      </label>
                      <label className="labels">
                        Bse
                        <input type="radio" />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <SuccessButton name="Clear" />
                  </div>
                </div>
                <div className="Broker-Small-container-right">
                  <div
                    style={{
                      width: '100%',

                      backgroundColor: '#f8f9fa',
                      padding: '15px',
                      borderRadius: '5px',
                    }}
                  >
                    <nav>
                      <div>
                        <BorderButton
                          selected={selected === 'IntraDay'}
                          onClick={() => setSelected('IntraDay')}
                        >
                          IntraDay
                        </BorderButton>
                        <BorderButton
                          selected={selected === 'Delivery'}
                          onClick={() => setSelected('Delivery')}
                        >
                          Delivery
                        </BorderButton>{' '}
                      </div>
                    </nav>

                    {renderComponent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equity;
