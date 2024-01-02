import React from 'react';
import './miniCard.css';

const MiniCard = (props) => {
    return (
        <div className="mini-card">
            <img src={props.game.thumbnail} alt="game image" />
            <div className="mini-card-body">
                <h2>{props.game.title}</h2>
                <p>
                    <span> Platform: </span>
                    <span>{props.game.platform}</span>
                </p>
                <p>
                    <span>Release date: </span>
                    <span>{props.game.release_date}</span>
                </p>
                <a href={props.game.game_url}>See More</a>
            </div>
        </div>
    )
}

export default MiniCard;