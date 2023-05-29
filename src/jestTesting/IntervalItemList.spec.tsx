import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // Add this import

import ItemList from '../ItemList';

jest.useFakeTimers();

describe('ItemList', () => {  
  const products = [
    { id: 1, image: 'image1.jpg', title: 'Product 1' },
    { id: 2, image: 'image2.jpg', title: 'Product 2' },
    { id: 3, image: 'image3.jpg', title: 'Product 3' },
    // Add more test data as needed
  ];

  const mockStore = configureStore([]);
  const store = mockStore({
    items: {
      items: products,
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ItemList />
        </MemoryRouter>
      </Provider>
    );
  });

  test('displays updated items after interval', () => {
    // Set the initial items
    const initialDisplayedItems = products.slice(0, 8);
    act(() => {
      jest.advanceTimersByTime(0); // Trigger initial useEffect
    });

    // Verify initial items are rendered
    initialDisplayedItems.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });

    // Set the next items
    const nextDisplayedItems = products.slice(8, 16);
    act(() => {
      jest.advanceTimersByTime(3000); // Trigger interval
    });

    // Verify next items are rendered
    nextDisplayedItems.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });
});