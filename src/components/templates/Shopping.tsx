import { ThemeProvider } from "@/context/ThemeProvider";
import { Navbar } from "../organisms";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

export const Shopping = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="w-full h-full flex justify-center relative">
          <div className="flex flex-col w-full max-w-4xl mt-2 gap-8">
            <Navbar />
            <main className="p-4 w-full relative">
              <Outlet />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default Shopping;
