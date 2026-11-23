import type { CarProduct } from "../types";
import { useNavigate } from "react-router-dom";
import "./CarCard.css";
import { useState } from "react";
interface CarCardProps {
    car: CarProduct;
};

function CarCard({ car }: CarCardProps) {

    const [isWishlisted, setIsWishlisted] = useState(false);
    const navigate = useNavigate();

return (
  <div className="car-card">
    <img src={car.image} alt={car.name} className="car-image" />

    <div className="car-info">
      <h2 className="car-name">{car.name}</h2>

      <p className="car-price">Price: ${car.price}</p>

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
  className="add-to-wishlist-button"
  onClick={() => setIsWishlisted((prev) => !prev)}
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