import { useCallback, useEffect } from 'react';

export const useTheme = () => {
  // Implement if needed
};

export const useInitialTheme = () => {
  useEffect(() => {
    document.documentElement.classList.add('light');
  }, []);
};
