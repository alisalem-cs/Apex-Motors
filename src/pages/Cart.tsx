import { useState } from 'react';
import './Cart.css';
import { useCart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, getTotalPrice, getDiscount, setDiscount } from '../store/cartStore';
import type { Car } from '../types';
import { useWishlist, toggleWishlist } from '../store/wishlistStore';

// Cars shown on the page (test data: replace with products.ts later)
const cars: Car[] = [
    {
        id: '1',
        brand: 'BMW',
        model: 'M3',
        year: 1997,
        price: 35000,
        image: 'https://images.unsplash.com/photo-1597179936660-997716239a32?w=800&h=533&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&q=80',
        description: 'Classic E36 M3 with a high-revving straight-six.',
        category: 'Coupe',
        mileage: 145000,
        fuelType: 'Petrol',
        transmission: 'Manual',
        horsepower: 321,
        featured: true,
    },
    {
        id: '2',
        brand: 'Audi',
        model: 'RS5',
        year: 2023,
        price: 65000,
        image: 'https://images.unsplash.com/photo-1654356039223-9c876dd5b587?w=800&h=533&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6&q=80',
        description: 'Twin-turbo V6 coupe with quattro all-wheel drive.',
        category: 'Coupe',
        mileage: 12000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        horsepower: 444,
        featured: true,
    },
    {
        id: '3',
        brand: 'Mercedes',
        model: 'AMG GT',
        year: 2021,
        price: 160000,
        image: 'https://images.unsplash.com/photo-1617814065893-00757125efab?w=800&h=533&fit=crop&q=80',
        description: 'Front-engine V8 sports car built by AMG.',
        category: 'Sports',
        mileage: 8000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        horsepower: 577,
        featured: true,
    },
    {
        id: '4',
        brand: 'Porsche',
        model: '911',
        year: 1996,
        price: 110000,
        image: 'https://images.unsplash.com/photo-1774740768897-6a0b09dd05bb?w=800&h=533&fit=crop&q=80',
        description: 'Air-cooled 993 generation 911 Carrera.',
        category: 'Sports',
        mileage: 98000,
        fuelType: 'Petrol',
        transmission: 'Manual',
        horsepower: 282,
        featured: true,
    },
];

const DELIVERY_FEE = 500;
const PROMO_CODE = 'APEX20'; // gives 20% off

// True only when the user pressed refresh (not when arriving from a link)
function pageWasRefreshed() {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    return nav?.type === 'reload';
}

export default function Cart() {
    const cart = useCart();
    const wishlist = useWishlist();
    const [promoInput, setPromoInput] = useState('');
    const [promoMessage, setPromoMessage] = useState(() => {
        // Refreshing the Cart page removes the promo code
        if (pageWasRefreshed()) setDiscount(0);
        return getDiscount() > 0 ? 'Promo code applied!' : '';
    });
    const discountPercent = getDiscount();

    const subtotal = getTotalPrice();
    const discount = Math.round(subtotal * discountPercent / 100);
    const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
    const total = subtotal - discount + delivery;

    function applyPromo() {
        if (promoInput.trim().toUpperCase() === PROMO_CODE) {
            setDiscount(20);
            setPromoMessage('Promo code applied!');
        } else {
            setDiscount(0);
            setPromoMessage('Invalid promo code.');
        }
    }

    function handleClear() {
        clearCart();
        setPromoInput('');
        setPromoMessage('');
    }

    function inWishlist(id: string) {
        return wishlist.some((car) => car.id === id);
    }

    return (
        <div className="cart">
            <p className="cart-breadcrumb">Home &gt; <span>Cart</span></p>
            <div className="cart-header">
                <h1 className="cart-title">Your Cart</h1>
                <a href="/wishlist" className="cart-wishlist-btn">♡ My Wishlist</a>
            </div>

            <div className="cart-layout">
                {/* Left: cart items */}
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

                {/* Right: order summary */}
                <div className="cart-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <strong>${subtotal.toLocaleString()}</strong>
                    </div>

                    {discountPercent > 0 && (
                        <div className="summary-row">
                            <span>Discount (-{discountPercent}%)</span>
                            <strong className="summary-discount">-${discount.toLocaleString()}</strong>
                        </div>
                    )}

                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <strong>${delivery.toLocaleString()}</strong>
                    </div>

                    <div className="summary-row summary-total">
                        <span>Total</span>
                        <strong>${total.toLocaleString()}</strong>
                    </div>

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

                    <button className="clear-btn" onClick={handleClear} disabled={cart.length === 0}>Clear Cart</button>

                    <a href="/checkout" className="checkout-btn">Go to Checkout →</a>
                </div>
            </div>

            {/* Cars to add */}
            <h2 className="cars-title">Featured Cars</h2>
            <div className="cars-grid">
                {cars.map((car) => (
                    <div className="car-card" key={car.id}>
                        <img src={car.image} alt={car.brand + ' ' + car.model} />
                        <div className="car-card-body">
                            <h3>{car.brand} {car.model}</h3>
                            <p>{car.year} · {car.category} · {car.horsepower} hp</p>
                            <p>{car.description}</p>
                            <span className="car-card-price">${car.price.toLocaleString()}</span>

                            <button className="car-cart-btn" onClick={() => addToCart(car)}>Add to Cart</button>
                            <button
                                className={inWishlist(car.id) ? 'car-wish-btn active' : 'car-wish-btn'}
                                onClick={() => toggleWishlist(car)}
                            >
                                {inWishlist(car.id) ? '♥ In Wishlist' : '♡ Add to Wishlist'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
