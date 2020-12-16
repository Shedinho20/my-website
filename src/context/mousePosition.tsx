import { useEffect, useState } from "react";

export const mouseposition = () => {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 2 });

  useEffect(() => {
    const handmove = (e: any) => {
      setmousePosition({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handmove);
    return () => window.removeEventListener("mousemove", handmove);
  }, []);

  return mousePosition;
};
