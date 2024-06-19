import React from 'react';
import './card.css';

const Card = ({ src }) => {
  return (
    <div className="card">
      <img src={src} alt="Gradient" />
    </div>
  );
};

export default Card;
