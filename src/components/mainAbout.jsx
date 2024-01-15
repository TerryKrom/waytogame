import React from 'react';
import './mainAbout.css';
import { Link } from 'react-router-dom';

const MainAbout = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h2>Find your Way to Game!</h2>
                <p>Welcome to Way to Game, where gaming meets affordability! We believe that the joy of gaming should be accessible to everyone, without the need for piracy or breaking the bank. Our platform is dedicated to showcasing a vast collection of free-to-play games that provide endless entertainment without costing you a dime. Explore a world where fun knows no boundaries, and gaming is truly for everyone!</p>
            </div>
            <div className="about-center">
                <h2>Our mission</h2>
                <p>At Way to Game, we're on a mission to redefine the gaming experience. No more compromising on the quality of your gaming adventures or resorting to piracy. Our carefully curated selection of free-to-play games ensures that you can dive into thrilling virtual worlds without spending a fortune. Discover a treasure trove of entertainment that proves you don't need to break the bank to have an amazing gaming experience. Join us on the journey where every gamer, regardless of budget, can enjoy the best that the gaming world has to offer.</p>
                <h2>About Us</h2>
                <p>I'm Guilherme Avila, a passionate software developer specializing in web development and crafting efficient solutions to tackle real-world issues that people encounter online. The inspiration for this website stemmed from the genuine challenges faced by those close to me. Understanding the frustrations of individuals dealing with problems in the digital landscape, I envisioned Way to Game as a solution to make gaming more accessible and enjoyable for everyone. At its core, this platform is a testament to my commitment to creating meaningful online experiences and providing solutions that resonate with users. Join me on this journey, and let's navigate the world of gaming together, where solutions are born out of real-life experiences.
                </p>
                <h3>Developer:</h3>
                <p>This website was developed by Guilherme Avila.</p>
                <div className="api-text">
                    <p>This project was made using </p>
                    <Link to="https://freetogame.com">Free To Game API &copy;</Link>
                </div>
            </div>
            <div className="about-bottom">
                <div className="social-icons">
                    <Link class="fa-brands fa-github" rel='noreferrer' target="_blank" to='https://github.com/terrykrom/way-to-game'></Link>
                    <Link class="fa-brands fa-linkedin" rel='noreferrer' target="_blank" to='https://linkedin.com/in/guilherme-lopes-avila'></Link>
                    <Link class="fa-brands fa-instagram" rel='noreferrer' target="_blank" to='https://instagram.com/terrykrom'></Link>
                </div>
            </div>
        </div>
    );
}

export default MainAbout;