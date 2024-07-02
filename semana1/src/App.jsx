// App.jsx = jsx ⇒ JavaScript Extend.  Permite escrever codigo HTML dentro do JS

// IMPORTAR O COMPONENTE 
import Titulo from "./components/Titulo";
import Titulo2 from "./components/Titulo2.jsx";
import Rodape from "./components/Rodape";
import Blog from "./components/Blog"

// App()  É o componente principal da Aplicação
function App() {
    return (
        <main>
            <Titulo></Titulo>
            <br />
            <Titulo2></Titulo2>
            <br />
            <Blog></Blog>
            <Rodape></Rodape>
        </main>
        
    );
}
export default App;