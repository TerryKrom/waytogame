import React from 'react';
import './miniCard.css';

const MiniCard = (props) => {
    return (  
        <div className="mini-card">
            <img src={props.thumbnail} alt="game image" />
            <h2>{props.title}</h2>
        </div>
    );
}
 
export default MiniCard;