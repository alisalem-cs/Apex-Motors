import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../store/ShopContext';
import { cars, PROMO_CODE, PROMO_PERCENT } from '../data/products';
import CarCard from '../components/CarCard';
import PriceSummary from '../components/PriceSummary';
import './Cart.css';

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
    <div className="cart">
      <p className="cart-breadcrumb">Home &gt; <span>Cart</span></p>

      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <Link to="/wishlist" className="cart-wishlist-btn">♡ My Wishlist</Link>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.length === 0 && <p className="cart-empty">Your cart is empty.</p>}

          {cart.map((item) => (
            <div className="cart-item" key={item.car.id}>
              <img src={item.car.image} alt={item.car.model} />

              <div className="cart-item-info">
                <h3>{item.car.brand} {item.car.model}</h3>
                <p>{item.car.year} · {item.car.transmission} · {item.car.fuelType}</p>
                <p>{item.car.mileage.toLocaleString()} km · {item.car.horsepower} hp</p>
                <span className="cart-item-price">${item.car.price.toLocaleString()}</span>
              </div>

              <div className="cart-item-right">
                <button className="cart-remove" onClick={() => removeFromCart(item.car.id)} aria-label="Remove">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z" />
                  </svg>
                </button>

                <div className="cart-qty">
                  <button onClick={() => decreaseQty(item.car.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.car.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <PriceSummary />

          <div className="promo">
            <input
              type="text"
              placeholder="Add promo code"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
            />
            <button onClick={applyPromo}>Apply</button>
          </div>

          {promoMessage && (
            <p className={discountPercent > 0 ? 'promo-message promo-success' : 'promo-message promo-error'}>
              {promoMessage}
            </p>
          )}

          <button className="clear-btn" onClick={handleClear} disabled={cart.length === 0}>
            Clear Cart
          </button>

          <Link to="/checkout" className="checkout-btn">Go to Checkout →</Link>
        </div>
      </div>

      <h2 className="cars-title">Featured Cars</h2>
      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
