import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';

const Contact = () => {
    return (  
        <>
            <Header/>
            <ContainerLg 
            titleText={"Contact Us"}
            inside={<h2>Contact us</h2>}
            />
            <Footer/>
        </>
    );
}
 
export default Contact;