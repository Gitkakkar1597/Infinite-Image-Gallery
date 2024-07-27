import React from 'react';
import { ImageModalProps } from '../types/interfaces';

// Functional component for image modal
const ImageModal: React.FC<ImageModalProps> = ({ url, alt, description, links, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times; {/* Close button */}
        </button>
        <img src={url} alt={alt} className="modal-image" />
        <div className="modal-info">
          <p>{description}</p>
          <a href={links?.download || '#'} target="_blank" rel="noopener noreferrer" className="download-button">
            Download Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
