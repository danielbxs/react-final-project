import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const { payload: itemToAdd } = action;
      const existingItem = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );
      if (existingItem) return;
      state.cartItems = [...state.cartItems, { ...itemToAdd, quantity: 1 }];
    },
    removeProductFromCart(state, action) {
      const { payload: id } = action;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
      }

      return;
    },
    clearCart(state) {
      state.cartItems = [];
    },
    incrementItemQuantity(state, action) {
      const { payload: id } = action;
      const itemToIncrement = state.cartItems.find((item) => item.id === id);

      if (itemToIncrement && itemToIncrement.quantity > 0) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementItemQuantity(state, action) {
      const { payload: id } = action;
      const itemToDecrement = state.cartItems.find((item) => item.id === id);
      if (itemToDecrement && itemToDecrement.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== itemToDecrement.id
        );
      }
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
  },
});
export const {
  addProductToCart,
  removeProductFromCart,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
