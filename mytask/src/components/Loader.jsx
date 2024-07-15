import { Container, Spinner } from "react-bootstrap";

function Loader() {
    return ( 
        <Container>
            <Spinner variant="dark" />
            <spam className="ms-1">Carregando...</spam>
        </Container>
     );
}

export default Loader;