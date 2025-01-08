import React from 'react';

const Footer = () => {
  return (
    <div 
      style={{ 
        textAlign: 'center', 
        fontSize: '14px', 
        padding: '40px 0', // Increased padding for top and bottom
        color: '#555', 
      }}
    >
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          textDecoration: 'none', 
          color: '#555', 
          margin: '0 10px',
        }}
      >
        Instagram
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          textDecoration: 'none', 
          color: '#555', 
          margin: '0 10px',
        }}
      >
        X
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          textDecoration: 'none', 
          color: '#555', 
          margin: '0 10px',
        }}
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;
