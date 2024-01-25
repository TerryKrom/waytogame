import React, { useState } from 'react';
import './emailContainer.css';

const EmailContainer = () => {
  const email = 'guilhermeavila.dev@gmail.com'
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleClick = () => {
    if (subject && body) {
      const subjectEncoded = encodeURIComponent(subject);
      const bodyEncoded = encodeURIComponent(body);
      const mailtoLink = `mailto:${email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      window.location.href = mailtoLink;
    } else {
      // Handle validation error, show a message, etc.
      console.error('Please enter both email and subject before sending.');
    }
  };

  const handleSubject = (text) => {
    setSubject(text.target.value)
  }

  const handleBody = (text) => {
    setBody(text.target.value)
  }

  return (
    <div className="email-container">
      <h2>Leave your message here!</h2>
      <div className="input-subject">
        <span>Title:</span>
        <input type="text" onChange={(e) => handleSubject(e)} placeholder='Email Subject'/>
      </div>
      <div className="input-subject">
        <span>Your Message:</span>
        <textarea onChange={(e) => handleBody(e)} placeholder='Leave your message here!'/>
      </div>
      <button onClick={handleClick}>Send Email</button>
    </div>
  );
};

export default EmailContainer;