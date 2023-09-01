import React from 'react';
import './App.css';
import Header from './components/header';
import Container from './components/container';
import Separator from './components/separator';
import MainGame from './components/mainGame';
function App() {
  return(
    <>
      <Header></Header>
      <Separator></Separator>
      <MainGame/>
      <Container></Container>
      </>
  )
}

export default App;
