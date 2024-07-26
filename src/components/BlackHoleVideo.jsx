import React, { useRef, useEffect } from 'react';

const BlackHoleVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log('BlackHoleVideo component mounted');
    return () => {
      console.log('BlackHoleVideo component unmounted');
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    const logVideoDetails = () => {
      if (video) {
        console.log('Video details:', {
          duration: video.duration,
          currentTime: video.currentTime,
          paused: video.paused,
          ended: video.ended,
          readyState: video.readyState,
          networkState: video.networkState,
        });
      }
    };

    const logContainerDimensions = () => {
      if (container) {
        const { offsetWidth, offsetHeight } = container;
        console.log('Container dimensions:', { width: offsetWidth, height: offsetHeight });
      }
    };

    video.addEventListener('loadedmetadata', () => {
      console.log('Video metadata loaded');
      logVideoDetails();
    });

    video.addEventListener('play', () => console.log('Video started playing'));
    video.addEventListener('pause', () => console.log('Video paused'));
    video.addEventListener('ended', () => console.log('Video ended'));
    video.addEventListener('error', (e) => console.error('Video error:', e));

    window.addEventListener('resize', logContainerDimensions);

    logContainerDimensions();

    return () => {
      video.removeEventListener('loadedmetadata', logVideoDetails);
      video.removeEventListener('play', () => console.log('Video started playing'));
      video.removeEventListener('pause', () => console.log('Video paused'));
      video.removeEventListener('ended', () => console.log('Video ended'));
      video.removeEventListener('error', (e) => console.error('Video error:', e));
      window.removeEventListener('resize', logContainerDimensions);
    };
  }, []);

  console.log('Rendering BlackHoleVideo component');

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ height: '200vh' }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BlackHoleVideo;