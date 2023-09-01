import React from 'react';
import './title.css';

const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="line"></div>
    </div>
  );
}

export default Title;
