import { useMedium } from 'hooks/useMedium';
import { useSmall } from 'hooks/useSmall';
import { useMemo } from 'react';

type GapBreakpoint = 'small' | 'medium' | 'large';

export const useGap = (gaps: Partial<Record<GapBreakpoint, number>>) => {
  const small = useSmall();
  const medium = useMedium();

  const gap = useMemo(() => {
    if (small) {
      return gaps['small'] ?? 40;
    } else if (medium) {
      return gaps['medium'] ?? 40;
    } else {
      return gaps['large'] ?? 40;
    }
  }, [small, medium, gaps]);

  return gap;
};
