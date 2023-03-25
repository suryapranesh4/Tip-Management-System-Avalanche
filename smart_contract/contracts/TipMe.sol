//SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract TipMe {
    constructor() payable {
        payable(address(this)).transfer(msg.value);
    }

    uint256 public orderNumber = 1;

    struct Waiter {
        string waiterName;
        address waiterAddress;
        uint256 tip;
    }

    struct Order {
        uint256 orderNumber;
        uint256 orderAmount;
        uint256 tipAmount;
        address waiterAddress;
        string waiterName;
    }

    mapping(address => string) public addressToWaiterName;
    mapping(address => uint256) public waiterToTip;
    mapping(uint256 => string) public orderToWaiterName;
    mapping(uint256 => address) public orderToWaiterAddress;

    Order[] public orders;
    Waiter[] public waiters;

    function addWaiter() public {
        bool isAddressAvailable = false;
        for (uint256 i = 0; i < waiters.length; i++) {
            if (waiters[i].waiterAddress == msg.sender) {
                isAddressAvailable = true;
            }
        }
        require(isAddressAvailable == false);
        addressToWaiterName[msg.sender] = "";
        waiters.push(Waiter("", msg.sender, 0));
    }

    function addOrder(uint256 _orderAmount, uint256 _tipAmount) public {
        uint256 _orderNumber = orderNumber++;
        orders.push(
            Order(
                _orderNumber,
                _orderAmount,
                _tipAmount,
                msg.sender,
                addressToWaiterName[msg.sender]
            )
        );
        orderToWaiterAddress[_orderNumber] = msg.sender;
        orderToWaiterName[_orderNumber] = addressToWaiterName[msg.sender];
        waiterToTip[msg.sender] += _tipAmount;

        for (uint256 i = 0; i < waiters.length; i++) {
            if (waiters[i].waiterAddress == msg.sender) {
                waiters[i].tip += _tipAmount;
            }
        }
    }

    function withdrawTips() public {
        uint256 amountToReturn = waiterToTip[msg.sender];
        address payable waiter = payable(msg.sender);
        waiter.transfer(amountToReturn);

        for (uint256 i = 0; i < waiters.length; i++) {
            if (waiters[i].waiterAddress == msg.sender) {
                waiters[i].tip = 0;
            }
        }
        waiterToTip[msg.sender] = 0;
    }

    function getOrders() public view returns (Order[] memory) {
        return orders;
    }

    function getWaiters() public view returns (Waiter[] memory) {
        return waiters;
    }

    receive() external payable {}
}
