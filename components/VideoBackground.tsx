'use client';

import React from 'react';

export default function VideoBackground() {
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
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6, // Adjust opacity as needed to blend with the dark background
        }}
      >
        <source src="/assets/Videos/Cris_Wall.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
