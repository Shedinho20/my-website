import { useState, createContext, useEffect } from "react";
import { debounce } from "lodash";
interface Appstate {
  navisopen: boolean;
  bottom: boolean;
  cursor: boolean;
  setNavisopen: React.Dispatch<React.SetStateAction<boolean>>;
  setcursor: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}

const AppState = {
  navisopen: false,
  bottom: false,
  cursor: false,
  setNavisopen: () => false,
  setcursor: () => false,
  theme: "dark",
  setTheme: () => "dark",
};

export const Context = createContext<Appstate>(AppState);

export const Appprovider: React.FC = ({ children }) => {
  const [navisopen, setNavisopen] = useState(false);
  const [bottom, setbottom] = useState(false);
  const [cursor, setcursor] = useState(false);
  const [theme, setTheme] = useState("dark");

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      setbottom(true);
    } else {
      setbottom(false);
    }
  };

  const store = {
    navisopen,
    setNavisopen,
    bottom,
    cursor,
    setcursor,
    setTheme,
    theme,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
