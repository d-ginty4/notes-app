import React, { useState, useContext, createContext } from "react";

interface Children {
  children: React.ReactNode;
}

interface GlobalContent {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pagePath: string;
  setPagePath: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<GlobalContent>({
  loading: true,
  setLoading: () => {},
  pagePath: "",
  setPagePath: () => {},
});

export const AppProvider: React.FC<Children> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pagePath, setPagePath] = useState<string>("");

  return (
    <AppContext.Provider value={{ loading, setLoading, pagePath, setPagePath }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
