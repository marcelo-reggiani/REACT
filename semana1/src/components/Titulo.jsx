// Titulo é o nome do componente.  
//NO REACT os componentes são FUNÇÕES usam FUNCTION().  
//E seu retorno da função é uma parte visual
//Exportar o componente

// UTILIZAR o fragment para agrupar elementos filhos. 
/* <>
<hr />
<h1>so aceita mais de um elemento se estiver agrupado DENTRO de um elemento pai</h1>
<h2>Aqui so aceitou pq esta dentro do fragment</h2>
<br />
</> */

function Titulo() {
    // o Conteudo do Return é o visual
    return (
        <h2>Postagens- Exercicio 1</h2>  
    );
}
// Disponibiliza o componente para ser usado em outros arquivos do projeto. Para isso precisa exportar
export default Titulo;
