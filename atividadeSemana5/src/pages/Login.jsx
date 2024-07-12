import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
    // Login não fugiu do que foi mostrado na aula. 
    const { register, handleSubmit } = useForm();

    function entrar(data) {

        console.log(data);
    }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <hr />
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" {...register("email")} />
        </div>
        <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" className="form-control" {...register("senha")} />
        </div>
        <Button variant="dark" className="mt-5 w-100" type="submit">Entrar</Button>
        <Button variant="danger" className="mt-1 w-100" type="button">Entrar com o Google</Button>
      </form>
    </main>
  );
}

export default Login;