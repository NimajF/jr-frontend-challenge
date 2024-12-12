import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-slate-500 text-center py-4">
        &copy; {new Date().getFullYear()} Red Atlas Challenge
      </footer>
    </div>
  );
};

export default Layout;
