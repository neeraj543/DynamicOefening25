export default function MenuProduct(props) {
    const { product } = props;
    if(!product?.name) return; //If no name, it ends.

    return (
        <div className="product">
            <h2  className="product-name">
                {product.name ? product.name  : "Unknown"}
                {product.size && <span className="product-size">({product.size} cl)</span>}
            </h2>

            {product.price !== undefined && (
                <p className="product-price">
                    {product.price} €
                </p>
            )}
            {/*{product.size !== undefined  && (*/}
            {/*    <p style={{ margin: "2px 0 0", fontSize: "0.9rem"}}> Size: {product.size}</p>*/}
            {/*)}*/}
        </div>
    );
}
