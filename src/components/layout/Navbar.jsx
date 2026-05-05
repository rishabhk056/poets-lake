import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#f5f1e8] border-b border-gray-300 sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-heading tracking-wide text-black">
          Poets Lake
        </h1>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-wider font-body">

          <Link
  to="/"
  className={`px-4 py-2 rounded-md bg-black text-white transition ${
    location.pathname === "/" ? "opacity-100" : "opacity-80 hover:opacity-100"
  }`}
>
  Home
</Link>

          <Link
  to="/artists"
  className={`px-4 py-2 rounded-md bg-black text-white transition ${
    location.pathname === "/artists"
      ? "opacity-100"
      : "opacity-80 hover:opacity-100"
  }`}
>
  Artists
</Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;