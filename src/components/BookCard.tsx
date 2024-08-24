import React from 'react';

interface BookCardProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, description, link, img }) => {
  return (
    <div className="book-card">
      <div className="book-card-image">
        <img src={`${img}`} alt={`${title} Book Cover`} width="350px" height="auto" />
      </div>
      <div className="book-card-details">
        <h2>{title}</h2>
        <p>{description}</p>
        {link === 'https://www.amazon.com/' ? (<p className="buy-amazon-button">
          Coming Soon!
        </p>) : (<a href={link} className="buy-amazon-button" target="_blank" rel="noopener noreferrer">
          Buy on Amazon
        </a>)}
      </div>
    </div>
  );
};

export default BookCard;
