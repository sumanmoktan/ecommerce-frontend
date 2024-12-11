import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { sellerReducer } from "./reducer/sellerReducer";
import { productReducer } from "./reducer/productReducer";
import { eventReducer } from "./reducer/eventReducer";
import { cartReducer } from "./reducer/cartReducer";
import { wishlistReducer } from "./reducer/wishlistReducer";
import { orderReducer } from "./reducer/orderReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default Store;
