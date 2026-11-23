import Dropdown from "./Dropdown";
import "./ProductSort.css";

interface ProductSortProps {
  sortOrder: string;
  onSortChange: (value: string) => void;
}

const sortOptions = [
  { value: "default", label: "🔄 Default" },
  { value: "price-asc", label: "🔻 Price: Low to High" },
  { value: "price-desc", label: "🔺 Price: High to Low" },
  { value: "year-asc", label: "📅 Year: Oldest to Newest" },
  { value: "year-desc", label: "📅 Year: Newest to Oldest" },
];

function ProductSort({ sortOrder, onSortChange }: ProductSortProps) {
  return (
    <div className="product-sort">
      <Dropdown label="Sort cars" value={sortOrder} options={sortOptions} onChange={onSortChange} />
    </div>
  );
}

export default ProductSort;
