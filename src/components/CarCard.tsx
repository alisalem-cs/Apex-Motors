import { useState } from 'react';
import { useShop } from '../store/ShopContext';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const saved = isInWishlist(car.id);

  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addToCart(car);
    setJustAdded(true);

    setTimeout(() => setJustAdded(false), 1000);
  }

  return (
    <div className="car-card">
      <img src={car.image} alt={car.brand + ' ' + car.model} />

      <div className="car-card-body">
        <h3>{car.brand} {car.model}</h3>
        <p>{car.year} · {car.category} · {car.horsepower} hp</p>
        <p>{car.description}</p>
        <span className="car-card-price">${car.price.toLocaleString()}</span>

        <button className={justAdded ? 'car-cart-btn added' : 'car-cart-btn'} onClick={handleAddToCart}>
          {justAdded ? '✓ Added to Cart' : 'Add to Cart'}
        </button>

        <button
          className={saved ? 'car-wish-btn active' : 'car-wish-btn'}
          onClick={() => toggleWishlist(car)}
        >
          {saved ? '♥ In Wishlist' : '♡ Add to Wishlist'}
        </button>
      </div>
    </div>
  );
}
