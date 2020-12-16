import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Context } from "../../context/store";
import { Logo } from "../logo/logo";

export const NavBar = () => {
  const [bg, setbg] = useState(false);
  const { setNavisopen, setcursor } = useContext(Context);

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
  return (
    <div>
      <div className="container" style={{ backgroundColor: bg ? "rgba(13, 17, 23,1)" : "rgba(0, 0, 0,0)" }}>
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
