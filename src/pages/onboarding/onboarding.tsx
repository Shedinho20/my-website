import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const onboard = {
  hidden: {},
  visible: {},
  exit: {
    y: "-100vh",
    transition: {
      type: "spring",
      delay: 1.3,
      mass: 0.4,
      damping: 10,
      stiffness: 80,
    },
  },
};

const cover1 = {
  visible: {
    opacity: 1,
    x: "100%",
    transition: {
      type: "tween",
      duration: 1.5,
    },
  },
  exit: {
    x: "0",
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.7,
      duration: 0.5,
    },
  },
};
const cover2 = {
  visible: {
    opacity: 1,
    x: "100%",
    transition: {
      type: "tween",
      delay: 1.5,
      duration: 1,
    },
  },
  exit: {
    x: "0",
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.3,
      duration: 0.5,
    },
  },
};
const cover3 = {
  visible: {
    opacity: 1,
    x: "100%",
    transition: {
      type: "tween",
      delay: 2.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "0",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const Onboarding = () => {
  const [showOnboard, setshowOnboard] = useState(true);

  setTimeout(() => {
    setshowOnboard(false);
  }, 3200);
  return (
    <>
      <AnimatePresence>
        {showOnboard && (
          <motion.div variants={onboard} exit="exit" animate="visible" className="onboarding">
            <motion.div className="onboardcontainer">
              <div className="line1">
                <h3>
                  <span style={{ color: "#c969ed" }}>if </span>(<span style={{ color: "white" }}>onEarth</span>) {`{`}
                </h3>
                <motion.div variants={cover1} className="cover"></motion.div>
              </div>
              <div className="line1">
                <h3>
                  <span style={{ color: "white", marginLeft: "20px" }}>console</span>.log
                  <span style={{ color: "#c969ed" }}>(</span>
                  <span style={{ color: "red" }}>"Welcome 😀"</span>
                  <span style={{ color: "#c969ed" }}>)</span>
                </h3>
                <motion.div variants={cover2} className="cover"></motion.div>
              </div>
              <div className="line1">
                <h3>{`}`}</h3>
                <motion.div variants={cover3} className="cover"></motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
