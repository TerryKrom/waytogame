import React, { useState, useEffect } from 'react';
import Title from './title';
import './container.css';
import './mainGame.css';
import GameContainer from './gameContainer';
import fetchData from '../fetchApi'; // Import the fetchData function

const MainGame = () => {
  const [gameData, setGameData] = useState(null);
  const [gameDataBrowser, setGameDataBrowser] = useState(null);

  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc')
      .then(result => setGameData(result))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser')
      .then(result => setGameDataBrowser(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <div className="row">
        <div className='main-container' style={{ width: 407 + 'px' , margin: 38 + 'px'}}>
          <Title text={'Game of the Week'}></Title>
          <GameContainer game={gameData}></GameContainer>
        </div>
        <div className='main-container' style={{ width: 407 + 'px' , margin: 38 + 'px'}}>
          <Title text={'Game of the Week'}></Title>
          <GameContainer game={gameDataBrowser}></GameContainer>
        </div>
        <div className='main-container' style={{ width: 407 + 'px' , margin: 38 + 'px'}}>
          <Title text={'Game of the Week'}></Title>
          <GameContainer game={gameData}></GameContainer>
        </div>
      </div>
    </>
  );
};

export default MainGame;
