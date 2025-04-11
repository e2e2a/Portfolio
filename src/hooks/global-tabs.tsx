'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our context
interface GlobalStateContextType {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Create a provider component to wrap around your app
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define the state using useState
  const [tab, setTab] = useState<string>('about'); // Initial state value

  return (
    <GlobalStateContext.Provider value={{ tab, setTab }}>{children}</GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state context
export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) throw new Error('useGlobalState must be used within a GlobalStateProvider');
  return context;
};
