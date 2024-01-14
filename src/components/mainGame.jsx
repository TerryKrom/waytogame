import React from 'react';
import Title from './title';
import './container.css';
import './mainGame.css';
import GameContainer from './gameContainer';
import { useBrowserGames, usePcGames } from '../data';

const MainGame = ( {type} ) => {
  const pcGames = usePcGames();
  const browserGames = useBrowserGames();

  const types = {
    "pc": pcGames,
    "browser": browserGames,
  }

  return (
    <>
      <div className="row main-game">
        <div className='main-container'>
          <Title text={'Game of the Week'}></Title>
          <GameContainer game={types[type] || []}></GameContainer>
        </div>
        <div className='main-container'>
          <Title text={'Game of the Week'}></Title>
          <GameContainer game={types[type] || []}></GameContainer>
        </div>
      </div>
    </>
  );
};

export default MainGame;
