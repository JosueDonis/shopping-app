import { NavLink } from "react-router-dom";
import { ShoppingCartButton } from "../molecules";
import { ThemeButton } from "../atoms";

export const Navbar = () => {
  return (
    <header className="navbar px-4 sticky top-0 z-50 bg-base-100">
      <div className="flex-1 gap-2">
        <button
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </button>
        <NavLink className="text-xl hover:text-accent" to="/">
          Shopping
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <ShoppingCartButton />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Navbar;
