import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import MainGame from '../components/mainGame';
import Container from '../components/container';
import Footer from '../components/footer';
import ContainerLg from '../components/container-lg';
import PopularContainer from '../components/popularContainer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Separator></Separator>
            <MainGame />
            <Container></Container>
            <ContainerLg titleText={"Popular games"} inside={<PopularContainer/>}></ContainerLg>
            <Footer></Footer>
        </>
    );
}

export default Home;