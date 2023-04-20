import React from "react";
import "./styles.css";

import Table from "./Table";
import { useSort } from "@table-library/react-table-library/sort";
import Loader from "./Loader";

export default function ServerLeaderboard({ leaderboard, isLoading }) {
  const amountFormat = (value) => {
    return value % 1 == 0 ? `${parseInt(value)} AVAX` : `${value} AVAX`;
  };
  const columns = [
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
      renderCell: (item) => amountFormat(item.tip),
      sort: { sortKey: "TIPS" },
    },
  ];
  const nodes = leaderboard || [];
  const data = { nodes };
  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        TIPS: (array) => array.sort((a, b) => a.tip - b.tip),
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
    <div className="serverLeaderboard">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="serverLeaderboardData">
          <div className="title">Server Leaderboard</div>
          <Table nodes={nodes} columns={columns} sort={sort} />
        </div>
      )}
    </div>
  );
}
