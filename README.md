# 🏎️ Apex Motors

> 🚗 A modern car shop e-commerce web app built with **React** + **TypeScript**.

Apex Motors lets users browse cars, save their favorites, add them to a cart, and go through a smooth checkout, all in a fast, responsive single-page app.

---

## ✨ Features

- 🏠 **Home Page**: Eye-catching landing page that showcases featured cars
- 🚘 **Car Catalog**: Browse 30 cars across 8 categories with images, real prices, and key specs
- 🎬 **Animated Hero**: The Cars page title sits on a slideshow of car photos that slowly zoom and cross-fade
- 🔍 **Search, Filters & Sorting**: Find cars by name, filter by category and condition, and sort the results
- 📋 **Car Details**: View full details for each car
- ✅ **In-Cart Badge**: Car cards show "✓ In Cart (n)" when a car is already in the cart
- 🛒 **Shopping Cart**: Add and remove cars, change quantities, and see the total update live
- ❤️ **Wishlist**: Save cars you love and move them to the cart with one click
- 🔢 **Navbar Counters**: Live badges on Wishlist, Cart and History show how many items each one holds
- 🏷️ **Promo Codes**: Apply a promo code (try `APEX20`) for 20% off, with success/error messages
- 🧾 **Price Summary**: Subtotal, discount, delivery fee, and total, updated live
- 💳 **Checkout**: Shipping & payment form validated with Zod (clear error under each field), auto-formatted expiry date, and a phone country-code picker
- 💳 **Card Type Detection**: Shows a Visa, Mastercard, American Express or Discover badge while typing the card number
- 🌍 **Country Flags & Phone Validation**: The country-code picker shows flags, and the phone number is checked against each country's mobile format
- 🎉 **Order Confirmation**: Confirmation page with order number, date, delivery address, payment method, and total paid
- 📜 **Order History**: All completed orders saved with their cars, address, payment method, and total, plus a Back to Home button
- ℹ️ **About Page**: HD promo video made for Apex Motors, live store stats, and a team section with photos and LinkedIn links
- 🧭 **Navigation**: Navbar and footer shared across all pages, and every page opens at the top
- 📱 **Responsive Design**: Looks great on desktop, tablet, and mobile
- 🖼️ **Custom Favicon**: The AM logo in the browser tab
- 💾 **State Management**: Cart, wishlist, orders and prices are shared across the app using React Context (`ShopContext` + `ShopProvider`), and saved in `localStorage` so they survive a page refresh

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| ⚛️ React | UI library |
| 🟦 TypeScript | Type safety |
| 🧭 React Router | Page navigation |
| ✅ Zod | Checkout form validation |
| ⚡ Vite | Fast dev server & build tool |
| 🎨 CSS | Styling |

---

## 📁 Project Structure

```
src/
├── 📄 main.tsx          # App entry point
├── 📄 App.tsx           # Routes & layout
├── 📂 components/       # Navbar, Footer, reusable UI
├── 📂 pages/            # Home, Products, Product Details, Cart, Wishlist, Checkout, History, About
├── 📂 store/            # ShopContext.ts, ShopProvider.tsx
├── 📂 data/             # Car list, shop settings, countries and card types
├── 📂 types/            # Shared TypeScript types
└── 🎨 index.css         # Global styles
```

---

## 🚀 Getting Started

1️⃣ **Clone the repo**
```bash
git clone https://github.com/alisalem-cs/Apex-Motors.git
cd Apex-Motors
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Run the dev server**
```bash
npm run dev
```

4️⃣ Open 👉 `http://localhost:5173` in your browser

---

## 👥 Team

| Developer | Responsibilities |
|-----------|------------------|
| 👨‍💻 **Ali Salem** | 🚗 Homepage & Shared Layout · 🧭 Routing & Navigation · 🔗 Team Integration · 🤝 Git/GitHub Collaboration · 🧪 Application Testing |
| 👨‍💻 **Mohammad Al Hanafi** | 🔍 Product Search · 🏷️ Category & Condition Filters · ↕️ Product Sorting · 🚘 Car Cards · 📋 Product Details |
| 👨‍💻 **Mohannad Kaddoura** | 🛒 Cart page (quantity +/−, remove, clear cart) · ❤️ Wishlist page (move to cart, remove, clear) · 💳 Checkout form with ✅ Zod validation (auto-formatted card expiry, numbers-only phone/card/CVV) · 💳 Card type detection · 🌍 Phone country-code picker with flags & per-country validation · 🎉 Order confirmation page (order number, date, address, total paid) · 📜 Order History page · 🔢 Navbar counters · 🏷️ Promo code system (`APEX20` = 20% off) · 🧾 Price summary (subtotal, discount, delivery fee, total) · 🧠 Shared state with React Context (`ShopContext` + `ShopProvider`) · 💾 Cart, wishlist & orders saved in `localStorage` · ℹ️ About page · 🚘 Car data with real prices · 🎬 Cars page hero slideshow · 🖼️ Favicon |

---

## 🔮 Future Improvements

- 🔐 User authentication
- 💰 Real payment integration
- 🗄️ Backend & database for cars and orders
- 📧 Real order confirmation emails

---

## 📜 License

This project was built for educational purposes as part of a course. 🎓

---

<p align="center">Made with ❤️ and ☕ by the Apex Motors team 🏁</p>
