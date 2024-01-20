import React from 'react';
import './miniCard.css';

/**MINI CARD FOR CATEGORIES PAGE */


const MiniCard = (props) => {

    const filterTitle = (title) => {
        if(title.length > 30){
            return title.slice(0,30)
        }else{
            return title
        }
    }

    return (
        <div className="mini-card">
            <img src={props.game.thumbnail} alt="game thumbnail" />
            <div className="mini-card-body">
                <h2>{filterTitle(props.game.title)}</h2>
                <p>
                    <span> Platform: </span>
                    <span>{props.game.platform}</span>
                </p>
                <p>
                    <span>Release year: </span>
                    <span>{props.game.release_date.slice(0, props.game.release_date.indexOf("-"))}</span>
                </p>
                <a href={props.game.game_url} target='_blank' rel='noreferrer'>See More</a>
            </div>
        </div>
    )
}

export default MiniCard;