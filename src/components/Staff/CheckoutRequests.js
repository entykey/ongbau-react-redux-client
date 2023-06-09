import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Howl } from 'howler';
import orderReceived from '../../assets/order-received.mp3';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const SignalR_URL = `${API_DOMAIN}/orderHub`;


// format the price currency to VND
const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};


const CheckoutRequests = () => {
  const [connection, setConnection] = useState(null);
  const [checkoutRequestList, setCheckoutRequestList] = useState([]);
  const [audio] = useState(new Howl({ src: [orderReceived], volume: 0.8 }));

  useEffect(() => {
    // Create a SignalR connection
    const newConnection = new HubConnectionBuilder()
      .withUrl(SignalR_URL)
      .withAutomaticReconnect()
      .build();

    // Start the SignalR connection
    newConnection
      .start()
      .then(() => {
        console.log('SignalR connection established.');
      })
      .catch((error) => console.error(error));

    // Set the connection in state
    setConnection(newConnection);

    // Register the "ReceiveCheckoutRequest" event handler
    newConnection.on('CheckoutRequestReceived', (checkoutRequestList) => {
      console.log('Received checkout request:', checkoutRequestList);
      playOrderRequestReceived();
      // push to list
      setCheckoutRequestList((prevRequests) => [...prevRequests, checkoutRequestList]);
    });

    return () => {
      // Clean up the SignalR connection on component unmount
      newConnection.stop();
    };
  }, []);

  const playOrderRequestReceived = () => {
    audio.play();
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Staff Page - Checkout Requests</h1>
      {checkoutRequestList.length === 0 ? (
        <p>No checkout requests at the moment.</p>
      ) : (
        <div>
          {checkoutRequestList.slice().reverse().map((request, index) => (
            <div key={index} className=""> 
              <div className="border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
                <h5 className="card-title">Yêu cầu #{checkoutRequestList.length - index}</h5>
                <p className="card-text">Thời điểm gửi đơn order: {request.requestTime}</p>
                <p className="card-text">Mã khách: {request.requestedClientCode}</p>
                <ul className="list-group" style={{ borderRadius: '10px' }}>
                  {request.drinks.map((drink, index) => (
                    <li key={index} className="list-group-item">
                      Tên: {drink.name}, Số lượng: {drink.quantity}, Giá: {formatCurrency(drink.price)}
                      <span class="badge text-light bg-warning badge-pill">{drink.quantity}</span>
                    </li>
                  ))}
                  <li className="list-group-item font-weight-bold">
                    Total: {formatCurrency(request.drinks.reduce((total, drink) => total + drink.price * drink.quantity, 0))}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckoutRequests;
