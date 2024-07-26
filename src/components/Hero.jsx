import React, { useEffect, useRef, useState } from 'react';
import { HeroContent } from "./sub/hero-content";
import MotionCanvas from "./MotionBackground";
import BlackHoleVideo from './BlackHoleVideo';
import ContentContainer from './ContentContainer';

export const Hero = () => {
  const heroRef = useRef(null);
  const [isPulling, setIsPulling] = useState(false);

  useEffect(() => {
    console.log('Hero component mounted');
    return () => {
      console.log('Hero component unmounted');
    };
  }, []);

  useEffect(() => {
    const logDimensions = () => {
      if (heroRef.current) {
        const { offsetWidth, offsetHeight } = heroRef.current;
        console.log('Hero dimensions:', { width: offsetWidth, height: offsetHeight });
      }
    };

    logDimensions();
    window.addEventListener('resize', logDimensions);

    return () => {
      window.removeEventListener('resize', logDimensions);
    };
  }, []);

  console.log('Rendering Hero component');

  return (
    <div ref={heroRef} className="relative flex flex-col h-screen w-full overflow-hidden">
      {console.log('Rendering BlackHoleVideo')}
      <BlackHoleVideo />

      {console.log('Rendering ContentContainer')}
      <ContentContainer setIsPulling={setIsPulling}>
        {console.log('Rendering HeroContent')}
        <div className="relative z-20">
          <HeroContent />
        </div>
      </ContentContainer>

      {console.log('Rendering MotionCanvas')}
      <div className="absolute z-20">
        <MotionCanvas />
      </div>
    
      {isPulling && (
        <div className="absolute inset-0 bg-black opacity-50 z-30">
          {/* Content for when pulling */}
        </div>
      )}
    </div>
  );
};

export default Hero;