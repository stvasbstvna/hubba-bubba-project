import { createSlice } from "@reduxjs/toolkit";
import { getCartData } from "./cartActions";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: null,
    },
    reducers: {
        getCart: (state) => {
        state.cart = getCartData();
        },
    },
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;
