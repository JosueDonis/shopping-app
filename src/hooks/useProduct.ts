import { initial } from "@/store/slices/ProductSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { ProductType } from "@/types/product";

export const useProducts = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const { products } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  const getProducts = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(
        "https://shopping-api-nine.vercel.app/products"
      );
      const data = await response.json();
      dispatch(initial(data));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = (products?: ProductType[], search?: string): ProductType[] | undefined => {
    return products?.filter((product: ProductType) => {
      return product?.name?.toLowerCase().includes(String(search)?.toLowerCase());
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    error,
    loading,
    products,
    search,
    setSearch,
    filterProducts,
  };
};
