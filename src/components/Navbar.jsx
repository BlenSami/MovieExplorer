import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-neutral-900 text-white px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            MovieExplorer
          </Link>

          <ul className="hidden md:flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>

          <Link
            to="/movies"
            className="hidden md:block px-5 py-2 bg-red-600 rounded-md font-medium hover:bg-red-700"
          >
            Movies
          </Link>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 bg-neutral-900 text-white">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/movies" onClick={() => setIsOpen(false)}>Movies</Link>
          <Link
            to="/movies"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-red-600 rounded-md font-medium text-center"
          >
            Movies
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;