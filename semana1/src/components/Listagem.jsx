const compras = ["Batata Palha", "Batata Frita Pronta", "Batata Doce", "Batata Chips", "Batata Inglesa", "Batata Rústica"];

const produtos = [
    {cod: 1, nome: "Batata palha", quantidade: 300, precoUnitario: 5},
    {cod: 2, nome: "Batata frita pronta", quantidade: 100, precoUnitario: 10},
    {cod: 3, nome: "Batata doce", quantidade: 3, precoUnitario: 10},
    {cod: 4, nome: "Batata chips", quantidade: 20, precoUnitario: 4},
]

// Gerar componentes/elementos apartir de dados (ARRAY)

function Listagem() {
    // Cada string em um array de compras.  Esta sendo transformada em um <li>
    const itensCompra = compras.map((compra, index) => {
        return <li key={index}>{compra}</li>
    });

    const cardsProduto = produtos.map((produto) => {
        return (
            <article key={produto.cod}>
                <h3>NOME: {produto.nome}</h3>
                <p>PREÇO UNITÀRIO: {produto.precoUnitario}</p>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
        );
    });

    return (
        <>
            <h2>Lista de Compras</h2>
                <ul>{itensCompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>
                {cardsProduto}
            </section>

        </>
    )
}
export default Listagem;

//Antes o li era de forma estatica. Feito manualmente um a um. Com oe exemplo acima. Não precisa isso
{/* <li>Batata Palha</li>
<li>Batata Frita Pronta</li>
<li>Batata Doce</li>
<li>Batata Chips</li>
<li>Batata Inglesa</li>
<li>Batata Rústica</li> */}

