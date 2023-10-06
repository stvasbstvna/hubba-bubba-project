import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getOneProduct, getCategories } from './productsActions';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        oneProduct: null,
        currentPage: 1,
        totalPages: 1,
        currentCategory: '',
        search: '',
        categories: []
    },
    reducers: {
        clearOneProductState: (state) => {
            state.oneProduct = null;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload.page;
        },
        changeCategory: (state, action) => {
            if(action.payload.category === 'all') {
                state.currentCategory = '';
            } else {
                state.currentCategory = action.payload.category;
            };
            state.currentPage = 1;
        },
        setSearchVal: (state, action) => {
            state.search = action.payload.search;
            state.currentPage = 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.data;
            state.totalPages = action.payload.totalPages;
        })
        .addCase(getProducts.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getOneProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOneProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.oneProduct = action.payload;
        })
        .addCase(getOneProduct.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    }
});

export const { clearOneProductState, changePage, setSearchVal, changeCategory }  = productsSlice.actions;
export default productsSlice.reducer;