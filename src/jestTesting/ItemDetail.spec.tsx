import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemDetails from '../ItemDetails';

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  items: {
    selectedItem: {
      id: 1,
      title: 'Nike Air Jordan 1',
      price: 70,
      brand: 'Campus',
      discountPrice: 50,
      currency: 'GBP',
      image: 'https://cms-cdn.thesolesupplier.co.uk/2020/01/Jordan-1-Hi-85-Red-Black-BQ4422-600-800x450.jpg',
      url: 'https://thesolesupplier.co.uk/release-dates/nike/air-jordan-1/',
    },
  },
});

describe('ItemDetails', () => {
  test('renders item details correctly', async () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Router>
          <ItemDetails />
        </Router>
      </Provider>
    );

    await waitFor(() => {

      expect(getByAltText('Nike Air Jordan 1')).toBeDefined();
    });
  });

  // Rest of the test...
});