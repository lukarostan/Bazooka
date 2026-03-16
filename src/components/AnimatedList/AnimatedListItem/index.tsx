import style from './style.module.scss';
import { clsx } from 'clsx';
import moment from 'moment';

export type AnimatedListItem = {
  id: number;
  name: string;
  details: string;
  logo: string;
  startDate?: string;
  endDate?: string;
};

type AnimatedListItemProps = { entry: AnimatedListItem };
export const AnimatedListItem = ({ entry }: AnimatedListItemProps) => {
  // TODO: refactor by entry type
  const isWorkHistory = entry.startDate && entry.endDate;
  const isProject = entry.details.startsWith('http');

  if (!isWorkHistory) {
    return (
      <li
        key={entry.id}
        onClick={() => isProject && window.open(entry.details, '_blank')}
        className={clsx(style.animatedListItem, isProject ? style.clickable : '')}
        data-id="item">
        <img src={entry.logo} alt={entry.name} width={45} height={45} />
        <div className={style.content}>
          <p className={style.name}>{entry.name}</p>
        </div>
      </li>
    );
  }
  console.log('entry', entry.startDate);

  const convertedStart = !entry.startDate
    ? ''
    : moment(entry.startDate, 'MM-DD-YYYY').utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  const convertedEnd = !entry.endDate
    ? ''
    : moment(entry.endDate, 'MM-DD-YYYY').utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  console.log('converted', convertedStart);
  const startTime = moment(convertedStart, 'YYYY/MM/DD HH:mm');
  const endTime = moment(convertedEnd, 'YYYY/MM/DD HH:mm');

  const monthsDiff = endTime.diff(startTime, 'months', true);

  return (
    <li key={entry.id} className={style.animatedListItem} data-id="item">
      <img src={entry.logo} alt={entry.name} width={45} height={45} />
      <div className={style.content}>
        <p className={style.name}>{entry.name}</p>
        <p>
          {monthsDiff <= 12
            ? `${monthsDiff.toFixed(0)} months`
            : `${Math.floor(monthsDiff / 12).toFixed(0)} years, ${(monthsDiff % 12).toFixed(0)} months`}
        </p>
      </div>
    </li>
  );
};
