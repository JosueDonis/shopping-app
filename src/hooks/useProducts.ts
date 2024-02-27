import { initial } from "@/store/slices/ProductSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { ProductType } from "@/types/product";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export const useProducts = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search') || '';
  const [search, setSearch] = useState<string>(query || "");
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const { products } = useAppSelector((state) => state.products);
  const params = useParams<{ id: string }>();
  const id = params.id || null;
 
  const navigate = useNavigate();


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

  const filterProducts = (
    products?: ProductType[],
    search?: string
  ): ProductType[] | undefined => {
    return products?.filter((product: ProductType) => {
      return product?.name
        ?.toLowerCase()
        .includes(String(search)?.toLowerCase());
    });
  };

  const getProduct = async (id?: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://shopping-api-nine.vercel.app/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
      return data;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    navigate(e.target.value !== "" ? `?search=${decodeURIComponent(e.target.value)}` : '')
  };

  useEffect(() => {
    !id && getProducts();
  }, []);

  useEffect(() => {
   id !== null && getProduct(id!);
  }, [id ]);

  return {
    error,
    loading,
    products,
    search,
    setSearch,
    filterProducts,
    product,
    onChangeSearch,
  };
};
