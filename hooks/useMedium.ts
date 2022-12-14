import { useMediaQuery } from 'react-responsive';

export const useMedium = () => {
  return useMediaQuery({
    query: '(max-width: 992px)',
  });
};
