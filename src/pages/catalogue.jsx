import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';

const Catalogue = () => {
    return (  
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg titleText={'Catalogue'}></ContainerLg>
            <Footer></Footer>
        </>
    );
}
 
export default Catalogue;