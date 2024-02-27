import { CartProductType } from "@/types/cart";
import { CartCard } from "../molecules/CartCard";

type CartListProps = {
  products?: CartProductType[];
  onRemove?: (id?: string) => void;
  onChangeQuantity?: (event: React.ChangeEvent<HTMLInputElement>, id?: string) => void;
};

export const CartList: React.FC<CartListProps> = ({ products, onRemove, onChangeQuantity}) => {

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl font-bold">Productos</h2>
      {products?.map?.((product: CartProductType) => (
        <CartCard key={product.id} {...product} onRemove={onRemove!} onChange={onChangeQuantity!} />
      ))}
      
    </div>
  );
};

export default CartList;
