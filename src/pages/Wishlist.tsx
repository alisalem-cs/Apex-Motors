import { Link } from 'react-router-dom';
import { useShop } from '../store/ShopContext';
import type { CarProduct } from '../types';
import '../components/CarCard.css';
import './Shop.css';

export default function Wishlist() {
  const { wishlist, addToCart, removeFromWishlist, clearWishlist } = useShop();

  function moveToCart(car: CarProduct) {
    addToCart(car);
    removeFromWishlist(car.id);
  }

  return (
    <main className="shop-page">
      <section className="page-header">
        <h1>Your Wishlist</h1>
        <p>The cars you saved for later. Move them to your cart when you're ready.</p>
      </section>

      <div className="shop-container">
        <div className="shop-toolbar">
          {wishlist.length > 0 && (
            <span className="shop-count">
              {wishlist.length} {wishlist.length === 1 ? 'car' : 'cars'} saved
            </span>
          )}
          <Link to="/cart" className="section-link">My Cart</Link>
        </div>

        {wishlist.length === 0 && (
          <div className="shop-panel shop-empty">
            <p>Your wishlist is empty.</p>
            <Link to="/products" className="btn-primary">Browse Cars</Link>
          </div>
        )}

        <div className="wishlist-grid">
          {wishlist.map((car) => (
            <div className="car-card" key={car.id}>
              <img src={car.image} alt={car.name} className="car-image" />
              <div className="car-info">
                <h2 className="car-name">{car.name}</h2>
                <p className="car-price">${car.price.toLocaleString('en-US')}</p>

                <div className="car-details">
                  <p>Year: {car.year}</p>
                  <p>Category: {car.category}</p>
                  <p>Condition: {car.condition}</p>
                  <p>Color: {car.color}</p>
                </div>

                <div className="car-buttons">
                  <button className="see-details-button" onClick={() => moveToCart(car)}>Move to Cart</button>
                  <button
                    className="add-to-cart-button"
                    onClick={() => removeFromWishlist(car.id)}
                    aria-label={'Remove ' + car.name + ' from wishlist'}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {wishlist.length > 0 && (
          <div className="shop-bottom">
            <button className="clear-btn" onClick={clearWishlist}>Clear Wishlist</button>
          </div>
        )}
      </div>
    </main>
  );
}
