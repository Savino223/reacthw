import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";

function Cart() {
  const { cart, removeFromCart, addToCart, clearCart } = useContext(CartContext);
  const cartItems = Object.values(cart);
  
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>pusto</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <a href="#" className="cart-category">{item.category}</a>
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-price">${item.price}</p>
                  <p className="cart-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="cart-controls">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-grand-total">
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
