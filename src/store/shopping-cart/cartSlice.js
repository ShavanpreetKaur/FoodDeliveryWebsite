// // // // import { createSlice } from "@reduxjs/toolkit";

// // // // const items =
// // // //   localStorage.getItem("cartItems") !== null
// // // //     ? JSON.parse(localStorage.getItem("cartItems"))
// // // //     : [];

// // // // const totalAmount =
// // // //   localStorage.getItem("totalAmount") !== null
// // // //     ? JSON.parse(localStorage.getItem("totalAmount"))
// // // //     : 0;

// // // // const totalQuantity =
// // // //   localStorage.getItem("totalQuantity") !== null
// // // //     ? JSON.parse(localStorage.getItem("totalQuantity"))
// // // //     : 0;

// // // // const setItemFunc = (item, totalAmount, totalQuantity) => {
// // // //   localStorage.setItem("cartItems", JSON.stringify(item));
// // // //   localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
// // // //   localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
// // // // };

// // // // const initialState = {
// // // //   cartItems: items,
// // // //   totalQuantity: totalQuantity,
// // // //   totalAmount: totalAmount,
// // // // };

// // // // const cartSlice = createSlice({
// // // //   name: "cart",
// // // //   initialState,

  
// // // //   reducers: {
// // // //     // =========== add item ============
// // // //     addItem(state, action) {
// // // //       const newItem = action.payload;
// // // //       const id = action.payload.id;
// // // //       const extraIngredients = action.payload.extraIngredients;
// // // //       const existingItem = state.cartItems.find((item) => item.id === id);

      
// // // //       if (!existingItem) {
// // // //         state.cartItems.push({
// // // //           id: newItem.id,
// // // //           title: newItem.title,
// // // //           image01: newItem.image01,
// // // //           price: newItem.price,
// // // //           quantity: 1,
// // // //           totalPrice: newItem.price,
// // // //           extraIngredients: newItem.extraIngredients
// // // //         });
// // // //         state.totalQuantity++;

// // // //       } else if(existingItem && (JSON.stringify(existingItem.extraIngredients) === JSON.stringify(extraIngredients)))  {
// // // //         state.totalQuantity++;
// // // //         existingItem.quantity++;
// // // //       } else {

// // // //         const value = JSON.parse(localStorage.getItem("cartItems"));
// // // //         let index = value.findIndex(s => s.id === existingItem.id);
// // // //         const newValue = {
// // // //         id: existingItem.id,
// // // //         title: existingItem.title,
// // // //         image01: existingItem.image01,
// // // //         price: existingItem.price,
// // // //         quantity: 1,
// // // //         totalPrice: existingItem.price,
// // // //         extraIngredients: extraIngredients
// // // //       }
// // // //         state.cartItems.splice(index, 1, newValue); 
// // // //         state.totalQuantity = state.cartItems.reduce(
// // // //           (total, item) => total + Number(item.quantity),
// // // //           0
// // // //         );
// // // //       }
     
// // // //       state.totalAmount = state.cartItems.reduce(
// // // //         (total, item) => total + Number(item.price) * Number(item.quantity),
// // // //         0
// // // //       );


// // // //       setItemFunc(
// // // //         state.cartItems.map((item) => item),
// // // //         state.totalAmount,
// // // //         state.totalQuantity
// // // //       );
// // // //     },

   

// // // //     // ========= remove item ========

// // // //     removeItem(state, action) {
// // // //       const id = action.payload;
// // // //       const existingItem = state.cartItems.find((item) => item.id === id);
// // // //       state.totalQuantity--;

// // // //       if (existingItem.quantity === 1) {
// // // //         state.cartItems = state.cartItems.filter((item) => item.id !== id);
// // // //       } else {
// // // //         existingItem.quantity--;
// // // //         existingItem.totalPrice =
// // // //           Number(existingItem.totalPrice) - Number(existingItem.price);
// // // //       }

// // // //       state.totalAmount = state.cartItems.reduce(
// // // //         (total, item) => total + Number(item.price) * Number(item.quantity),
// // // //         0
// // // //       );

// // // //       setItemFunc(
// // // //         state.cartItems.map((item) => item),
// // // //         state.totalAmount,
// // // //         state.totalQuantity
// // // //       );
// // // //     },

// // // //     //============ delete item ===========

// // // //     deleteItem(state, action) {
// // // //       const id = action.payload;
// // // //       const existingItem = state.cartItems.find((item) => item.id === id);

// // // //       if (existingItem) {
// // // //         state.cartItems = state.cartItems.filter((item) => item.id !== id);
// // // //         state.totalQuantity = state.totalQuantity - existingItem.quantity;
// // // //       }

// // // //       state.totalAmount = state.cartItems.reduce(
// // // //         (total, item) => total + Number(item.price) * Number(item.quantity),
// // // //         0
// // // //       );
// // // //       setItemFunc(
// // // //         state.cartItems.map((item) => item),
// // // //         state.totalAmount,
// // // //         state.totalQuantity
// // // //       );
// // // //     },
// // // //   },
// // // // });

// // // // export const cartActions = cartSlice.actions;
// // // // export default cartSlice.reducer;



// // // import { createSlice } from "@reduxjs/toolkit";

// // // const items =
// // //   localStorage.getItem("cartItems") !== null
// // //     ? JSON.parse(localStorage.getItem("cartItems"))
// // //     : [];

// // // const totalAmount =
// // //   localStorage.getItem("totalAmount") !== null
// // //     ? JSON.parse(localStorage.getItem("totalAmount"))
// // //     : 0;

