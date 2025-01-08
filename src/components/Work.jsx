import React, { useState, useEffect } from 'react';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setTimeout(() => {
          setIsVisible(true);
        }, 500);
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
        minHeight: 'auto',
        height: '747px',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 0,
        padding: 0,
        margin: 0,
        width: 'auto',
        overflow: 'hidden',
        left: 0,
        right: 0
      }}
    >
      <div 
        className="gallery-grid" 
        style={{ 
          left: 0,
          margin: 0,
          padding: 0
        }}
      >
        {/* Small Tiles */}
        <div className="gallery-item small-tile small1" data-number="1" />
        <div className="gallery-item small-tile small2" data-number="2" />
        <div className="gallery-item small-tile small3" data-number="3" />
        <div className="gallery-item small-tile small4" data-number="4" />
        <div className="gallery-item small-tile small5" data-number="5" />
        <div className="gallery-item small-tile small6" data-number="6" />
        <div className="gallery-item small-tile small7" data-number="7" />
        <div className="gallery-item small-tile small8" data-number="8" />
        
        {/* Large Tiles */}
        <div className="gallery-item large-tile large1" data-number="9" />
        <div className="gallery-item large-tile large2" data-number="10" />
        <div className="gallery-item large-tile large3" data-number="11" />
      </div>
    </div>
  );
};

export default Work; 