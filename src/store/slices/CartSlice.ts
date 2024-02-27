import { CartProductType, CartType } from "@/types/cart";
import { createSlice } from "@reduxjs/toolkit";

export type CartState = {
  cart: CartType;
};

const getCartLocalStorage = () => {
  try {
    const cart = localStorage.getItem("shopping-cart");
    if (cart) {
      return JSON.parse(cart) as CartType;
    }
    return {} as CartType;
  } catch (error) {
    return {} as CartType;
  }
};
const initialState: CartState = {
  cart: getCartLocalStorage(),
};
export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload as CartProductType;
      state.cart.products = [...(state.cart.products ?? []), product];
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    addInfo: (state, action) => {
      const info = action.payload as CartType;
      state.cart = info;
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    removeProduct: (state, action) => {
      const id = action.payload as string;
      state.cart.products = state.cart?.products?.filter(
        (product) => product?.id !== id
      );
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
    },
    updateProduct: (state, action) => {
      const product = action.payload as CartProductType;
      const index =
        state.cart?.products?.findIndex((p) => p.id === product.id) ?? -1;
      if (index > -1 && state.cart?.products?.length) {
        state.cart.products[index] = product;
        localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
      }
    },
    updateQuantityProduct: (state, action) => {
      const { id, quantity } = action.payload as {
        id: string;
        quantity: number;
      };
      const index = state.cart?.products?.findIndex((p) => p.id === id) ?? -1;
      if (index > -1 && state.cart?.products?.length) {
        state.cart.products[index].quantity = quantity;
        localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
      }
    },
    removeCart: (state) => {
      state.cart = {} as CartType;
      localStorage.removeItem("shopping-cart");
    },
  },
});

export const {
  addInfo,
  removeProduct,
  addProduct,
  updateProduct,
  updateQuantityProduct,
  removeCart,
} = cartSlice.actions;
