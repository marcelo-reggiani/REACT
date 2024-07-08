// ENTENDENDO O ESTADO NO REACT
import { useState } from "react";
import "./Contador.css";


function Contador({ valorInicial = 0, batata }) {  //function Contador(props) {  
  // let numero = 0; somente a váriavel não renderiza a tela. Não aparece na tela do react
  // Para definir um estado usa useState. useState -> retorna o valor atual do estado e uma função para alterar este estado.
  // definimos o valor do useState o valor inicial do estado. Neste exemplo é ZERO
  // useState -> é um react hooks

//   const [numero, setNumero] = useState(0); // Pode usar o props para melhorar o codigo
     const [numero, setNumero] = useState(valorInicial); //  const [numero, setNumero] = useState(props.valorInicial);

  function handleIncremento() {
    // numero = numero + 1;
    setNumero(numero + 1);
  }
    // implementa decremento
  function handleDecremento() {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  }
  function handleIncremento100() {
    // numero = numero + 1;
    setNumero(numero + 100);
  }
  function handleZerar() {
    setNumero(0);
  }
 // crie um botao que ao clicar incrementa 100
  return (
    <section>
      <h2 className={numero % 2 === 0? "par" : "impar"}>Contagem: {numero}</h2>
      <button onClick={handleIncremento}> +1 </button>
      <button onClick={handleDecremento}> -1 </button>
      <button onClick={handleIncremento100}>+100</button>
      <button onClick={handleZerar}>ZERAR</button>
    </section>
  );
}
export default Contador;

// Para que o numero mude o componente precisa renderizar novamente. Para fazer isso, Precisa do ESTADO.  Estado é uma váriavel especial do react que sincroniza as mudanças na tela
