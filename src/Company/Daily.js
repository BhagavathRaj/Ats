import { Grid } from '@mui/material';
import React from 'react';
import './Company.css';

const Daily = () => {
  return (
    <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
      <p> Technical Rating </p>
      <span
        style={{
          color: '#374948 ',
          backgroundColor: '#ffd400',
          borderRadius: '100px',
          maxWidth: '120px',
          display: 'block',
          paddingLeft: '7px',
          paddingRight: '7px',
          paddingBottom: '5px',
          paddingTop: '5px',
          textAlign: 'center',
        }}
      >
        Neutral
      </span>
      <Grid container xs={12}>
        <Grid item md={6}></Grid>
        <Grid item x2={12} md={6}>
          <table className="smalltable">
            <tbody>
              <tr>
                <td>Open</td>
                <td>22 1</td>
              </tr>
              <tr>
                <td>High</td>
                <td>221.7</td>
              </tr>
              <tr>
                <td>Low</td>
                <td>217</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>222</td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <div>
            {' '}
            <h4 className="hh4">Pivot Levels</h4>{' '}
          </div>
          <div>
            <table className="smalltable">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    R1
                  </th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    R2
                  </th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    R3
                  </th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    PP
                  </th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    S1
                  </th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    S2
                  </th>
                  <th style={{ paddingLeft: '10px' }} scope="col">
                    S3
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Classic</th>
                  <td>221.68</td>
                  <td>224</td>
                  <td>226.38</td>
                  <td>217.6</td>
                  <td>217.78</td>
                  <td>214</td>
                  <td>212.28</td>
                </tr>
                <tr>
                  <th scope="row">Fibonacci</th>
                  <td>221.68</td>
                  <td>224</td>
                  <td>226.38</td>
                  <td>217.6</td>
                  <td>217.78</td>
                  <td>214</td>
                  <td>212.28</td>
                </tr>
                <tr>
                  <th scope="row">Camarilla</th>
                  <td>221.68</td>
                  <td>224</td>
                  <td>226.38</td>
                  <td>217.6</td>
                  <td>217.78</td>
                  <td>214</td>
                  <td>212.28</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Daily;
