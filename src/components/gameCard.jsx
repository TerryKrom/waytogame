import React from 'react';
import './gameCard.css';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div className="game-card-body">
                <img src={game.thumbnail} alt=""/>
                <div className="game-card-text">
                    <h2>{game.title}</h2>
                    <p className='platform'>Platform: {game.platform}</p>
                    <p>Genre: {game.genre}</p>
                    <div className="center">
                      <a href={game.game_url} className="center" target='_blank'>Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
