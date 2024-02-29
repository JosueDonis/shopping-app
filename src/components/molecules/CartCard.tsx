import { formatMoney } from "@/helpers";
import { CartProductType } from "@/types/cart";
import { X } from "lucide-react";
import React from "react";
import Input from "../atoms/Input";

export type CartCardProps = CartProductType & {
  onRemove?: (id?: string) => void;
  onChangeQuantity?: (
    value: string | number | undefined,
    id?: string,
    index?: number
  ) => void;
  index: number;
  register?: any;
  errors?: any;
};
export const CartCard: React.FC<CartCardProps> = ({
  id,
  name,
  price,
  image,
  quantity,
  onRemove,
  onChangeQuantity,
  index,
  register,
  errors,
  productId,
}) => {
  return (
    <li key={id} className="flex gap-4 border-b border-base-200">
      <figure className="md:max-w-[200px] max-w-[80px] p-4 relative">
        <img
          className="w-full h-full aspect-auto object-cover"
          src={image}
          alt={name}
        />
        <button
          className="btn btn-cancel btn-sm btn-circle absolute top-0 right-0"
          onClick={() => onRemove?.(productId)}
        >
          <X size={20} />
        </button>
      </figure>
      <div className="flex flex-col w-full gap-2">
        <div className="flex md:flex-row flex-col md:items-center items-end  justify-between md:text-xl text-base font-bold gap-2">
          <h2 className="">{name}</h2>
          <span>{formatMoney(price)}</span>
        </div>
        <Input
          class="md:w-[100px] w-[80px]"
          name={`products[${index}].quantity`}
          value={quantity}
          register={register}
          error={errors?.quantity?.message}
          type="number"
          onBlur={(e) => {
            onChangeQuantity?.((e.target as HTMLInputElement).value, productId, index);
          }}
        />
      </div>
    </li>
  );
};
