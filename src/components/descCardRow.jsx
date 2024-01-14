import React from 'react';
import DescCard from './descCard';
import './descCardRow.css'
import { usePopularGames } from '../data';

const DescCardRow = () => {
    const popularGames = usePopularGames();
    const limitedPopularGames = popularGames?.slice(0,4);

    return (
        <div className='desc-card-row'>
            {limitedPopularGames?.map((game, index) => (
                <DescCard key={index} game={game}/>
            ))}
        </div>
    );
}

export default DescCardRow;
