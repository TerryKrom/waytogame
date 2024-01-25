import React from 'react';
import './mainContact.css';
import EmailContainer from './global/emailContainer';
import SocialIcons from './global/socialIcons';

const MainContact = () => {
    return (  
        <div className="contact-container">
            <EmailContainer/>
            <div className="left-column">
                <img src="/logo.png" alt="way to game logo" />
                <h2>Need some Help?</h2>
                <p>Check our social media!</p>
                <SocialIcons/>
            </div>
        </div>
    );
}
 
export default MainContact;