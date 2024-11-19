import "./productcard.css";

export function ProductCard(props) {
    const{image, category, title, price } = props.data;

    return(
        <div className="product-card">
            <img className="product-image" src={image} alt="" />
            <div className="product-category">{category}</div>
            <p className="product-title">{title}</p>
            <div className="price_and_button">
                <div className="product-price">${price}</div>
                <button className="add-to-cart-btn">Add to Card</button>
            </div>
        </div>
    );
}

export default ProductCard;