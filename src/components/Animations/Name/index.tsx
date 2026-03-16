import anime from 'animejs/lib/anime.es';
import { useEffect } from 'react';

import { NameMax600 } from '@/components/Animations/Name/max600';
import { NameMax1024 } from '@/components/Animations/Name/max1024';
import { NameMin1024 } from '@/components/Animations/Name/min1024';
import { useDeviceWidthContext } from '@/context/DeviceWidthContext';

export default function Name() {
  const { width } = useDeviceWidthContext();

  useEffect(() => {
    anime({
      targets: '.name-anim svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: function (_, i) {
        return i * 100;
      },
      direction: 'normal',
      loop: false,
    });
  }, []);

  switch (true) {
    case width <= 600:
      return <NameMax600 />;
    case width <= 1024:
      return <NameMax1024 />;
    default:
      return <NameMin1024 />;
  }
}
