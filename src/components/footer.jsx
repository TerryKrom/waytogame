import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section class="top">
                <ul>
                    <li>
                        <h3>Resources</h3>
                        <Link>API Usage</Link>
                        <Link>API Docs</Link>
                        <Link>API Support</Link>
                        <Link>React Docs</Link>
                    </li>
                    <li>
                        <h3>Pricing</h3>
                        <Link>Overview</Link>
                        <Link>Flexible Data</Link>
                        <Link>High Volume</Link>
                        <Link>Enterprise</Link>
                    </li>
                    <li>
                        <h3>Development</h3>
                        <Link>Forum</Link>
                        <Link to="https://github.com/terrykrom/way-to-game" target='_blank'>Project</Link>
                        <Link>Open Source</Link>
                        <Link to="https://github.com/terrykrom" target='_blank'>My GitHub</Link>
                    </li>
                    <li>
                        <h3>Company</h3>
                        <Link to="/about">About Us</Link>
                        <Link>Blog</Link>
                        <Link>Partnerships</Link>
                        <Link>Careers</Link>
                    </li>
                </ul>
            </section>

            <section class="bottom">
                <span>© 2023 Way to Game - Guilherme Avila</span>
            </section>
        </footer>
    );
}

export default Footer;