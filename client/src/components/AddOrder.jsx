import React from "react";
import QRCode from "react-qr-code";
import "./styles.css";

import Modal from "./Modal";
import deleteIcon from "../images/delete.png";
import addIcon from "../images/addIcon.png";
import thankyou from "../images/thankyou.gif";

import Input from "../utils/inputField";
import Loader from "./Loader";

export default function AddOrder({
  addOrder,
  currentAccount,
  handleChange,
  setOrderAmount,
  isLoading,
  name,
}) {
  const [cart, setCart] = React.useState([{ name: "", rate: 0, quantity: 1 }]);
  const [tip, setTip] = React.useState(0);
  const [showThankyou, setShowThanks] = React.useState(false);

  const [showQR, setShowQR] = React.useState(false);

  const handleAddOrder = () => {
    setShowQR(true);
  };

  const calculateTotal = () => {
    let total = cart.reduce(
      (prev, curr, index, array) => prev + curr.rate * curr.quantity,
      0
    );
    return parseFloat(total) + parseFloat(tip);
  };

  const cartTotal = () => {
    return cart.reduce(
      (prev, curr, index, array) => prev + curr.rate * curr.quantity,
      0
    );
  };

  function updateItem(e, i) {
    const { name, value } = e.target;
    let cartData = [...cart];
    cartData[i][name] = value;
    setCart(cartData);
    setOrderAmount(calculateTotal());
  }
  const addItem = () => {
    let cartData = [...cart];
    cartData.push({ name: "", rate: 0, quantity: 1 });
    setCart(cartData);
  };

  const deleteItem = (index) => {
    setCart((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleTipAmount = (e) => {
    setTip(e.target.value);
    handleChange(e, "tipAmount");
  };

  const handleDone = () => {
    addOrder();
    setShowThanks(true);
    setTimeout(() => {
      setShowQR(false);
      setCart([{ name: "", rate: 0, quantity: 1 }]);
      setTip(0);
      setShowThanks(false);
    }, 5000);
  };

  return (
    <div className="addOrder addOrderData">
      <Modal onClose={() => {}} show={showQR}>
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {showThankyou ? (
              <div className="thankyou">
                <img src={thankyou} alt="thankyou" width={400} height={400} />
              </div>
            ) : (
              <React.Fragment>
                <div className="qrtitle">
                  <div className="title">Scan QR Code to make payment </div>
                  <div className="orderTotalAmount">
                    Order Total : {calculateTotal()} AVAX
                  </div>
                  <QRCode
                    size={256}
                    style={{
                      height: "300px",
                      maxWidth: "100%",
                      width: "300px",
                    }}
                    value={"Hey"}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div className="doneButton" onClick={() => handleDone()}>
                  Done
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </Modal>
      <div className="title">Add order</div>
      <div className="orderSection">
        <div className="servedBy">
          <div>Order Served by</div>
          <div className="servedByButton">
            {name ? `${name} (${currentAccount})` : currentAccount}
          </div>
        </div>
        <div className="orderItems">
          <div className="title">Order Items</div>
          <form>
            <table>
              <thead>
                <tr>
                  <th className="itemName">Item name</th>
                  <th className="itemRate">Rate</th>
                  <th className="itemX"></th>
                  <th className="itemQuantity">Quantity</th>
                  <th className="itemTotal"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td className="itemName">
                        <input
                          value={cart[i].name}
                          name="name"
                          onChange={(e) => updateItem(e, i)}
                        />
                      </td>
                      <td className="itemRate">
                        <input
                          value={cart[i].rate}
                          type="number"
                          name="rate"
                          onChange={(e) => updateItem(e, i)}
                        />
                      </td>
                      <td className="itemX">X</td>
                      <td className="itemQuantity">
                        <input
                          value={cart[i].quantity}
                          type="number"
                          name="quantity"
                          onChange={(e) => updateItem(e, i)}
                        />
                      </td>
                      <td className="itemTotal">
                        {cart[i].rate * cart[i].quantity} AVAX
                      </td>
                      <td>
                        <img
                          src={deleteIcon}
                          alt="delete"
                          height={30}
                          width={30}
                          className={
                            cart && cart.length > 1
                              ? "deleteIcon"
                              : "deleteIconDisable"
                          }
                          onClick={() =>
                            cart && cart.length > 1 ? deleteItem(i) : null
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="addItem" onClick={() => addItem()}>
              <img
                src={addIcon}
                alt="addIcon"
                className="addIcon"
                height={30}
                width={30}
              />
              <div>Add Item</div>
            </div>
          </form>

          <div className="tipSubmit">
            <div className="tipData">
              <div>Tips</div>
              <Input
                name="tipAmount"
                type="number"
                handleChange={(e) => handleTipAmount(e)}
              />
            </div>
            <div className="tipData">
              <div>Total</div>
              <div className="totalAVAX">{calculateTotal()} AVAX</div>
            </div>
            <button
              type="button"
              onClick={() => (cartTotal() > 0 ? handleAddOrder() : null)}
              className={
                cartTotal() > 0
                  ? "addOrderButton"
                  : "addOrderButton addOrderDisable"
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
