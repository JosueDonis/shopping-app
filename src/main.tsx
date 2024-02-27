import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import { Shopping } from "@components/templates";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@context/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <ThemeProvider>
          <Shopping />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
