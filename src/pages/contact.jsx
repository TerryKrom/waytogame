import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';
import MainContact from '../components/mainContact';

const Contact = () => {
    return (  
        <>
            <Header/>
            <ContainerLg 
            titleText={"Contact Us"}
            inside={<MainContact/>}
            />
            <Footer/>
        </>
    );
}
 
export default Contact;