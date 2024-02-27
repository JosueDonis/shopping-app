import { ProductType } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { GalleryVerticalEnd } from "lucide-react";
import FilterProducts from "./FilterProducts";

export type ProductCardProps = {
  products?: ProductType[];
  class?: string;
  error?: boolean;
  loading?: boolean;
  search?: string;
  filterProducts?: (products?: ProductType[], search?: string) => ProductType[] | undefined;
};

export const ProductsList: React.FC<ProductCardProps> = ({
  products,
  class: className,
  error,
  loading,
  search,
  filterProducts,
}) => {
  return (
    <section
      className={`mt-12 grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-3 gap-y-8 ${className}`}
    >
      {loading && !error
        ? Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} loading />
          ))
        : products?.length
        ? <FilterProducts search={search} products={products} filterProducts={filterProducts} />
        : null}
      {!loading && error && (
        <div className="flex h-[60vh] col-span-3 flex-col p-8 gap-10 bg-base-100 shadow border border-base-300 rounded-xl items-center justify-center">
          <img
            className="w-[300px] h-[300px] aspect-video"
            src="../assets/img/error.svg"
            alt="error"
          />
          <div className="card-body items-center justify-center">
            <p className="text-primary text-xl font-bold">
              ¡Ha ocurrido un error, intentalo nuevamente!
            </p>
          </div>
        </div>
      )}
      {!loading && !error && !products?.length && search === "" ? (
        <div className="flex col-span-3 h-[60vh] flex-col p-8 gap-10 bg-base-100 shadow border border-base-300 rounded-xl items-center justify-center">
          <GalleryVerticalEnd  size={80} />
          <p className="text-xl font-bold">
            No hay productos disponibles
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default ProductsList;
