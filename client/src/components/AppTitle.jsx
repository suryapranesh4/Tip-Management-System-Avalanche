import React from "react";
import "./styles.css";
import Waiter from "./../images/waiter.png";

export default function AppTitle() {
  return (
    <div className="appTitle">
      <img src={Waiter} alt="waiter" className="appTitleIcon" />
      Tip Me
    </div>
  );
}
