import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  return (
    <CircularProgress
      style={{
        position: 'absolute',
        left: 'calc(50% - 50px)',
        right: 'calc(50% - 50px)',
        width: '100px',
        top: '30vh',
      }} />);
};

export default Loader;
