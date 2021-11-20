import React from 'react';

export const TabContext = React.createContext<any>(undefined);

export function useTabContext() {
  return React.useContext(TabContext);
}
