🏎️ Apex Motors

🚗 A modern car shop e-commerce web app built with React + TypeScript.

🌐 Live demo: apexmotors-pro.vercel.app

Apex Motors lets users browse cars, save their favorites, add them to a cart, and go through a smooth checkout, all in a fast, responsive single-page app.

✨ Features
🚘 Browsing
🏠 Home Page: Eye-catching landing page that showcases featured cars and categories
🚘 Car Catalog: 30 cars across 8 categories (Sedan, Luxury, SUV, Sports, Supercar, Hypercar, Electric, Pickup) with real US prices, images and key specs
🎬 Animated Hero: The Cars page title sits on a slideshow of car photos that slowly zoom and cross-fade
🔍 Search, Filters & Sorting: Find cars by name, filter by category and condition, and sort by price or year
📋 Car Details: View full details for each car
✅ In-Cart Badge: Car cards show "✓ In Cart (n)" when a car is already in the cart
🛒 Shopping
🛒 Shopping Cart: Add and remove cars, change quantities, and see the total update live
❤️ Wishlist: Save cars you love and move them to the cart with one click
🔢 Navbar Counters: Live badges on Wishlist, Cart and History show how many items each one holds
🏷️ Promo Codes: Apply a promo code (try APEX20) for 20% off, with success/error messages
🧾 Price Summary: Subtotal, discount, delivery fee, and total, updated live
💳 Checkout
✅ Zod Validation: Shipping & payment form with a clear error under each field
💳 Card Type Detection: Shows a Visa, Mastercard, American Express or Discover badge as you type the card number (Amex: 15 digits + 4-digit CVV)
🌍 Country Code Picker with Flags: Choose your country from a dropdown with flag images
📱 Phone Validation per Country: The phone number is checked against the selected country's mobile format (e.g. Lebanon 70 123 456)
📅 Auto-formatted Expiry: Typing 0428 becomes 04/28
🎉 Order Confirmation: Order number, date, delivery address, payment method and total paid
📜 Order History
🧾 History Page: Every completed order is saved with its cars, address, payment method and total
💾 Saved Forever: Orders stay after a page refresh, newest first, with a Clear History option
ℹ️ About
🎥 Promo Video: An HD brand video made for Apex Motors
📊 Live Stats: Cars, brands and categories counted straight from the car data
👥 Meet the Team: Developer cards with photos and LinkedIn links
🌟 General
🧭 Navigation: Navbar and footer shared across all pages, and every page opens at the top
📱 Responsive Design: Looks great on desktop, tablet, and mobile
🖼️ Custom Favicon: The AM logo in the browser tab
💾 State Management: Cart, wishlist, orders and prices are shared across the app using React Context (ShopContext + ShopProvider), and saved in localStorage so they survive a page refresh
🛠️ Tech Stack
Tool	Purpose
⚛️ React	UI library
🟦 TypeScript	Type safety
🧭 React Router	Page navigation
✅ Zod	Checkout form validation
⚡ Vite	Fast dev server & build tool
🎨 CSS	Styling and animations
▲ Vercel	Hosting & automatic deployment
📁 Project Structure
public/                  # Favicon and app icons
src/
├── 📄 main.tsx          # App entry point
├── 📄 App.tsx           # Routes & layout
├── 📂 assets/           # Car photos, logo, flags, team photos, about video
├── 📂 components/       # Navbar, Footer, CarCard, Dropdown, CountryCodePicker, PromoCode...
├── 📂 pages/            # Home, Products, Product Details, Cart, Wishlist, Checkout, History, About
├── 📂 store/            # ShopContext.ts, ShopProvider.tsx
├── 📂 data/             # Cars, shop settings, countries, card types
├── 📂 types/            # Shared TypeScript types
└── 🎨 index.css         # Global styles
🚀 Getting Started

1️⃣ Clone the repo

bash
git clone https://github.com/alisalem-cs/Apex-Motors.git
cd Apex-Motors

2️⃣ Install dependencies

bash
npm install

3️⃣ Run the dev server

bash
npm run dev

4️⃣ Open 👉 http://localhost:5173 in your browser

5️⃣ Build for production (optional)

bash
npm run build

⚠️ Don't delete package-lock.json and regenerate it on Windows. Vercel builds on Linux and needs the lock file to list packages for every system.

👥 Team
Developer	Responsibilities
👨‍💻 Ali Salem	🚗 Homepage & Shared Layout · 🧭 Routing & Navigation · 🔗 Team Integration · 🤝 Git/GitHub Collaboration · 🧪 Application Testing
👨‍💻 Mohammad Al Hanafi	🔍 Product Search · 🏷️ Category & Condition Filters · ↕️ Product Sorting · 🚘 Car Cards · 📋 Product Details
👨‍💻 Mohannad Kaddoura	🛒 Cart page (quantity +/−, remove, clear cart) · ❤️ Wishlist page (move to cart, remove, clear) · 💳 Checkout form with ✅ Zod validation (auto-formatted card expiry, numbers-only phone/card/CVV) · 💳 Card type detection (Visa, Mastercard, Amex, Discover) · 🌍 Country-code picker with flags & per-country phone validation · 🎉 Order confirmation page · 📜 Order History page · 🔢 Navbar counters (Wishlist, Cart, History) · 🏷️ Promo code system (APEX20 = 20% off) · 🧾 Price summary (subtotal, discount, delivery fee, total) · 🧠 Shared state with React Context (ShopContext + ShopProvider) · 💾 Cart, wishlist & orders saved in localStorage · ℹ️ About page with promo video & team section · 🚘 Car data with real prices · 🎬 Cars page hero slideshow · 🖼️ Favicon · ▲ Vercel deployment
🖼️ Credits
Car photos from Wikimedia Commons (CC BY / CC BY-SA). Full list of authors in IMAGE-CREDITS.md
Country flags from flag-icons (MIT License)
🔮 Future Improvements
🔐 User authentication
💰 Real payment integration
🗄️ Backend & database for cars and orders
📧 Real order confirmation emails
📜 License

This project was built for educational purposes as part of a course. 🎓

<p align="center">Made with ❤️ and ☕ by the Apex Motors team 🏁</p>
