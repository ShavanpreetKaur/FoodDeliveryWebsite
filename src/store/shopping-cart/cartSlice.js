import { createSlice } from "@reduxjs/toolkit";

// ✅ Load from localStorage so cart persists on page refresh
const loadState = () => {
  try {
    return {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
      totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
      totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
    };
  } catch {
    return { cartItems: [], totalQuantity: 0, totalAmount: 0 };
  }
};

// ✅ Save to localStorage after every change
const saveState = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: Number(newItem.price),
          quantity: 1,
          totalPrice: Number(newItem.price),
          extraIngredients: newItem.extraIngredients || [],
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalQuantity++;
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      saveState(state);
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
        }
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      saveState(state);
    },

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      saveState(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;