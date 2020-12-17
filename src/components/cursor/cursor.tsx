import { motion } from "framer-motion";
import { useContext } from "react";
import { Mouseposition } from "../../context/mousePosition";
import { Context } from "../../context/store";

export const Cursor = () => {
  const { x, y } = Mouseposition();
  const { cursor } = useContext(Context);
  return (
    <motion.div
      animate={{ x: x - 16, y: y - 16, scale: cursor ? 1.2 : 1, opacity: cursor ? 1 : 0 }}
      transition={{ ease: "linear", duration: 0.02 }}
      className="cursor"
    ></motion.div>
  );
};
