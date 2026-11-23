import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <Routes>
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="*" element={<Cart />} />
    </Routes>
  );
}
