import { useSmall } from 'hooks';
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { mergeRefs } from 'react-merge-refs';
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
  purpleBg?: boolean;
  container?: boolean;
}

const fadeIn = [
  { opacity: 0, transform: 'translateY(50px)' },
  { opacity: 1, transform: 'translateY(0px)' },
];
const timing = {
  duration: 400,
  iterations: 1,
};

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
  className,
  purpleBg,
  container,
  ...props
}: Props) => {
  const small = useSmall();
  const [pY, setPY] = useState(0);
  const [_gap, setGap] = useState(0);
  const leftAnimatedRef = useRef(false);
  const rightAnimatedRef = useRef(false);

  useEffect(() => {
    setPY(small ? Math.floor(paddingY / 2) : paddingY);
  }, [paddingY, small]);

  useEffect(() => {
    setGap(gap);
  }, [gap]);

  const _paddingY = useMemo(() => {
    return `${pY}px`;
  }, [small, pY]);

  const [leftViewRef, inViewLeft] = useInView({ threshold: 0.25 });
  const [rightViewRef, inViewRight] = useInView({ threshold: 0.25 });

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current == null || leftAnimatedRef.current) return;
    if (inViewLeft) {
      leftRef.current.animate(fadeIn, timing);
      leftRef.current.style.opacity = '1';
      leftAnimatedRef.current = true;
    }
  }, [inViewLeft]);

  useEffect(() => {
    if (rightRef.current == null || rightAnimatedRef.current) return;
    if (inViewRight) {
      rightRef.current.animate(fadeIn, timing);
      rightRef.current.style.opacity = '1';
      rightAnimatedRef.current = true;
    }
  }, [inViewRight]);

  return (
    <div
      style={{
        gap: _gap,
        paddingTop: paddingTop ?? _paddingY,
        paddingBottom: paddingBottom ?? _paddingY,
      }}
      className={clsnm(
        styles.wrapper,
        maxHeight && styles.maxHeight,
        className,
        purpleBg && styles.purpleBg,
        container && 'container',
      )}
      {...props}
    >
      <div
        style={{ opacity: 0 }}
        ref={mergeRefs([leftViewRef, leftRef])}
        className={clsnm(
          styles.left,
          reverseOnMobile && styles.orderSecond,
          leftClassName,
        )}
      >
        {left}
      </div>
      <div
        style={{ opacity: 0 }}
        ref={mergeRefs([rightViewRef, rightRef])}
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
