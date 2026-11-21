import { useSyncExternalStore } from 'react';
import type { Car, CartItem } from '../types';

// Load saved cart (so it survives a page refresh)
// (skips cars saved in an old format, before the shared Car type)
let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
  .filter((item: CartItem) => item.car && item.car.brand && item.car.mileage !== undefined);
const listeners = new Set<() => void>();

// Save the new cart and tell the pages to re-render
function update(newCart: CartItem[]) {
  cart = newCart;
  localStorage.setItem('cart', JSON.stringify(cart));
  listeners.forEach((listener) => listener());
}

export function addToCart(car: Car) {
  const found = cart.find((item) => item.car.id === car.id);
  if (found) {
    increaseQty(car.id);
  } else {
    update([...cart, { car, quantity: 1 }]);
  }
}

export function removeFromCart(id: string) {
  update(cart.filter((item) => item.car.id !== id));
}

export function increaseQty(id: string) {
  update(
    cart.map((item) =>
      item.car.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    ),
  );
}

export function decreaseQty(id: string) {
  const found = cart.find((item) => item.car.id === id);
  if (found && found.quantity === 1) {
    removeFromCart(id);
  } else {
    update(
      cart.map((item) =>
        item.car.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  }
}

export function clearCart() {
  setDiscount(0);
  update([]);
}

// Promo discount in percent (saved so Checkout can use it)
let discountPercent = Number(localStorage.getItem('discount') || 0);

export function setDiscount(percent: number) {
  discountPercent = percent;
  localStorage.setItem('discount', String(percent));
}

export function getDiscount() {
  return discountPercent;
}

export function getTotalItems() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalPrice() {
  return cart.reduce((sum, item) => sum + item.car.price * item.quantity, 0);
}

// Use this in any page: const cart = useCart();
export function useCart() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => cart,
  );
}
