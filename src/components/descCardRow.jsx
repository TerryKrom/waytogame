import React, { useState, useEffect } from 'react';
import fetchData from '../fetchApi';
import DescCard from './descCard';
import './descCardRow.css'

const DescCardRow = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all&sort-by=popularity')
            .then(result => setGames(result.slice(1, 5)))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className='desc-card-row'>
            {games.map((game, index) => (
                <DescCard key={index} game={game}/>
            ))}
        </div>
    );
}

export default DescCardRow;
