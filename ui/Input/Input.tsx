import { ComponentPropsWithoutRef } from 'react';
import { DynamicBorderRadiusProps } from 'types';
import { clsnm } from 'utils/clsnm';

import styles from './Input.module.scss';

interface Props extends ComponentPropsWithoutRef<'input'> {
  wrapperProps?: ComponentPropsWithoutRef<'div'>;
  height?: string;
  disableRightBorder?: boolean;
  disableLeftBorder?: boolean;
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
  width = '100%',
  ...props
}: Props & DynamicBorderRadiusProps) => {
  const wrapperStyles = wrapperProps?.style ?? {};

  return (
    <div
      className={clsnm(wrapperProps?.className, styles.wrapper)}
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
      <input className={clsnm(className, styles.input)} {...props} />
    </div>
  );
};
