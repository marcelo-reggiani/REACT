import "./CardAluno.css";
function CardAluno(props) {
    return (
        <header className="aluno">
            <p>
                {props.nota >= 7 ? "Você esta Aprovado" : "Você foi Reprovado"}
            </p>
        </header>
    )
}    
export default CardAluno;

{/* <header>
<p>
    {props.nota >= 7 ? "Você esta Aprovado" : "Você foi Reprovado"}
</p>
</header> */}
    
// if(props.nota >= 7) {
//     return "Aprovado"
// } else {
//     return "Reprovado"
// }