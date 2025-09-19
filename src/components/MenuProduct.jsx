
function ProductSize(props){
    const{product} = props;
    if(!product.size) return null;
    return <span className = "product-size">({product.size} cl)</span>;
}

function ProductNote(props){
    const{product} = props;
    if(!product.note) return null;
    return <p className="product-note">{product.note}</p>;
}

export default function MenuProduct(props) {
    const { product } = props;
    if(!product?.name) return; //If no name, it ends.

    return (
        <div className="product">
            <h2  className="product-name">
                {product.name ? product.name  : "Unknown"}
                <ProductSize product={product} />
            </h2>

            {product.price !== undefined && (
                <p className="product-price">
                    {product.price} €
                </p>
            )}
            <ProductNote product={product} />
            {/*{product.size !== undefined  && (*/}
            {/*    <p style={{ margin: "2px 0 0", fontSize: "0.9rem"}}> Size: {product.size}</p>*/}
            {/*)}*/}
        </div>
    );
}
