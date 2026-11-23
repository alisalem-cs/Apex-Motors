import Dropdown from "./Dropdown";
import "./ProductFilter.css";

interface ProductFilterProps {
  filterCondition: string;
  onFilterChange: (value: string) => void;
  filterCategory: string;
  onCategoryChange: (value: string) => void;
}

const conditionOptions = [
  { value: "all", label: "All Conditions" },
  { value: "new", label: "New" },
  { value: "used", label: "Used" },
];

const categoryOptions = [
  { value: "all", label: "All Categories" },
  { value: "sedan", label: "Sedan" },
  { value: "luxury", label: "Luxury" },
  { value: "suv", label: "SUV" },
  { value: "sports", label: "Sports" },
  { value: "supercar", label: "Supercar" },
  { value: "electric", label: "Electric" },
  { value: "pickup", label: "Pickup" },
  { value: "hypercar", label: "Hypercar" },
];

function ProductFilter({
  filterCondition,
  onFilterChange,
  filterCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="product-filter">
      <Dropdown label="Filter by condition" value={filterCondition} options={conditionOptions} onChange={onFilterChange} />
      <Dropdown label="Filter by category" value={filterCategory} options={categoryOptions} onChange={onCategoryChange} />
    </div>
  );
}

export default ProductFilter;
