import { useGap } from 'hooks/useGap';

export const useDefaultGap = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 65,
  });
  return gap;
};
