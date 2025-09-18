import MenuProduct from "./MenuProduct.jsx";

export default function MenuCard(props){
    const{product} = props;

    return (
        <div style={{border: "1px solid", padding: "8px 12px", borderRadius : "10px"}}>
            {product.map(p => (
                <MenuProduct key={p.id} product={p}/>
            ))}
        </div>
    );
}