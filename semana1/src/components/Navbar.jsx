// Renderização condicional = mudar o visual e a estrutura de acordo com algum valor

function Navbar(props) {
    // Operador && : Se o primeiro valor for true ele mostra o componente. Se for falso ele ignora o que vem depois do &&
    // Ternario : condição ? valor se true : valor se false
    return (
        <header>
            <hr />
            {props.logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
            <p>{props.logado ? `Bem-vindo(a)! ${props.nomeUsuario}` : "Você esta desconectado"}</p>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Postagens</a></li>
                    {props.logado && <li><a href="#">Meu perfil</a></li>}
                    {props.logado && <li><a href="#">Sair</a></li>}
                    {!props.logado && <li><a href="#">Entrar</a></li>}
                </ul>
            </nav>
            <br />
            <hr />
    </header>
    )
    
}

export default Navbar;

// se estiver logado renderiza a NAVBAR logado.  Caso contrario renderiza NAVBAR deslogado
/* 
METODO:  IF-ELSE

if(props.logado) { 
        return (
            <header>
                <hr />
                <p>Bem-vindo(a)! {props.nomeUsuario}</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Postagens</a></li>
                        <li><a href="#">Meu perfil</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>
                </nav>
                <br />
                <hr />
            </header>
        );
    } else {
        return (
            <header>
                <hr />
                <p>Você está desconectado!</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Postagens</a></li>
                    </ul>
                </nav>
                <br />
                <hr />
            </header>
        );
    }
        */

    /*
        if(props.logado) {  // se Navbar  estiver true no App.jsx
        mensagem = `Bem-vindo(a)! ${props.nomeUsuario}`
    } else {  // se Navbar  estiver false no App.jsx
        mensagem = "Você esta desconectado"
    }

    */