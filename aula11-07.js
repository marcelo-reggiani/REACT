// Desestruturação de objetos: Permite extrair valores de um objeto e atribuir em variaveis

const pessoa = {
    nome: "Marcelo",
    idade: 45,
    profissao: "Desenvolvedor",
    endereco: {
        cidade: "BH",
        estado: "MG"
    }
}

// Dentro das chaves coloca-se as propriedades que serão estraidas
const {nome, idade, profissao, endereco} = pessoa;
console.log(nome);
console.log(idade);
console.log(profissao);
console.log(endereco);

// Podemos extrair propriedades de objetos internos
const {endereco: { estado, cidade }} = pessoa;
console.log(estado);
console.log(cidade);

// Spread (...): Permite espalhar as propriedades de um objeto em outro

const carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2020
}
// As propriedades do objeto carro serão copiadas para o novo objeto
const copiaCarro = {...carro}
console.log(copiaCarro);

const novoCarro = {...carro, ano: 2024, dono: "Tchello"}
console.log(novoCarro);