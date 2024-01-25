import React, { useState, useEffect } from 'react';
import MiniCard from './miniCard';
import Loading from './global/loading';

const MiniCardRow = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            {isLoading ? <Loading /> : 
            <div className="mini-card-row">
                {data.map((game, index) => (
                    <MiniCard game={game} key={index} />
                ))}
            </div>
            }
        </>

    );
};

export default MiniCardRow;
