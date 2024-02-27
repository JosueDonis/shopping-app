import { ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

export type ProductState = {
  products: ProductType[];
};
const initialState: ProductState = {
    products: [],
};
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        initial: (state, action) => {
            const products = action.payload as ProductType[];
            state.products = products;
        },
        add: (state, action) => {
            const product = action.payload as ProductType;
            state.products = [...state.products, product];
        },
        remove: (state, action) => {
            const id = action.payload as string;
            state.products = state.products.filter((product) => product?.id !== id);
        },
        update: (state, action) => {
            const product = action.payload as ProductType;
            const index = state.products.findIndex((p) => p.id === product.id);
            state.products[index] = product;
        },
    },
});

export const { initial, add, remove } = productSlice.actions;
