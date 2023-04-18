// <div className="homePage">
//   <div className="tipData">
//     <div className="orderDetails">
//       <div className="addOrderSection">
//         <p className="title">Order Details</p>
//         <div className="orderData">
//           <form
//             className="orderData"
//             onSubmit={(e) => {
//               e.preventDefault();
//               addOrder();
//             }}
//           >
//             <div className="transactionData">
//               <strong>Order Amount </strong>
//               <span>
//                 <Input
//                   name="orderAmount"
//                   type="number"
//                   handleChange={handleChange}
//                 />
//               </span>
//             </div>
//             <div className="transactionData">
//               <strong>Tip Amount </strong>
//               <span>
//                 <Input
//                   name="tipAmount"
//                   type="number"
//                   handleChange={handleChange}
//                 />
//               </span>
//             </div>
//             <div className="addAction">
//               <button className="submitButton" onClick={() => addOrder}>
//                 Add order
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="ordersSection">
//         <p className="title">Orders</p>
//         {orders && orders.length > 0 ? (
//           <div className="allOrders">
//             {orders.map((order, i) => {
//               const {
//                 orderNumber,
//                 orderAmount,
//                 tipAmount,
//                 waiterAddress,
//                 waiterName,
//               } = order;
//               return (
//                 <div key={i} className="eachData">
//                   <div className="transactionData">
//                     <strong>Order Number </strong>
//                     <span>#{orderNumber}</span>
//                   </div>
//                   <div className="transactionData">
//                     <strong>Order Amount </strong>
//                     <span>{orderAmount} AVAX</span>
//                   </div>
//                   <div className="transactionData">
//                     <strong>Waiter </strong>
//                     <span>{waiterName || waiterAddress}</span>
//                   </div>
//                   <div className="transactionData">
//                     <strong>Tip Amount </strong>
//                     <span>{tipAmount} AVAX</span>
//                   </div>
//                   <div className="transactionData">
//                     <strong>SnowFlake Transaction </strong>
//                     <span>
//                       <a
//                         href={`https://testnet.snowtrace.io/tx/${
//                           transactions[orderNumber - 1]
//                         }`}
//                         target="_blank"
//                       >
//                         Link
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p className="subtitle">No orders</p>
//         )}
//       </div>
//     </div>
//     <div className="leaderboard">
//       <p className="title">Server Details : </p>
//       <div className="eachData">
//         <div className="transactionData">
//           <strong>Waiter Address </strong>
//           <span>{currentAccount}</span>
//         </div>
//         <div className="withdrawButton">
//           <button
//             className="submitButton"
//             onClick={() => withdrawTips()}
//           >
//             Withdraw tips
//           </button>
//         </div>
//       </div>
//       <p className="title">Waiters Leaderboard</p>
//       {leaderboard && leaderboard.length > 0 ? (
//         <React.Fragment>
//           {leaderboard.map((waiter, i) => {
//             const { tip, waiterAddress, waiterName } = waiter;
//             return (
//               <div key={i} className="eachData">
//                 <div className="transactionData">
//                   <strong>Waiter Address </strong>
//                   <span>
//                     {waiterAddress === currentAccount ? (
//                       <strong>waiterAddress</strong>
//                     ) : (
//                       waiterAddress
//                     )}
//                   </span>
//                 </div>
//                 <div className="transactionData">
//                   <strong>Tips of the day </strong>
//                   <span>{tip}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </React.Fragment>
//       ) : (
//         <p className="subtitle">No orders taken</p>
//       )}
//     </div>
//   </div>
// </div>
