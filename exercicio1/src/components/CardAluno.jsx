import "./CardAluno.css";

function CardAluno(props) {
    const classe = props.media >= 7 ? "aprovado" : "reprovado";
    return (
        <header className="card-aluno">
            <h4>Aluno: {props.nome}</h4>
            <p>Série: {props.serie}</p>
            <strong className={classe}>Média: {props.media}</strong>
            <p className={classe}>
                {props.media >= 7 ? "Você esta Aprovado!" : "Você foi Reprovado!"}
            </p>
        </header>
    )
}    
export default CardAluno;

