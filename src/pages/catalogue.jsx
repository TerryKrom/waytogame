import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';

const Catalogue = () => {
    return (  
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg titleText={'Catalogue'}></ContainerLg>
        </>
    );
}
 
export default Catalogue;