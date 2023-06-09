import React from 'react';
import { useAppContext } from '../App';
import './ListProductOrder.css';

const ListProductOrder = ({ products = [] }) => {
  const { addItemToCart, removeItemFromCart } = useAppContext();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const renderItem = ({ item }) => {
    const formattedPrice = formatCurrency(item.price);

    return (
      <div className="item">
        <img className="img" src={item.imageUrl} alt={item.name} />
        <div className="itemBody">
          <div className="textHeader">
            <h3 className="name">{item.name}</h3>
            <span className="category">{item.drinkType}</span>
          </div>
          <div className="footer">
            <span className="priceView">
              <span className="price">{formattedPrice}</span>
              <span> /ly </span>
            </span>
            <div className="groupAction">
              <button className="removeButton" onClick={() => removeItemFromCart(item)}>
                <img src={require('../assets/ic-remove.png')} alt="Remove" />
              </button>
              <span className="quantity">{item.quantity || 0}</span>
              <button className="addButton" onClick={() => addItemToCart(item)}>
                <img src={require('../assets/ic-add.png')} alt="Add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="listProductOrder">
      {products.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="hr" />}
          {renderItem({ item })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListProductOrder;
