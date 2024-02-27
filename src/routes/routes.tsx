import { Cart, Login, Product, Products } from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesCustom = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesCustom;