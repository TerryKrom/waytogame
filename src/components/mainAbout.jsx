import React from 'react';
import './mainAbout.css';

const MainAbout = () => {
    return (  
        <div className="about-container">
            <div className="about-header">
                <h2>about us header</h2>
            </div>
            <div className="about-center">
                <p>about us</p>
            </div>
            <div className="about-bottom">
                <p>social media</p>
                <div className="social-icons">
                    <a href="">a</a>
                    <a href="">b</a>
                    <a href="">c</a>
                </div>
            </div>
        </div>
    );
}
 
export default MainAbout;