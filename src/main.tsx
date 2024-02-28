import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import Routes from "./routes/Routes";
import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
