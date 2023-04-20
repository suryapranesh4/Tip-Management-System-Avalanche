import React from "react";
import "./styles.css";
import Waiter from "./../images/waiter.png";

export default function AppTitle() {
  return (
    <div className="appTitle">
      <div className="tipMeApp">
        <img src={Waiter} alt="waiter" className="appTitleIcon" />
        Tip Me
      </div>
      <div className="subtitle">Restaurant Payments System</div>
    </div>
  );
}
