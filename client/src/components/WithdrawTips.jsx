import React from "react";
import "./styles.css";
import { ethers } from "ethers";

import Withdraw from "../images/withdraw.gif";
import Loader from "./Loader";

export default function WithdrawTips({
  currentAccount,
  balance,
  name,
  withdrawTips,
  isLoading,
}) {
  const calculateBalance = (balance) => {
    if (balance > 0 && parseInt(balance.toString()) > 0) {
      let balanceInEther = ethers.utils.formatEther(balance);

      return `${balanceInEther} AVAX`;
    } else return `0 AVAX`;
  };

  return (
    <div className="dashboard">
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="welcomeBox">
            <div>
              <div className="welcomeText">Welcome</div>
              {name ? (
                <div className="welcomeName">
                  <span className="waiterName">{name}</span>{" "}
                  <span className="waiterAccount">({currentAccount})</span>
                </div>
              ) : (
                <div className="welcomeName">
                  {name}
                  {currentAccount}
                </div>
              )}
            </div>
            <div>
              <div className="welcomeText">Wallet Balance</div>
              <div className="welcomeName">{calculateBalance(balance)}</div>
            </div>
          </div>
          <div className="withdrawSection">
            {/* <img
          src={Withdraw}
          alt="withdraw"
          height={200}
          width={200}
          className="withdraw"
        /> */}
            <div
              className={
                balance > 0 && ethers.utils.formatEther(balance) > 0
                  ? "submitButton"
                  : "submitButton submitDisable"
              }
              onClick={() =>
                balance > 0 && ethers.utils.formatEther(balance) > 0
                  ? withdrawTips()
                  : null
              }
            >
              Withdraw Tips
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
