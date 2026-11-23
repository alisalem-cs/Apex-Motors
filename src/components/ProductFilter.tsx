
import "./ProductFilter.css";

interface ProductFilterProps {
  filterCondition: string;
  onFilterChange: (value: string) => void;
  filterCategory: string;
  onCategoryChange: (value: string) => void;
}

function ProductFilter({
  filterCondition,
  onFilterChange,
  filterCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="product-filter">
      {/* Condition Filter */}
      <select
        value={filterCondition}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All Conditions</option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>

      {/* Category Filter */}
      <select
        value={filterCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="sedan">Sedan</option>
        <option value="luxury">Luxury</option>
        <option value="suv">SUV</option>
        <option value="sports">Sports</option>
        <option value="pickup">Pickup</option>
        <option value="hypercar">Hypercar</option>
      </select>
    </div>
  );
}

export default ProductFilter;
