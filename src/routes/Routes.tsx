import { ShoppingApp } from "@/components/templates";
import { Cart, Login, Product, Products } from "@/pages";
import { ClerkProvider } from "@clerk/clerk-react";
import { esES } from "@clerk/localizations";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export const RoutesCustom = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShoppingApp />,
      children: [
        { path: "", element: <Products /> },
        { path: "/cart", element: <Cart /> },
        { path: "/products/:id", element: <Product /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to="/login"  />,
    },
  ]);
  return (
    <ClerkProvider
      localization={esES}
      publishableKey="pk_test_dG9waWNhbC1zd2luZS01OS5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  );
};

export default RoutesCustom;
