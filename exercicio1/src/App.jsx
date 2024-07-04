import CardAluno from "./components/CardAluno"
import Carrinho from "./components/CardProduto"

function App() {
  return (
    <>
        <CardAluno nome="Marcelo" serie="7º Serie" media={8}/>
        <CardAluno nome="Pedroca" serie="5º Serie" media={6}/>
        <CardAluno nome="Duda" serie="5º Serie" media={7}/>
        
        <Carrinho nome="Iphone 75" precoUnitario={110900} desconto={10} />
        <Carrinho nome="Fone Wirelles" precoUnitario={113} desconto={0} />
        <Carrinho nome="Carro5" precoUnitario={90000} desconto={15} />

    </>
  );
}
export default App;