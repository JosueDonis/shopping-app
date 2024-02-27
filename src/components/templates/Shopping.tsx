import Routes from "@/routes/routes";
import { Navbar } from "../organisms";

export const Shopping = () => {
  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="flex flex-col w-full max-w-4xl mt-2 gap-8">
        <Navbar />
        <main className="p-4 w-full relative">
          <Routes />
        </main>
      </div>
    </div>
  );
};

export default Shopping;
