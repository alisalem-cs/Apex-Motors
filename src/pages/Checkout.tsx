import { useState } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useShop } from '../store/ShopContext';
import PriceSummary from '../components/PriceSummary';
import PromoCode from '../components/PromoCode';
import CountryCodePicker from '../components/CountryCodePicker';
import { COUNTRY_CODES } from '../data/countries';
import { getCardType } from '../data/cards';
import type { Order } from '../types';
import './Shop.css';

const checkoutSchema = z.object({
  fullName: z.string().trim().min(3, 'Full name must be at least 3 characters'),
  email: z.string().trim().email('Enter a valid email'),
  countryCode: z.string().min(1, 'Select a country code'),
  phone: z.string().regex(/^[0-9]{6,12}$/, 'Enter your phone number without the country code'),
  address: z.string().trim().min(5, 'Address must be at least 5 characters'),
  city: z.string().trim().min(2, 'Enter your city'),
  cardNumber: z.string().regex(/^[0-9]{15,16}$/, 'Card number must be 15 or 16 digits'),

  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Use MM/YY format (e.g. 04/27)')
    .refine((value) => Number(value.slice(3)) >= 26, 'Expiry year must be 2026 or later'),

  cvv: z.string().regex(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
});

type CheckoutFields = z.infer<typeof checkoutSchema>;

type FieldErrors = Partial<Record<keyof CheckoutFields, string>>;

const emptyForm: CheckoutFields = {
  fullName: '',
  email: '',
  countryCode: '+961',
  phone: '',
  address: '',
  city: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
};

function validate(form: CheckoutFields): FieldErrors {
  const result = checkoutSchema.safeParse(form);
  const errors: FieldErrors = {};

  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof CheckoutFields;

      if (!errors[field]) {
        errors[field] = issue.message;
      }
    }
  }

  const country = COUNTRY_CODES.find((c) => c.code === form.countryCode);

  if (!errors.phone && country && !country.pattern.test(form.phone)) {
    errors.phone = 'Enter a valid ' + country.country + ' mobile number, e.g. ' + country.example;
  }

  const cardType = getCardType(form.cardNumber);
  const isAmex = cardType === 'American Express';

  if (!errors.cardNumber) {
    if (cardType === '') {
      errors.cardNumber = 'We accept Visa, Mastercard, American Express and Discover';
    } else if (isAmex && form.cardNumber.length !== 15) {
      errors.cardNumber = 'American Express cards have 15 digits';
    } else if (!isAmex && form.cardNumber.length !== 16) {
      errors.cardNumber = cardType + ' cards have 16 digits';
    }
  }

  const cvvLength = isAmex ? 4 : 3;

  if (!errors.cvv && form.cvv.length !== cvvLength) {
    errors.cvv = 'CVV must be ' + cvvLength + ' digits';
  }

  return errors;
}

