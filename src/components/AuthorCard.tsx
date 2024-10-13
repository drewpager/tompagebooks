import React from 'react';
import '../styles.css';

interface AuthorCardProps {
  name: string;
  description: string;
  img: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, description, img }) => {
  return (
    <div className="author-card-section">
      <div className="author-card-image">
        <img src={`${img}`} alt={`${name} Book Cover`} height="auto" width="450px" />
      </div>
      <div className="author-card-details">
        <p>{description}</p>
        <div className="author-buttons">
          <a href="https://amzn.to/3Nq3NES" className="header-button" target="_blank" rel="noopener noreferrer">
            Amazon
          </a>
          <a href="https://youtube.com/@dailydosedocumentary" className="header-button" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://www.platospeach.com" className="header-button" target="_blank" rel="noopener noreferrer">
            Plato's Peach
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
