import {
  ComponentPropsWithoutRef,
  ReactNode,
  RefObject,
  useState,
} from 'react';
import { DynamicBorderRadiusProps } from 'types';
import { Text } from 'ui/Text/Text';
import { clsnm } from 'utils/clsnm';

import styles from './Input.module.scss';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  wrapperProps?: ComponentPropsWithoutRef<'div'>;
  height?: string;
  disableRightBorder?: boolean;
  disableLeftBorder?: boolean;
  label?: ReactNode;
  inheritDefaultStyles?: boolean;
  wrapperRef?: RefObject<HTMLDivElement>;
}

export const Input = ({
  wrapperProps,
  className,
  topLeftRadius = '60px',
  topRightRadius = '60px',
  bottomLeftRadius = '60px',
  bottomRightRadius = '60px',
  disableRightBorder = false,
  disableLeftBorder = false,
  height,
  inheritDefaultStyles,
  onFocus,
  onBlur,
  width = '100%',
  label,
  wrapperRef,
  ...props
}: InputProps & DynamicBorderRadiusProps) => {
  const wrapperStyles = wrapperProps?.style ?? {};
  const [focused, setFocused] = useState(false);

  return (
    <div ref={wrapperRef} className={styles.flex}>
      {label != null && <Text className={styles.label}>{label}</Text>}
      <div
        className={clsnm(
          wrapperProps?.className,
          styles.wrapper,
          inheritDefaultStyles && styles.default,
          focused && styles.focus,
        )}
        style={{
          borderBottomLeftRadius: bottomLeftRadius,
          borderTopLeftRadius: topLeftRadius,
          borderTopRightRadius: topRightRadius,
          borderBottomRightRadius: bottomRightRadius,
          height: wrapperStyles.height ?? height,
          width: wrapperStyles.width ?? width,
          borderRight: disableRightBorder ? 'none' : wrapperStyles.borderRight,
          borderLeft: disableLeftBorder ? 'none' : wrapperStyles.borderLeft,
          ...(wrapperProps?.style ?? {}),
        }}
        {...wrapperProps}
      >
        <input
          onFocus={(...props) => {
            onFocus?.(...props);
            setFocused(true);
          }}
          onBlur={(...props) => {
            onBlur?.(...props);
            setFocused(false);
          }}
          className={clsnm(className, styles.input)}
          {...props}
        />
      </div>
    </div>
  );
};
