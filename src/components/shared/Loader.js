import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  return (
    <div style={{
      top: '0',
      left: '0',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <CircularProgress size={100} />
    </div>);
};

export default Loader;
