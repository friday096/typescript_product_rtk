import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import ItemList from '../ItemList';
import data from '../utils/data.json';

const mockStore = configureStore({
  reducer: {
    items: (state = { items: data }) => state,
  },
});

test('renders ItemList component without error', () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ItemList />
      </BrowserRouter>
    </Provider>
  );
});


