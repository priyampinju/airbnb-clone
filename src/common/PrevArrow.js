import React from "react";
import Prev from "../images/prev.svg";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "transparent",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        border: "1px solid var(--text-color)",
        margin: "0 10px ",
      }}
      onClick={onClick}
    >
      <img src={Prev} className="h-[12px] absolute" />
    </div>
  );
};

export default PrevArrow;
