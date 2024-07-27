// src/components/ImageCard.tsx
import React from 'react';
import { ImageCardProps } from '../types/interfaces';
import './ImageCard.css'; // Import the external CSS file

// Functional component for image card
const ImageCard: React.FC<ImageCardProps> = ({ url, alt, tags, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={url} alt={alt} className="image" />
      <div className="image-card-content">
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span> // Render tags
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
