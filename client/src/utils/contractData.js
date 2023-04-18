// Fuji Avalanche
export const contractAddress = "0xb41C1aaf581Cf300d11433a4A1CA469F529bb02d";
export const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tipAmount",
        type: "uint256",
      },
    ],
    name: "addOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addWaiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "updateWaiterName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressToWaiterName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrders",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "orderAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tipAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "waiterAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "waiterName",
            type: "string",
          },
        ],
        internalType: "struct TipMe.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWaiters",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "waiterName",
            type: "string",
          },
          {
            internalType: "address",
            name: "waiterAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tip",
            type: "uint256",
          },
        ],
        internalType: "struct TipMe.Waiter[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "orderNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "orderAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tipAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "waiterAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "waiterName",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderToWaiterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orderToWaiterName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "waiters",
    outputs: [
      {
        internalType: "string",
        name: "waiterName",
        type: "string",
      },
      {
        internalType: "address",
        name: "waiterAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tip",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "waiterToTip",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
