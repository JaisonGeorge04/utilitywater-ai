import React from 'react';

/**
 * Component for displaying technical team images from DOCX
 * with Visual Title, Description, and Alt Text.
 */
export default function DocxImage({ src, title, description, alt, cropHeader = false }) {
  return (
    <figure className="docx-visual-container" style={{ margin: '2rem 0' }}>
      <div className={`docx-visual-image-wrapper ${cropHeader ? 'crop-header' : ''}`}>
        <img 
          src={src} 
          alt={alt || title || 'Water Utility Technical Visual'} 
          className="docx-visual-image"
          loading="lazy"
        />
      </div>
      {(title || description) && (
        <figcaption className="docx-visual-caption">
          {title && <h3 className="docx-visual-title">{title}</h3>}
          {description && <p className="docx-visual-desc">{description}</p>}
        </figcaption>
      )}
    </figure>
  );
}
