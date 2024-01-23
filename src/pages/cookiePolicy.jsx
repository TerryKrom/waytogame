import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';

const CookiePolicy = () => {
    return (
        <>
            <Header />
            <ContainerLg
                titleText={"Cookie Policy"}
                inside={<h2>Cookies</h2>}
            />
            <Footer />
        </>
    );
}

export default CookiePolicy;