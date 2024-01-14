import { usePopularGames } from '../data';
import GameList from './gameList';
import React from 'react';

/** CONTAINER FOR HOME PAGE > POPULAR GAMES */
const PopularContainer = () => {
    const popularGames = usePopularGames();
    return (
        <>
            <GameList games={popularGames || []}></GameList>
        </>
    );
}

export default PopularContainer;