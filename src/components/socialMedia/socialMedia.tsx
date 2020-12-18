import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Context } from "../../context/store";

const social = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
      mass: 0.4,
      damping: 10000,
      stiffness: 80,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 1000,
      duration: 0.5,
    },
  },
};

export const Socialmedia = () => {
  const { bottom, setcursor } = useContext(Context);
  return (
    <motion.div
      variants={social}
      exit="exit"
      animate="visible"
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
    </motion.div>
  );
};
