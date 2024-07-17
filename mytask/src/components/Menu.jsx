import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Menu() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    setExpanded(false); // Fecha o menu hamburguer ao selecionar um link
    navigate(eventKey); // Navega para a rota correspondente ao link clicado
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm" fixed="top" expanded={expanded}>
        <Container fluid>
          <Link to="/">
            <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32" alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onSelect={handleSelect}>
              <Link className="nav-link" to="/" eventKey="/">Home</Link>
              <Link className="nav-link" to="/tarefas" eventKey="/tarefas">Tarefas</Link>
              <Link className="nav-link" to="/login" eventKey="/login">Login</Link>
              <Link className="nav-link" to="/cadastro" eventKey="/cadastro">Cadastro</Link>
              <Link className="nav-link" to="/ajuda" eventKey="/ajuda">Ajuda</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Menu;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"
// import { Navbar, Container, Nav } from "react-bootstrap";

// //Link: Esse componente habilita o SPA
// //OBS.: Se houver link externo, continuar utilizando a tag <a />
// //Navbar.Toggle é para adicionar o Hamburguer no menu da navbar
// // USAR O FIXED="TOP"

// function Menu() {
//     const [expanded, setExpanded] = useState(false);
//     const navigate = useNavigate();
  
//     const handleSelect = (eventKey) => {
//       setExpanded(false);
//       navigate(eventKey);
//     };
//     return (
//         <header>
//             <Navbar bg="dark" variant="dark" expand="sm" fixed="top" > 
//                 <Container fluid>
//                     <Link to="/">
//                         <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32" />
//                     </Link>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ms-auto" onSelect={handleSelect}>
//                             <Link className="nav-link" to="/">Home</Link>
//                             <Link className="nav-link" to="/tarefas">Tarefas</Link>
//                             <Link className="nav-link" to="/login">Login</Link>
//                             <Link className="nav-link" to="/cadastro">Cadastro</Link>
//                             <Link className="nav-link" to="/ajuda">Ajuda</Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     );
// }

// export default Menu;