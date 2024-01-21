import React from 'react';
import Header from '../components/header';
import MainGame from '../components/mainGame';
import Container from '../components/container';
import Footer from '../components/footer';
import ContainerLg from '../components/container-lg';
import PopularContainer from '../components/popularContainer';
import DescCardRow from '../components/descCardRow';
import ScrollToTopButton from '../components/global/scrollBtn';

const Home = () => {
    return (
        <>
            <Header />
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
            <ScrollToTopButton/>
        </>
    );
}

export default Home;