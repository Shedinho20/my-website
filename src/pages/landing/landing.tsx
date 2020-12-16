import React, { useContext } from "react";
import { Socialmedia } from "../../components/socialMedia/socialMedia";
import { Context } from "../../context/store";
// @ts-ignore
import video from "../../Videos/video.mp4";
import { Link } from "react-scroll";

export const Landing = () => {
  const { bottom, setcursor } = useContext(Context);
  return (
    <div id="landing" className="landing">
      <div className="video">
        <video src={video} autoPlay={true} loop muted={true} />
      </div>
      <div className="cover"></div>
      <div className="landing-content">
        <h1>
          <span className="hand">👋🏾</span>, I am Shedrach Ezenwali
        </h1>
        <h4>
          Result oriented front end developer, passionate about <span style={{ color: "#dddfe2" }}>Tech</span> and it’s
          ability to solve daily problems faced by the society.
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
    </div>
  );
};
