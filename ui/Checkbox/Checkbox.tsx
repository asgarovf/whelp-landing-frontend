import { CheckboxChecked, Checkbox as CheckboxIcon } from 'assets/icons';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Icon } from 'ui/Icon/Icon';
import { Text } from 'ui/Text/Text';
import { clsnm } from 'utils/clsnm';

import styles from './Checkbox.module.scss';

interface Props extends ComponentPropsWithoutRef<'button'> {
  checked: boolean;
  label?: ReactNode;
}

export const Checkbox = ({ checked, className, label, ...props }: Props) => {
  return (
    <button className={clsnm(styles.wrapper, className)} {...props}>
      <Icon size={24} className={clsnm(styles.icon, checked && styles.checked)}>
        {checked ? <CheckboxChecked /> : <CheckboxIcon />}
      </Icon>
      {label != null && <Text className={styles.label}>{label}</Text>}
    </button>
  );
};
