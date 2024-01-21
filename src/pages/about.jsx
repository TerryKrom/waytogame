import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import MainAbout from '../components/mainAbout';
import Footer from '../components/footer';

const About = () => {
    return (
        <>
            <Header />
            <ContainerLg
                titleText={"About"}
                inside={<MainAbout />}
            />
            <Footer />
        </>
    );
}

export default About;