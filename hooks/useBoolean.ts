import { useCallback, useState } from 'react';

type UseBooleanReturnType = {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export const useBoolean = (initialValue = false): UseBooleanReturnType => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState(!state);
  }, [state]);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  return { setFalse, setTrue, toggle, value: state };
};
