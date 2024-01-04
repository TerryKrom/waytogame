import React from 'react';
import './gameCard.css';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div className="game-card-body">
                <img src={game.thumbnail} alt="" />
                <div className="game-card-text">
                    <h2>{game.title}</h2>
                    <p className='platform'>
                        <span>Platform:</span>
                        <span>
                            {game.platform.includes("(") ? game.platform.slice(0, game.platform.indexOf("(")) : game.platform}
                        </span>
                    </p>
                    <p>
                        <span>Genre:</span>
                        <span>{game.genre}</span>
                    </p>
                    <div className="center">
                        <a href={game.game_url} className="center" target='_blank' rel='noreferrer'>See More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
