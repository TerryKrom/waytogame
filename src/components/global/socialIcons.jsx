import React from 'react';
import './socialIcons.css';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <Link class="fa-brands fa-github" rel='noreferrer' target="_blank" to='https://github.com/terrykrom/way-to-game'></Link>
            <Link class="fa-brands fa-linkedin" rel='noreferrer' target="_blank" to='https://linkedin.com/in/guilherme-lopes-avila'></Link>
            <Link class="fa-brands fa-instagram" rel='noreferrer' target="_blank" to='https://instagram.com/terrykrom'></Link>
        </div>
    );
}

export default SocialIcons;