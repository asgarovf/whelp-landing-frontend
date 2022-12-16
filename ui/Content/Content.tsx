import { ComponentPropsWithoutRef } from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './Content.module.scss';

interface Props extends ComponentPropsWithoutRef<'div'> {
  className?: string;
}

export const Content = ({ children, className }: Props) => {
  return <div className={clsnm(styles.wrapper, className)}>{children}</div>;
};
