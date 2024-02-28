import { initial } from "@/store/slices/ProductSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { FilterType, ProductType } from "@/types/product";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export const useProducts = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search") || "";
  const [search, setSearch] = useState<string>(query || "");
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const { products } = useAppSelector((state) => state.products);
  const [filters, setFilters] = useState<FilterType>({
    name: "",
    category: "",
  });
  const [sortPrice, setSortPrice] = useState<string>("ASC");
  const [applyFilters, setApplyFilters] = useState<boolean>(false);
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
      dispatch(initial(onSortPrice(data)));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
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
    navigate(
      e.target.value !== ""
        ? `?search=${decodeURIComponent(e.target.value)}`
        : ""
    );
  };

  const onSortPrice = (products: ProductType[]) => {
    const data = [...products].sort((a, b) => {
      if (sortPrice === "ASC") {
        return (a?.price || 0) - (b?.price || 0);
      } else {
        return (b?.price || 0) - (a?.price || 0);
      }
    });
    return data;
  };

  const removeFilters = () => {
    setFilters({
      name: "",
      category: "",
    });
    setSortPrice("ASC");
  };

  useEffect(() => {
    !id && getProducts();
  }, []);

  useEffect(() => {
    id !== null && getProduct(id!);
  }, [id]);

  return {
    error,
    loading,
    products,
    search,
    setSearch,
    product,
    onChangeSearch,
    filters,
    removeFilters,
    setFilters,
    sortPrice,
    setSortPrice,
    applyFilters,
    setApplyFilters,
  };
};
