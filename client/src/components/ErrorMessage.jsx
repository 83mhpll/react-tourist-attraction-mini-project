import React from 'react';

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="error-message">
      <div className="error-content">
        <h3>เกิดข้อผิดพลาด</h3>
        <p>{error}</p>
        {onRetry && (
          <button className="retry-btn" onClick={onRetry}>
            ลองใหม่
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;