import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Rodape from "./components/Rodape";

function App() {
  // Foi usado o conceito de condição de estar ou não logado. Usado nas aulas passadas
  return ( 
      <>
      <BrowserRouter> 
        <Menu logado={false} nomeUsuario={"Marcelo"} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/Contato" element={<Contato />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <br />
      <hr />
      <Rodape />
      </>
   );
}

export default App;