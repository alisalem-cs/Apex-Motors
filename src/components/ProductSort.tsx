import "./ProductSort.css";
interface ProductSortProps {
  sortOrder: string;
  onSortChange: (value: string) => void;
}

function ProductSort({ sortOrder, onSortChange }: ProductSortProps) {
  return (
<select className="product-sort" value={sortOrder} onChange={(e) => onSortChange(e.target.value)} >
<option value="default">🔄 Default</option>    
<option value="price-asc">🔻 Price: Low to High</option>
<option value="price-desc">🔺 Price: High to Low</option>
<option value="year-asc">📅 Year: Oldest to Newest</option>
<option value="year-desc">📅 Year: Newest to Oldest</option>


</select> 







)

        }


export default ProductSort;        