// // // const totalQuantity =
// // //   localStorage.getItem("totalQuantity") !== null
// // //     ? JSON.parse(localStorage.getItem("totalQuantity"))
// // //     : 0;

// // // const setItemFunc = (item, totalAmount, totalQuantity) => {
// // //   localStorage.setItem("cartItems", JSON.stringify(item));
// // //   localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
// // //   localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
// // // };

// // // const initialState = {
// // //   cartItems: items,
// // //   totalQuantity: totalQuantity,
// // //   totalAmount: totalAmount,
// // // };

// // // const cartSlice = createSlice({
// // //   name: "cart",
// // //   initialState,

  
// // //   reducers: {
// // //     // =========== add item ============
// // //     addItem(state, action) {
// // //       const newItem = action.payload;
// // //       const id = action.payload.id;
// // //       const extraIngredients = action.payload.extraIngredients;
// // //       const existingItem = state.cartItems.find((item) => item.id === id);

      
// // //       if (!existingItem) {
// // //         state.cartItems.push({
// // //           id: newItem.id,
// // //           title: newItem.title,
// // //           image01: newItem.image01,
// // //           price: newItem.price,
// // //           quantity: 1,
// // //           totalPrice: newItem.price,
// // //           extraIngredients: newItem.extraIngredients
// // //         });
// // //         state.totalQuantity++;

// // //       } else if(existingItem && (JSON.stringify(existingItem.extraIngredients) === JSON.stringify(extraIngredients)))  {
// // //         state.totalQuantity++;
// // //         existingItem.quantity++;
// // //       } else {

// // //         const value = JSON.parse(localStorage.getItem("cartItems"));
// // //         let index = value.findIndex(s => s.id === existingItem.id);
// // //         const newValue = {
// // //         id: existingItem.id,
// // //         title: existingItem.title,
// // //         image01: existingItem.image01,
// // //         price: existingItem.price,
// // //         quantity: 1,
// // //         totalPrice: existingItem.price,
// // //         extraIngredients: extraIngredients
// // //       }
// // //         state.cartItems.splice(index, 1, newValue); 
// // //         state.totalQuantity = state.cartItems.reduce(
// // //           (total, item) => total + Number(item.quantity),
// // //           0
// // //         );
// // //       }
     
// // //       state.totalAmount = state.cartItems.reduce(
// // //         (total, item) => total + Number(item.price) * Number(item.quantity),
// // //         0
// // //       );


// // //       setItemFunc(
// // //         state.cartItems.map((item) => item),
// // //         state.totalAmount,
// // //         state.totalQuantity
// // //       );
// // //     },

   

// // //     // ========= remove item ========

// // //     removeItem(state, action) {
// // //       const id = action.payload;
// // //       const existingItem = state.cartItems.find((item) => item.id === id);
// // //       state.totalQuantity--;

// // //       if (existingItem.quantity === 1) {
// // //         state.cartItems = state.cartItems.filter((item) => item.id !== id);
// // //       } else {
// // //         existingItem.quantity--;
// // //         existingItem.totalPrice =
// // //           Number(existingItem.totalPrice) - Number(existingItem.price);
// // //       }

// // //       state.totalAmount = state.cartItems.reduce(
// // //         (total, item) => total + Number(item.price) * Number(item.quantity),
// // //         0
// // //       );

// // //       setItemFunc(
// // //         state.cartItems.map((item) => item),
// // //         state.totalAmount,
// // //         state.totalQuantity
// // //       );
// // //     },

// // //     //============ delete item ===========

// // //     deleteItem(state, action) {
// // //       const id = action.payload;
// // //       const existingItem = state.cartItems.find((item) => item.id === id);

// // //       if (existingItem) {
// // //         state.cartItems = state.cartItems.filter((item) => item.id !== id);
// // //         state.totalQuantity = state.totalQuantity - existingItem.quantity;
// // //       }

// // //       state.totalAmount = state.cartItems.reduce(
// // //         (total, item) => total + Number(item.price) * Number(item.quantity),
// // //         0
// // //       );
// // //       setItemFunc(
// // //         state.cartItems.map((item) => item),
// // //         state.totalAmount,
// // //         state.totalQuantity
// // //       );
// // //     },
// // //   },
// // // });

// // // export const cartActions = cartSlice.actions;
// // // export default cartSlice.reducer;









// // import { createSlice } from "@reduxjs/toolkit";

// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState: {
// //     items: [],
// //     totalQuantity: 0,
// //   },
// //   reducers: {
// //     addItem(state, action) {
// //       state.totalQuantity++;
// //       state.items.push(action.payload);
// //     },
// //   },
// // });

// // export const cartActions = cartSlice.actions;
// // export default cartSlice.reducer; // ✅ IMPORTANT





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   totalQuantity: 0,
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === newItem.id);

//       if (!existingItem) {
//         state.cartItems.push({
//           id: newItem.id,
//           title: newItem.title,
//           image01: newItem.image01,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//           extraIngredients: newItem.extraIngredients || [],
//         });
//       } else {
//         existingItem.quantity++;
//         existingItem.totalPrice = existingItem.totalPrice + newItem.price;
//       }

//       state.totalQuantity++;
//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );
//     },

//     removeItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         state.totalQuantity--;
//         if (existingItem.quantity === 1) {
//           state.cartItems = state.cartItems.filter((item) => item.id !== id);
//         } else {
//           existingItem.quantity--;
//           existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
//         }
//       }

//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );
//     },

//     deleteItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.cartItems = state.cartItems.filter((item) => item.id !== id);
//       }

//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0
//       );
//     },
//   },
// });

// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;


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