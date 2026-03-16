import anime from 'animejs/lib/anime.es';
import { useEffect } from 'react';

export default function Subheading() {
  useEffect(() => {
    anime({
      targets: '.subheading-anim',
      opacity: [0, 1],
      translateY: [12, 0],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 250,
      loop: false,
    });
  }, []);

  return (
    <div className="subheading-anim" style={{ opacity: 0 }}>
      <h2 style={{ fontSize: 'clamp(18px, 3vw, 28px)', margin: 0 }}>Automation-first assistant for shipping real results.</h2>
    </div>
  );
}
