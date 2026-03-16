import style from './style.module.scss';
import { clsx } from 'clsx';
import { ReactElement } from 'react';

type ButtonProps = {
  title: string;
  href?: string;
  onClick?: () => void;
  extraClass: string;
};

export default function Button({ title, href = '', onClick, extraClass }: ButtonProps): ReactElement {
  if (typeof href === 'string' && href !== '') {
    return (
      <a className={clsx(style.customButton, style.clickable, extraClass)} href={href} target="_blank">
        {title}
      </a>
    );
  }
  return (
    <button className={clsx(style.customButton, style.clickable, extraClass)} onClick={onClick}>
      {title}
    </button>
  );
}
