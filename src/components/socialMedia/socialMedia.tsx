import React, { useContext } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Context } from "../../context/store";

export const Socialmedia = () => {
  const { bottom, setcursor } = useContext(Context);
  return (
    <div
      className="socialmedia"
      style={{ position: bottom ? "static" : "fixed" }}
      onMouseEnter={() => setcursor(true)}
      onMouseLeave={() => setcursor(false)}
    >
      <a href="https://twitter.com/ezenwali" target="_blank">
        <FaTwitterSquare className="icon" />
      </a>
      <a href="https://github.com/Shedinho20" target="_blank">
        <FaGithubSquare className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/shedrachezenwali/" target="_blank">
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
};
