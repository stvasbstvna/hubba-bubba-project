import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { PRODUCTS_API } from "../../helpers/consts";
import { getTotalPages } from "../../helpers/functions";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { getState }) => {
        const { currentPage } = getState().products;
        const pagesLimitParams = `?_page=${currentPage}&_limit=12`;
        const totalPages = await getTotalPages(PRODUCTS_API);
        // http://localhost:8000/products?_page=2&_limit=12
        const { data } = await axios.get(`${PRODUCTS_API}${pagesLimitParams}`);
        return { data, totalPages };
    }
);

export const getOneProduct = createAsyncThunk(
    'products/getOneProduct',
    async ({ id }) => {
        const { data } = await axios.get(`${PRODUCTS_API}/${id}`);
        return data;
    }
);

export const editProduct = createAsyncThunk(
    'products/editProduct',
    async ({ product }, { dispatch }) => {
        await axios.patch(`${PRODUCTS_API}/${product.id}`, product);
        dispatch(getProducts());
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async ({ id }, { dispatch }) => {
        await axios.delete(`${PRODUCTS_API}/${id}`);
        dispatch(getProducts());
    }
);

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async ({ product }, { dispatch }) => {
        await axios.post(PRODUCTS_API, product);
        dispatch(getProducts());
    }
);