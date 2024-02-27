import { Shopping } from "@/components/templates";
import { Cart, Login, Product, Products } from "@/pages";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shopping />,
    children: [
      {
        path: "",
        element: <Products />,
      },
      { path: "/products/:id", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "/", element: <Navigate to="/products" /> },
]);

export default router;
