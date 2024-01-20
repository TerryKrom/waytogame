import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import MainGame from '../components/mainGame';
import Container from '../components/container';
import Footer from '../components/footer';
import ContainerLg from '../components/container-lg';
import PopularContainer from '../components/popularContainer';
import DescCardRow from '../components/descCardRow';

const Home = () => {
    return (
        <>
            <Header />
            <Separator />
            <MainGame
                type={"pc"} 
            />
            <Container />
            <ContainerLg
                titleText={"Recomendations"}
                inside={<DescCardRow start={0}/>}
            />
            <MainGame 
                type={"browser"} 
            />
            <ContainerLg
                titleText={"Popular games"}
                inside={<PopularContainer />}
            />
            <ContainerLg
                titleText={"Recomendations"}
                inside={<DescCardRow start={5}/>}
            />
            <Footer />
        </>
    );
}

export default Home;