import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './cookies.css';
import { Link } from 'react-router-dom';

const CookiesContainer = () => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        // Verificar se o cookie 'acceptCookies' está presente
        const cookiesAccepted = Cookies.get('acceptCookies');

        if (cookiesAccepted) {
            // Se o cookie estiver presente, não mostrar o aviso
            setIsActive(false);
        }
    }, []);

    const handleAcceptCookies = () => {
        // Define o cookie 'acceptCookies' com um valor 'true' e uma data de expiração
        Cookies.set('acceptCookies', 'true', { expires: 365 });
        // Oculta o aviso de cookies
        setIsActive(false);
    };

    return (
        <div className={`cookies-container ${isActive ? 'active' : ''}`}>
            <p>This website uses cookies to enhance your browsing experience! <span className='cookies-opt'>By continuing to use our site, you agree to the use of cookies.</span>
            </p>
            <Link to='/cookie-policy'>Cookie Policy</Link>
            <button onClick={handleAcceptCookies}>Allow Cookies</button>
        </div>
    );
};

export default CookiesContainer;
