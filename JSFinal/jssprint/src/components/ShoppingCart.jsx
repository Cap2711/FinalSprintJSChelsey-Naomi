import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


const ShoppingCart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {

  
  const totalCount = cartItems.reduce((count, product) => count + product.quantity, 0);
  const totalPrice = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);


  return (
    <div>
      
        <header className='cartBox'>
          <h2>Shopping Cart</h2>
          <p>Total Items: {totalCount}</p>
          {cartItems.map((product, index) => (
            <p key={index}>
              {product.name} - Quantity: {product.quantity} - ${product.price.toFixed(2) * product.quantity}
              
              <button className='increase-decreaseButton' onClick={() => increaseQuantity(product)}><FaArrowUp /></button>
              
              <button className='increase-decreaseButton' onClick={() => decreaseQuantity(product)}><FaArrowDown /></button>
              
              <button className='removeButton' onClick={() => removeFromCart(product)}>X</button>
            </p>
          ))}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </header>
      
  </div>
);
};

export default ShoppingCart
