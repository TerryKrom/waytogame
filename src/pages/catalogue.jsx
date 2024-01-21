import React from 'react';
import Header from '../components/header';
import ContainerLg from '../components/container-lg';
import Footer from '../components/footer';
import MainCatalogue from '../components/mainCatalogue.jsx';
import { useAzGames } from '../data.jsx';
import ScrollToTopButton from '../components/global/scrollBtn.jsx';

const Catalogue = () => {
    const azGames = useAzGames();

    return (
        <>
            <Header/>
            <ContainerLg
                titleText={"Games from A - Z"}
                inside={<MainCatalogue data={azGames || []} itemsPerPage={21} />}
            />
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}

export default Catalogue;