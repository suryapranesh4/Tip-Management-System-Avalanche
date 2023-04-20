import React, { useContext } from "react";

import Connect from "./components/Connect";
import Home from "./components/Home";
import AppTitle from "./components/AppTitle";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";

import "./App.css";

import { TipMeContext } from "./context/TipMeContext";

import addOrder from "./images/addOrder.png";
import addOrderSelected from "./images/addOrderSelected.png";
import dashboard from "./images/dashboard.png";
import dashboardSelected from "./images/dashboardSelected.png";
import ordersHistory from "./images/ordersHistory.png";
import ordersHistorySelected from "./images/ordersHistorySelected.png";
import tipHistory from "./images/tipHistory.png";
import tipHistorySelected from "./images/tipHistorySelected.png";
import waitress from "./images/waitress.png";
import waitressSelected from "./images/waitressSelected.png";
import withdrawTips from "./images/withdrawTips.png";
import withdrawTipsSelected from "./images/withdrawTipsSelected.png";

function App() {
  const {
    currentAccount,
    getWalletBallance,
    accountBalance,
    getWaiterName,
    waiterName,
    updateWaiterName,
    handleNameUpdate,
  } = useContext(TipMeContext);
  const navBarItems = [
    {
      name: "Dashboard",
      id: 1,
      icon: dashboard,
      iconSelected: dashboardSelected,
    },
    {
      name: "Add Order",
      id: 2,
      icon: addOrder,
      iconSelected: addOrderSelected,
    },
    {
      name: "Order History",
      id: 3,
      icon: ordersHistory,
      iconSelected: ordersHistorySelected,
    },
    {
      name: "Tip History",
      id: 4,
      icon: tipHistory,
      iconSelected: tipHistorySelected,
    },
    {
      name: "Server Leaderboard",
      id: 5,
      icon: waitress,
      iconSelected: waitressSelected,
    },
    {
      name: "Withdraw Tips",
      id: 6,
      icon: withdrawTips,
      iconSelected: withdrawTipsSelected,
    },
  ];
  const [selectedItem, setSelectedItem] = React.useState(1);

  React.useEffect(() => {
    if (currentAccount) {
      getWalletBallance();
      getWaiterName();
    }
  }, [currentAccount]);

  return (
    <div className="layout">
      <div className="headerComponent">
        <AppTitle />
        <SearchBar
          currentAccount={currentAccount}
          balance={accountBalance}
          name={waiterName}
          updateWaiterName={updateWaiterName}
          handleNameUpdate={handleNameUpdate}
        />
      </div>
      <div className="footer">
        <Navigation
          items={navBarItems}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          currentAccount={currentAccount}
        />
        <div className="details">
          {currentAccount ? <Home selectedItem={selectedItem} /> : <Connect />}
        </div>
      </div>
    </div>
  );
}

export default App;
