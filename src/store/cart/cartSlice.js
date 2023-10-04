import { createSlice } from "@reduxjs/toolkit";
import { getCartData } from "./cartActions";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null
    },
    reducers: {
        getCart: (state) => {
            state.cart = getCartData();
        }
    }
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;

// {
//     user: 'Jack',
//     totalCost: 1740,
//     products: [
//         {
//             count: 3,
//             totalPrice: 1740,
//             productItem: {
//                 "name": "iPhone 11",
//                 "description": "12-Мп ",
//                 "price": 580,
//                 "picture": "-",
//                 "type": "electronics",
//                 "id": 9
//               }
//         },
//     ]
// }