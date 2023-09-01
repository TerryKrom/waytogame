import React from 'react';
import GameCard from './gameCard';

const GameContainer = ({ game }) => {
    if (!game) {
        return <div align="center">Loading...</div>; // ou qualquer outra indicação de carregamento
    }
    let index = Math.floor(Math.random() * (game.length - 3)); // Subtrai 3 para garantir que haja espaço para 4 jogos consecutivos

    return (
        <GameCard game={game[index]} />
    );
}

export default GameContainer;
