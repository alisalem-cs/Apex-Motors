
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { addToCart } from "../store/cartStore";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isAdded, setIsAdded] = useState(false);

  const car = products.find((product) => String(product.id) === id);

  if (!car) {
    return (
      <main className="product-details-page">
        <div className="details-container">
          <h1>Car Not Found</h1>
          <Link to="/products" className="back-to-products">
            Back to Cars
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <div className="details-container">

        <div className="details-image-section">
          <img
            src={car.image}
            alt={car.name}
            className="details-main-image"
          />
        </div>

        <div className="details-info-section">
          <p className="details-brand">{car.brand}</p>

          <h1 className="details-title">{car.name}</h1>

          <p className="details-price">
            ${car.price.toLocaleString("en-US")}
          </p>

          <div className="details-divider"></div>

          <h2 className="specifications-title">
            Vehicle Specifications
          </h2>

          <div className="specifications-grid">

            <div className="specification-item">
              <span>Year</span>
              <strong>{car.year}</strong>
            </div>

            <div className="specification-item">
              <span>Mileage</span>
              <strong>{car.mileage.toLocaleString("en-US")} miles</strong>
            </div>

            <div className="specification-item">
              <span>Fuel Type</span>
              <strong>{car.fuelType}</strong>
            </div>

            <div className="specification-item">
              <span>Category</span>
              <strong>{car.category}</strong>
            </div>

            <div className="specification-item">
              <span>Transmission</span>
              <strong>{car.transmission}</strong>
            </div>

            <div className="specification-item">
              <span>Condition</span>
              <strong>{car.condition}</strong>
            </div>

            <div className="specification-item">
              <span>Color</span>
              <strong>{car.color}</strong>
            </div>

          </div>

          <div className="details-buttons">

            <button
              className="details-buy-button"
              onClick={() => navigate("/checkout")}
            >
              Buy Now
            </button>

            <button
            className="details-cart-button"onClick={() => {addToCart(car);setIsAdded(true);}}>
            {isAdded ? "Added to Cart ✓" : "Add to Cart"}
            </button>

          </div>

          <Link to="/products" className="back-to-products">
            ← Back to Cars
          </Link>

        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
