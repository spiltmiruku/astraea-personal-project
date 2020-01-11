import React, { useEffect } from 'react';
import particlesJS from 'particles.js';

function ParticlesEffect() {

  useEffect(() => {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
  });

  return (
   <div></div>
  );
}

export default ParticlesEffect;
