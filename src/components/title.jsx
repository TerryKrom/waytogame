import React from 'react';
import './title.css';

// MAIN TITLE FOR ALL PAGES

const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="line"></div>
    </div>
  );
}

export default Title;
