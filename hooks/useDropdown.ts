import { Placement } from '@floating-ui/react-dom';
import { useModal, useOnClickOutside, usePopper } from 'hooks';
import { useCallback } from 'react';

type Props = {
  strategy?: 'fixed' | 'absolute';
  topDistance?: number;
  leftDistance?: number;
  placement?: Placement;
};

export const useDropdown = ({
  strategy,
  topDistance,
  leftDistance,
  placement,
}: Props = {}) => {
  const { isOpen, open, close } = useModal();

  const closeRef = useOnClickOutside<HTMLDivElement>(() => {
    close();
  });

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, close, open]);

  const { floating, reference, popperStyles } = usePopper({
    leftDistance,
    placement,
    strategy,
    topDistance,
  });

  return {
    close,
    closeRef,
    floating,
    isOpen,
    open,
    popperStyles: { ...popperStyles, zIndex: 1 },
    reference,
    toggle,
  };
};
