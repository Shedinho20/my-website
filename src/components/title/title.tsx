import React from "react";
import img from "../../images/titleBg.png";
export const Title = ({ title }: any) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <img src={img} alt="" />
    </div>
  );
};
