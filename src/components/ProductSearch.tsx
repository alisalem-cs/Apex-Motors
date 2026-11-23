
import "./ProductSearch.css";

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function ProductSearch({searchTerm, onSearchChange,}: ProductSearchProps) {
  

  return (
    <div className="product-search">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search by car name or brand..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      {searchTerm && (
        <button
          className="clear-search"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default ProductSearch;
