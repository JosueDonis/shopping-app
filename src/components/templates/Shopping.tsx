import { Navbar } from "../organisms";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Outlet } from "react-router-dom";

export const ShoppingApp = () => {
  return (
    <Provider store={store}>
      <div className="w-full h-full flex justify-center relative">
        <div className="flex flex-col w-full max-w-4xl mt-2 gap-8">
          <Navbar />
          <main className="p-4 w-full relative">
            <Outlet />
          </main>
        </div>
      </div>
    </Provider>
  );
};

export default ShoppingApp;
