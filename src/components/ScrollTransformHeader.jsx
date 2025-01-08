import { useState, useEffect } from 'react';

const ScrollTransformHeader = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const initialWidth = 805;
  const initialHeight = 330;
  
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 400, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getAnimatedDimensions = (progress) => {
    if (progress <= 0.5) {
      const normalizedProgress = progress * 2;
      return {
        width: initialWidth + (window.innerWidth - initialWidth) * normalizedProgress,
        height: initialHeight + (124 - initialHeight) * normalizedProgress
      };
    } else {
      const normalizedProgress = (progress - 0.5) * 2;
      return {
        width: window.innerWidth,
        height: 124 * (1 - normalizedProgress)
      };
    }
  };

  const dimensions = getAnimatedDimensions(scrollProgress);
  const translateY = -218 * scrollProgress;

  return (
    <div className="w-full min-h-[200vh] bg-white relative">
      <div
        className="fixed left-1/2 top-[40%] bg-black transition-transform duration-75 ease-out"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          transform: `translate(-50%, ${translateY}px)`,
        }}
      >
        <img
          src="https://pbs.twimg.com/ext_tw_video_thumb/1858517907182878720/pu/img/1jUUxnTvvX4G4nta.jpg"  // Replace with the actual image URL
          alt="Your description"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            transform: 'none',  // Ensure the image is not affected by the container's transform
          }}
        />
      </div>
    </div>
  );
};

export default ScrollTransformHeader;
