import { ProductType } from "@/types/product";
import React from "react";
import { ProductCard } from ".";
import { Search } from "lucide-react";

export type FilterProductsProps = {
  search?: string;
  products?: ProductType[];
  filteredProducts?: ProductType[];
};
export const FilterProducts: React.FC<FilterProductsProps> = ({
  filteredProducts,
}) => {
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
