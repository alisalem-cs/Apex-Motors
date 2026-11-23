import { useState } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useShop } from '../store/ShopContext';
import PriceSummary from '../components/PriceSummary';
import type { Order } from '../types';
import './Checkout.css';

const COUNTRY_CODES = [
  { code: '+961', country: 'Lebanon', example: '70123456' },
  { code: '+971', country: 'UAE', example: '501234567' },
  { code: '+966', country: 'Saudi Arabia', example: '512345678' },
  { code: '+974', country: 'Qatar', example: '33123456' },
  { code: '+965', country: 'Kuwait', example: '50012345' },
  { code: '+962', country: 'Jordan', example: '791234567' },
  { code: '+20', country: 'Egypt', example: '1001234567' },
  { code: '+90', country: 'Turkey', example: '5321234567' },
  { code: '+33', country: 'France', example: '612345678' },
  { code: '+49', country: 'Germany', example: '15123456789' },
  { code: '+44', country: 'UK', example: '7400123456' },
  { code: '+1', country: 'USA / Canada', example: '2015550123' },
];

const checkoutSchema = z.object({
  fullName: z.string().trim().min(3, 'Full name must be at least 3 characters'),
  email: z.string().trim().email('Enter a valid email'),
  countryCode: z.string().min(1, 'Select a country code'),
  phone: z.string().regex(/^[0-9]{6,12}$/, 'Enter a valid phone number (6 to 12 digits, no country code)'),
  address: z.string().trim().min(5, 'Address must be at least 5 characters'),
  city: z.string().trim().min(2, 'Enter your city'),
  cardNumber: z.string().regex(/^[0-9]{16}$/, 'Card number must be 16 digits'),

  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Use MM/YY format (e.g. 04/27)')
    .refine((value) => Number(value.slice(3)) >= 26, 'Expiry year must be 2026 or later'),

  cvv: z.string().regex(/^[0-9]{3}$/, 'CVV must be 3 digits'),
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

  return errors;
}

export default function Checkout() {
  const { cart, total, clearCart } = useShop();

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setOrder({
      id: 'AM-' + Math.floor(100000 + Math.random() * 900000),
      total: total,
      fullName: form.fullName,
      email: form.email,
      phone: form.countryCode + ' ' + form.phone,
      address: form.address + ', ' + form.city,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    });

    clearCart();
    setForm(emptyForm);
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

  if (order) {
    const firstName = order.fullName.split(' ')[0];

    return (
      <div className="checkout">
        <div className="checkout-success">
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
            <div className="summary-row summary-total">
              <span>Total Paid</span>
              <strong>${order.total.toLocaleString()}</strong>
            </div>
          </div>

          <p className="success-note">
            A member of our sales team will contact you at <strong>{order.phone}</strong> within
            24 hours to confirm your order and arrange delivery. Please keep your order number for reference.
          </p>

          <Link to="/cart" className="checkout-btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-empty">Your cart is empty.</p>
        <Link to="/cart" className="checkout-btn checkout-btn-small">Back to Cart</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <p className="checkout-breadcrumb">Home &gt; Cart &gt; <span>Checkout</span></p>

      <div className="checkout-header">
        <h1 className="checkout-title">Checkout</h1>
        <Link to="/cart" className="checkout-back-btn">← Back to Cart</Link>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <h2>Shipping Details</h2>
          {renderField('fullName', 'Full Name', 'John Smith')}
          {renderField('email', 'Email', 'john@example.com')}

          <div className="checkout-field">
            <label htmlFor="phone">Phone</label>
            <div className="phone-row">
              <select name="countryCode" aria-label="Country code" value={form.countryCode} onChange={handleChange}>
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.country} ({c.code})
                  </option>
                ))}
              </select>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={form.phone}
                onChange={handleChange}
                placeholder={phonePlaceholder}
                maxLength={12}
                className={errors.phone ? 'input-error' : ''}
              />
            </div>
            {errors.phone && <p className="checkout-error">{errors.phone}</p>}
          </div>

          {renderField('address', 'Address', 'Street, building, floor')}
          {renderField('city', 'City', 'Beirut')}

          <h2>Payment</h2>
          {renderField('cardNumber', 'Card Number', '4242424242424242', 16)}
          <div className="checkout-row">
            {renderField('expiry', 'Expiry', 'MM/YY', 5)}
            {renderField('cvv', 'CVV', '123', 3)}
          </div>

          <button type="submit" className="checkout-btn">Place Order</button>
        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={item.car.id}>
              <img src={item.car.image} alt={item.car.model} />
              <div className="checkout-item-info">
                <p>{item.car.brand} {item.car.model}</p>
                <span>Qty: {item.quantity}</span>
              </div>
              <strong>${(item.car.price * item.quantity).toLocaleString()}</strong>
            </div>
          ))}

          <PriceSummary />
        </div>
      </div>
    </div>
  );
}
