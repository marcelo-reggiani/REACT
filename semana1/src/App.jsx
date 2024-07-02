// App.jsx = jsx ⇒ JavaScript Extend.  Permite escrever codigo HTML dentro do JS

// App()  É o componente principal da Aplicação
function App() {
    const nome = "Soulcode";
    return (
        <div>
            <h1>React</h1>
            <p>Olá, {nome.toUpperCase()}</p>
            <img src="https://picsum.photos/200" alt="foto aleatória" />
            <br />
            <br />
            <button>Clique Aqui</button>
            <p>Soma: 20 * 5 = {20 * 5}</p>
        </div>
    );
}
export default App;