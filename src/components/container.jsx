import './container.css';
import GameList from './gameList';
import React from 'react';
import Title from './title';
import useAllGames from '../data';

const Container = () => {
  const games = useAllGames();

  return (
    <div className='main-container featured-games'>
      <Title text={'Featured Games'}></Title>
      <GameList games={games || []}></GameList>
    </div>
  );
};

export default Container;
