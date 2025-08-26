import React from 'react';

const Tag = ({ tag, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(tag);
    }
  };

  const isConnector = tag === 'และ';

  return (
    <span
      className={`tag ${isConnector ? 'tag-connector' : 'tag-clickable'}`}
      onClick={!isConnector ? handleClick : undefined}
      style={{
        cursor: !isConnector ? 'pointer' : 'default',
        opacity: isConnector ? 0.7 : 1
      }}
    >
      {tag}
    </span>
  );
};

export default Tag;
  
  