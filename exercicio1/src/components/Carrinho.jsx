import "./Carrinho.css";
function Carrinho(props) {
    return (
        <article className="produto">
            <h3>{props.nome} A versão de lançamento deste mês. Mês que vem já é outro</h3>
            <p>Preço Unitário: <s>R$ {props.precoUnitario.toFixed(2)}</s></p>
            <p> Desconto: {props.desconto}</p>
            <p>Preço Final:  R$ {props.precoComDesconto.toFixed(2)} - {props.desconto * 100}% OFF</p>
        </article>
    );
}
export default Carrinho