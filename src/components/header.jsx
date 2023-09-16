import React from 'react';
import './header.css'

const Header = () => {
    return (
        <>
            <header className='nav-menu'>
                <div className='menu-links'>
                        <a href="#">Home</a>
                        <a href="#">Categories</a>
                        </div>
                    <div className='logo'>
                        <img src="/logo.png" alt="logo" />
                    </div>
                    <div className="menu-links">
                    <a href="#">Catalogue</a>
                        <a href="#">About</a>
                    </div>
            </header>
        </>
    );
}
 
export default Header