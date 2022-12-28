import React, { useState, useContext, createContext } from "react";

interface Children {
  children: React.ReactNode;
}

interface GlobalContent {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<GlobalContent>({
  loading: true,
  setLoading: () => {},
  page: "",
  setPage: () => {},
});

export const AppProvider: React.FC<Children> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<string>("");

  return (
    <AppContext.Provider value={{ loading, setLoading, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
