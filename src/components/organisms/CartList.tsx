import { CartProductType } from "@/types/cart";
import { CartCard } from "../molecules/CartCard";
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from "react";

type CartListProps = {
  products?: CartProductType[];
  onRemove?: (id?: string, index?: number) => void;
  register?: any;
  errors?: any;
  onChangeQuantity?: (
    value?: string | number | undefined,
    id?: string,
    index?: number
  ) => void;
};

export const CartList: React.FC<CartListProps> = ({
  products,
  onRemove,
  onChangeQuantity,
  register,
  errors,
}) => {
  const cartRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    cartRef.current && autoAnimate(cartRef.current)
  }, [cartRef])
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl font-bold">Productos</h2>
      <ul ref={cartRef}>
        {products?.map?.((product: CartProductType, index: number) => (
          <CartCard
            productId={""}
            key={product.id}
            {...product}
            onRemove={onRemove}
            register={register}
            onChangeQuantity={onChangeQuantity}
            index={index}
            errors={errors.products?.[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
