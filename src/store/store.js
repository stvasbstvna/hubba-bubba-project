import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './account/accountSlice';
import productsReducer from './products/productsSlice';
import cartReducer from './cart/cartSlice';
import commentsReducer from './comments/commentsSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        account: accountReducer,
        products: productsReducer,
        cart: cartReducer,
        comments: commentsReducer
    }
});