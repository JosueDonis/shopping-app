import Joi from "joi";
import { useAppDispatch, useAppSelector } from "./hook";
import { joiMessages, joiResolver } from "@/helpers/joi";
import { useForm } from "react-hook-form";
import { CartInfoType, CartProductType, CartType } from "@/types/cart";
import { addProduct, removeCart, removeProduct, updateQuantityProduct } from "@/store/slices/CartSlice";
import { ProductType } from "@/types/product";
import { useState } from "react";

const schema = Joi.object({
  amount: Joi.number().required().label("Cantidad").min(1),
}).messages(joiMessages);

export type useCartProps = {
    product?: ProductType;
    info?: CartInfoType;
}
export const useCart = ({product}: useCartProps) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    formState: { errors = {} as Record<string, any>},
    setValue,
    getValues,
    control,
  } = useForm({
    resolver: async (data) => {
      return joiResolver(schema, data);
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCartTotal = () => {
    const total = cart?.products?.length ? cart.products?.reduce((acc, product: CartProductType) => {
      return acc + ((product?.price || 0) * product?.quantity);
    }, 0) : 0;
    return total;
  }

  const handleAddCart = () => {
    const values = getValues();
    dispatch(addProduct({ ...product, quantity: parseFloat(values.amount) }));
  };

  const handleDeleteProduct = (id?: string) => {
    dispatch(removeProduct(id));
  }

  const handleUpdateQuantity = (id?: string, quantity?: number) => {
    dispatch(updateQuantityProduct({ id, quantity }));
  }

  const handleCheckout = async (cart: CartType) => {
    try {
      setLoading(true);
      const response = await fetch("https://shopping-api-nine.vercel.app/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      })
      const data = await response.json();
      dispatch(removeCart());
      return data;
    } catch (error) {
      setError(true)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }

  return {
    cart,
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
    control,
    getCartTotal,
    handleAddCart,
    handleDeleteProduct,
    handleUpdateQuantity,
    handleCheckout,
    loading,
    error,
  };
};

export default useCart;
