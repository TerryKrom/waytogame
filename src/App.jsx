import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Categories from './pages/categories';
import Catalogue from './pages/catalogue';
import About from './pages/about';
import CookiePolicy from './pages/cookiePolicy';
import Contact from './pages/contact';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/cookie-policy" element={<CookiePolicy/>} />
        <Route path="/contact" element={<Contact/>} />
      
      </Routes>
    </Router>
  )
}

export default App;
