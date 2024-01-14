import React from 'react';
import './descCard.css';

const DescCard = ({ game }) => {
    return (
        <>
            <div className="desc-card">
                <img src={game.thumbnail} alt={game.title} />
                <div className="desc-card-text">
                    <h2>{game.title}</h2>
                    <p className='details'>
                        <span>Platform:</span>
                        <span>{game.platform}</span>
                    </p>
                    <p className='details'>
                        <span>Developer:</span>
                        <span>{game.developer}</span>

                    </p>
                    <p>{game.short_description}</p>

                </div>
            </div>
        </>
    );
}

export default DescCard;