import React from 'react';
import './mainCookies.css';

const MainCookies = () => {
    return (
        <div className="text-container">
            <div className="text-header">
                <h2>Our Cookie Policy</h2>
                <p>This Cookie Policy is designed to provide
                    you with clear and comprehensive
                    information about the use of cookies on
                    our website. By continuing to browse or
                    use our site, you agree to our use of
                    cookies as described in this policy.
                </p>
            </div>
            <div className="text-center">
                <h2><img src="/cookies.png" alt="" /> What are Cookies <img src="/cookies.png" alt="" /></h2>
                <p>Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you access and use our website. They are widely used to make websites work more efficiently, enhance user experience, and provide information to website owners.
                </p>
                <h2>Types of Cookies we Use</h2>
                <p>We use different types of cookies for various purposes. These may include:
                    <ul>
                        <li>Essential cookies: Necessary for the basic functionality of our website, allowing you to navigate and use essential features.</li>
                        <li>Performance Cookies: Collect information about how visitors use our website, such as which pages they visit most frequently. These cookies help us improve the performance of our site.
                        </li>
                        <li>Functionality Cookies: Enhance your experience by remembering your preferences, such as language or region settings.
                        </li>
                        <li>
                            Targeting or Advertising Cookies: Used to deliver personalized content and advertisements based on your interests.
                        </li>
                    </ul>
                </p>
                <h2>How we use Cookies?</h2>
                <p>Operational Necessities: To ensure the proper functioning of our website and provide you with the services you request.
                Performance and Analytics: To analyze user behavior, improve our website, and measure the effectiveness of our marketing campaigns.
                Personalization: To remember your preferences and provide a more personalized experience.
                </p>
                <h2>Managing Cookies</h2>
                <p>Most web browsers allow you to control cookies through their settings. You can configure your browser to accept, reject, or notify you when a cookie is set. However, please note that disabling cookies may impact the functionality and performance of our website.
                </p>
                <p>By using our website, you consent to the use of cookies as described in this policy. Thank you for visiting Way to Game, and we hope you have a great experience navigating our site!
                </p>
            </div>
        </div>
    );
}

export default MainCookies;