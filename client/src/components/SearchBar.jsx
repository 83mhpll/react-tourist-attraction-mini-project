import React, { useState } from 'react';

const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  onSearchSubmit = () => {},
  placeholder = "ค้นหาที่เที่ยว...",
  showSuggestions = false 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    onSearchSubmit(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="search-container">
      <div className={`search-input-wrapper ${isFocused ? 'focused' : ''}`}>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {searchTerm && (
          <button 
            type="button"
            className="clear-input-btn"
            onClick={handleClear}
            title="ล้างข้อความ"
          >
            ✕
          </button>
        )}
        
        <div className="search-icon">
          🔍
        </div>
      </div>
      
      <button className="search-btn" onClick={handleSearch}>
        ค้นหา
      </button>

      {showSuggestions && isFocused && !searchTerm && (
        <div className="search-suggestions">
          <p className="suggestions-title">คำค้นหายอดนิยม:</p>
          <div className="suggestion-tags">
            <button onClick={() => onSearchChange('เกาะ')}>เกาะ</button>
            <button onClick={() => onSearchChange('ภูเขา')}>ภูเขา</button>
            <button onClick={() => onSearchChange('คาเฟ่')}>คาเฟ่</button>
            <button onClick={() => onSearchChange('ธรรมชาติ')}>ธรรมชาติ</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

