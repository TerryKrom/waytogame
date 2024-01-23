import React from 'react';
import './header.css'
import { Link, useLocation } from 'react-router-dom';
import Separator from './separator';

const Header = () => {

  const location = useLocation();

  return (
    <>
      <header className='nav-menu'>
        <div className='menu-links'>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link
            to="/categories"
            className={location.pathname === '/categories' ? 'active' : ''}
          >
            Categories
          </Link>
        </div>
        <div className='logo'>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="menu-links">
          <Link
            to="/catalogue"
            className={location.pathname === '/catalogue' ? 'active' : ''}
          >
            Catalogue
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </div>
      </header>
      <div className="subheader">
        <Link
          to="/cookie-policy"
          className={location.pathname === '/cookie-policy' ? 'active' : ''}>
          Cookie Policy
        </Link>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}>
          Contact Us
        </Link>
      </div>
      <Separator/>
    </>
  );
};
export default Header;