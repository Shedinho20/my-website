import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const { title, url, body, tech, Img } = data.data;
  const [showbanner, setShowbanner] = useState(false);
  return (
    <motion.div className="project">
      <motion.div
        className="projectcontainer"
        onMouseEnter={() => setShowbanner(true)}
        onMouseLeave={() => setShowbanner(false)}
      >
        <img src={Img} />
        <AnimatePresence>
          {showbanner && (
            <motion.div className="cover" variants={menu} initial="hidden" exit="exit" animate="visible">
              {url === "" ? (
                <a target="_blank">In Progress</a>
              ) : (
                <a href={url} target="_blank">
                  Source code
                </a>
              )}
              <h4>{body}</h4>
              <div style={{ display: "flex" }}>
                {tech.map((stack: string) => (
                  <h5>{stack}</h5>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <h4 className="projecttitle" onMouseEnter={() => setShowbanner(true)} onMouseLeave={() => setShowbanner(false)}>
        {title}
      </h4>
    </motion.div>
  );
};
