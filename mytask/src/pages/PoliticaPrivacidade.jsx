import {Container, Accordion, Button, Alert} from "react-bootstrap"

function PoliticaPrivacidade() {
    return ( 
        <main className="mt-3">
            <Container>
                <h1>Politicas de Privacidade</h1>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Nossa Politica de Privacidade</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ex.
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Mais sobre Privacidade</Accordion.Header>
                            <Accordion.Body>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, iste quos quaerat vel quae facere. Mollitia reiciendis vitae quidem.
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            <Button className="mt-3 me-2">Entre em contato</Button>
            <Button className="mt-3 me-2" variant="outline-danger">Denunciar</Button>
            <Alert className="mt-5" variant="warning"> Atenção! Estamos em Manutenção</Alert>
            </Container>
        </main>
     );
}

export default PoliticaPrivacidade;