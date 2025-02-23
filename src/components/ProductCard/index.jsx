import "./productcard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function ProductCard({ data }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { image, category, title, price, id } = data;
  const itemInCart = cart[id];

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <div className="product-category">{category}</div>
      <p className="product-title">{title}</p>
      <div className="price_and_button">
        <div className="product-price">${price}</div>
        {itemInCart ? (
          <div className="cart-controls">
            <button onClick={() => removeFromCart(id)}>-</button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => addToCart(data)}>+</button>
          </div>
        ) : (
          <button className="add-to-cart-btn" onClick={() => addToCart(data)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
