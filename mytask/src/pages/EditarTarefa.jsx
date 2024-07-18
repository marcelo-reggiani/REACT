import { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefas";
import { UsuarioContext } from "../contexts/UsuarioContext";


function EditarTarefa() {
    //Estrair o ID na rota dinâmica
    const { id } = useParams()

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

        // Recuperamos a informação do usuario (se esta logado ou não)
        const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function carregarDado() {
    getTarefa(id).then((tarefa) => {
        if (tarefa) {
            // Se existir o ID Preencher o formulario
            reset(tarefa);
        } else { 
            // Se não existir ele retorna a pagina de Listagem
            navigate("/tarefas")
        }
    })
  }

  function atualizarTarefa(data) {
    updateTarefa(id, data).then(() => {
        toast.success("Atualizado com Sucesso")
        navigate("/tarefas")
    });
  }

  useEffect(() => {
    carregarDado();
  }, []);

      // Se o usuário não estiver logado.  Vai ser encaminhado para outra pagina
      if(usuario === null) {
        return <Navigate to="/login" />
      }
  
  return (
    <main className="mt-3" style={{ paddingTop: "16px", paddingBottom: "56px" }}>
      <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
        <br />
        <h1>Editar tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">O título é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="dataConclusao">Data</label>
          <input
            type="date"
            id="dataConclusao"
            className="form-control"
            {...register("dataConclusao")}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="concluido"
            className="form-check-input"
            {...register("concluido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
          </label>
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-select"
            {...register("categoria")}
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Atualizar Tarefa
        </Button>
      </form>
    </main>
  );
}

export default EditarTarefa;
