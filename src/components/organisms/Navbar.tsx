import { Link, NavLink } from "react-router-dom";
import { ShoppingCartButton } from "../molecules";
import { ThemeButton } from "../atoms";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  return (
    <header className="navbar px-4 sticky top-0 z-50 bg-base-100">
      <div className="flex-1 gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/ " />
          <NavLink className="text-xl hover:text-accent" to="/">
            Shopping
          </NavLink>
        </SignedIn>
        <SignedOut>
          <Link className="btn btn-ghost" to="/login">
            Iniciar sesión
          </Link>
        </SignedOut>
      </div>
      <div className="flex-none gap-2">
        <ShoppingCartButton />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Navbar;
