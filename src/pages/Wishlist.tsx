import './Wishlist.css';
import { useWishlist, removeFromWishlist, clearWishlist } from '../store/wishlistStore';
import { addToCart } from '../store/cartStore';
import type { Car } from '../types';

function moveToCart(car: Car) {
    addToCart(car);
    removeFromWishlist(car.id);
}

export default function Wishlist() {
    const wishlist = useWishlist();

    return (
        <div className="wishlist">
            <p className="wishlist-breadcrumb">Home &gt; <span>Wishlist</span></p>
            <div className="wishlist-header">
                <h1 className="wishlist-title">Your Wishlist</h1>
                <a href="/cart" className="wishlist-cart-link">🛒 My Cart</a>
            </div>

            {wishlist.length > 0 && (
                <div className="wishlist-toolbar">
                    <span className="wishlist-count">
                        {wishlist.length} {wishlist.length === 1 ? 'car' : 'cars'} saved
                    </span>
                    <button className="wishlist-clear-btn" onClick={clearWishlist}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z" />
                        </svg>
                        Clear Wishlist
                    </button>
                </div>
            )}

            {wishlist.length === 0 && (
                <div className="wishlist-empty">
                    <p>Your wishlist is empty.</p>
                    <a href="/cart" className="wishlist-browse-btn">Browse Cars</a>
                </div>
            )}

            <div className="wishlist-grid">
                {wishlist.map((car) => (
                    <div className="wishlist-card" key={car.id}>
                        <img src={car.image} alt={car.model} />
                        <div className="wishlist-card-body">
                            <h3>{car.brand} {car.model}</h3>
                            <p>Year: {car.year}</p>
                            <span className="wishlist-price">${car.price.toLocaleString()}</span>

                            <div className="wishlist-actions">
                                <button className="wishlist-cart-btn" onClick={() => moveToCart(car)}>Move to Cart</button>
                                <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(car.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
