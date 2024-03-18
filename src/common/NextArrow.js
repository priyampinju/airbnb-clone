import React from "react";
import Next from "../images/next.svg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        border: "1px solid var(--text-color)",
        margin: "0 30px",
      }}
      onClick={onClick}
    >
      <img src={Next} className="h-[12px] absolute" />
    </div>
  );
};

export default NextArrow;
