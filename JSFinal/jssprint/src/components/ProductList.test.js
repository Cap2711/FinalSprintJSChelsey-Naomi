import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { productsData } from './api';

describe('ProductList', () => {
  test('renders all products with correct details', () => {
    render(<ProductList products={productsData} />);
    const productElements = screen.getAllByRole('listitem', { name: /product/i });

    productsData.forEach((product, index) => {
      const productName = screen.getByText(product.name);
      const productDescription = screen.getByText(product.description);
      const productPrice = screen.getByText(`$${product.price.toFixed(2)}`);
      const productImage = screen.getByAltText(`Product Image ${index + 1}`);
      
      expect(productName).toBeInTheDocument();
      expect(productDescription).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();
      expect(productImage).toBeInTheDocument();
      expect(productElements[index]).toContainElement(productImage);
    });
  });

  
});