import React from 'react';
import MiniCard from './miniCard';

const MiniCardRow = ({ data }) => {
    return (
        <div className="mini-card-row">
            {data.map((game, index) => (
                <MiniCard game={game} key={index} />
            ))}
        </div>
    );
};

export default MiniCardRow;
