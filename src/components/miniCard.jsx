import React from 'react';
import './miniCard.css';

/**MINI CARD FOR CATEGORIES PAGE */


const MiniCard = (props) => {
    return (
        <div className="mini-card">
            <img src={props.game.thumbnail} alt="game thumbnail" />
            <div className="mini-card-body">
                <h2>{props.game.title}</h2>
                <p>
                    <span> Platform: </span>
                    <span>{props.game.platform}</span>
                </p>
                <p>
                    <span>Release year: </span>
                    <span>{props.game.release_date.slice(0, props.game.release_date.indexOf("-"))}</span>
                </p>
                <a href={props.game.game_url}>See More</a>
            </div>
        </div>
    )
}

export default MiniCard;