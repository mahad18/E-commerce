export default function Products({ cart, setCart }) {
  const products = [
    { id: 1, name: "Laptop", desc: "Powerful laptop for work and gaming" },
    { id: 2, name: "Headphones", desc: "Noise-cancelling headphones" },
    { id: 3, name: "Smartphone", desc: "Latest model with awesome features" },
    { id: 4, name: "Camera", desc: "High quality DSLR camera" },
  ];

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <button onClick={() => setCart([...cart, product])}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}