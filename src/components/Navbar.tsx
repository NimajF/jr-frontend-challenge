import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-25 backdrop-blur-md sticky top-0 z-50 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-red-600">
        RED ATLAS
      </Link>

      <div className="flex space-x-4 max-sm:space-x-2">
        <Link
          to="/properties/new"
          className="text-sm max-sm:text-sm/[12px] text-black font-semibold px-4 py-2 hover:bg-gray-100 transition-all"
        >
          INGRESAR PROPIEDAD
        </Link>
        <Link
          to="#"
          className="text-sm max-sm:text-sm/[12px] text-black font-semibold px-4 py-2 hover:bg-gray-100 transition-all"
        >
          API
        </Link>
        <Link
          to="#"
          className="text-sm max-sm:text-sm/[12px] text-black font-semibold px-4 py-2 hover:bg-gray-100 transition-all"
        >
          TRABAJA CON NOSOTROS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
