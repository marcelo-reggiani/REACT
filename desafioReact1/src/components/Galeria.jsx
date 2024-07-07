import Card from "./Card";
import "./Galeria.css";

import tv55 from '../assets/tv55.jpg';
import iphone13 from '../assets/iphone13.jpg';
import macbookair from '../assets/macbookair.jpg';
import carregador from '../assets/carregador.jpeg';

const produtos = [
  { cod: 1, nome: "TV 55", quantidade: 2, precoUnitario: 2800, imagem: tv55 },
  { cod: 2, nome: "Iphone 13", quantidade: 1, precoUnitario: 5000, imagem: iphone13 },
  { cod: 3, nome: "Macbook Air", quantidade: 1, precoUnitario: 12000, imagem: macbookair },
  { cod: 4, nome: "Carregador Iphone", quantidade: 2, precoUnitario: 200, imagem: carregador },
];

// const produtos = [
//   { cod: 1, nome: "TV 55", quantidade: 2, precoUnitario: 2800, imagem: './assets/tv55.jpg'},
//   { cod: 2, nome: "Iphone 13", quantidade: 1, precoUnitario: 5000, imagem: './assets/iphone13.jpg'},
//   { cod: 3, nome: "Macbook Air", quantidade: 1, precoUnitario: 12000, imagem: './assets/macbookair.jpg'},
//   { cod: 4, nome: "Carregador Iphone", quantidade: 2, precoUnitario: 200, imagem: './assets/carregador.jpeg'},
// ];

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