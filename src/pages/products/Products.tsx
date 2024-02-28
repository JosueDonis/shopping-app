import { SearchInput } from "@/components/atoms";
import { ProductsList } from "@/components/molecules";
import { FilterModal } from "@/components/organisms";
import { useProducts } from "@/hooks/useProducts";
import { SlidersHorizontal } from "lucide-react";

export const Products = () => {
  const {
    error,
    loading,
    products,
    search,
    onChangeSearch,
    removeFilters,
    filters,
    setFilters,
    sortPrice,
    setSortPrice,
  } = useProducts();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-12">
        Descubre los productos, para ti.
      </h1>
      <div className="flex items-center justify-between gap-8">
        <SearchInput
          placeholder="Buscar productos..."
          value={search}
          onChange={onChangeSearch}
        />
        <button
          className="btn btn-secondary"
          onClick={() => {
            const modal = document.getElementById(
              "filterModal"
            ) as HTMLDialogElement | null;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          <SlidersHorizontal className="text-white" />
        </button>
      </div>
      <ProductsList
        error={error}
        loading={loading}
        search={search}
        products={products}
        filters={filters}
        sortPrice={sortPrice}
      />
      <FilterModal
        id="filterModal"
        filters={filters}
        setFilters={setFilters}
        handleRemoveFilters={removeFilters}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
    </div>
  );
};

export default Products;
