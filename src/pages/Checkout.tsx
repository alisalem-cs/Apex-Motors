import { useState } from 'react';
import { z } from 'zod';
import './Checkout.css';
import { useCart, getTotalPrice, clearCart, getDiscount } from '../store/cartStore';
import type { Order } from '../types';

const DELIVERY_FEE = 500;

// Zod rules for the checkout form
const checkoutSchema = z.object({
    fullName: z.string().trim().min(3, 'Full name must be at least 3 characters'),
    email: z.string().trim().email('Enter a valid email'),
    phone: z.string().trim().regex(/^\+?[0-9]{8,15}$/, 'Enter a valid phone number (8 to 15 digits)'),
    address: z.string().trim().min(5, 'Address must be at least 5 characters'),
    city: z.string().trim().min(2, 'Enter your city'),
    cardNumber: z.string().regex(/^[0-9]{16}$/, 'Card number must be 16 digits'),
    expiry: z.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Use MM/YY format'),
    cvv: z.string().regex(/^[0-9]{3}$/, 'CVV must be 3 digits'),
});

// All form fields (shipping + demo payment). Named differently from the shared CheckoutForm type.
type CheckoutFormData = z.infer<typeof checkoutSchema>;

const emptyForm: CheckoutFormData = {
    fullName: '',
    email: '',
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
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
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
                phone: result.data.phone,
                address: result.data.address + ', ' + result.data.city,
            },
            createdAt: new Date().toISOString(),
        });
        clearCart();
        setForm(emptyForm);
    }

    // Small helper to draw one input with its error message
    function field(name: keyof CheckoutFormData, label: string, placeholder: string) {
        return (
            <div className="checkout-field">
                <label htmlFor={name}>{label}</label>
                <input
                    id={name}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
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
                    <h1>Thank you for your order!</h1>
                    <p>Your order number is <strong>{order.id}</strong>.</p>
                    <p>Total: <strong>${order.total.toLocaleString()}</strong></p>
                    
                    <a href="/" className="checkout-btn">Back to Home</a>
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
                    {field('phone', 'Phone', '+96170123456')}
                    {field('address', 'Address', 'Street, building, floor')}
                    {field('city', 'City', 'Beirut')}

                    <h2>Payment</h2>
                    {field('cardNumber', 'Card Number', '4242424242424242')}
                    <div className="checkout-row">
                        {field('expiry', 'Expiry', 'MM/YY')}
                        {field('cvv', 'CVV', '123')}
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
