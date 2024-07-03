// Importante: importar para que os estilos do arquivo
// façam parte do projeto
import "./Mensagem.css";

function Mensagem(props) {
    return (
        <>
        <section className="mensagem-corpo">
            <h2>{props.textoTitulo}</h2>
            <img src={props.linkImagem} alt={props.legenda}/>
            <p>{props.paragrafo}</p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
        </>
    );
}

export default Mensagem;

// Exercício: Aplicar props ao componente Mensagem, as propriedades são: 
// textoTitulo, nomeAutor, paragrafo e linkImagem. 
// Adapte o componente para receber props.
// Até 12h