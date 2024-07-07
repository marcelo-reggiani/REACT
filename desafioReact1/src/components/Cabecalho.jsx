import "./Cabecalho.css";
import logo from '../assets/Ms.png';

function Cabecalho(props) {
  const handleEntrarClick = () => {
    alert("Você clicou no botão Entrar!");
  };

  return (
    <header className="cabecalho">
      <hr />
      <img src={logo} alt="Logo" className="logo" />
      <p className="status-login">{props.logado ? `Bem-vindo(a)! ${props.nomeUsuario}` : "Você está desconectado"}</p>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Postagens</a></li>
          {props.logado && <li><a href="#">Meu perfil</a></li>}
          {props.logado && <li><a href="#">Sair</a></li>}
        </ul>
      </nav>
      {!props.logado && <button onClick={handleEntrarClick}>Entrar</button>}
      <br />
      <hr />
    </header>
  );
}

export default Cabecalho;