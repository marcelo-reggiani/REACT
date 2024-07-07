import Card from "./Card";
import "./Galeria.css";

const produtos = [
  { cod: 1, nome: "TV 55", quantidade: 2, precoUnitario: 2800, imagem: './assets/tv55.jpg'},
  { cod: 2, nome: "Iphone 13", quantidade: 1, precoUnitario: 5000, imagem: './assets/iphone13.jpg'},
  { cod: 3, nome: "Macbook Air", quantidade: 1, precoUnitario: 12000, imagem: './assets/macbookair.jpg'},
  { cod: 4, nome: "Carregador Iphone", quantidade: 2, precoUnitario: 200, imagem: './assets/carregador.jpeg'},
];

function Galeria() {
  return (
    <section className="galeria">
      <h2>Alguns Exemplos de Nossos Cards</h2>
      <article className="galeria-grid">
        {produtos.map(produto => (
          <Card key={produto.cod} produto={produto} />
        ))}
      </article>
    </section>
  );
}

export default Galeria;