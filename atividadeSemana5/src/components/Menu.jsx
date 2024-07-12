import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/Ms.png';

function Menu(props) {
    // Aqui fiz a Validação informado no APP como usado nas aulas da semana 4. se estiver logado apresenta o nome e o menu sem opção de cadastro e tbm sem login. 
    // Se estiver deslogado, o menu libera opção de logar e cadastrar tbm.
    return (
        <header className="menu">
            <Navbar bg="dark" variant="dark" expand="sm"> 
                <Container fluid>
                    <Link to="/">
                        <img src={logo} width="52" alt="Logo" />
                    </Link>
                    <p className="status-login text-white text-center ms-3 m-auto">{props.logado ? `Bem-vindo(a)! ${props.nomeUsuario}` : "Você está desconectado"}</p>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            {!props.logado && <Link className="nav-link" to="/login">Login</Link>}
                            {!props.logado && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;
