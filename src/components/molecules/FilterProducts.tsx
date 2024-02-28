import { FilterType, ProductType } from "@/types/product";
import React, { useEffect, useState } from "react";
import { ProductCard } from ".";
import { Search } from "lucide-react";

export type FilterProductsProps = {
  search?: string;
  products?: ProductType[];
  filters?: FilterType;
  sortPrice?: string;
};
export const FilterProducts: React.FC<FilterProductsProps> = ({
  search,
  products,
  filters,
  sortPrice,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<
    ProductType[] | undefined
  >(products);

  const filterProducts = (
    products?: ProductType[],
    search?: string
  ): ProductType[] | undefined => {
    return onSortPrice(
      products?.filter((product: ProductType) => {
        return product?.name
          ?.toLowerCase()
          .includes(String(search)?.toLowerCase());
      }) ?? []
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

  const filterByValue = (products?: ProductType[]) => {
    const haveFilters = Object.values(filters!).some((filter) => filter !== "");
    if (!haveFilters) return products;
    return products?.filter((product: ProductType) => {
      return Object.keys(filters!).every((key) => {
        const value = filters?.[key as keyof FilterType];
        return String(product[key as keyof ProductType] || "")
          .toLowerCase()
          .includes(String(value).toLowerCase());
      });
    });
  };

  useEffect(() => {
    setFilteredProducts(filterProducts(filterByValue(products), search));
  }, [search, products, filters, sortPrice]);

  return filteredProducts?.length ? (
    filteredProducts?.map(({ id, name, price, image }: ProductType) => (
      <ProductCard key={id} id={id} name={name} price={price} image={image} />
    ))
  ) : (
    <div className="flex col-span-3 h-[60vh] flex-col p-8 gap-10 bg-base-100 shadow border border-base-300 rounded-xl items-center justify-center">
      <Search size={80} />
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold">No se encontraron resultados</p>
        <p className="text-sm">
          Intenta usar otras palabras clave o quitar los filtros de busqueda
        </p>
      </div>
    </div>
  );
};

export default FilterProducts;
