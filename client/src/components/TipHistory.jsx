import React from "react";
import "./styles.css";

import Table from "./Table";
import { useSort } from "@table-library/react-table-library/sort";
import Loader from "./Loader";

export default function TipHistory({ orders, isLoading }) {
  const amountFormat = (value) => {
    return value % 1 == 0 ? `${parseInt(value)} AVAX` : `${value} AVAX`;
  };

  const columns = [
    {
      label: "Order #",
      renderCell: (item) => item.orderNumber,
      sort: { sortKey: "NUMBER" },
    },
    {
      label: "Amount",
      renderCell: (item) => amountFormat(item.orderAmount),
      sort: { sortKey: "AMOUNT" },
    },
    {
      label: "Server Wallet",
      renderCell: (item) => item.waiterAddress,
      sort: { sortKey: "ADDRESS" },
    },
    {
      label: "Server Name",
      renderCell: (item) => item.waiterName,
      sort: { sortKey: "SERVER" },
    },
    {
      label: "Tips",
      renderCell: (item) => amountFormat(item.tipAmount),
      sort: { sortKey: "TIPS" },
    },
  ];
  const nodes = orders?.filter((order, i) => order?.tipAmount > 0) || [];
  const data = { nodes };
  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        NUMBER: (array) => array.sort((a, b) => a.orderNumber - b.orderNumber),
        AMOUNT: (array) => array.sort((a, b) => a.orderAmount - b.orderAmount),
        TIPS: (array) => array.sort((a, b) => a.tipAmount - b.tipAmount),
        SERVER: (array) =>
          array.sort((a, b) => a.waiterName.localeCompare(b.waiterName)),
        ADDRESS: (array) =>
          array.sort((a, b) => a.waiterAddress.localeCompare(b.waiterAddress)),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }
  return (
    <div className="tipHistory">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="tipHistoryData">
          <div className="title">Tip History</div>
          <Table nodes={nodes} columns={columns} sort={sort} />
        </div>
      )}
    </div>
  );
}
