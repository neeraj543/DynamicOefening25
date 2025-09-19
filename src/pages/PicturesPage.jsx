import { Container, Row, Col, Card } from "react-bootstrap";

const ARTWORKS = [
    {
        id: 1,
        author: "Mila",
        title: "De Oranjeloze Herfstwandeling",
        text: "Een landschap waar zelfs de lucht meedoet met de dresscode: alles in tinten pompoen.",
        name: "autumn.png",
        tags: ["herfst", "landschap", "warm", "natuur"]
    },
    {
        id: 2,
        author: "Jonas",
        title: "Het Orakel van de Kaastoer",
        text: "Een driehoek die je niet naar Egypte brengt, maar wel naar een boterham met pit.",
        name: "cheese.png",
        tags: ["kaas", "eten", "humor"]
    },
    {
        id: 3,
        author: "Lotte",
        title: "De Zonnehoed der Zen",
        text: "Een bloem die lijkt te fluisteren: “Neem een thee en adem rustig verder.”",
        name: "ecinacea.png",
        tags: ["bloem", "rust", "zen", "botanisch"]
    },
    {
        id: 4,
        author: "Amir",
        title: "De Uitvinder Zonder Idee",
        text: "Een lamp die wacht tot iemand eindelijk de schakelaar omzet.",
        name: "lamp.png",
        tags: ["lamp", "idee", "stilte"]
    },
    {
        id: 5,
        author: "Sofie",
        title: "De Eureka Explosie",
        text: "Een lamp die al aanstaat nog voor je iets geniaals hebt bedacht.",
        name: "lamp2.png",
        tags: ["lamp", "licht", "inspiratie"]
    },
    {
        id: 6,
        author: "Noah",
        title: "De Rode Vingerafdruk van de Natuur",
        text: "Een herfstblad dat eruitziet als een contract tussen de bomen en de wind.",
        name: "leaf.png",
        tags: ["blad", "herfst", "natuur"]
    },
    {
        id: 7,
        author: "Elise",
        title: "De Siamese Zussen van de Sinaasappelboom",
        text: "Twee rondjes zonlicht die doen alsof ze vitamines verkopen.",
        name: "oranges.png",
        tags: ["fruit", "oranje", "vitamines"]
    },
    {
        id: 8,
        author: "Victor",
        title: "De Kleuterklas van de Kunst",
        text: "Een verzameling vrolijke vormen die allemaal te druk zijn om betekenisvol te doen.",
        name: "orangethings.png",
        tags: ["abstract", "kunst", "speels"]
    },
    {
        id: 9,
        author: "Hannah",
        title: "De Dubbelkamer Notensuite",
        text: "Een bescheiden pinda met de uitstraling van een vorstelijk hotel.",
        name: "peanut.png",
        tags: ["noten", "eten", "humor"]
    },
    {
        id: 10,
        author: "Lucas",
        title: "De Oranjerie-Peer",
        text: "Een peer die vergeten is dat hij eigenlijk groen moest zijn.",
        name: "pear.png",
        tags: ["fruit", "peer", "speels"]
    },
    {
        id: 11,
        author: "Emma",
        title: "De Troon van de Soepkoning",
        text: "Een pompoen die poseert alsof hij straks tot puree wordt gekroond.",
        name: "pumpkin.png",
        tags: ["pompoen", "herfst", "eten", "koninklijk"]
    },
    {
        id: 12,
        author: "Finn",
        title: "De Grote Oranje Ontknoping",
        text: "Een zonsopgang die eruitziet alsof de wereld zijn gordijnen opentrok.",
        name: "sunrise.png",
        tags: ["zon", "ochtend", "natuur", "warm"]
    }
];

function Picture(props) {
    const { picture } = props;

    return (
        <Card className="h-100 shadow-sm bg-secondary-subtle">
            <Card.Img
                variant="top" //The image should be the top part of the card
                src={`/images/orange/${picture.name}`}
                alt={picture.name}
                style={{ height: "auto", objectFit: "cover" }}

            />
            <Card.Body>
                <Card.Title className="fw-bold mx-2 my-2">{picture.title}</Card.Title>
                <Card.Text className="text-muted mx-2 mb-2"> by {picture.author}</Card.Text>
            </Card.Body>
        </Card>


    );
}

export default function PicturesPage(props) {
    return (
        <Container fluid className="py-4">
            <h1 className="mb-4 ">Pictures</h1>
            <Row xs={1} sm={2} md={3} className="g-4">
                {ARTWORKS.map((p) => (
                    <Col key={p.id}>
                        <Picture picture={p} />
                    </Col>
                ))}
            </Row>
        </Container>

    );
}
