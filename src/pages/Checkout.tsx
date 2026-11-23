import { useState } from 'react';
import { z } from 'zod';
import './Checkout.css';
import { useCart, getTotalPrice, clearCart, getDiscount } from '../store/cartStore';
import type { Order } from '../types';

const DELIVERY_FEE = 500;

// Country codes the user can pick, with an example local number for the placeholder
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

// Zod rules for the checkout form
const checkoutSchema = z.object({
    fullName: z.string().trim().min(3, 'Full name must be at least 3 characters'),
    email: z.string().trim().email('Enter a valid email'),
    countryCode: z.string().min(1, 'Select a country code'),
    phone: z.string().trim().regex(/^[0-9]{6,12}$/, 'Enter a valid phone number (6 to 12 digits, no country code)'),
    address: z.string().trim().min(5, 'Address must be at least 5 characters'),
    city: z.string().trim().min(2, 'Enter your city'),
    cardNumber: z.string().regex(/^[0-9]{16}$/, 'Card number must be 16 digits'),
    expiry: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Use MM/YY format (e.g. 04/27)')
        .refine((value) => Number(value.slice(3)) >= 26, 'Expiry year must be 2026 or later'),
    cvv: z.string().regex(/^[0-9]{3}$/, 'CVV must be 3 digits'),
});

// All form fields (shipping + demo payment). Named differently from the shared CheckoutForm type.
type CheckoutFormData = z.infer<typeof checkoutSchema>;

const emptyForm: CheckoutFormData = {
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

export default function Checkout() {
    const cart = useCart();
    const [form, setForm] = useState<CheckoutFormData>(emptyForm);
    const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
    const [order, setOrder] = useState<Order | null>(null);

    const subtotal = getTotalPrice();
    const discountPercent = getDiscount();
    const discount = Math.round(subtotal * discountPercent / 100);
    const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
    const total = subtotal - discount + delivery;

    // Update one field as the user types
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name } = e.target;
        let value = e.target.value;

        // Expiry: keep only 4 digits and add the "/" automatically (0427 -> 04/27)
        if (name === 'expiry') {
            const digits = value.replace(/\D/g, '').slice(0, 4);
            value = digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
        }

        // Phone: digits only
        if (name === 'phone') {
            value = value.replace(/\D/g, '');
        }

        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const result = checkoutSchema.safeParse(form);

        if (!result.success) {
            // Turn Zod's issues into { fieldName: message }
            const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof CheckoutFormData;
                if (!newErrors[field]) newErrors[field] = issue.message;
            });
            setErrors(newErrors);
            return;
        }

        // Mock order: no real payment happens
        setErrors({});
        setOrder({
            id: 'AM-' + Math.floor(100000 + Math.random() * 900000),
            items: cart,
            total: total,
            customer: {
                fullName: result.data.fullName,
                email: result.data.email,
                phone: result.data.countryCode + ' ' + result.data.phone,
                address: result.data.address + ', ' + result.data.city,
            },
            createdAt: new Date().toISOString(),
        });
        clearCart();
        setForm(emptyForm);
    }

    // Small helper to draw one input with its error message
    function field(name: keyof CheckoutFormData, label: string, placeholder: string, maxLength?: number) {
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

    // After placing the order
    if (order) {
        return (
            <div className="checkout">
                <div className="checkout-success">
                    <div className="success-icon">✓</div>
                    <h1>Order Confirmed</h1>
                    <p className="success-intro">
                        Thank you, {order.customer.fullName.split(' ')[0]}. Your order has been placed successfully.
                        A confirmation has been sent to <strong>{order.customer.email}</strong>.
                    </p>

                    <div className="success-details">
                        <div className="summary-row">
                            <span>Order Number</span>
                            <strong>{order.id}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Order Date</span>
                            <strong>{new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Delivery Address</span>
                            <strong>{order.customer.address}</strong>
                        </div>
                        <div className="summary-row summary-total">
                            <span>Total Paid</span>
                            <strong>${order.total.toLocaleString()}</strong>
                        </div>
                    </div>

                    <p className="success-note">
                        A member of our sales team will contact you at <strong>{order.customer.phone}</strong> within
                        24 hours to confirm your order and arrange delivery. Please keep your order number for reference.
                    </p>

                    <a href="/" className="checkout-btn">Continue Shopping</a>
                </div>
            </div>
        );
    }

    // Nothing to check out
    if (cart.length === 0) {
        return (
            <div className="checkout">
                <h1 className="checkout-title">Checkout</h1>
                <p className="checkout-empty">Your cart is empty.</p>
                <a href="/cart" className="checkout-btn checkout-btn-small">Back to Cart</a>
            </div>
        );
    }

    return (
        <div className="checkout">
            <p className="checkout-breadcrumb">Home &gt; Cart &gt; <span>Checkout</span></p>
            <div className="checkout-header">
                <h1 className="checkout-title">Checkout</h1>
                <a href="/cart" className="checkout-back-btn">← Back to Cart</a>
            </div>

            <div className="checkout-layout">
                {/* Left: form */}
                <form className="checkout-form" onSubmit={handleSubmit} noValidate>
                    <h2>Shipping Details</h2>
                    {field('fullName', 'Full Name', 'John Smith')}
                    {field('email', 'Email', 'john@example.com')}
                    <div className="checkout-field">
                        <label htmlFor="phone">Phone</label>
                        <div className="phone-row">
                            <select
                                name="countryCode"
                                aria-label="Country code"
                                value={form.countryCode}
                                onChange={handleChange}
                                className={errors.countryCode ? 'input-error' : ''}
                            >
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
                                placeholder={COUNTRY_CODES.find((c) => c.code === form.countryCode)?.example ?? 'Phone number'}
                                maxLength={12}
                                className={errors.phone ? 'input-error' : ''}
                            />
                        </div>
                        {(errors.countryCode || errors.phone) && (
                            <p className="checkout-error">{errors.countryCode || errors.phone}</p>
                        )}
                    </div>
                    {field('address', 'Address', 'Street, building, floor')}
                    {field('city', 'City', 'Beirut')}

                    <h2>Payment</h2>
                    {field('cardNumber', 'Card Number', '4242424242424242', 16)}
                    <div className="checkout-row">
                        {field('expiry', 'Expiry', 'MM/YY', 5)}
                        {field('cvv', 'CVV', '123', 3)}
                    </div>

                    <button type="submit" className="checkout-btn">Place Order</button>
                </form>

                {/* Right: order summary */}
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
                </div>
            </div>
        </div>
    );
}
