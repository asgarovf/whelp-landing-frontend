import { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';
import { Text } from 'ui/Text/Text';
import { clsnm } from 'utils/clsnm';

import styles from './TextArea.module.scss';

interface Props extends ComponentPropsWithoutRef<'textarea'> {
  label?: ReactNode;
  className?: string;
  forwardedRef?: RefObject<HTMLTextAreaElement>;
}

export const TextArea = ({
  label,
  className,
  forwardedRef,
  ...props
}: Props) => {
  return (
    <div className={styles.flex}>
      {label && <Text className={styles.label}>{label}</Text>}
      <textarea
        ref={forwardedRef}
        onResize={(e) => {
          console.log(e);
        }}
        className={clsnm(styles.input, className)}
        {...props}
      />
    </div>
  );
};
