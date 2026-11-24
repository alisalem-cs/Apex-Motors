import { Link } from 'react-router-dom';
import { useShop } from '../store/ShopContext';
import './Shop.css';

export default function History() {
  const { orders, clearOrders } = useShop();

  return (
    <main className="shop-page">
      <section className="page-header">
        <h1>Order History</h1>
        <p>All the cars you have purchased from Apex Motors.</p>
      </section>

      <div className="shop-container">
        <div className="shop-toolbar">
          {orders.length > 0 && (
            <span className="shop-count">
              {orders.length} {orders.length === 1 ? 'order' : 'orders'}
            </span>
          )}
          <Link to="/" className="section-link">Back to Home</Link>
        </div>

        {orders.length === 0 ? (
          <div className="shop-panel shop-empty">
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className="btn-primary">Browse Cars</Link>
          </div>
        ) : (
          <>
            <div className="history-list">
              {orders.map((order) => (
                <div className="shop-panel history-order" key={order.id}>
                  <div className="history-header">
                    <div>
                      <h2>{order.id}</h2>
                      <span className="history-date">{order.date}</span>
                    </div>
                    <span className="history-status">✓ Completed</span>
                  </div>

                  {order.items.map((item) => (
                    <div className="checkout-item" key={item.car.id}>
                      <img src={item.car.image} alt={item.car.name} />
                      <div className="checkout-item-info">
                        <p>{item.car.name}</p>
                        <span>
                          {item.car.year} · Qty: {item.quantity}
                        </span>
                      </div>
                      <strong>${(item.car.price * item.quantity).toLocaleString()}</strong>
                    </div>
                  ))}

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
              ))}
            </div>

            <div className="shop-bottom">
              <button type="button" className="clear-btn" onClick={clearOrders}>
                Clear History
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
