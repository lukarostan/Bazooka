import anime from 'animejs/lib/anime.es';
import { useEffect } from 'react';

import { useDeviceWidthContext } from '@/context/DeviceWidthContext';

export default function Name() {
  const { width } = useDeviceWidthContext();

  useEffect(() => {
    anime({
      targets: '.name-anim svg text',
      opacity: [0, 1],
      translateY: [10, 0],
      easing: 'easeOutCubic',
      duration: 900,
      delay: 150,
      loop: false,
    });
  }, []);

  const fontSize = width <= 600 ? 56 : width <= 1024 ? 74 : 96;

  return (
    <div className="name-anim">
      <svg width="100%" height="120" viewBox="0 0 760 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bazooka">
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fontSize={fontSize}
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          letterSpacing="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2">
          Bazooka
        </text>
      </svg>
    </div>
  );
}
