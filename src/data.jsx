import { useState, useEffect } from 'react';
import fetchData from './fetchApi';

const usePcGames = () => {
  const [pcGames, setPcGames] = useState(null);

  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity')
      .then(result => setPcGames(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return pcGames;
};

const useBrowserGames = () => {
  const [browserGames, setBrowserGames] = useState(null);

  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=relevance')
      .then(result => setBrowserGames(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return browserGames;
};

const useAllGames = () => {
  const [allGames, setAllGames] = useState(null);

  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all&sort-by=relevance')
      .then(result => setAllGames(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return allGames;
};

const usePopularGames = () => {
  const [popularGames, setPopularGames] = useState(null);
  
  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all&sort-by=popularity')
      .then(result => setPopularGames(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return popularGames;
}

const useAzGames = () => {
  const [azGames, setAzGames] = useState(null);
  
  useEffect(() => {
    fetchData('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all&sort-by=popularity')
      .then(result => setAzGames(result))
      .catch(error => console.error('Error:', error));
  }, []);

  return azGames;
}



export { usePcGames, useBrowserGames , useAllGames, usePopularGames, useAzGames};

export default useAllGames;