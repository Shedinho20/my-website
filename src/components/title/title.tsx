import React, { useContext } from "react";
import { Context } from "../../context/store";
import img from "../../images/titleBg.png";
export const Title = ({ title }: any) => {
  const { theme } = useContext(Context);

  return (
    <div className={`title ${theme}`}>
      <h2>{title}</h2>
      <img src={img} alt="" />
    </div>
  );
};
