import React from 'react';
import Tag from './Tag';

const TripCard = ({ trip, onTagClick }) => {
  const handleCopyLink = () => {
    const url = window.location.href + '#' + encodeURIComponent(trip.title);
    
    navigator.clipboard.writeText(url).then(() => {
      alert('คัดลอกลิงก์แล้ว!');
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('คัดลอกลิงก์แล้ว!');
    });
  };

  const fallbackMain = 'https://via.placeholder.com/600x400?text=No+Image';
  const handleImageError = (e) => {
    e.currentTarget.src = fallbackMain;
  };
  const handleThumbError = (e) => {
    e.currentTarget.src = 'https://via.placeholder.com/90?text=No+Img';
  };

  return (
    <div className="card-wrapper">
      <div className="trip-card">
        <div className="card-content">
          <img
            src={trip.image || fallbackMain}
            alt={trip.title}
            className="card-image"
            loading="lazy"
            onError={handleImageError}
          />
          <div className="card-info">
            <h2 className="card-title">{trip.title}</h2>
            <p className="card-description">{trip.description}</p>
            
            <div className="tags-container">
              <span className="tags-label">หมวด</span>
              {trip.tags.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag}
                  onClick={() => onTagClick(tag)}
                />
              ))}
            </div>
            
            {trip.gallery && trip.gallery.length > 0 && (
              <div className="photo-gallery">
                {trip.gallery.map((photo, index) => (
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
            )}
          </div>
        </div>
      </div>
      
      <button
        className="copy-btn"
        onClick={handleCopyLink}
        title="คัดลอกลิงก์"
      >
        🔗
      </button>
    </div>
  );
};

export default TripCard;

