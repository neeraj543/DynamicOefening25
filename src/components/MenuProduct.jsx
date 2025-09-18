export default function MenuProduct(props) {
    const { product } = props;

    return (
        <div style={{
            padding: "8px 12px",
            borderRadius: "6px",
            marginBottom: "6px"
        }}>
            <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 1000 }}>
                {product.name ? product.name  : "Unknown"}
            </h2>
            {product.price !== undefined && (
                <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "#555" }}>
                    {product.price} €
                </p>
            )}
        </div>
    );
}
