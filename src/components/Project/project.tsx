import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithubSquare, FaDev } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

export const menu = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",

      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const Project = (data: any) => {
  const { title, url, tech, webUrl, web } = data.data;
  const [showbanner, setShowbanner] = useState(false);
  return (
    <motion.div className="project">
      <motion.div
        className="projectcontainer"
        onMouseEnter={() => setShowbanner(true)}
        onMouseLeave={() => setShowbanner(false)}
      >

        {url === "" ? (
          <a target="_blank">
            <FaDev className="icon" />
          </a>
        ) : (
          <a href={url} target="_blank">
            <FaGithubSquare className="icon" />
          </a>
        )}
        {web && (
          <a href={webUrl} target="_blank">
            <VscLinkExternal className="icon icon2" />
          </a>
        )}
        <h4 className="projecttitle">{title}</h4>
        {
          <div style={{ display: "flex" }}>
            {tech.map((stack: string) => (
              <h5>{stack}</h5>
            ))}
          </div>
        }

      </motion.div>
    </motion.div>
  );
};
