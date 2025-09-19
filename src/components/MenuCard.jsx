import MenuProduct from "./MenuProduct.jsx";

export default function MenuCard(props) {
    const {products} = props;

    return (
        <div style={{padding: "8px 12px"}}>
            {products.map(p => (
                <MenuProduct key={p.id} product={p}/>
            ))}
        </div>
    );
}