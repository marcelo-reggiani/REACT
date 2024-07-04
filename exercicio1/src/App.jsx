import CardAluno from "./components/CardAluno"
import Carrinho from "./components/Carrinho"

function App() {
  const precoUnitario = 113000;
  const desconto = 0.10;
  const precoComDesconto = precoUnitario - precoUnitario * desconto;
  return (
    <>
        <CardAluno nota={8}/>
        <Carrinho nome={"Iphone 75"} precoUnitario={precoUnitario} desconto={desconto} precoComDesconto ={ precoComDesconto} />
    </>
  );
}
export default App;