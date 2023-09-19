import { createContext, useState } from 'react';

export const DropdownDisplayContext = createContext({
  displayed: false,
  setDisplayed: () => {}
});

export const DropdownDisplayProvider = ({ children }) => {
  const [ displayed, setDisplayed ] = useState(false);
  const contextValue = { displayed, setDisplayed };

  return (
    <DropdownDisplayContext.Provider value={ contextValue }>
      { children }
    </DropdownDisplayContext.Provider>
  );
};