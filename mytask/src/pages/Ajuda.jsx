import {Container, Accordion, Button, Alert} from "react-bootstrap"

function Ajuda() {
    return ( 
        <main className="mt-3">
            <Container className="mt-5">
                <br />
                <h1>Ajuda</h1>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sobre Nosso Sistema</Accordion.Header>
                            <Accordion.Body>
                                MyTask é um sistema para gerenciamento de tarefas pessoais. Nesta aplicação você pode Gerenciar todos seus afazeres.
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Sobre a Empresa</Accordion.Header>
                            <Accordion.Body>
                                Empresa Desenvolve Funções para você gerenciar seu dia a dia.
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

export default Ajuda;