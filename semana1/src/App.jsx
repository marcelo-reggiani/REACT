// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem"

// Componente principal da aplicação
function App() {
    return (
        <>
            <Blog />
            <Mensagem textoTitulo="Primeira Mensagem" paragrafo="Esse paragrafo é referente a Primeira mensagem" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" nomeAutor="Marcelo Reggiani"/>
            <Rodape/>
        </>
    );
}

export default App;