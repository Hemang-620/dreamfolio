
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 p-4 flex justify-center space-x-6 text-gold shadow-md">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;
