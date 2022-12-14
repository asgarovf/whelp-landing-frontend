import { useMediaQuery } from 'react-responsive';

export const useSmall = () => {
  return useMediaQuery({
    query: '(max-width: 768px)',
  });
};
