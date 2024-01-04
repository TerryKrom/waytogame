import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <section class="top">
                <ul>
                    <li>
                        <h3>Resources</h3>
                        <a>Usage</a>
                        <a>Docs</a>
                        <a>Support</a>
                        <a>Hardware</a>
                    </li>
                    <li>
                        <h3>Pricing</h3>
                        <a>Overview</a>
                        <a>Flexible Data</a>
                        <a>High Volume</a>
                        <a>Enterprise</a>
                    </li>
                    <li>
                        <h3>Developers</h3>
                        <a>Forum</a>
                        <a>Projects</a>
                        <a>Open Source</a>
                        <a>GitHub</a>
                    </li>
                    <li>
                        <h3>Company</h3>
                        <a>About Us</a>
                        <a>Blog</a>
                        <a>Partnerships</a>
                        <a>Careers</a>
                    </li>
                </ul>
            </section>

            <section class="bottom">© 2023 Way to Game - Guilherme Avila</section>
        </footer>
    );
}

export default Footer;