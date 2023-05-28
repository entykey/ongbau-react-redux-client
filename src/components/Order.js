import React from 'react';
import { Link } from 'react-router-dom';
import ListProductOrder from './ListProductOrder';
import { useAppContext } from '../App';
import './Order.css';

const sumTotal = products => {
  return products.reduce((sum, item) => {
    return (
      sum +
      parseFloat(item.price) * parseFloat(item.quantity)
    );
  }, 0);
};

const Order = () => {
  const { cartItems } = useAppContext();
  const totalPrice = (sumTotal(cartItems)).toFixed(2);

  return (
    <div className="container">
      <div className="headerContainer">
        <Link to="/" className="backButton">
          <img src={require('../assets/ic-back.png')} alt="Back" className="imageButton" />
        </Link>
        <div className="middle">
          <h2 className="headerText">Giỏ hàng</h2>
        </div>
        {/* <Link to="/" className="closeButton">
          <img src={require('../assets/ic-close.png')} alt="Close" className="imageButton" />
        </Link> */}
      </div>
      <div className="scrollView">
        <h3 className="title">Đơn hàng của bạn</h3>
        <ListProductOrder products={cartItems} />
      </div>
      <div className="line1"></div>
      <div className="infoContainer">
        <div className="row">
          <span className="text1">Phí ship</span>
          <span className="text1">0 VND (order tại quầy)</span>
        </div>
        <div className="line"></div>
        <div className="row">
          <span className="text2">Tổng</span>
          <span className="text2">{totalPrice} VND</span>
        </div>
        <Link to="/checkout" className="btnCheckout">
          <span className="txtCheckout">Checkout</span>
        </Link>
      </div>
    </div>
  );
};

export default Order;
