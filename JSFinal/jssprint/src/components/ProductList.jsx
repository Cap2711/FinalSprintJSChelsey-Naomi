import React from 'react';
import '../App.css';
import { FaCartPlus } from "react-icons/fa";


//maps the array of pictures and api.jsx obj array together to siplay the items for sale.
// uses products from api.jsx array and images from pictures array as props.
const ProductList = ({ products, images, addToCart }) => {
    return (
      <div className='bigBox'>
        <h2>Produce</h2>
        {images.map((imageUrl, id) => (
          <div className='FruitBox' key={id}>
            <img style={{width: "200px", height: "200px"}} className="product-image" src={imageUrl} alt={`Product Image ${id + 1}` } />
            <div className="descriptBox">
                <p>{products[id].name}</p>
                <p>{products[id].description}</p>
                <p>${products[id].price.toFixed(2)}</p>
                <button onClick={() => addToCart(products[id])} className='cartButton'><FaCartPlus /></button>
          </div>
          </div>
        ))}
      </div>
    )
  };

export default ProductList;
