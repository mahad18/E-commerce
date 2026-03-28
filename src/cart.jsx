export default function Cart({ cart, setCart }) {
  return (
    <div className="products-container">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}