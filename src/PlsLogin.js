import React from 'react';

const PlsLogin = () => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        marginTop: 2,
        marginBottom: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          border: '1px solid #ff3d00',
          width: '85%',
          backgroundColor: '#fbe9e7',
          padding: '0.5rem',
          borderRadius: '0.25rem',

          position: 'relative',
        }}
      >
        <p
          style={{
            color: '#e64141',
            fontSize: '12px',
            paddingLeft: '10px',
          }}
        >
          Please Login with your Mobile Number
        </p>
        <p style={{ color: '#374948', fontSize: '12px', paddingLeft: '10px' }}>
          {' '}
          Login to access our stock recommendation and many more offerings..{' '}
        </p>
        <button
          style={{
            cursor: 'pointer',
            borderRadius: '0.25rem',
            color: '#fff',
            backgroundColor: '#dc3545',
            borderColor: '#dc3545',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'middle',
            fontWeight: 400,
            marginTop: '8px',
            marginLeft: '8px',
            marginRight: '8px',
            border: '1px solid',
            paddingTop: '7px',
            paddingBottom: '7px',
            paddingLeft: '12px',
            paddingRight: '12px',
          }}
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

export default PlsLogin;
