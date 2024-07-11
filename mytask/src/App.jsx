import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom" // Componente Essencial para conduzir o roteamento no navegador
import Rodape from "./components/Rodape";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NovaTarefa from "./pages/NovaTarefa";


// BrowserRouter: Componente essencial pra conduzir o roteamento do navegador
// Route: Indicamos a rota (path) e o elemento que será exibido 

function App() {
  return ( 
    <>
      <BrowserRouter> 
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/Ajuda" element={<Ajuda />}/>
          <Route path="/NovaTarefa" element={<NovaTarefa/>} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        {/* <Menu />  Se o menu estiver abaixo da routes.  Afeta a exibição da pagina. Fica com o menu abaixo e o conteudo acima.*/}  
      </BrowserRouter>
      <br />
      <hr />
      <Rodape />
    </>
   );
}

export default App;
