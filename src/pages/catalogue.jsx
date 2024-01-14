import React from 'react';
import Header from '../components/header';
import Separator from '../components/separator';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';
// import SearchContainer from '../components/searchContainer';
// import DescCardRow from '../components/descCardRow';
import MainCatalogue from '../components/mainCatalogue.jsx';
import useAzGames from '../data.jsx';

const Catalogue = () => {
    const azGames = useAzGames();

    return (
        <>
            <Header></Header>
            <Separator></Separator>
            <ContainerLg
                titleText={"Games from A - Z"}
                inside={<MainCatalogue data={azGames || []} itemsPerPage={21} />}
            />
            <Footer></Footer>
        </>
    );
}

export default Catalogue;