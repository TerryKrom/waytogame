import './container.css';
import GameList from './gameList';
import React, { useState, useEffect } from 'react';
import Title from './title';
import fetchData from '../fetchApi'; // Import the fetchData function

const Container = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all') // Call the fetchData function
      .then(result => setGames(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='main-container featured-games'>
      <Title text={'Featured Games'}></Title>
      <GameList games={games}></GameList>
    </div>
  );
};

export default Container;
