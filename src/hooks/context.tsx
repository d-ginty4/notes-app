import React, { useState, useContext, createContext } from "react";

interface Children {
  children: React.ReactNode;
}

interface GlobalContent {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<GlobalContent>({
  loading: true,
  setLoading: () => {}
})

export const AppProvider: React.FC<Children> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <AppContext.Provider value={{loading, setLoading}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}