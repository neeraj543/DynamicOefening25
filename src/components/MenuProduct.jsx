import { Card, Container, Row, Col } from "react-bootstrap";

function ProductSize(props) {
    const { product } = props;
    if (!product.size) return null;
    return <span className="text-primary">({product.size} cl)</span>;
}

function ProductNote(props) {
    const { product } = props;
    if (!product.note) return null;
    return <p className="text-primary mb-0">{product.note}</p>;
}

export default function MenuProduct(props) {
    const { product } = props;
    if (!product?.name) return null;

    return (
        <Container fluid className="mb-3 p-2">
            <Row className="align-items-center g-2 justify-content-between">
                {/* Left column: name + size */}
                <Col xs="6"> {/*This means that for xtra small screens, it will take half of the screen width*/}
                    <h5 className="mb-1">{product.name}</h5>
                    <ProductSize product={product} />
                    <ProductNote product={product} />

                </Col>

                {/* Right column: price */}
                <Col xs="6">
                    {product.price !== undefined && (
                        <div className="fw-bold">{product.price} €</div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
