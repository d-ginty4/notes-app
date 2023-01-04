import React, { useState, useContext, createContext, useRef } from "react";

interface Children {
  children: React.ReactNode;
}

interface GlobalContent {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pageName: string;
  setPageName: React.Dispatch<React.SetStateAction<string>>;
  main?: React.MutableRefObject<HTMLElement | null>;
  navbar?: React.MutableRefObject<HTMLDivElement | null>;
}

const AppContext = createContext<GlobalContent>({
  loading: true,
  setLoading: () => {},
  pageName: "",
  setPageName: () => {},
});

export const AppProvider: React.FC<Children> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pageName, setPageName] = useState<string>("");
  const main = useRef<HTMLElement | null>(null);
  const navbar = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider
      value={{ loading, setLoading, pageName, setPageName, main, navbar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
