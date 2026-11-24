import { createContext, useContext } from 'react';
import type { CarProduct, CartItem, Order } from '../types';

export interface ShopContextValue {
  cart: CartItem[];
  wishlist: CarProduct[];
  orders: Order[];
  discountPercent: number;

  addToCart: (car: CarProduct) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;

  toggleWishlist: (car: CarProduct) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;

  setDiscountPercent: (percent: number) => void;

  addOrder: (order: Order) => void;
  clearOrders: () => void;

  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export function useShop() {
  //React retrieves the entire object we previously passed through value
  const shop = useContext(ShopContext);
  if (!shop) {
    throw new Error('useShop must be used inside <ShopProvider>');
  }
  return shop;
}
