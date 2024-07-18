import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { entrarGoogle, loginUsuario } from "../firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    function entrar(data) {
        //data é o objeto com os dados do formulario
      loginUsuario(data.email, data.senha).then(() => {
        toast.success("Bem-Vindo(a)!");
        navigate("/tarefas")
      }).catch(() => {
        toast.error("Email e/ou Senha Incorrtos!")
        alert("Email e/ou Senha Incorrtos!")
      });
    }

    function handleEntrarGoogle(){
      entrarGoogle().then(() => {
        toast.success("Bem-Vindo(a)!")
        navigate("/tarefas")
      })
    }

  return (
    <main className="mt-3" style={{ paddingTop: "16px", paddingBottom: "56px" }}>
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" {...register("email")} />
        </div>
        <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" className="form-control" {...register("senha")} />
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">Entrar</Button>
        <Button onClick={handleEntrarGoogle} variant="danger" className="mt-1 w-100" type="button">Entrar com o Google</Button>
      </form>
    </main>
  );
}

export default Login;
