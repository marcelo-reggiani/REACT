import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Rodape from "./components/Rodape";

function App() {
  return (
      <>
        <Cabecalho logado={true} nomeUsuario="Marcelo" />
        <Banner />
        <Galeria />
        <Rodape />
      </>
  );
}

export default App;