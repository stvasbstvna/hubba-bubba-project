import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { PRODUCTS_API } from "../../helpers/consts";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const { data } = await axios.get(PRODUCTS_API);
        return data;
    }
);

export const getOneProduct = createAsyncThunk(
    'products/getOneProduct',
    async ({ id }) => {
        const { data } = await axios.get(`${PRODUCTS_API}/${id}`);
        return data;
    }
)
