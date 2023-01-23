import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  let [items, setItems] = useState(0)
  return (
    <AppContext.Provider value={{ cartId, setCartId, items, setItems }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export {AppContext, AppWrapper, useAppContext}