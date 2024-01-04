import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import MainGame from '../components/mainGame';
import Container from '../components/container';
import Footer from '../components/footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Separator></Separator>
            <MainGame />
            <Container></Container>
            <Footer></Footer>
        </>
    );
}

export default Home;