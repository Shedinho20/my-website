import { useContext } from "react";
import { Link } from "react-scroll";
import { NavLink as LinkR } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Context } from "../../context/store";
import { Logo } from "../logo/logo";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export const menuList = {
  hidden: {
    opacity: 0,
    x: "-10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 1.3,
      duration: 1.3,
    },
  },
  exit: {
    x: "-10vw",
    opacity: 0,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 1.3,
    },
  },
};
export const menu = {
  hidden: {},
  visible: {},
  exit: {},
};
export const slide1 = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 10,
      stiffness: 80,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 2.3,
      mass: 0.4,
      damping: 10,
      stiffness: 80,
    },
  },
};
export const slide2 = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      mass: 0.4,
      damping: 10,
      stiffness: 80,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 1.9,
      mass: 0.4,
      damping: 10,
      stiffness: 80,
    },
  },
};
export const logo = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 1,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
export const Menu = () => {
  const { navisopen, setNavisopen, setcursor } = useContext(Context);
  return (
    <>
      <AnimatePresence>
        {navisopen && (
          <motion.div className="menu" variants={menu} initial="hidden" exit="exit" animate="visible">
            <motion.div className="slide" style={{ zIndex: 110 }} variants={slide1}></motion.div>
            <motion.div
              className="slide"
              variants={slide2}
              style={{ backgroundColor: "#0d1117", zIndex: 120 }}
            ></motion.div>
            <motion.div variants={logo} className="logo">
              <Logo />
            </motion.div>
            <motion.div variants={logo}>
              <FaTimes
                id="close"
                onClick={() => {
                  setNavisopen(false);
                  setcursor(false);
                }}
                onMouseEnter={() => setcursor(true)}
                onMouseLeave={() => setcursor(false)}
              />
            </motion.div>
            <motion.ul variants={menuList}>
              <motion.li>
                <LinkR
                  to="/"
                  onClick={() => {
                    scroll.scrollToTop();
                    setNavisopen(false);
                    setcursor(false);
                  }}
                  onMouseEnter={() => setcursor(true)}
                  onMouseLeave={() => setcursor(false)}
                  className="link"
                >
                  Home
                </LinkR>
              </motion.li>
              <motion.li>
                <Link
                  to="about"
                  className="link"
                  onClick={() => {
                    setNavisopen(false);
                    setcursor(false);
                  }}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onMouseEnter={() => setcursor(true)}
                  onMouseLeave={() => setcursor(false)}
                >
                  About Me
                </Link>
              </motion.li>
              <motion.li>
                <Link
                  to="projects"
                  className="link"
                  onClick={() => {
                    setNavisopen(false);
                    setcursor(false);
                  }}
                  onMouseEnter={() => setcursor(true)}
                  onMouseLeave={() => setcursor(false)}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li>
                <Link
                  to="contactme"
                  className="link"
                  onClick={() => {
                    setNavisopen(false);
                    setcursor(false);
                  }}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                  onMouseEnter={() => setcursor(true)}
                  onMouseLeave={() => setcursor(false)}
                >
                  Contact Me
                </Link>
              </motion.li>
              <motion.li>
                <LinkR
                  to="blog"
                  className="link"
                  onClick={() => {
                    setNavisopen(false);
                    setcursor(false);
                  }}
                  onMouseEnter={() => setcursor(true)}
                  onMouseLeave={() => setcursor(false)}
                >
                  {/* Blog */}
                </LinkR>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// const [state, setState] = useState({
//   home: true,
//   about: false,
// });

// const active = function (home: string, state: any) {
//   Object.keys(state).forEach(function (key) {
//     key == home ? (state[key] = true) : (state[key] = false);
//   });
//   setState(state);
// };
