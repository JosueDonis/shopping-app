import { ProductType } from "@/types/product";
import React from "react";
import { ProductCard } from ".";

export type FilterProductsProps = {
  search?: string;
  products?: ProductType[];
  filterProducts?: (products?: ProductType[], search?: string) => ProductType[] | undefined;
};
export const FilterProducts: React.FC<FilterProductsProps> = ({
  search,
  products,
  filterProducts,
}) => {
  return search !== "" && search?.length
    ? filterProducts?.(products, search)?.map(
        ({ id, name, price, image, }: ProductType) => (
          <ProductCard key={id} id={id} name={name} price={price} image={image} />
        )
      )
    : products?.map(({ id, name, price, image }: ProductType) => (
        <ProductCard key={id} id={id} name={name} price={price} image={image}/>
      ));
};

export default FilterProducts;
