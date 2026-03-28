import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./home";
import Products from "./products";
import Cart from "./cart";
import Checkout from "./checkout";

import "./app.css";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/checkout">Checkout</Link> {/* ✅ Added */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />

          <Route
            path="/cart"
            element={<CartWithCheckout cart={cart} setCart={setCart} />}
          />

          <Route
            path="/checkout"
            element={<Checkout cart={cart} />}
          />
        </Routes>
      </div>
    </div>
  );
}

function CartWithCheckout({ cart, setCart }) {
  const navigate = useNavigate();

  return (
    <div>
      <Cart cart={cart} setCart={setCart} />

      {cart.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => navigate("/checkout")}>
            Go to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
