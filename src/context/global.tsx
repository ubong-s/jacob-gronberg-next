import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const GlobalContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}>({ menuOpen: false, setMenuOpen: () => {} });

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
