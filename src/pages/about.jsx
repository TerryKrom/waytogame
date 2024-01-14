import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';
import MainAbout from '../components/mainAbout';
import Footer from '../components/footer';

const About = () => {
    return (
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg titleText={"About"} inside={<MainAbout/>}/>
            <Footer></Footer>
        </>
    );
}

export default About;