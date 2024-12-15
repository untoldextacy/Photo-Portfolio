import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 left-0 flex justify-center items-center py-5 bg-opacity-75 backdrop-blur-md z-10">
      <nav className="flex gap-10">
        <Link to="/" className="text-xl hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/gallery" className="text-xl hover:text-gray-400 transition">
          Gallery
        </Link>
        <Link to="/about" className="text-xl hover:text-gray-400 transition">
          About
        </Link>
        <Link to="/contact" className="text-xl hover:text-gray-400 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
