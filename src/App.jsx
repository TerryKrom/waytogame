import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Categories from './pages/categories';
import Catalogue from './pages/catalogue';
import About from './pages/about';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/catalogue" element={<Catalogue/>} />
      </Routes>
    </Router>
  )
}

export default App;
