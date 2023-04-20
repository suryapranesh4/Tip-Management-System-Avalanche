import React from "react";
import "./styles.css";

import Bell from "./../images/bell.png";
import Search from "./../images/search.png";
import Profile from "./../images/profile.png";

import Modal from "./Modal";
import { ethers } from "ethers";

export default function SearchBar({
  currentAccount,
  balance,
  name,
  updateWaiterName,
  handleNameUpdate,
}) {
  const [showProfile, setShowProfile] = React.useState(false);
  const [waiterName, setName] = React.useState(name);

  const calculateBalance = (balance) => {
    if (balance > 0 && parseInt(balance.toString()) > 0) {
      let balanceInEther = ethers.utils.formatEther(balance);

      return `${balanceInEther} AVAX`;
    } else return `0 AVAX`;
  };

  const handleOnChange = (name) => {
    handleNameUpdate(name);
    setName(name);
  };

  const handleUpdateNameButton = () => {
    updateWaiterName();
    setShowProfile(false);
  };

  React.useEffect(() => {
    setName(name);
  }, [name]);

  return (
    <div className="searchBar">
      <Modal onClose={() => setShowProfile(false)} show={showProfile}>
        <div className="serverTitle">Server Profile</div>
        <div className="profileDetails">
          <div className="profileField">Name</div>
          <div className="updateName">
            <input
              value={waiterName ? waiterName : name}
              onChange={(e) => handleOnChange(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                name != waiterName ? handleUpdateNameButton() : null
              }
              className={
                name != waiterName
                  ? "updateNameButton"
                  : "updateNameButton updateDisable"
              }
            >
              Update
            </button>
          </div>
          <div className="profileField">Wallet Address</div>
          <div>{currentAccount}</div>
          <div className="profileField">Wallet Balance</div>
          <div>{calculateBalance(balance)}</div>
        </div>
      </Modal>
      <img src={Search} alt="Search" className="searchIcon" />
      <div className="notification">
        <img src={Bell} alt="Bell" className="searchIcon" />
        <div className="notificationNumber">4</div>
      </div>
      <img
        src={Profile}
        alt="Profile"
        className={
          currentAccount ? "profileIcon" : "profileIcon disableProfile"
        }
        onClick={() => (currentAccount ? setShowProfile(true) : null)}
      />
    </div>
  );
}
