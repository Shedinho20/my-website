import React, { useContext, useEffect } from "react";
import { Title } from "../../components/title/title";
import { Context } from "../../context/store";
const pdf = require("../../resume/shedrach's Resume.pdf");

export const About = () => {
  const { theme } = useContext(Context);

  return (
    <div id="about" className={`aboutme ${theme}`}>
      <Title title="About me" />
      <p>
        I will describe myself as a passionate Frontend developer who loves coding. I have 2 years experience as a
        freelance Frontend developer working with
        <span style={{ color: theme == "dark" ? "#dddfe2 " : "#191f24" }}>
          {" "}
          HTML, S(CSS), Javascript, ReactJS and Redux, React Native & Firebase
        </span>
        . Aside from my coding, I am an enthusiastic and driven engineering graduate with a Bsc & Msc degree in
        mechanical engineering and over 5 years experience in the oil and gas industry as a well testing Data
        Acquisition Engineer.
      </p>
      {/* <a href="../../resume/shedrach's Resume.pdf" download="name_of_file_you_want.pdf">
        My resume
      </a> */}
    </div>
  );
};
