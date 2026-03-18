// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./shopping-cart/cartSlice";
// import cartUiSlice from "./shopping-cart/cartUiSlice";
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//     cartUi: cartUiSlice.reducer,
//     middleware: [thunk, logger]
//   },
// });

// export default store;


// import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "./shopping-cart/cartSlice";
// import cartUiReducer from "./shopping-cart/cartUiSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     cartUi: cartUiReducer,
//   },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./shopping-cart/cartSlice";
import cartUiReducer from "./shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUi: cartUiReducer,
  },
});

export default store;





//  import { configureStore } from "@reduxjs/toolkit";
//  import cartSlice from "./shopping-cart/cartSlice";
//  import cartUiSlice from "./shopping-cart/cartUiSlice";

//  const store = configureStore({
//    reducer: {
//      cart: cartSlice,
//    cartUi: cartUiSlice,
//    },
//  });

//  export default store;








// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./shopping-cart/cartSlice";
// import cartUiReducer from "./shopping-cart/cartUiSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     cartUi: cartUiReducer, // ✅ MUST exist
//   },
// });

// export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./shopping-cart/cartSlice";
// import cartUiSlice from "./shopping-cart/cartUiSlice";
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//     cartUi: cartUiSlice.reducer,
//     middleware: [thunk, logger]
//   },
// });

// export default store;