import {
  MouseEventHandler,
  ReactNode,
  RefObject,
  cloneElement,
  isValidElement,
} from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './Icon.module.scss';

interface Props {
  size?: number;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
  forwardedRef?: RefObject<HTMLDivElement>;
}

export const Icon = ({
  size = 20,
  className,
  children,
  onClick,
  forwardedRef,
}: Props) => {
  const childrenWithProps = () => {
    if (isValidElement(children)) {
      return cloneElement<any>(children, {
        width: size,
        height: size,
      });
    }
    return children;
  };

  return (
    <div
      ref={forwardedRef}
      onClick={onClick}
      className={clsnm(styles.icon, className)}
    >
      {childrenWithProps?.()}
    </div>
  );
};
