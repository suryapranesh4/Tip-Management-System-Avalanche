import React, { useContext } from "react";
import "./styles.css";
import Loader from "./Loader";
import Waiter from "./../images/waiter.png";

import { TipMeContext } from "./../context/TipMeContext";

export default function Connect() {
  const { connectWallet, isLoading } = useContext(TipMeContext);

  return (
    <div className="tipMe">
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <img src={Waiter} alt="waiter" className="connectIcon" />
          <div className="tipTitle">Tip Me</div>
          <button
            type="button"
            onClick={connectWallet}
            className="submitButton"
          >
            Connect Wallet
          </button>
        </React.Fragment>
      )}
    </div>
  );
}
