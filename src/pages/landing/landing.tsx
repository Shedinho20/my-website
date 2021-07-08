import React, { useContext } from "react";
import { Socialmedia } from "../../components/socialMedia/socialMedia";
import { Context } from "../../context/store";
// @ts-ignore
import video from "../../Videos/video.mp4";
import { Link } from "react-scroll";
import Themetoggle from "../../components/themeToggle/Themetoggle";

export const Landing = () => {
  const { bottom, setcursor, theme } = useContext(Context);
  return (
    <div id="landing" className={`landing ${theme}`}>
      <div className="video">{theme === "dark" ? <video src={video} autoPlay={true} loop muted={true} /> : null}</div>
      <div className="cover"></div>
      <div className="landing-content">
        <h1>
          <span className="hand">👋🏾</span>, I am Shedrach Ezenwali
        </h1>
        <h4>
          Result oriented front end developer, passionate about{" "}
          <span style={{ color: theme == "dark" ? "#dddfe2 " : "#191f24" }}>Tech</span> and it’s ability to solve daily
          problems faced by the society.
        </h4>
        <Link
          to="contactme"
          smooth={true}
          duration={500}
          spy={true}
          onMouseEnter={() => setcursor(true)}
          onMouseLeave={() => setcursor(false)}
        >
          <button className="btn">Contact me</button>
        </Link>
      </div>

      {bottom ? null : <Socialmedia />}
      <Themetoggle />
    </div>
  );
};
