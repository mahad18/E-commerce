export default function Checkout({ cart }) {
  const total = cart.length * 100; // example
  return (
    <div className="products-container">
      <div className="card">
        <h3>Checkout Summary</h3>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <button>Proceed to Payment</button>
      </div>
    </div>
  );
}