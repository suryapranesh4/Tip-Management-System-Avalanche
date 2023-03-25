import React from "react";
import loaderIcon from "../images/waiterLoad.png";

export default function Loader() {
  return (
    <div className="loader">
      <img src={loaderIcon} alt="Loader" />
      <div>Loading......</div>
    </div>
  );
}
