import React from 'react';

const Gallery = ({ photos = [] }) => {
  const handleThumbError = (e) => {
    e.currentTarget.src = 'https://via.placeholder.com/90?text=No+Img';
  };

  if (!photos || photos.length === 0) return null;

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo || 'https://via.placeholder.com/90?text=No+Img'}
          alt={`Gallery ${index + 1}`}
          className="gallery-photo"
          loading="lazy"
          onError={handleThumbError}
        />
      ))}
    </div>
  );
};

export default Gallery;


