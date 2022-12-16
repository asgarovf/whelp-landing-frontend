import { ComponentPropsWithoutRef, RefObject } from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './Header.module.scss';

type HeaderTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends ComponentPropsWithoutRef<'h1'> {
  forwardedRef?: RefObject<HTMLHeadingElement>;
  as?: HeaderTypes;
  inheritStyles?: HeaderTypes;
}

export const Header = ({
  forwardedRef,
  as = 'h1',
  inheritStyles = 'h1',
  className,
  children,
  ...props
}: Props) => {
  const MainComponent = as;

  return (
    <MainComponent
      className={clsnm(styles.header, styles[as], className, 'cooper')}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </MainComponent>
  );
};
