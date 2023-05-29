import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../../utils/data.json'

interface Item {
    id:number,
    title: string;
    image: string;
    url: string;
    price: number;
    discountPrice?: number;
    currency: string;
    brand: string;
  }

interface ItemsState {
  items: Item[];
  selectedItem: Item | null;
}

const initialState: ItemsState = {
    items: data,
    selectedItem: null,
  };


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      setItems: (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload;
      },
      getItemById: (state, action: PayloadAction<number>) => {
        const itemId = action.payload;
        state.selectedItem = state.items.find((item) => item.id === itemId) || null;
      },
    },
  });
export default itemsSlice.reducer;
export const { setItems, getItemById } = itemsSlice.actions;

