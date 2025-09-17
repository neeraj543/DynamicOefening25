import MenuProduct from "./components/MenuProduct.jsx";
import './App.css'
import {PRODUCTS_DATA} from "./data/data.js";


function App() {
    return (
        <div style={{ padding: "16px" }}>
            <h1>Menu</h1>

            {PRODUCTS_DATA.map(p => (
                <MenuProduct key = {p.id} product={p} />
            ))}
        </div>
    );
}


export default App
