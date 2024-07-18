import { Card, Button, Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function Home() {
  return (
    <main className="mt-3" style={{ paddingTop: "16px", paddingBottom: "56px" }}>
      <Container>
      <h1>Home</h1>
        <Row>
          <Col md={4}>
            <Card className="mt-3">
              <Card.Img variant="top" src={img1} alt="Imagem" />
              <Card.Body>
                <Card.Title>Produtividade</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mt-3">
            <Card.Img variant="top" src={img2} alt="Imagem2" />
              <Card.Body>
                <Card.Title>HomeOffice</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mt-3">
            <Card.Img variant="top" src={img3} alt="Imagem3" />
              <Card.Body>
                <Card.Title>Presencial</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mt-3">
            <Card.Img variant="top" src={img4} alt="Imagem4" />
              <Card.Body>
                <Card.Title>Tecnologia</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
