# Apex Motors – Beginner Version

A simple car shop built with **React + TypeScript + Vite**.
Same pages and features as the original project, written with only basic React
(useState, useEffect, props and one Context) and lots of comments.
The checkout form is checked with **Zod**.

## How to run it

```bash
npm install     # only the first time, downloads the packages
npm run dev     # starts the site, open the link it prints (usually http://localhost:5173)
```

## Pages

| Address     | File                     | What it does                                   |
|-------------|--------------------------|------------------------------------------------|
| `/cart` (and any other address) | `src/pages/Cart.tsx` | Cart, price summary, promo code, featured cars |
| `/wishlist` | `src/pages/Wishlist.tsx` | Saved cars, move to cart, remove               |
| `/checkout` | `src/pages/Checkout.tsx` | Shipping + payment form, order confirmation    |

Promo code to test: **APEX20** (20% off).

## Folder structure

Same folders and file names as the main Apex-Motors project:

```
src/
  main.tsx                Starts the app and wraps it with the router + ShopProvider
  App.tsx                 Which page to show for each address
  App.css / index.css     Global styles
  assets/                 Images and icons
  types/index.ts          The shape of our data (Car, CartItem, Order)
  data/products.ts        The list of cars + delivery fee + promo code
  store/ShopContext.tsx   Cart, wishlist and discount, shared with every page
  components/
    CarCard.tsx           One car with "Add to Cart" (animated) / "Wishlist" buttons
    PriceSummary.tsx      Subtotal / Discount / Delivery / Total rows (extra, beginner version only)
    Navbar.tsx            Not built yet
    Footer.tsx            Not built yet
  pages/
    Cart.tsx + Cart.css
    Wishlist.tsx + Wishlist.css
    Checkout.tsx + Checkout.css
    Products.tsx          Not built yet
```

## How the data flows

1. `ShopContext.tsx` keeps the **cart** and **wishlist** in `useState`.
2. A `useEffect` saves them to `localStorage` whenever they change,
   so they are still there after a refresh.
3. Any page gets what it needs with one line:
   ```tsx
   const { cart, addToCart } = useShop();
   ```
4. When a page changes the cart (e.g. `addToCart(car)`), React re-draws
   every page that uses it automatically.

## What changed from the original

| Original                                   | Beginner version                         |
|--------------------------------------------|------------------------------------------|
| Two custom stores with `useSyncExternalStore` | One `ShopContext` with `useState`       |
| Zod rules written straight in the submit handler | Zod rules at the top + a small `validate()` helper, with comments |
| `performance` API to reset the promo on refresh | Promo kept in state, so a refresh resets it naturally |
| `<a href>` links (reload the page)         | React Router `<Link>` (no reload)        |
| Car list inside `Cart.tsx`                 | Car list in `src/data/products.ts`       |
| Price math repeated in Cart and Checkout   | Calculated once in the context, shown by `PriceSummary` |
