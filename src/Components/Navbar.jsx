import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
