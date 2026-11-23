# 🏎️ Apex Motors

> 🚗 A modern car shop e-commerce web app built with **React** + **TypeScript**.

Apex Motors lets users browse cars, save their favorites, add them to a cart, and go through a smooth checkout, all in a fast, responsive single-page app.

---

## ✨ Features

- 🏠 **Home Page**: Eye-catching landing page that showcases featured cars
- 🚘 **Car Catalog**: Browse all available cars with images, prices, and key specs
- 🔍 **Search, Filters & Sorting**: Find cars by name, filter by category and condition, and sort the results
- 📋 **Car Details**: View full details for each car
- 🛒 **Shopping Cart**: Add and remove cars, change quantities, and see the total update live
- ❤️ **Wishlist**: Save cars you love and move them to the cart with one click
- 🏷️ **Promo Codes**: Apply a promo code (try `APEX20`) for 20% off, with success/error messages
- 🧾 **Price Summary**: Subtotal, discount, delivery fee, and total, updated live
- 💳 **Checkout**: Shipping & payment form validated with Zod (clear error under each field), auto-formatted expiry date, and a phone country-code picker
- 🎉 **Order Confirmation**: Confirmation page with order number, date, delivery address, and total paid
- 🧭 **Navigation**: Navbar and footer shared across all pages
- 📱 **Responsive Design**: Looks great on desktop, tablet, and mobile
- 💾 **State Management**: Cart, wishlist and prices are shared across the app using React Context (`ShopContext` + `ShopProvider`), and saved in `localStorage` so they survive a page refresh

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
├── 📂 pages/            # Home, Products, Product Details, Cart, Wishlist, Checkout
├── 📂 store/            # ShopContext.ts, ShopProvider.tsx
├── 📂 data/             # Car list and shop settings
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
| 👨‍💻 **Mohannad Kaddoura** | 🛒 Cart page (quantity +/−, remove, clear cart) · ❤️ Wishlist page (move to cart, remove, clear) · 💳 Checkout form with ✅ Zod validation (auto-formatted card expiry, numbers-only phone/card/CVV) · 🌍 Phone country-code picker · 🎉 Order confirmation page (order number, date, address, total paid) · 🏷️ Promo code system (`APEX20` = 20% off) · 🧾 Price summary (subtotal, discount, delivery fee, total) · 🧠 Shared state with React Context (`ShopContext` + `ShopProvider`) · 💾 Cart & wishlist saved in `localStorage` |

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
