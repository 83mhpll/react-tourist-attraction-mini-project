import React from 'react';

const LoadingSpinner = ({ message = 'กำลังโหลด...' }) => {
  return (
    <div className="loading">
      <p>{message}</p>
    </div>
  );
};

export default LoadingSpinner;