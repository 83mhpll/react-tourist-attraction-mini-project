import React from 'react';

const NoResults = ({ searchTerm, onClearSearch }) => {
  return (
    <div className="no-results">
      <div className="no-results-content">
        <h3>ไม่พบผลลัพธ์</h3>
        <p>ไม่พบสถานที่ท่องเที่ยวที่ตรงกับ "{searchTerm}"</p>
        <button className="clear-search-btn" onClick={onClearSearch}>
          แสดงทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default NoResults;