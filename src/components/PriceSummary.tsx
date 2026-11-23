import { useShop } from '../store/ShopContext';

export default function PriceSummary() {
  const { subtotal, discountPercent, discount, delivery, total } = useShop();

  return (
    <>
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>${subtotal.toLocaleString()}</strong>
      </div>

      {discountPercent > 0 && (
        <div className="summary-row">
          <span>Discount (-{discountPercent}%)</span>
          <strong className="summary-discount">-${discount.toLocaleString()}</strong>
        </div>
      )}

      <div className="summary-row">
        <span>Delivery Fee</span>
        <strong>${delivery.toLocaleString()}</strong>
      </div>

      <div className="summary-row summary-total">
        <span>Total</span>
        <strong>${total.toLocaleString()}</strong>
      </div>
    </>
  );
}
