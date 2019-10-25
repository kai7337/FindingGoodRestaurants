import React from "react";
import "./box.scss";

export default function Box({ children, alpha = false, bordered = false }) {
  return (
    <div
      className={`Box ${alpha ? "alpha" : ""}  ${bordered ? "bordered" : ""} `}
    >
      {children}
    </div>
  );
}
