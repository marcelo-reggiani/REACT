import { Badge, Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTarefa, getTarefas } from "../firebase/tarefas";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Tarefas() {
  const [tarefas, setTarefas] = useState(null);
  const navigate = useNavigate()

  function carregarDados() {
    // O then devolve a lista de tarefas da coleção
    getTarefas().then((resultados) => {
      setTarefas(resultados);
    });
  }

  function deletarTarefa(id) {
    // se for true -  apagar tarefa.  Se for false - não faz nada
    const deletar = confirm("Tem certeza?");
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success("Terefa Removida com sucesso!");
        // Tras a lista de tarefas atualizada
        carregarDados();
      });
    }
  }

  // Executar uma função quando o componente é renderizado a primeira vez
  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <main className="mt-3" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
      <Container>
        <h1>Suas tarefas</h1>
        <hr />
        {/* Usando o classname transforma o link como um botao no bootstrap */}
        <Link className="btn btn-dark" to="/tarefas/adicionar">
          Adicionar Tarefa
        </Link>
        {tarefas ? (
          <section className="mt-2">
            {tarefas.map((tarefa) => {
              return (
                <Card key={tarefa.id}>
                  <Card.Body>
                    <Card.Title>{tarefa.titulo}</Card.Title>
                    <Card.Text>{tarefa.descricao}</Card.Text>
                    <div className="mb-2">
                      {tarefa.concluido ? (<Badge className="m-2" bg="success">Concluído</Badge>) : (<Badge className="m-2" bg="warning">Pendente</Badge>)}
                      <Badge className="m-2">{tarefa.categoria}</Badge><br />
                      <Badge className="m-2" bg="dark">Conclusão: {new Date(tarefa.dataConclusao).toLocaleDateString()}</Badge>
                    </div>
                    <Button className="m-1" variant="dark" onClick={() => {navigate(`/tarefas/editar/${tarefa.id}`)}}>Editar</Button>
                    <Button variant="danger" onClick={() => deletarTarefa(tarefa.id)}>Excluir</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </section>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  );
}

export default Tarefas;
