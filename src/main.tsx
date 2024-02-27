import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
// import { Shopping } from "@components/templates";
import { RouterProvider } from "react-router-dom";
// import { ThemeProvider } from "@context/ThemeProvider";
// import { Provider } from "react-redux";
// import { store } from "@store/store";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
