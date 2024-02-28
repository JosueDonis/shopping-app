import { X } from "lucide-react";
import { Select } from "../atoms/Select";
import { CATEGORIES, MODELS, SORTING_PRICE } from "@/const/products";
import { SetStateAction, Dispatch } from "react";
import { FilterType } from "@/types/product";
export type FilterModalProps = {
  id?: string;
  handleApplyFilters?: () => void;
  handleRemoveFilters?: () => void;
  filters?: FilterType;
  setFilters?: Dispatch<SetStateAction<FilterType>>;
  sortPrice?: string;
  setSortPrice?: Dispatch<SetStateAction<string>>;
};

export const FilterModal: React.FC<FilterModalProps> = ({
  id,
  handleApplyFilters,
  handleRemoveFilters,
  filters,
  setFilters,
  sortPrice,
  setSortPrice,
}) => {
  const applyFilters = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleApplyFilters?.();
    const modal = document.getElementById(id || "") as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
  };

  const resetFilters = () => {
    handleRemoveFilters?.();
  };
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <X />
          </button>
        </form>
        <h3 className="font-bold text-lg">Filtrar productos</h3>
        <form className="pt-8" onSubmit={applyFilters}>
          <Select
            label="Marca"
            name="name"
            options={MODELS}
            value={filters?.name}
            onChange={(e) => {
              setFilters?.((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <Select
            label="Categoría"
            name="category"
            options={CATEGORIES}
            value={filters?.category}
            onChange={(e) => {
              setFilters?.((prev) => ({ ...prev, category: e.target.value }));
            }}
          />
          <div className="flex flex-col font-bold mt-4">
            <h3>Ordenar por</h3>
            <Select
              label="Precio"
              name="price"
              options={SORTING_PRICE}
              value={sortPrice}
              onChange={(e) => {
                setSortPrice?.(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <button
              type="button"
              className="btn btn-cancel"
              onClick={resetFilters}
            >
              Limpiar filtros
            </button>
            <button type="submit" className="btn btn-secondary">
              Filtrar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default FilterModal;
