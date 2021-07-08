import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Context } from "../../context/store";
import { Logo } from "../logo/logo";

export const NavBar = () => {
  const [bg, setbg] = useState(false);
  const { setNavisopen, setcursor, theme } = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [onscroll]);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setbg(true);
    } else {
      setbg(false);
    }
  };

  const style = {
    backgroundColor: theme == "dark" ? "#0d1117" : "hsl(216, 20%, 95%)",
  };
  return (
    <div>
      <div className={`container ${theme}`} style={bg ? style : {}}>
        <div className="navcontent">
          <Logo />
          <FaBars
            id="menu"
            onClick={() => {
              setNavisopen(true);
            }}
            onMouseEnter={() => setcursor(true)}
            onMouseLeave={() => setcursor(false)}
          />
        </div>
      </div>
    </div>
  );
};
