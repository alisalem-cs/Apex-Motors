import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { CarProduct, CartItem } from '../types';
import { DELIVERY_FEE } from '../data/products';
import { ShopContext } from './ShopContext';
import type { ShopContextValue } from './ShopContext';

function loadFromStorage<T>(key: string): T[] {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => loadFromStorage<CartItem>('cart'));
  const [wishlist, setWishlist] = useState<CarProduct[]>(() => loadFromStorage<CarProduct>('wishlist'));

  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  function addToCart(car: CarProduct) {
    const alreadyInCart = cart.find((item) => item.car.id === car.id);

    if (alreadyInCart) {
      increaseQty(car.id);
    } else {
      setCart([...cart, { car: car, quantity: 1 }]);
    }
  }

  function removeFromCart(id: number) {
    setCart(cart.filter((item) => item.car.id !== id));
  }

  function increaseQty(id: number) {
    setCart(
      cart.map((item) =>
        item.car.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(id: number) {
    const item = cart.find((item) => item.car.id === id);

    if (item && item.quantity === 1) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((item) =>
        item.car.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
    setDiscountPercent(0);
  }

  function isInWishlist(id: number) {
    return wishlist.some((car) => car.id === id);
  }

  function removeFromWishlist(id: number) {
    setWishlist(wishlist.filter((car) => car.id !== id));
  }

  function toggleWishlist(car: CarProduct) {
    if (isInWishlist(car.id)) {
      removeFromWishlist(car.id);
    } else {
      setWishlist([...wishlist, car]);
    }
  }

  function clearWishlist() {
    setWishlist([]);
  }

  let subtotal = 0;
  for (const item of cart) {
    subtotal = subtotal + item.car.price * item.quantity;
  }

  const discount = Math.round((subtotal * discountPercent) / 100);
  const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal - discount + delivery;

  const value: ShopContextValue = {
    cart,
    wishlist,
    discountPercent,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    setDiscountPercent,
    subtotal,
    discount,
    delivery,
    total,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
