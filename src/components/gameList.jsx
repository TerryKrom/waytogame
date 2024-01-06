import React from 'react';
import Card from './card';
import './gameList.css'

const GameList = ({ games }) => {
    let index = Math.floor(Math.random() * (games.length - 3)); // Subtrai 3 para garantir que haja espaço para 4 jogos consecutivos

    return (
    <div className="card-list">
        {games.slice(index, index + 12).map((game, cardIndex) => (
            <Card key={cardIndex} game={game} />
        ))}
    </div>
    );
  };
  
export default GameList;
