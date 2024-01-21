import React, { useState, useEffect } from 'react';
import './scrollBtn.css'; // Arquivo de estilos para personalizar o botão

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adiciona um listener para verificar a posição da página ao rolar
    const handleScroll = () => {
      const top = window.scrollY;
      setIsVisible(top > 100); // Define a visibilidade com base na posição de rolagem
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona uma animação suave ao rolar para o topo
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <span className="fa fa-arrow-up"></span>
    </button>
  );
};

export default ScrollToTopButton;