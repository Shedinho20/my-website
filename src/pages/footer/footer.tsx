import React, { useContext } from "react";
import { Socialmedia } from "../../components/socialMedia/socialMedia";
import { Context } from "../../context/store";

export const Footer = () => {
  const { bottom, theme } = useContext(Context);
  return (
    <div className={`footer ${theme}`}>
      {bottom ? <Socialmedia /> : null}
      <h4>
        developed by&nbsp;
        <span>
          <a href="https://twitter.com/ezenwali" target="_blank" rel="noopener noreferrer">
            Shedrach Shedinho
          </a>
        </span>
        &nbsp;with<span className="beat"> ❤️</span>
      </h4>
    </div>
  );
};
