import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders header with correct title', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /N&C Fruit Boutique/i });
    expect(headerElement).toBeInTheDocument();
  });

  test('initially does not render the shopping cart', () => {
    render(<App />);
    const cartElement = screen.queryByRole('list', { name: /shopping cart/i });
    expect(cartElement).not.toBeInTheDocument();
  });

  test('clicking on cart button toggles cart visibility', () => {
    render(<App />);
    const cartButton = screen.getByRole('button', { name: /open cart/i });
    userEvent.click(cartButton);
    const cartElement = screen.getByRole('list', { name: /shopping cart/i });
    expect(cartElement).toBeInTheDocument();
  });

  
});