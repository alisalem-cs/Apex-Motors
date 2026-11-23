import { useSyncExternalStore } from 'react';
import type { Car } from '../types';

// Load saved wishlist (so it survives a page refresh)
// (skips cars saved in an old format, before the shared Car type)
let wishlist: Car[] = JSON.parse(localStorage.getItem('wishlist') || '[]')
  .filter((car: Car) => car.brand && car.mileage !== undefined);
const listeners = new Set<() => void>();

// Save the new wishlist and tell the pages to re-render
function update(newWishlist: Car[]) {
  wishlist = newWishlist;
  // converts js to json and saves it to local storage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  listeners.forEach((listener) => listener());
}

export function addToWishlist(car: Car) {
  if (!isInWishlist(car.id)) {
    update([...wishlist, car]);
  }
}

export function removeFromWishlist(id: string) {
  update(wishlist.filter((car) => car.id !== id));
}

// Adds if missing, removes if already there (for a heart button)
export function toggleWishlist(car: Car) {
  if (isInWishlist(car.id)) {
    removeFromWishlist(car.id);
  } else {
    addToWishlist(car);
  }
}

export function isInWishlist(id: string) {
  return wishlist.some((car) => car.id === id);
}

export function clearWishlist() {
  update([]);
}

// Use this in any page: const wishlist = useWishlist();
//allow React components to access the wishlist and automatically update when the wishlist changes or updates.
export function useWishlist() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => wishlist,
  );
}
