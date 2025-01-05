import { createSlice } from '@reduxjs/toolkit';

const initShoppingCartState = {
  items: [],
  loading: false,
  error: null
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initShoppingCartState,
  reducers: {
    getShoppingCartItems: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    getShoppingCartItemsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    },

    getShoppingCartItemsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    addShoppingCartItemsSuccess: (state, action) => {
      const newItem = action.payload;

      return {
        ...state,
        loading: false,
        error: null,
        items: [newItem, ...state.items],
      };
    },

    addShoppingCartItems: (state, action) => {
      const newItem = action.payload;

      return {
        ...state,
        loading: true,
        error: null,
      };
    },

  }
});

export const Actions = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
