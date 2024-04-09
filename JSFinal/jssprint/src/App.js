import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import { useState } from 'react';
import appleImage from './Pictures/apple.jpeg';
import avocadoImage from './Pictures/avocado.jpeg';
import bananaImage from './Pictures/banana.jpg';
import grapesImage from './Pictures/grapes.jpeg';
import plumImage from './Pictures/plum.jpeg';
import limeImage from './Pictures/lime.jpeg';
import peachImage from './Pictures/peach.jpeg';
import tomatoImage from './Pictures/tomato.jpeg';
import blueImage from './Pictures/blue.jpeg';
import { productsData } from './components/api';
import { FaShoppingCart } from "react-icons/fa";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';






function App() {

  const fruitAndVeggieImg = [appleImage, avocadoImage, bananaImage, grapesImage, plumImage, peachImage, tomatoImage, limeImage, blueImage]

  //UseState 
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");
  

 

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setMessage(`${product.name} has been added to cart`);

    setTimeout(() => {
      setMessage("");
    }, 1000);
  };

  

  //Function to increase quantity of an item in the cart
  const increaseQuantity = (product) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === product.id);
    updatedCartItems[itemIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  // Function to decrease quantity of an item in the cart
  const decreaseQuantity = (product) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === product.id);
    if (updatedCartItems[itemIndex].quantity > 0) {
      updatedCartItems[itemIndex].quantity -= 1;
      setCartItems(updatedCartItems);

      if (updatedCartItems[itemIndex].quantity === 0) {
        removeFromCart(product);
      }
    }
  };

  // Function to remove item from the cart
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const toggleCartVisibility = () => { // Added function to toggle cart visibility
    setShowCart(!showCart);
  };

   
  function Message({ message }) {
    return (
      <div className="message" style={{ backgroundColor: 'green', color: 'white', maxWidth: "250px"}}>
        {message}
      </div>
    );
  };

  return (
    <Router>
      <div className='App'>
        <header>
          <h1>N&C Fruit Boutique</h1>
          <button className='openCartButton' onClick={toggleCartVisibility}><FaShoppingCart /></button>
          {message && <Message message={message} />}
          {showCart && <ShoppingCart  
            cartItems = {cartItems} 
            increaseQuantity = {increaseQuantity} 
            decreaseQuantity = {decreaseQuantity} 
            removeFromCart = {removeFromCart} />}
        </header>
        <main>
          <Routes> 
            <Route path="/" element={<ProductList products={productsData} images={fruitAndVeggieImg} addToCart={addToCart} />} /> 
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckOut />} /> 
          </Routes>
        </main>
        <footer>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
