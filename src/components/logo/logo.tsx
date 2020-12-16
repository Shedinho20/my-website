import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Context } from "../../context/store";

export const Logo = () => {
  const { setNavisopen, setcursor } = useContext(Context);
  return (
    <Link
      className="Rlink"
      to="/"
      onClick={() => {
        scroll.scrollToTop();
        setNavisopen(false);
      }}
      onMouseEnter={() => setcursor(true)}
      onMouseLeave={() => setcursor(false)}
    >
      <div className="logo">
        <h2>Shedrach Shedinho</h2>
        <h4>Frontend Developer</h4>
      </div>
    </Link>
  );
};
