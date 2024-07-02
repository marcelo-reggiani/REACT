// IMPORTAR Para que os estilos do arquivo façam parte do projeto
import "./Mensagem.css"

function Mensagem() {
    const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
    const nomeAutor = "j. Almir";
    const linkImagem = "https://picsum.photos/200";

    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{textoTitulo}</h2>
            <img src={linkImagem} alt="Imagem da mensagem" />
            <p className="paragrafo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, aliquid.
            </p>
            <small>Criado por: {nomeAutor}</small>
        </section>
    );
}
export default Mensagem;