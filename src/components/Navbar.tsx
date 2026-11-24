import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/apex-logo.png';
import { useShop } from '../store/ShopContext';

export default function Navbar() {
  const { cart, wishlist, orders } = useShop();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const historyCount = orders.length;

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Apex Motors logo" className="logo-img" />
        APEX <span>MOTORS</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Cars</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/wishlist">
          Wishlist
          {wishlistCount > 0 && <span className="nav-count">{wishlistCount}</span>}
        </NavLink>
        <NavLink to="/cart">
          Cart
          {cartCount > 0 && <span className="nav-count">{cartCount}</span>}
        </NavLink>
        <NavLink to="/history">
          History
          {historyCount > 0 && <span className="nav-count">{historyCount}</span>}
        </NavLink>
      </nav>
    </header>
  );
}