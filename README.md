# 🏎️ Apex Motors

> 🚗 A modern car shop e-commerce web app built with **React** + **TypeScript**.

Apex Motors lets users browse cars, save their favorites, add them to a cart, and go through a smooth checkout, all in a fast, responsive single-page app.

---

## ✨ Features

- 🏠 **Home Page**: Eye-catching landing page that showcases featured cars
- 🚘 **Car Catalog**: Browse all available cars with images, prices, and key specs
- 🔍 **Car Details**: View full details for each car
- 🛒 **Shopping Cart**: Add and remove cars, change quantities, and see the total update live
- ❤️ **Wishlist**: Save cars you love and move them to the cart with one click
- 💳 **Checkout**: Simple checkout form with an order summary
- 🧭 **Navigation**: Navbar and footer shared across all pages
- 📱 **Responsive Design**: Looks great on desktop, tablet, and mobile
- 💾 State Management: Cart, wishlist and prices are shared across the app using React Context (ShopContext + ShopProvider), and saved in localStorage so they survive a page refresh

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| ⚛️ React | UI library |
| 🟦 TypeScript | Type safety |
| ⚡ Vite | Fast dev server & build tool |
| 🎨 CSS | Styling |

---

## 📁 Project Structure

```
src/
├── 📄 main.tsx          # App entry point
├── 📄 App.tsx           # Routes & layout
├── 📂 components/       # Navbar, Footer, reusable UI
├── 📂 pages/            # Home, Catalog, Cart, Wishlist, Checkout
├── 📂 store/            # ShopContext.ts, ShopProvider.tsx.
├── 📂 types/            # Shared TypeScript types
└── 🎨 index.css         # Global styles
```

---

## 🚀 Getting Started

1️⃣ **Clone the repo**
```bash
git clone https://github.com/your-username/apex-motors.git
cd apex-motors
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
| 👨‍💻 Ali Salem | 🚗 Homepage & Shared Layout · 🧭 Routing & Navigation · 🔗 Team Integration · 🤝 Git/GitHub Collaboration · 🧪 Application Testing |
| 👨‍💻 Mohammad Al Hanafi | 🔍 Product Search · 🏷️ Category & Condition Filters · ↕️ Product Sorting · 🚘 Car Cards · 📋 Product Details |
| 👨‍💻 **Mohannad Kaddoura** | 🛒 Cart, ❤️ Wishlist, 💳 Checkout |

---

## 🔮 Future Improvements

- 🔐 User authentication
- 🔎 Search & filters (brand, price, year)
- 🌙 Dark mode
- 💰 Real payment integration

---

## 📜 License

This project was built for educational purposes as part of a course. 🎓

---

<p align="center">Made with ❤️ and ☕ by the Apex Motors team 🏁</p>
