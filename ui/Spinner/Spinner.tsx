import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './Spinner.module.scss';

interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  size?: number;
  style?: CSSProperties;
  buttonColor?: 'black' | 'transparent' | 'white' | 'flat';
}

export const Spinner = ({
  className,
  size = 20,
  buttonColor,
  style = {},
  ...props
}: SpinnerProps) => {
  return (
    <div
      style={{ height: `${size}px`, width: `${size}px`, ...style }}
      className={clsnm(
        styles.loader,
        buttonColor != null && styles[buttonColor],
      )}
      {...props}
    />
  );
};
