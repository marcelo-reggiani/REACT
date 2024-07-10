import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";

//Link: Esse componente habilita o SPA
//OBS.: Se houver link externo, continuar utilizando a tag <a />
//Navbar.Toggle é para adicionar o Hamburguer no menu da navbar

function Menu() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container fluid>
                    <Link to="/">
                        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32" />
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;