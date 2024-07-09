import React from 'react';
import './Politicalnews.css';
import classNames from 'classnames';
import '../App.css';

const PoliticalNews = () => {
  return (
    <div
      className={classNames('politicalnewscontainer', 'scrollable-container')}
    >
      <div className="shadowbox">
        <div>
          <p className="companyName">
            Duluth News Tribune. Sat, 29 Jun 2024 11:18:03 GMT
          </p>
          <p className="newsHeading">
            Reader's View: Sense of community giving way to political exclusion
            - Duluth News Tribune
          </p>
        </div>
        <div>
          <img
            className="rounded"
            style={{
              maxHeight: '150px',
              verticalAlign: 'middle',
              borderStyle: 'none',
            }}
            alt="Not Found"
            src=""
          />
        </div>
      </div>
      <div className="shadowbox">
        <div>
          <p className="companyName">
            Duluth News Tribune. Sat, 29 Jun 2024 11:18:03 GMT
          </p>
          <p className="newsHeading">
            Reader's View: Sense of community giving way to political exclusion
            - Duluth News Tribune
          </p>
        </div>
        <div>
          <img
            className="rounded"
            style={{
              maxHeight: '150px',
              verticalAlign: 'middle',
              borderStyle: 'none',
            }}
            alt="Not Found"
            src=""
          />
        </div>
      </div>
      <div className="shadowbox">
        <div>
          <p className="companyName">
            Duluth News Tribune. Sat, 29 Jun 2024 11:18:03 GMT
          </p>
          <p className="newsHeading">
            Reader's View: Sense of community giving way to political exclusion
            - Duluth News Tribune
          </p>
        </div>
        <div>
          <img
            className="rounded"
            style={{
              maxHeight: '150px',
              verticalAlign: 'middle',
              borderStyle: 'none',
            }}
            alt="Not Found"
            src=""
          />
        </div>
      </div>
    </div>
  );
};

export default PoliticalNews;
