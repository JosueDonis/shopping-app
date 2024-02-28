import { X } from "lucide-react";
import { Select } from "../atoms/Select";
import { CATEGORIES, MODELS, SORTING_PRICE } from "@/const/products";
import { SetStateAction, Dispatch } from "react";
import { FilterType } from "@/types/product";
import Joi from "joi";
import { joiMessages } from "@/helpers/joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
export type FilterModalProps = {
  id?: string;
  handleApplyFilters?: () => void;
  handleRemoveFilters?: () => void;
  filters?: FilterType;
  setFilters?: Dispatch<SetStateAction<FilterType>>;
  sortPrice?: string;
  setSortPrice?: Dispatch<SetStateAction<string>>;
};

const schema = Joi.object({
  name: Joi.string().label("Nombre").empty(""),
  category: Joi.string().label("Categoría").empty(""),
  price: Joi.string().label("Precio"),
}).messages(joiMessages);

export const FilterModal: React.FC<FilterModalProps> = ({
  id,
  handleRemoveFilters,
  filters,
  setFilters,
  sortPrice,
  setSortPrice,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    values: {
      name: filters?.name,
      category: filters?.category,
      price: sortPrice,
    },
  });

  const onSubmit = () => {
    const { name, category, price } = getValues();
    setFilters?.((prev) => ({ ...prev, name, category }));
    setSortPrice?.(price!);
    const modal = document.getElementById(id!) as HTMLDialogElement;
    modal?.close();
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
        <form className="pt-8" onSubmit={handleSubmit(onSubmit)}>
          <Select
            label="Marca"
            name="name"
            options={MODELS}
            register={register}
            error={errors?.name?.message}
          />
          <Select
            label="Categoría"
            name="category"
            options={CATEGORIES}
            register={register}
            error={errors?.category?.message}
          />
          <div className="flex flex-col font-bold mt-4">
            <h3>Ordenar por</h3>
            <Select
              label="Precio"
              name="price"
              options={SORTING_PRICE}
              register={register}
              error={errors?.price?.message}
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
