import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListProductOrder from './ListProductOrder';
import { useAppContext } from '../App';
import Swal from 'sweetalert2';
import './Order.css';

import { HubConnectionBuilder } from '@microsoft/signalr';


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const SignalR_URL = `${API_DOMAIN}/orderHub`;


// format the price currency to VND
const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const sumTotal = (products) => {
  return products.reduce((sum, item) => {
    return sum + parseFloat(item.price) * parseFloat(item.quantity);
  }, 0);
};

const Order = () => {
  const { cartItems, setCartItems } = useAppContext();
  const totalPrice = formatCurrency(sumTotal(cartItems));

  const [connection, setConnection] = useState(null);
  const [clientCode, setClientCode] = useState('');

  useEffect(() => {
    // Create a SignalR connection
    const newConnection = new HubConnectionBuilder()
      .withUrl(SignalR_URL)
      .withAutomaticReconnect()
      .build();

    // Start the SignalR connection
    newConnection.start().catch((error) => console.error(error));

    // Set the connection in state
    setConnection(newConnection);

    // Register the "ClientCodeGenerated" event handler
    newConnection.on('ClientCodeGenerated', (clientCode) => {
      console.log('Received client code:', clientCode);
      setClientCode(clientCode);
    });

    return () => {
      // Clean up the SignalR connection on component unmount
      newConnection.stop();
    };
  }, []);

  const handleCheckout = async () => {

    // if empty cart:
    if (cartItems.length === 0) {
      // Show error message using SweetAlert if cartItems is empty
      Swal.fire({
        icon: 'warning',
        title: 'Giỏ hàng rỗng :v',
        text: 'Your cart is empty. Please add items to your cart before checking out.',
      });
      return;
    }


    // Prepare the order request
    const orderRequest = {
      requestedClientCode: clientCode, // Include the client code in the order request
      drinks: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        drinkTypeName: item.drinkTypeName
      })),
      requestTime: new Date().toLocaleString(),
    };

    // Send the checkout request to the server via SignalR
    await connection
      .invoke('SendCheckoutRequest', orderRequest)
      .then(() => {
        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Checkout Success',
          text: 'Your checkout request has been sent successfully.',
        });
        // Clear the cartItems
        setCartItems([]);
      })
      .catch((error) => {
        console.log('SignalR checkout error:', error);
        // Show error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Checkout Error',
          text: 'Failed to send the checkout request. Please try again.',
        });
      });
  };

  return (
    <div className="container">
      <div className="headerContainer">
        <Link to="/" className="backButton">
          <img src={require('../assets/ic-back.png')} alt="Back" className="imageButton" />
        </Link>
        <div className="middle">
          <h2 className="headerText">Giỏ hàng</h2>
        </div>
      </div>
      <div className="scrollView">
        <h3 className="title">Đơn hàng của bạn</h3>
        <h5>Mã khách: {clientCode}</h5>
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
          <span className="text2">{totalPrice}</span>
        </div>
        <button className="btnCheckout" onClick={handleCheckout}>
          <span className="txtCheckout">Checkout</span>
        </button>
      </div>
    </div>
  );
};

export default Order;
