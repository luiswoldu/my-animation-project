import React, { useState, useEffect } from 'react';

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setTimeout(() => {
          setIsVisible(true);
        }, 200);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        padding: '0 20px',
        backgroundColor: 'white',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in',
        position: 'relative',
        zIndex: 1,
        marginTop: '-80vh',
        marginBottom: '30vh'
      }}
    >
      <p 
        style={{
          maxWidth: '600px',
          textAlign: 'left',
          lineHeight: '1.6',
          fontSize: '18px',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          color: '#666666',
          paddingTop: '60px',
          fontWeight: '400'
        }}
      >
        Welcome, I'm James Owen, a British artist and designer based in San Francisco.
        <br /><br />
        As a former Creative Director at ManvsMachine, I've collaborated with brands such as Apple, Nike, Google, and Xbox. Together, we created remarkable projects that garnered worldwide recognition, including D&AD Pencils, Cannes Gold Lions, and many more.
        <br /><br />
        Currently, I'm creating groundbreaking experiences with the Apple Design Team while consuming copious amounts of tea.
      </p>
    </div>
  );
};

export default Introduction;
