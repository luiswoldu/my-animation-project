import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [emailRef, emailInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
  style={{
    height: '550px',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 1,
    margin: 0,
    padding: '130px 0 28px 0', // Reduced padding-bottom by 30% (from 40px to 28px)
    width: '100%',
  }}>
    
      <h1
        ref={titleRef}
        className={`text-6xl md:text-7xl font-bold text-center tracking-tight ${
          isLoaded ? (titleInView ? 'animate-text' : 'hidden-text') : ''
        }`}
      >
        Contact
      </h1>

      <a
        ref={emailRef}
        href="mailto:wecare@ju.st"
        style={{ color: '#555' }}
        className={`block text-center mt-5 ${
          isLoaded ? (emailInView ? 'animate-email' : 'hidden-email') : ''
        }`}
      >
        luiswoldu@gmail.com
      </a>
    </div>
  );
};

export default Contact;