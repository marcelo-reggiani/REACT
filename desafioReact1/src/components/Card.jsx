import "./Card.css";

function Card({ produto }) {
  return (
    <article className="card">
      <img src={produto.imagem} alt={produto.nome} className="card-imagem" />
      <h3>{produto.nome}</h3>
      <p>Preço Unitário: {produto.precoUnitario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      <p>Quantidade: {produto.quantidade}</p>
      <p>Subtotal: {(produto.quantidade * produto.precoUnitario).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
    </article>
  );
}

export default Card;