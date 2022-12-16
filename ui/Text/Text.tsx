import { ComponentPropsWithoutRef, RefObject } from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './Text.module.scss';

interface Props extends ComponentPropsWithoutRef<'p'> {
  subtext?: boolean;
  size?: 'medium' | 'large';
  forwardedRef?: RefObject<HTMLParagraphElement>;
  fontWeight?: number;
}

export const Text = ({
  subtext,
  children,
  size = 'medium',
  fontWeight = 400,
  forwardedRef,
  className,
  ...props
}: Props) => {
  return (
    <p
      ref={forwardedRef}
      className={clsnm(
        styles.text,
        subtext && styles.subtext,
        styles[size],
        'poppins',
        className,
      )}
      style={{
        ...(props.style ?? {}),
        fontWeight: fontWeight ?? styles.fontWeight,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