export default function Checkout() {
  const { cart, total, clearCart, addOrder } = useShop();

  const [form, setForm] = useState<CheckoutFields>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [order, setOrder] = useState<Order | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'phone' || name === 'cardNumber' || name === 'cvv') {
      value = value.replace(/\D/g, '');
    }

    if (name === 'expiry') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      value = digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
    }

    setForm({ ...form, [name]: value });
  }

  function handleCountryChange(code: string) {
    setForm({ ...form, countryCode: code });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const newOrder: Order = {
      id: 'AM-' + Math.floor(100000 + Math.random() * 900000),
      total: total,
      fullName: form.fullName,
      email: form.email,
      phone: form.countryCode + ' ' + form.phone,
      address: form.address + ', ' + form.city,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      paymentMethod: getCardType(form.cardNumber) + ' ending in ' + form.cardNumber.slice(-4),
      items: cart,
    };

    setOrder(newOrder);
    addOrder(newOrder);
    clearCart();
    setForm(emptyForm);
    window.scrollTo(0, 0);
  }

  function renderField(name: keyof CheckoutFields, label: string, placeholder: string, maxLength?: number) {
    return (
      <div className="checkout-field">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={errors[name] ? 'input-error' : ''}
        />
        {errors[name] && <p className="checkout-error">{errors[name]}</p>}
      </div>
    );
  }

  const selectedCountry = COUNTRY_CODES.find((c) => c.code === form.countryCode);
  const phonePlaceholder = selectedCountry ? selectedCountry.example : 'Phone number';
  const phoneMaxLength = selectedCountry ? selectedCountry.maxDigits : 12;

  const cardType = getCardType(form.cardNumber);
  const isAmex = cardType === 'American Express';

  if (order) {
    const firstName = order.fullName.split(' ')[0];

    return (
      <main className="shop-page">
        <div className="shop-container">
          <div className="shop-panel success-panel">
            <div className="success-icon">✓</div>
            <h1>Order Confirmed</h1>
            <p className="success-intro">
              Thank you, {firstName}. Your order has been placed successfully.
              A confirmation has been sent to <strong>{order.email}</strong>.
            </p>

            <div className="success-details">
              <div className="summary-row">
                <span>Order Number</span>
                <strong>{order.id}</strong>
              </div>
              <div className="summary-row">
                <span>Order Date</span>
                <strong>{order.date}</strong>
              </div>
              <div className="summary-row">
                <span>Delivery Address</span>
                <strong>{order.address}</strong>
              </div>
              <div className="summary-row">
                <span>Paid With</span>
                <strong>{order.paymentMethod}</strong>
              </div>
              <div className="summary-row summary-total">
                <span>Total Paid</span>
                <strong>${order.total.toLocaleString()}</strong>
              </div>
            </div>

            <p className="success-note">
              A member of our sales team will contact you at <strong>{order.phone}</strong> within
              24 hours to confirm your order and arrange delivery. Please keep your order number for reference.
            </p>

            <div className="success-actions">
              <Link to="/history" className="btn-primary">View Order History</Link>
              <Link to="/products" className="btn-secondary">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="shop-page">
        <section className="page-header">
          <h1>Checkout</h1>
          <p>Your cart is empty. Add a car before checking out.</p>
        </section>
        <div className="shop-container">
          <div className="shop-panel shop-empty">
            <p>Your cart is empty.</p>
            <Link to="/cart" className="btn-primary">Back to Cart</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="shop-page">
      <section className="page-header">
        <h1>Checkout</h1>
        <p>Enter your delivery details to place your order.</p>
      </section>

      <div className="shop-container">
        <div className="shop-toolbar">
          <Link to="/cart" className="section-link">Back to Cart</Link>
        </div>

        <div className="shop-layout">
          <form className="shop-panel checkout-form" onSubmit={handleSubmit} noValidate>
            <h2>Shipping Details</h2>
            {renderField('fullName', 'Full Name', 'John Smith')}
            {renderField('email', 'Email', 'john@example.com')}

            <div className="checkout-field">
              <label htmlFor="phone">Phone</label>
              <div className="phone-row">
                <CountryCodePicker value={form.countryCode} onChange={handleCountryChange} />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={phonePlaceholder}
                  maxLength={phoneMaxLength}
                  className={errors.phone ? 'input-error' : ''}
                />
              </div>
              {errors.phone && <p className="checkout-error">{errors.phone}</p>}
            </div>

            {renderField('address', 'Address', 'Street, building, floor')}
            {renderField('city', 'City', 'Beirut')}

            <h2>Payment</h2>
            <div className="checkout-field">
              <label htmlFor="cardNumber">Card Number</label>
              <div className="card-input">
                <input
                  id="cardNumber"
                  name="cardNumber"
                  inputMode="numeric"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="4242424242424242"
                  maxLength={16}
                  className={errors.cardNumber ? 'input-error' : ''}
                />
                {cardType !== '' && <span className={'card-badge ' + cardType.replace(' ', '-').toLowerCase()}>{cardType}</span>}
                {cardType === '' && form.cardNumber.length > 0 && <span className="card-badge unknown">Unknown card</span>}
              </div>
              {errors.cardNumber && <p className="checkout-error">{errors.cardNumber}</p>}
            </div>
            <div className="checkout-row">
              {renderField('expiry', 'Expiry', 'MM/YY', 5)}
              {renderField('cvv', 'CVV', isAmex ? '1234' : '123', isAmex ? 4 : 3)}
            </div>

            <button type="submit" className="btn-primary full">Place Order</button>
          </form>

          <aside className="shop-panel summary-panel">
            <h2>Order Summary</h2>

            {cart.map((item) => (
              <div className="checkout-item" key={item.car.id}>
                <img src={item.car.image} alt={item.car.name} />
                <div className="checkout-item-info">
                  <p>{item.car.name}</p>
                  <span>Qty: {item.quantity}</span>
                </div>
                <strong>${(item.car.price * item.quantity).toLocaleString()}</strong>
              </div>
            ))}

            <PriceSummary />

            <PromoCode />
          </aside>
        </div>
      </div>
    </main>
  );
}
