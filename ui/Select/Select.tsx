import useResizeObserver from '@react-hook/resize-observer';
import { ChevronDown } from 'assets/icons';
import { useDropdown } from 'hooks';
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { Icon } from 'ui/Icon/Icon';
import { Input, InputProps } from 'ui/Input/Input';
import { clsnm } from 'utils/clsnm';

import styles from './Select.module.scss';

type Props = {
  inputProps?: InputProps;
  value: any;
  activeKey?: string | null;
  onChange: (to: any) => void;
  options: { value: any; label: string; key: string }[];
};

export const Select = ({ inputProps, value, onChange, options }: Props) => {
  const {
    close,
    closeRef,
    open,
    isOpen,
    toggle,
    reference,
    floating,
    popperStyles,
  } = useDropdown({
    strategy: 'absolute',
    placement: 'bottom-start',
    topDistance: 12,
  });

  const inputRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useResizeObserver(inputRef, () => {
    if (inputRef.current == null || menuRef.current == null) {
      return;
    }
    menuRef.current.style.width = `${inputRef.current.offsetWidth}px`;
  });

  useEffect(() => {
    if (inputRef.current == null || menuRef.current == null) {
      return;
    }
    menuRef.current.style.width = `${inputRef.current.offsetWidth}px`;
  }, [isOpen]);

  return (
    <div ref={closeRef}>
      <div ref={reference} onClick={toggle} className={styles.controller}>
        <Input
          value={value ?? ''}
          wrapperRef={inputRef}
          className={styles.input}
          {...inputProps}
          disabled
          onChange={(e) => {
            e.preventDefault();
            return;
          }}
          inheritDefaultStyles
        />
        <Icon className={styles.chevron}>
          <ChevronDown />
        </Icon>
      </div>
      {isOpen && (
        <div
          className={styles.menu}
          ref={mergeRefs([floating, menuRef])}
          style={{ ...popperStyles }}
        >
          {options.map((item) => (
            <div
              key={item.key}
              onClick={() => {
                close();
                onChange(item);
              }}
              className={clsnm(
                styles.option,
                item.key === value && styles.selected,
              )}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
