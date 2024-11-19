import "./productcard.css";

export function ProductCard(props) {
    const{image, category, name, price } = props.data;

    return(
        <div className="product-card">
            <img width="200" src={image} alt=""/>
            <div>{category}</div>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    );
}

export default ProductCard;