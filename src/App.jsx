import MenuProduct from "./components/MenuProduct.jsx";
import './App.css'
import {PRODUCTS_DATA} from "./data/data.js";
import MenuCard from "./components/MenuCard.jsx";


function App() {
    return (
        <div style={{ padding: "16px" }}>
            <h1>Menu</h1>
            <MenuCard product={PRODUCTS_DATA}/>
        </div>
    );
}

export default App
