// App.jsx = jsx ⇒ JavaScript Extend.  Permite escrever codigo HTML dentro do JS

// IMPORTAR O COMPONENTE 
import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";

// App()  É o componente principal da Aplicação
function App() {
    return (
        <main>
            <Titulo></Titulo>
            <Mensagem></Mensagem>
            <Mensagem></Mensagem>
            <Mensagem></Mensagem>
        </main>
    );
}
export default App;