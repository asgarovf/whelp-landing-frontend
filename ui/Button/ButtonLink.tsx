import { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './Button.module.scss';

interface Props extends ComponentPropsWithoutRef<'a'> {
  color: 'black' | 'transparent';
  forwardedRef?: RefObject<HTMLAnchorElement>;
  leftEl?: ReactNode;
  rigthEl?: ReactNode;
  height?: string;
  width?: string;
  paddingX?: string;
  paddingY?: string;
}

export const ButtonLink = ({
  color,
  className,
  style,
  children,
  forwardedRef,
  leftEl,
  rigthEl,
  paddingX,
  paddingY,
  height,
  width,
  ...props
}: Props) => {
  return (
    <button
      ref={forwardedRef}
      style={{
        height: style?.height ?? height,
        width: style?.width ?? width,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingRight: paddingX,
        paddingLeft: paddingX,
        ...style,
      }}
      className={clsnm(styles.button, className, styles[color])}
      {...props}
    >
      {leftEl != null && <div className={styles.left}>{leftEl}</div>}
      <span>{children}</span>
      {rigthEl != null && <div className={styles.right}>{rigthEl}</div>}
    </button>
  );
};
