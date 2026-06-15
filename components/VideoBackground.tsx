'use client';

import React, { useRef, useEffect } from 'react';

export default function VideoBackground({ isPlaying = true }: { isPlaying?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    isPlaying ? video.play() : video.pause();
  }, [isPlaying]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6,
        }}
      >
        <source src="/assets/Videos/Cris_Wall.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}