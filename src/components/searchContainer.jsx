import React from 'react';
import './searchContainer.css';

const SearchContainer = () => {
    return (  
        <div className="search-container">
            <div className="search-inputs">
                <input type="text" name="searchbar" id="searchbar" />
                <button className='fa fa-search'></button>
            </div>
        </div>
    );
}
 
export default SearchContainer;