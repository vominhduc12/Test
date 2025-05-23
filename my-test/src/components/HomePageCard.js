// src/components/HomepageCard.js
import React from 'react';
import "../CSS/HomePageCard.css";

const HomepageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="homepage-card">
      <img src={imageSrc} alt={title} className="homepage-card-image" />
      <div className="homepage-card-title">{title}</div>
      {description && <div className="homepage-card-description">{description}</div>}
    </div>
  );
};

export default HomepageCard;