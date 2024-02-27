import { SearchInput } from "@/components/atoms";
import { ProductsList } from "@/components/molecules";
import { useProducts } from "@/hooks/useProducts";

export const Products = () => {
  const { error, loading, products, filterProducts, search, onChangeSearch} =
    useProducts();
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-12">
        Descubre los productos, para ti.
      </h1>
      <SearchInput
        placeholder="Buscar productos..."
        value={search}
        onChange={onChangeSearch}
      />
      <ProductsList
        products={products}
        error={error}
        loading={loading}
        search={search}
        filterProducts={filterProducts}
      />
    </div>
  );
};

export default Products;
