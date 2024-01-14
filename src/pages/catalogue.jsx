import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';
import SearchContainer from '../components/searchContainer';
import DescCardRow from '../components/descCardRow';
import MainCatalogue from '../components/mainCatalogue.jsx';

const Catalogue = () => {
    return (  
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg
            titleText={"Best Browser Games"}
            inside={<MainCatalogue/>}
            />
            <ContainerLg 
            titleText={"Recomendations"}
            inside={<DescCardRow />}
            />
            <Footer></Footer>
        </>
    );
}
 
export default Catalogue;