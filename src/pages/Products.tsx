
import { useState } from "react";
import { products } from "../data/products";
import CarCard from "../components/CarCard";
import ProductSearch from "../components/ProductSearch";
import ProductSort from "../components/ProductSort";
import ProductFilter from "../components/ProductFilter";
import "./Products.css";

function CarProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filterCondition, setFilterCondition] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter products by search, condition, and category
  const filteredProducts = products.filter((car) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      car.name.toLowerCase().includes(search) ||
      car.brand.toLowerCase().includes(search);

    const matchesCondition =
      filterCondition === "all" ||
      car.condition.toLowerCase() === filterCondition.toLowerCase();

    const matchesCategory =
      filterCategory === "all" ||
      car.category.toLowerCase() === filterCategory.toLowerCase();

    return matchesSearch && matchesCondition && matchesCategory;
  });

  // Sort products without modifying the original array
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return a.price - b.price;

      case "price-desc":
        return b.price - a.price;

      case "year-asc":
        return a.year - b.year;

      case "year-desc":
        return b.year - a.year;

      default:
        return 0;
    }
  });

  return (
    <div className="products-page">
      <section className="products-hero">
        <h1 className="Title-H1">Explore Our Cars</h1>
        <p>Discover excellence. Drive your dream.</p>
      </section>

      <div className="products-controls">
        <ProductSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <ProductSort
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <ProductFilter
          filterCondition={filterCondition}
          onFilterChange={setFilterCondition}
          filterCategory={filterCategory}
          onCategoryChange={setFilterCategory}
        />
      </div>

      <section className="products-container">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p className="no-products">
            No cars match your search.
          </p>
        )}
      </section>
    </div>
  );
}

export default CarProducts;
