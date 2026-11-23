import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../store/ShopContext';
import { PROMO_CODE, PROMO_PERCENT } from '../data/shop';
import PriceSummary from '../components/PriceSummary';
import './Shop.css';

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart, discountPercent, setDiscountPercent } = useShop();

  const [promoInput, setPromoInput] = useState('');

  const [promoMessage, setPromoMessage] = useState(discountPercent > 0 ? 'Promo code applied!' : '');

  function applyPromo() {
    if (promoInput.trim().toUpperCase() === PROMO_CODE) {
      setDiscountPercent(PROMO_PERCENT);
      setPromoMessage('Promo code applied!');
    } else {
      setDiscountPercent(0);
      setPromoMessage('Invalid promo code.');
    }
  }

  function handleClear() {
    clearCart();
    setPromoInput('');
    setPromoMessage('');
  }

  return (
    <main className="shop-page">
      <section className="page-header">
        <h1>Your Cart</h1>
        <p>Review your cars, apply a promo code and continue to checkout.</p>
      </section>

      <div className="shop-container">
        <div className="shop-toolbar">
          <Link to="/wishlist" className="section-link">♡ My Wishlist</Link>
        </div>

        <div className="shop-layout">
          <div className="shop-panel">
            {cart.length === 0 && (
              <div className="shop-empty">
                <p>Your cart is empty.</p>
                <Link to="/products" className="btn-primary">Browse Cars</Link>
              </div>
            )}

            {cart.map((item) => (
              <div className="cart-row" key={item.car.id}>
                <img src={item.car.image} alt={item.car.name} />

                <div className="cart-row-info">
                  <h3>{item.car.name}</h3>
                  <p>{item.car.year} · {item.car.transmission} · {item.car.fuelType}</p>
                  <p>{item.car.mileage.toLocaleString()} km · {item.car.color} · {item.car.condition}</p>
                  <span className="cart-row-price">${item.car.price.toLocaleString()}</span>
                </div>

                <div className="cart-row-actions">
                  <button
                    className="icon-btn"
                    onClick={() => removeFromCart(item.car.id)}
                    aria-label={'Remove ' + item.car.name + ' from cart'}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z" />
                    </svg>
                  </button>

                  <div className="qty">
                    <button onClick={() => decreaseQty(item.car.id)} aria-label={'Decrease quantity for ' + item.car.name}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.car.id)} aria-label={'Increase quantity for ' + item.car.name}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="shop-panel summary-panel">
            <h2>Order Summary</h2>

            <PriceSummary />

            <div className="promo">
              <input
                type="text"
                placeholder="Promo code"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                aria-label="Promo code"
              />
              <button className="btn-secondary" onClick={applyPromo}>Apply</button>
            </div>

            {promoMessage && (
              <p className={discountPercent > 0 ? 'promo-message success' : 'promo-message error'}>
                {promoMessage}
              </p>
            )}

            {cart.length > 0 && (
              <Link to="/checkout" className="btn-primary full">Go to Checkout →</Link>
            )}

            <button className="clear-btn" onClick={handleClear} disabled={cart.length === 0}>
              Clear Cart
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
