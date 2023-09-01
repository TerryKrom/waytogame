import React from 'react';
import './card.css'
const Card = ({ game }) => {
    const cardStyle = {
      background: `url(${game.thumbnail})` // Note o uso de template literals aqui
    };
  
    return (
      <div className="card" style={cardStyle}>

        <div className="card-text">
            <h2>{game.title}</h2>
            <p>{game.short_description}</p>
        </div>

      </div>
    );
  };
   
export default Card;