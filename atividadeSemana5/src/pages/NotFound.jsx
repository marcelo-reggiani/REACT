import img from "../assets/erro.jpeg";
import { Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
    // Além do que foi pedido eu inseri um ALERT para dar mais seriedade a página inexistente.
    return ( 
        <main className="m-5 text-center">
            <img src={img} width={500} alt="pagina de erro" />
            <Alert className="mt-5" variant="warning"> Atenção! Esta página não existe. Volte a página inicial pelo Botão abaixo</Alert>
            <Link to="/" className="d-block mt-3 w-100" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Button className="mt-5 w-100" type="button">Voltar</Button>
            </Link>
        </main>
    );
}

export default NotFound;