import { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';
import { DynamicBorderRadiusProps } from 'types';
import { Spinner } from 'ui/Spinner/Spinner';
import { clsnm } from 'utils/clsnm';

import styles from './Button.module.scss';

interface ButtonSpecificProps extends ComponentPropsWithoutRef<'button'> {
  forwardedRef?: RefObject<HTMLButtonElement>;
}

interface AnchorSpecificProps extends ComponentPropsWithoutRef<'a'> {
  forwardedRef?: RefObject<HTMLAnchorElement>;
}

type Props = {
  color: 'black' | 'transparent' | 'flat' | 'white';
  leftEl?: ReactNode;
  rigthEl?: ReactNode;
  height?: string;
  width?: string;
  paddingX?: string;
  paddingY?: string;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
} & DynamicBorderRadiusProps &
  (ButtonSpecificProps | AnchorSpecificProps);

export const Button = ({
  href,
  color,
  className,
  style,
  children,
  forwardedRef,
  leftEl,
  rigthEl,
  paddingX = '24px',
  paddingY = '12px',
  topLeftRadius = '60px',
  topRightRadius = '60px',
  bottomLeftRadius = '60px',
  bottomRightRadius = '60px',
  height,
  width,
  disabled,
  loading,
  ...props
}: Props) => {
  const Main: any = href != null ? 'a' : 'button';

  return (
    <Main
      ref={forwardedRef}
      style={{
        height: style?.height ?? height,
        width: style?.width ?? width,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingRight: paddingX,
        paddingLeft: paddingX,
        borderBottomLeftRadius: bottomLeftRadius,
        borderTopLeftRadius: topLeftRadius,
        borderTopRightRadius: topRightRadius,
        borderBottomRightRadius: bottomRightRadius,
        ...style,
      }}
      className={clsnm(
        styles.button,
        className,
        styles[color],
        disabled && styles.disabled,
      )}
      href={href}
      {...props}
    >
      {leftEl != null && <div className={styles.left}>{leftEl}</div>}
      <span className={clsnm(styles.text, 'poppins')}>{children}</span>
      {(rigthEl != null || loading) && (
        <div className={styles.right}>
          {loading ? <Spinner size={18} buttonColor={color} /> : rigthEl}
        </div>
      )}
    </Main>
  );
};
