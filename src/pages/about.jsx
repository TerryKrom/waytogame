import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';
import MainAbout from '../components/main-about';

const About = () => {
    return (
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg titleText={"About"} inside={<MainAbout/>}></ContainerLg>
        </>
    );
}

export default About;