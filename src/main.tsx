import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import { Shopping } from "@components/templates";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@context/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <Shopping />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
