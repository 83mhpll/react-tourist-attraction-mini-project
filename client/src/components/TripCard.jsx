import React from 'react';
import Tag from './Tag';
import Gallery from './Gallery';
import CopyLinkButton from './CopyLinkButton';

const TripCard = ({ trip, onTagClick }) => {

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
            
            <Gallery photos={trip.gallery} />

            {trip.readMoreUrl && (
              <a
                className="read-more-btn"
                href={trip.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                อ่านต่อ
              </a>
            )}
          </div>
        </div>
      </div>

      <CopyLinkButton title={trip.title} />
    </div>
  );
};

export default TripCard;

