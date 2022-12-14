import { useSmall } from 'hooks';
import { ComponentPropsWithoutRef, ReactNode, useMemo } from 'react';
import { clsnm } from 'utils/clsnm';

import styles from './DualGrid.module.scss';

interface Props extends ComponentPropsWithoutRef<'div'> {
  paddingY?: number;
  left: ReactNode;
  right: ReactNode;
  reverseOnMobile?: boolean;
  leftClassName?: string;
  rightClassName?: string;
}

export const DualGrid = ({
  paddingY = 80,
  left,
  right,
  reverseOnMobile = false,
  leftClassName,
  rightClassName,
  ...props
}: Props) => {
  const small = useSmall();
  const _paddingY = useMemo(() => {
    return small ? `${paddingY / 2}px` : `${paddingY}px`;
  }, [small, paddingY]);

  return (
    <div
      style={{ paddingTop: _paddingY, paddingBottom: _paddingY }}
      className={clsnm(styles.wrapper)}
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
