import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart', () => {
  
  const productsData = [
    { id: 1, name: 'Apple', description: 'Red, gala apple, sweet', price: 1.00 },
    { id: 2, name: 'Avocado', description: 'Ripe green avocado', price: 2.00 },
    { id: 3, name: 'Banana', description: 'Yellow and perfectly ripe', price: 2.00 },
    { id: 4, name: 'Grapes', description: 'Dark purple grapes, sour', price: 4.00 },
    { id: 5, name: 'Plums', description: 'Dark purple and tart plums', price: 3.00 },
    { id: 6, name: 'Peaches', description: 'Soft juicy peaches', price: 4.00 },
    { id: 7, name: 'Tomato', description: 'Red juicy and savory Tomatoes', price: 2.00 },
    { id: 8, name: 'Limes', description: 'Green sour limes', price: 1.00 },
    { id: 9, name: 'Blueberries', description: 'Small blueberries, sweet', price: 2.00 },
  ];
  
  
  it('renders cart items correctly', () => {
    render(<ShoppingCart cartItems={cartItems} />);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('calls increaseQuantity when the increase button is clicked', () => {
    const increaseQuantity = jest.fn();
    render(
      <ShoppingCart cartItems={cartItems} increaseQuantity={increaseQuantity} />
    );

    userEvent.click(screen.getByTestId('increaseButton-1'));
    expect(increaseQuantity).toHaveBeenCalledWith(cartItems[0]);
  });

  it('calls decreaseQuantity when the decrease button is clicked', () => {
    const decreaseQuantity = jest.fn();
    render(
      <ShoppingCart cartItems={cartItems} decreaseQuantity={decreaseQuantity} />
    );

    userEvent.click(screen.getByTestId('decreaseButton-1'));
    expect(decreaseQuantity).toHaveBeenCalledWith(cartItems[0]);
  });

});