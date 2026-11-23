import { useState } from 'react';
import { useShop } from '../store/ShopContext';
import { PROMO_CODE, PROMO_PERCENT } from '../data/shop';

export default function PromoCode() {
  const { discountPercent, setDiscountPercent } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [showError, setShowError] = useState(false);

  function applyPromo() {
    if (promoInput.trim().toUpperCase() === PROMO_CODE) {
      setDiscountPercent(PROMO_PERCENT);
      setShowError(false);
    } else {
      setDiscountPercent(0);
      setShowError(true);
    }
  }

  return (
    <>
      <div className="promo">
        <input
          type="text"
          placeholder="Promo code"
          value={promoInput}
          onChange={(e) => setPromoInput(e.target.value)}
          aria-label="Promo code"
        />
        <button type="button" className="btn-secondary" onClick={applyPromo}>Apply</button>
      </div>

      {discountPercent > 0 && <p className="promo-message success">Promo code applied!</p>}
      {showError && <p className="promo-message error">Invalid promo code.</p>}
    </>
  );
}
