import style from './style.module.scss';
import { clsx } from 'clsx';
import moment from 'moment';
import { ReactElement, useEffect, useState } from 'react';

import AnimatedList from '@/components/AnimatedList';
import Name from '@/components/Animations/Name';
import Subheading from '@/components/Animations/Subheading';
import Button from '@/components/Button';
import { useDeviceWidthContext } from '@/context/DeviceWidthContext';
import { projects } from '@/data/projects.ts';
import { technologies } from '@/data/technologies.ts';
import { workHistory as history } from '@/data/workHistory.ts';

const getHistoryWithLatestDate = () => {
  history[0].endDate = moment().format('MM-DD-YYYY');
  return history;
};

export default function Hero(): ReactElement {
  const { setWidth } = useDeviceWidthContext();

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    const handleResize = (e: Event) => {
      if (!e.target) return;
      setWidth((e.target as Window).innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWidth]);

  const [visibleLists, setVisibleLists] = useState({
    projects: false,
    technologies: false,
    history: false,
  });

  // todo: make multiple open lists look better
  // todo: fix background height on desktop with opened lists

  return (
    <div className={clsx(style.hero, 'hero')}>
      <Name />
      <Subheading />
      <p className={style.pitch}>
        I turn messy goals into shipped outcomes: faster research, cleaner decisions, and reliable execution.
      </p>
      <div className={style.contentWrapper}>
        <AnimatedList
          data={projects}
          isListVisible={visibleLists.projects}
          setIsListActive={() =>
            setVisibleLists((prevState) => ({
              projects: !prevState.projects,
              technologies: false,
              history: false,
            }))
          }
          ctaLabel={'What I Build'}></AnimatedList>
        <AnimatedList
          data={technologies}
          isListVisible={visibleLists.technologies}
          setIsListActive={() =>
            setVisibleLists((prevState) => ({
              projects: false,
              technologies: !prevState.technologies,
              history: false,
            }))
          }
          ctaLabel={'Core Strengths'}></AnimatedList>
        <AnimatedList
          data={getHistoryWithLatestDate()}
          isListVisible={visibleLists.history}
          setIsListActive={() =>
            setVisibleLists((prevState) => ({
              projects: false,
              technologies: false,
              history: !prevState.history,
            }))
          }
          ctaLabel={'Experience Timeline'}></AnimatedList>

        <Button
          title="Let’s Build Something"
          href="https://linkedin.com/in/Bazooka"
          extraClass={style.animateAppearance}></Button>
      </div>
    </div>
  );
}
