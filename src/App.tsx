import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

export default function App() {
  const path = window.location.pathname;

  if (path === '/wishlist') return <Wishlist />;
  if (path === '/checkout') return <Checkout />;
  return <Cart />;
}