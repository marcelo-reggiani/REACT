import { useState } from "react";

useState

function ConversorTemperatura() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0)

    function handleCelsius(evento) {
        const input = evento.target;
        const valor = input.value;

        setCelsius(valor);
    }

    function handleConverterTempratura() {
        const fahrenheit = celsius * 1.8 + 32;
        setFahrenheit(fahrenheit)
    }
    return (
        <section>
            <h3>Conversor Temperatura</h3>
            <input type="number" placeholder="Digite a Temperatura em Celsius" onChange={handleCelsius}/>
            <br />
            <button onClick={handleConverterTempratura}>Converter</button>
            <hr />
            <h4>A temperatura em Fahrenheit é: {fahrenheit.toFixed(1)}</h4>
        </section>
    );
}
export default ConversorTemperatura;
