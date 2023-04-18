import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "../utils/contractData";

export const TipMeContext = createContext();

const { ethereum } = window;

const getTipMeContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  return contract;
};

export const Provider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);
  const [waiterName, setWaiterName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = React.useState([]);

  const [orders, setOrders] = useState([]);
  const [leaderboard, setLeaderBoard] = useState([]);
  const [formData, setFormData] = useState({
    orderAmount: null,
    tipAmount: null,
  });

  const [formName, setFormName] = useState("");

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const setOrderAmount = (total) => {
    setFormData({ ...formData, orderAmount: total });
  };

  const handleNameUpdate = (name) => {
    setFormName(name);
  };

  const getOrders = async () => {
    if (!ethereum) return alert("Please Install Metamask");
    setIsLoading(true);
    const tipMeContract = getTipMeContract();
    const availableOrders = await tipMeContract.getOrders();

    const structuredOrders = availableOrders.map((order) => ({
      orderAmount: parseInt(order.orderAmount),
      orderNumber: parseInt(order.orderNumber),
      tipAmount: ethers.utils.formatEther(order.tipAmount),
      waiterAddress: order.waiterAddress,
      waiterName: order.waiterName,
    }));

    setOrders(structuredOrders);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const getLeaderboard = async () => {
    if (!ethereum) return alert("Please Install Metamask");
    setIsLoading(true);
    const tipMeContract = getTipMeContract();
    const waiters = await tipMeContract.getWaiters();

    const structuredWaiters = waiters.map((waiter) => ({
      tip: ethers.utils.formatEther(waiter.tip),
      waiterAddress: waiter.waiterAddress,
      waiterName: waiter.waiterName,
    }));

    setLeaderBoard(structuredWaiters);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const sendAVAXToContract = async () => {
    if (!ethereum) return alert("Please Install Metamask");
    setIsLoading(true);
    const tipMeContract = getTipMeContract();
    const valueInWei = ethers.utils.parseUnits("0.0002", "ether");
    const sendTransaction = await tipMeContract.sendAVAXToContract(valueInWei);
    const tx = await sendTransaction.wait();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please Install Metamask");

    const account = await ethereum.request({ method: "eth_accounts" });

    if (account.length) {
      setCurrentAccount(account[0]);
    }
  };

  const withdrawTips = async () => {
    if (!ethereum) return alert("Please Install Metamask");
    setIsLoading(true);
    const tipMeContract = getTipMeContract();
    const sendTransaction = await tipMeContract.withdrawTips();
    const tx = await sendTransaction.wait();

    getOrders();
    getWaiters();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      setIsLoading(true);
      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(account[0]);

      const tipMeContract = getTipMeContract();

      const addWaiter = await tipMeContract.addWaiter();
      const tx = await addWaiter.wait();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      throw new Error("No Ethereum Object");
    }
  };

  const addOrder = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");
      setIsLoading(true);
      const { orderAmount, tipAmount } = formData;

      const tipMeContract = getTipMeContract();

      const tipInWei = ethers.utils.parseUnits(tipAmount, "ether");

      console.log(orderAmount, tipInWei);

      const addOrderReceipt = await tipMeContract.addOrder(
        orderAmount,
        tipInWei
      );
      const tx = await addOrderReceipt.wait();
      setTransactions([...transactions, tx.transactionHash]);

      getOrders();
      getLeaderboard();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getWalletBallance = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");
      setIsLoading(true);

      const tipMeContract = getTipMeContract();
      const balance = await tipMeContract.waiterToTip(currentAccount);
      setAccountBalance(balance);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getWaiterName = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");
      setIsLoading(true);

      const tipMeContract = getTipMeContract();
      const name = await tipMeContract.addressToWaiterName(currentAccount);
      setWaiterName(name);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const updateWaiterName = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");
      setIsLoading(true);

      const tipMeContract = getTipMeContract();
      const nameReceipt = await tipMeContract.updateWaiterName(formName);
      const tx = await nameReceipt.wait();
      setWaiterName(formName);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      getOrders();
      getLeaderboard();
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TipMeContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        addOrder,
        handleChange,
        isLoading,
        orders,
        getOrders,
        getLeaderboard,
        leaderboard,
        sendAVAXToContract,
        withdrawTips,
        transactions,
        getWalletBallance,
        accountBalance,
        getWaiterName,
        waiterName,
        updateWaiterName,
        setOrderAmount,
        handleNameUpdate,
      }}
    >
      {children}
    </TipMeContext.Provider>
  );
};
