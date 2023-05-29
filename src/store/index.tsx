import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/ProductSlices';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    // other reducers...
  },
});

export default store;