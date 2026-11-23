import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/apex-logo.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Apex Motors logo" className="logo-img" />
        APEX <span>MOTORS</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Cars</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
}