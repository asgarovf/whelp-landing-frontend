import React, { Provider, ReactNode, useContext, useState } from 'react';

type GlobalContextData = {
  initializedCalendly: boolean;
  setInitializedCalendly: (to: boolean) => void;
};

export const GlobalContext = React.createContext<GlobalContextData>({
  initializedCalendly: false,
  setInitializedCalendly: () => undefined,
});

export const useGlobalStore = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [initializedCalendly, setInitializedCalendly] =
    useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        initializedCalendly,
        setInitializedCalendly,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
