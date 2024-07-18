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
import Tarefas from "./pages/Tarefas";
import {Toaster} from "react-hot-toast";
import EditarTarefa from "./pages/EditarTarefa";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";


// BrowserRouter: Componente essencial pra conduzir o roteamento do navegador
// Route: Indicamos a rota (path) e o elemento que será exibido 

function App() {
  // Este Estado de usuário indica se ele esta logado ou não na aplicação.  NULL = Deslogado. Quando logado recebe os dados do usuário
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true) // Verifica se o usuario esta logado ao dar o f5 e leva para pagina de login ((()))

  useEffect(() => {
    // Essa função monitora e detecta se o usuário esta conectado ou desconectado
    onAuthStateChanged(auth, (user) => {
      // user é nulo o usuário deslogou. se tem um objeto no user, o usuário esta logado
      setUsuarioLogado(user);
      setLoading(false) // reseta a verificação e ao dar o f5 não retorna para pagina de login se estiver em outra pagina ((()))
    })
  }, []);

  // If retorna o loading mostrando que não deve carregar para a pagina de login quando estiver na tarefas e o f5 for pressionado ((()))
  if(loading) {
    // Este elemento será exbido enquanto a aplicação é carregada. Se for null não sera exibido nada
    // <div>Carregando...</div>
    return null
  }

  // Usuario.Provider é o elemento que vai compartilhar um valor/dado para os componentes filhos da aplicação. OU seja tudo dentro dele.
  return ( 
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter> 
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />}/>
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa/>} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Menu />  Se o menu estiver abaixo da routes.  Afeta a exibição da pagina. Fica com o menu abaixo e o conteudo acima.*/}  
        </BrowserRouter>
        <Toaster position="bottom-right" />
        <Rodape />
      </UsuarioContext.Provider>
    </>
   );
}

export default App;
