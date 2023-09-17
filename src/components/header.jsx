import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='nav-menu'>
                <div className='menu-links'>
                        <Link to="/">Home</Link>
                        <Link to="/categories">Categories</Link>
                        </div>
                    <div className='logo'>
                        <img src="/logo.png" alt="logo"/>
                    </div>
                    <div className="menu-links">
                    <Link to="/catalogue">Catalogue</Link>
                        <Link to="/about">About</Link>
                    </div>
            </header>
        </>
    );
}
 
export default Header