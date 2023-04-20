import React from "react";
import "./styles.css";
import Waiter from "./../images/waiter.png";
import Orders from "./../images/orders.png";
import Tips from "./../images/tips.png";
import Chef from "./../images/chef.png";
import Revenue from "./../images/revenue.png";
import { ethers } from "ethers";
import Loader from "./Loader";

export default function Dashbaord({
  currentAccount,
  balance,
  name,
  orders,
  leaderboard,
  isLoading,
}) {
  const calculateBalance = (balance) => {
    if (balance > 0 && parseInt(balance.toString()) > 0) {
      let balanceInEther = ethers.utils.formatEther(balance);

      return `${balanceInEther} AVAX`;
    } else return `0 AVAX`;
  };

  const calculateRevenue = (orders) => {
    const revenue = orders.reduce((prev, curr, index, array) => {
      return prev + parseFloat(curr.orderAmount);
    }, 0);
    return revenue % 1 == 0
      ? `${parseInt(revenue)} AVAX`
      : `${revenue.toFixed(4)} AVAX`;
  };

  const calculateTips = (orders) => {
    const tips = orders.reduce((prev, curr, index, array) => {
      return prev + parseFloat(curr.tipAmount);
    }, 0);
    return tips % 1 == 0 ? `${parseInt(tips)} AVAX` : `${tips.toFixed(4)} AVAX`;
  };

  const statistics = [
    {
      boxColor: "steelblue",
      title: "Servers",
      label: `${leaderboard?.length}`,
      icon: Waiter,
    },
    {
      boxColor: "green",
      title: "Accumulated Tips",
      label: calculateTips(orders),
      icon: Tips,
    },
    {
      boxColor: "orange",
      title: "Orders",
      label: `${orders?.length}`,
      icon: Orders,
    },
    {
      boxColor: "red",
      title: "Revenue",
      label: calculateRevenue(orders),
      icon: Revenue,
    },
  ];

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

          <div className="stats">
            <div className="title">Statistics</div>
            <div className="allStats">
              {statistics.map((data, i) => {
                let { boxColor, title, label, icon } = data;
                return (
                  <div className={"infoBox" + " " + `${boxColor}`} key={i}>
                    <div className="infoTitle">
                      <img
                        src={icon}
                        alt="icon"
                        width={32}
                        height={32}
                        className="statIcon"
                      />
                      {title}
                    </div>
                    <div className="infoLabel">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
