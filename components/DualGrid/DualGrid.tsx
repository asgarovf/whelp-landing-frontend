import { useSmall } from 'hooks';
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './DualGrid.module.scss';

interface Props extends ComponentPropsWithoutRef<'div'> {
  paddingY?: number;
  paddingTop?: number;
  paddingBottom?: number;
  left: ReactNode;
  right: ReactNode;
  reverseOnMobile?: boolean;
  leftClassName?: string;
  rightClassName?: string;
  gap?: number;
  maxHeight?: boolean;
}

export const DualGrid = ({
  paddingY = 80,
  maxHeight = false,
  gap = 24,
  paddingTop,
  paddingBottom,
  left,
  right,
  reverseOnMobile = false,
  leftClassName,
  rightClassName,
  ...props
}: Props) => {
  const small = useSmall();
  const [pY, setPY] = useState(0);
  const [_gap, setGap] = useState(0);

  useEffect(() => {
    setPY(small ? Math.floor(paddingY / 2) : paddingY);
  }, [paddingY, small]);

  useEffect(() => {
    setGap(gap);
  }, [gap]);

  const _paddingY = useMemo(() => {
    return `${pY}px`;
  }, [small, pY]);

  return (
    <div
      style={{
        gap: _gap,
        paddingTop: paddingTop ?? _paddingY,
        paddingBottom: paddingBottom ?? _paddingY,
      }}
      className={clsnm(styles.wrapper, maxHeight && styles.maxHeight)}
      {...props}
    >
      <div
        className={clsnm(
          styles.left,
          reverseOnMobile && styles.orderSecond,
          leftClassName,
        )}
      >
        {left}
      </div>
      <div
        className={clsnm(
          styles.right,
          reverseOnMobile && styles.orderFirst,
          rightClassName,
        )}
      >
        {right}
      </div>
    </div>
  );
};
