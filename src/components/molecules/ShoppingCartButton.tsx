import { formatMoney } from "@/helpers";
import useCart from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export const ShoppingCartButton = () => {
  const {cart, getCartTotal} = useCart({});
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" >
        <div className="indicator">
          <ShoppingCart />
          {cart.products?.length ? <span className="badge badge-primary rounded-lg badge-sm indicator-item">{cart?.products?.length}</span> : null}
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body border">
          <span className="font-bold text-lg">{cart?.products?.length} {cart?.products?.length === 1 ? 'producto' : 'productos'}</span>
          <span className="text-light">Subtotal: {formatMoney(getCartTotal())}</span>
          <div className="card-actions">
            <NavLink className="btn btn-primary btn-block" to="/cart">
              Ver carrito
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartButton;
