import style from './style.module.scss';
import anime from 'animejs/lib/anime.es';
import { clsx } from 'clsx';
import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    const lineAnimation = anime({
      targets: '.background svg g line',
      strokeDashoffset: [anime.setDashoffset, 0],
      strokeWidth: [1.4, 2.8],
      opacity: [0.2, 0.95],
      easing: 'easeInOutSine',
      duration: 1800,
      delay: (_, i) => i * 14,
      direction: 'alternate',
      loop: true,
    });

    const driftAnimation = anime({
      targets: '.background svg',
      translateX: [-10, 10],
      translateY: [-8, 8],
      scale: [1.01, 1.04],
      easing: 'easeInOutSine',
      duration: 12000,
      direction: 'alternate',
      loop: true,
    });

    return () => {
      lineAnimation.pause();
      driftAnimation.pause();
    };
  }, []);
  return (
    <div className={clsx(style.background, 'background', 'container1')}>
      <svg
        className={style.animBg}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1422 800"
        opacity="0.45">
        <defs>
          <linearGradient id="bazooka-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7ff" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <g strokeWidth="2.4" stroke="url(#bazooka-bg-gradient)" fill="none" strokeLinecap="round">
          <line x1="0" y1="0" x2="124" y2="124" opacity="0.87"></line>
          <line x1="248" y1="0" x2="124" y2="124" opacity="0.84"></line>
          <line x1="372" y1="0" x2="248" y2="124" opacity="0.72"></line>
          <line x1="372" y1="0" x2="496" y2="124" opacity="0.57"></line>
          <line x1="496" y1="0" x2="620" y2="124" opacity="0.99"></line>
          <line x1="620" y1="0" x2="744" y2="124" opacity="0.39"></line>
          <line x1="868" y1="0" x2="744" y2="124" opacity="0.80"></line>
          <line x1="992" y1="0" x2="868" y2="124" opacity="0.49"></line>
          <line x1="992" y1="0" x2="1116" y2="124" opacity="0.35"></line>
          <line x1="1240" y1="0" x2="1116" y2="124" opacity="0.33"></line>
          <line x1="1364" y1="0" x2="1240" y2="124" opacity="0.81"></line>
          <line x1="1488" y1="0" x2="1364" y2="124" opacity="0.21"></line>
          <line x1="0" y1="124" x2="124" y2="248" opacity="0.78"></line>
          <line x1="124" y1="124" x2="248" y2="248" opacity="0.62"></line>
          <line x1="372" y1="124" x2="248" y2="248" opacity="0.92"></line>
          <line x1="496" y1="124" x2="372" y2="248" opacity="0.30"></line>
          <line x1="620" y1="124" x2="496" y2="248" opacity="0.43"></line>
          <line x1="744" y1="124" x2="620" y2="248" opacity="0.08"></line>
          <line x1="744" y1="124" x2="868" y2="248" opacity="0.98"></line>
          <line x1="992" y1="124" x2="868" y2="248" opacity="0.54"></line>
          <line x1="992" y1="124" x2="1116" y2="248" opacity="0.90"></line>
          <line x1="1240" y1="124" x2="1116" y2="248" opacity="0.83"></line>
          <line x1="1364" y1="124" x2="1240" y2="248" opacity="0.65"></line>
          <line x1="1488" y1="124" x2="1364" y2="248" opacity="0.72"></line>
          <line x1="0" y1="248" x2="124" y2="372" opacity="0.94"></line>
          <line x1="124" y1="248" x2="248" y2="372" opacity="0.51"></line>
          <line x1="372" y1="248" x2="248" y2="372" opacity="0.34"></line>
          <line x1="372" y1="248" x2="496" y2="372" opacity="0.77"></line>
          <line x1="620" y1="248" x2="496" y2="372" opacity="0.60"></line>
          <line x1="620" y1="248" x2="744" y2="372" opacity="0.77"></line>
          <line x1="868" y1="248" x2="744" y2="372" opacity="0.69"></line>
          <line x1="868" y1="248" x2="992" y2="372" opacity="0.32"></line>
          <line x1="992" y1="248" x2="1116" y2="372" opacity="0.44"></line>
          <line x1="1116" y1="248" x2="1240" y2="372" opacity="0.86"></line>
          <line x1="1240" y1="248" x2="1364" y2="372" opacity="0.59"></line>
          <line x1="1488" y1="248" x2="1364" y2="372" opacity="0.08"></line>
          <line x1="124" y1="372" x2="0" y2="496" opacity="0.81"></line>
          <line x1="248" y1="372" x2="124" y2="496" opacity="0.20"></line>
          <line x1="372" y1="372" x2="248" y2="496" opacity="0.45"></line>
          <line x1="372" y1="372" x2="496" y2="496" opacity="0.46"></line>
          <line x1="496" y1="372" x2="620" y2="496" opacity="0.41"></line>
          <line x1="744" y1="372" x2="620" y2="496" opacity="0.25"></line>
          <line x1="868" y1="372" x2="744" y2="496" opacity="0.76"></line>
          <line x1="868" y1="372" x2="992" y2="496" opacity="0.26"></line>
          <line x1="1116" y1="372" x2="992" y2="496" opacity="0.30"></line>
          <line x1="1116" y1="372" x2="1240" y2="496" opacity="0.44"></line>
          <line x1="1364" y1="372" x2="1240" y2="496" opacity="0.41"></line>
          <line x1="1364" y1="372" x2="1488" y2="496" opacity="0.59"></line>
          <line x1="0" y1="496" x2="124" y2="620" opacity="0.90"></line>
          <line x1="248" y1="496" x2="124" y2="620" opacity="0.61"></line>
          <line x1="372" y1="496" x2="248" y2="620" opacity="0.85"></line>
          <line x1="372" y1="496" x2="496" y2="620" opacity="0.93"></line>
          <line x1="496" y1="496" x2="620" y2="620" opacity="0.47"></line>
          <line x1="744" y1="496" x2="620" y2="620" opacity="0.25"></line>
          <line x1="868" y1="496" x2="744" y2="620" opacity="0.17"></line>
          <line x1="868" y1="496" x2="992" y2="620" opacity="0.24"></line>
          <line x1="992" y1="496" x2="1116" y2="620" opacity="0.72"></line>
          <line x1="1116" y1="496" x2="1240" y2="620" opacity="1.00"></line>
          <line x1="1240" y1="496" x2="1364" y2="620" opacity="0.96"></line>
          <line x1="1488" y1="496" x2="1364" y2="620" opacity="0.77"></line>
          <line x1="124" y1="620" x2="0" y2="744" opacity="0.28"></line>
          <line x1="248" y1="620" x2="124" y2="744" opacity="0.73"></line>
          <line x1="248" y1="620" x2="372" y2="744" opacity="0.53"></line>
          <line x1="496" y1="620" x2="372" y2="744" opacity="0.28"></line>
          <line x1="496" y1="620" x2="620" y2="744" opacity="0.70"></line>
          <line x1="744" y1="620" x2="620" y2="744" opacity="0.75"></line>
          <line x1="868" y1="620" x2="744" y2="744" opacity="0.79"></line>
          <line x1="868" y1="620" x2="992" y2="744" opacity="0.49"></line>
          <line x1="1116" y1="620" x2="992" y2="744" opacity="0.46"></line>
          <line x1="1240" y1="620" x2="1116" y2="744" opacity="0.58"></line>
          <line x1="1240" y1="620" x2="1364" y2="744" opacity="0.57"></line>
          <line x1="1364" y1="620" x2="1488" y2="744" opacity="0.75"></line>
          <line x1="0" y1="744" x2="124" y2="868" opacity="0.36"></line>
          <line x1="248" y1="744" x2="124" y2="868" opacity="0.13"></line>
          <line x1="372" y1="744" x2="248" y2="868" opacity="0.86"></line>
          <line x1="496" y1="744" x2="372" y2="868" opacity="0.30"></line>
          <line x1="496" y1="744" x2="620" y2="868" opacity="0.30"></line>
          <line x1="620" y1="744" x2="744" y2="868" opacity="0.79"></line>
          <line x1="744" y1="744" x2="868" y2="868" opacity="0.77"></line>
          <line x1="868" y1="744" x2="992" y2="868" opacity="0.98"></line>
          <line x1="992" y1="744" x2="1116" y2="868" opacity="0.57"></line>
          <line x1="1240" y1="744" x2="1116" y2="868" opacity="0.99"></line>
          <line x1="1364" y1="744" x2="1240" y2="868" opacity="0.64"></line>
          <line x1="1488" y1="744" x2="1364" y2="868" opacity="0.48"></line>
        </g>
      </svg>
    </div>
  );
}
