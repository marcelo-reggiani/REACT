import "./Carrinho.css";
function Carrinho(props) {
    const valorDesconto = props.precoUnitario -props.precoUnitario *(props.desconto/100);
    return (
        <article className="card-produto">
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className="grfado">{props.precoUnitario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>}
            <div className="price">
            {props.desconto > 0 ? <h4>{valorDesconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h4> : <h4>{props.precoUnitario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h4>}
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
            </div>
        </article>
    );
}
export default Carrinho

// FORMATAR COM VALORES DO BRASIL
// .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
// EXEMPLO  =  props.precoUnitario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

{/* <article className="card-produto">
<h3>{props.nome} A versão de lançamento deste mês. Mês que vem já é outro</h3>
<p>Preço Unitário: <s>R$ {props.precoUnitario.toFixed(2)}</s></p>
<p> Desconto: {props.desconto}</p>
<p>Preço Final:  R$ {props.precoComDesconto.toFixed(2)} - {props.desconto * 100}% OFF</p>
</article> */}