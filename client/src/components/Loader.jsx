import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="bars-common bar-one"></div>
      <div className="bars-common bar-two"></div>
      <div className="bars-common bar-three"></div>

      <div className="squares-common square-one"></div>
      <div className="squares-common square-two"></div>
    </div>
  );
}
