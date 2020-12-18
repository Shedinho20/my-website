import { useState, createContext, useEffect } from "react";
import { debounce } from "lodash";
interface Appstate {
  navisopen: boolean;
  bottom: boolean;
  cursor: boolean;
  setNavisopen: any;
  setcursor: any;
}

const AppState = {
  navisopen: false,
  bottom: false,
  cursor: false,
  setNavisopen: () => false,
  setcursor: () => false,
};

export const Context = createContext<Appstate>(AppState);

export const Appprovider: React.FC = ({ children }) => {
  const [navisopen, setNavisopen] = useState(false);
  const [bottom, setbottom] = useState(false);
  const [cursor, setcursor] = useState(false);

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
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
