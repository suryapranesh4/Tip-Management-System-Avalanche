import React, { useEffect, useContext } from "react";
import "./styles.css";

import { TipMeContext } from "./../context/TipMeContext";

import Loader from "./Loader";
import Dashboard from "./Dashboard";
import AddOrder from "./AddOrder";
import OrderHistory from "./OrderHistory";
import ServerLeaderboard from "./ServerLeaderboard";
import WithdrawTips from "./WithdrawTips";
import TipHistory from "./TipHistory";

export default function Home({ selectedItem }) {
  const {
    handleChange,
    addOrder,
    getOrders,
    orders,
    getLeaderboard,
    leaderboard,
    withdrawTips,
    isLoading,
    currentAccount,
    transactions,
    getWalletBallance,
    accountBalance,
    getWaiterName,
    waiterName,
    setOrderAmount,
  } = useContext(TipMeContext);

  const Content = () => {
    switch (selectedItem) {
      case 1:
        return (
          <Dashboard
            currentAccount={currentAccount}
            balance={accountBalance}
            name={waiterName}
            orders={orders}
            leaderboard={leaderboard}
            isLoading={isLoading}
          />
        );
      case 2:
        return (
          <AddOrder
            addOrder={addOrder}
            currentAccount={currentAccount}
            handleChange={handleChange}
            setOrderAmount={setOrderAmount}
            isLoading={isLoading}
            name={waiterName}
          />
        );
      case 3:
        return <OrderHistory orders={orders} isLoading={isLoading} />;
      case 4:
        return <TipHistory orders={orders} isLoading={isLoading} />;
      case 5:
        return (
          <ServerLeaderboard leaderboard={leaderboard} isLoading={isLoading} />
        );
      case 6:
        return (
          <WithdrawTips
            currentAccount={currentAccount}
            balance={accountBalance}
            name={waiterName}
            withdrawTips={withdrawTips}
            isLoading={isLoading}
          />
        );
      default:
        return (
          <Dashboard
            currentAccount={currentAccount}
            balance={accountBalance}
            name={waiterName}
            orders={orders}
            leaderboard={leaderboard}
            isLoading={isLoading}
          />
        );
    }
  };

  useEffect(() => {
    getOrders();
    getLeaderboard();
    getWalletBallance();
  }, []);
  return <div className="home">{Content()}</div>;
}
