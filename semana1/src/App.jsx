// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem"
import Navbar from "./components/Navbar";
import Listagem from "./components/Listagem";
import CardAluno from "./components/CardAluno";

// Componente principal da aplicação
function App() {
    return (
        <>
            {/* <Navbar logado={true} nomeUsuario="Marcelo"/>
            <Blog /> */}
            {/* <Mensagem textoTitulo="Primeira Mensagem" paragrafo="Esse paragrafo é referente a Primeira mensagem" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" nomeAutor="Marcelo Reggiani"/>
            <Mensagem textoTitulo="Segunda Mensagem" paragrafo="Esse paragrafo é referente a Segunda mensagem" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" nomeAutor="Soly Reggiani"/> */}
            {/* <Rodape/> */}

            <Listagem />
            <CardAluno />
        </>
    );
}

export default App;