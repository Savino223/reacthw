import "./productcard.css";

export function ProductCard(props) {
    const{img, category, name, price } = props.data;

    return(
        <div className="product-card">
            <img width="200" src={img} alt="crack"/>
            <div>{category}</div>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    );
}

export default ProductCard;