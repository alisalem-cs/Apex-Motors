import type { CarProduct } from "../types";
import { useNavigate } from "react-router-dom";
import "./CarCard.css";
import { useState } from "react";
import { useShop } from "../store/ShopContext";
interface CarCardProps {
    car: CarProduct;
};

function CarCard({ car }: CarCardProps) {

    const navigate = useNavigate();
    const { cart, addToCart, toggleWishlist, isInWishlist } = useShop();
    const isWishlisted = isInWishlist(car.id);
    const cartItem = cart.find((item) => item.car.id === car.id);

    const [justAdded, setJustAdded] = useState(false);

    function handleAddToCart() {
        addToCart(car);
        setJustAdded(true);

        setTimeout(() => setJustAdded(false), 1000);
    }

return (
  <div className="car-card">
    <img src={car.image} alt={car.name} className="car-image" />

    {cartItem && (
      <span className="in-cart-badge">✓ In Cart ({cartItem.quantity})</span>
    )}

    <div className="car-info">
      <h2 className="car-name">{car.name}</h2>

      <p className="car-price">${car.price.toLocaleString("en-US")}</p>

      <div className="car-details">
  <p>Year: {car.year}</p>
  <p>Category: {car.category}</p>
  
  
  
  <p>Condition: {car.condition}</p>

</div>

      <div className="car-buttons">
        <button
  className="see-details-button"
  onClick={() => navigate(`/products/${car.id}`)}
>
  See Details
</button>

        <button
  className={justAdded ? "add-to-cart-button added" : "add-to-cart-button"}
  onClick={handleAddToCart}
  aria-label={"Add " + car.name + " to cart"}
>
  {justAdded ? "✓ Added" : "Add to Cart"}
</button>

     <button
  className={isWishlisted ? "add-to-wishlist-button wishlisted" : "add-to-wishlist-button"}
  onClick={() => toggleWishlist(car)}
>
  <span className="wishlist-heart">
    {isWishlisted ? "♥" : "♡"}
  </span>

  {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
</button>




        
      </div>
    </div>
  </div>
);

}


export default CarCard;