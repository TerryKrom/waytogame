import React, { useEffect, useState } from 'react';
import GameCard from './gameCard';
import Loading from './global/loading';

const GameContainer = ({ game }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    // Simula uma requisição de dados demorada
    setTimeout(() => {
      try {
        if (!game || game.length < 4) {
          throw new Error('Dados de jogo inválidos'); // Tratamento de erro
        }

        let index = Math.floor(Math.random() * (game.length - 3));
        setGameData(game[index]); // Define os dados do jogo
        setIsLoading(false); // Define isLoading como false
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Define isLoading como false em caso de erro
      }
    }, 2000); // Simula um atraso de 2 segundos
  }, [game]);

  return (
    <div>
      {isLoading ? (
        // Se isLoading for verdadeiro, exibe o spinner de carregamento
        <Loading></Loading>
      ) : (
        // Quando isLoading for false, exibe o componente GameCard com os dados do jogo
        <div>
          {gameData && <GameCard game={gameData} />}
        </div>
      )}
    </div>
  );
};

export default GameContainer;
