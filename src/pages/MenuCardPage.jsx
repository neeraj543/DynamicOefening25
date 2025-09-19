import MenuCard from "../components/MenuCard.jsx";
import { Card, Container, Row, Col } from "react-bootstrap";


export default function MenuCardPage(props) {
    const {products} = props;
    return (
        <>
            <h1 className="mx-3">Menu</h1>
            <MenuCard products={products} />
        </>
    );
}
