import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';
import MainCookies from '../components/mainCookies';

const CookiePolicy = () => {
    return (
        <>
            <Header />
            <ContainerLg
                titleText={"Cookie Policy"}
                inside={<MainCookies/>}
            />
            <Footer />
        </>
    );
}

export default CookiePolicy;