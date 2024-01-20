import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">

            <section class="top">
                <ul>
                    <li>
                        <h3>Pagination</h3>
                        <Link to="/">Home</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/catalogue">Catalogue</Link>
                    </li>
                    <li>
                        <h3>Resources</h3>
                        <Link to="https://www.freetogame.com/terms-of-use" target='_blank'>API Usage</Link>
                        <Link to="https://www.freetogame.com/api-doc" target='_blank'>API Docs</Link>
                        <Link to="https://www.freetogame.com/faq" target='_blank'>API Support</Link>
                    </li>
                    <li>
                        <h3>Development</h3>
                        <Link to="/about">About Us</Link>
                        <Link to="https://github.com/terrykrom/way-to-game" target='_blank'>Project</Link>
                        <Link to="https://react.dev" target='_blank'>React Docs</Link>
                    </li>
                    <li>
                        <h3>Social Media</h3>
                        <Link to="https://github.com/terrykrom" target='_blank'>GitHub</Link>
                        <Link to="https://linkedin.com/in/guilherme-lopes-avila">Linkedin</Link>
                        <Link to="https://instagram.com/terrykrom">Instagram</Link>
                    </li>
                </ul>
            </section>

            <section class="bottom">
                <span>© 2023 Way to Game - Guilherme Avila</span>
            </section>
            </div>
            
        </footer>
    );
}

export default Footer;