import "./CardAluno.css";

const alunos = [
    {matricula: 1, nome: "Marcelo", serie: "7 Série", media: 10},
    {matricula: 2, nome: "Pedroca", serie: "6 Série", media: 5},
    {matricula: 3, nome: "Duda", serie: "8 Série", media: 8},
    {matricula: 4, nome: "Paula", serie: "5 Série", media: 6},
]

function CardAluno(props) {
    const cardAluno = alunos.map((aluno) => {
        return <CardAluno key={aluno.matricula} nome={aluno.nome} serie={aluno.serie} media={aluno.media} />
    });
    return (
        <>
            <h2>Lista de Alunos</h2>
            <section>
                {cardAluno}
            </section>
        </>
    )
}
export default CardAluno;

// Exercício: Listar os cards de aluno a partir de um array de alunos;
// - criar um array de objetos (matricula, nome, serie e media)
// - gerar uma lista de CardAluno / reutilizar o CardAluno;