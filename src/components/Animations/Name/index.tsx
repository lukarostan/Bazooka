import anime from 'animejs/lib/anime.es';
import { useEffect, useRef } from 'react';

import { useDeviceWidthContext } from '@/context/DeviceWidthContext';

export default function Name() {
  const { width } = useDeviceWidthContext();
  const textRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const length = textEl.getComputedTextLength();
    textEl.style.strokeDasharray = `${length}`;
    textEl.style.strokeDashoffset = `${length}`;
    textEl.style.fillOpacity = '0';

    anime
      .timeline({ easing: 'easeInOutSine' })
      .add({
        targets: '#name-text-outline',
        strokeDashoffset: [length, 0],
        duration: 1800,
      })
      .add(
        {
          targets: '#name-text-outline',
          fillOpacity: [0, 1],
          duration: 500,
        },
        '-=300',
      );
  }, []);

  const fontSize = width <= 600 ? 56 : width <= 1024 ? 74 : 96;

  return (
    <div className="name-anim">
      <svg width="100%" height="120" viewBox="0 0 760 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bazooka">
        <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" strokeWidth="0.25mm">
          <text
            id="name-text-outline"
            ref={textRef}
            x="50%"
            y="62%"
            textAnchor="middle"
            fontSize={fontSize}
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="800"
            letterSpacing="1"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke">
            Bazooka
          </text>
        </g>
      </svg>
    </div>
  );
}
