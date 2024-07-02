import "./Postagem.css"

function Postagem() {
    const textoTitulo = "Primeiro Exercicio React";
    const nomeAutor = "Marcelo Reggiani";
    const linkImagem = "https://picsum.photos/200";

    return (
        <section className="postagem-corpo">
            <h2 className="postagem-titulo">{textoTitulo}</h2>
            <p className="paragrafo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, aliquid.
            </p>
            <img className="postagem-imagem" src={linkImagem} alt="Imagem da mensagem" />
            <br />
            <small>Postado por: {nomeAutor}</small>            
        </section>
    );
}
export default Postagem;