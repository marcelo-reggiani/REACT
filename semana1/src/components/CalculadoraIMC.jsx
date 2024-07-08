import { useState } from "react"

function CalculadoraIMC() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    
    // Dentro do evento tem informações sobre o input
    function handlePeso(evento) {
        const input = evento.target;
        const valor = input.value;
        
        setPeso(valor);
    }
    
    function handleAltura(evento) {
        const input = evento.target;
        const valor = input.value;
        
        setAltura(valor);
    }

    function handleCalculaImc() {
        const resultado = peso / altura ** 2;
        setImc(resultado);
    }
    
    return (
        <section>
            <h3>CALCULADORA IMC</h3>
            <input type="number" placeholder="Digite seu peso" onChange={handlePeso}/>
            <br />
            <input type="number" placeholder="Digite sua altura" onChange={handleAltura}/>
            <br />
            <button onClick={handleCalculaImc}>Calcular</button>
            <hr />
            {/* <h3>Peso: {peso}, {altura}</h3> */}
            <h4>Seu ICMS é: {imc.toFixed(2)}</h4>
        </section>
    )
}
export default CalculadoraIMC