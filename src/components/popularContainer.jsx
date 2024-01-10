import fetchData from '../fetchApi';
import GameList from './gameList';
import React, { useState, useEffect } from 'react';

/** CONTAINER FOR HOME PAGE > POPULAR GAMES */
const PopularContainer = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all&sort-by=relevance') // Call the fetchData function
            .then(result => setGames(result))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
            <GameList games={games}></GameList>
        </>
    );
}

export default PopularContainer;