import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      <footer className="text-sm h-16 bg-gray-200 text-slate-400 text-center py-6">
        &copy; {new Date().getFullYear()} Red Atlas Challenge - All rights
        reserved
      </footer>
    </div>
  );
};

export default Layout;
