import React from 'react';
import {usePcGames, useBrowserGames} from '../data';
import MiniCardRow from './miniCardRow';

const MainCatalogue = () => {
    const pcGames = usePcGames();
    const browserGames = useBrowserGames();
    return (  
        <>
            <MiniCardRow data={browserGames?.slice(0, 12) || []} />
        </>
    );
}
 
export default MainCatalogue;