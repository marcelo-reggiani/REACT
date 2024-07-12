import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contato() {

      // Contato muito semelhante ao que foi mostrado na aula. 
    const { register, handleSubmit, formState: { errors } } = useForm();

    function cadastrar(data) {
        console.log(data);
    }
    
    return ( 
        <main>
            <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
                <h1>Contato</h1>
                <p>Conte um pouco da sua experiência aqui!</p>
                <hr />
                <div>
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    id="nome" 
                    className="form-control" 
                    {...register("nome", {required: true, maxLength: 150})}
                    />
                    {errors.nome && <small className="invalid">O nome é inválido!</small>}
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    {...register("email", { required: true })}
                    />
                    {errors.email && <small className="invalid">O email é inválido!</small>}
                </div>
                <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea 
            id="feedback" 
            className="form-control"
            {...register("descricao", { required: true })}
            ></textarea>
            {errors.descricao && <small className="invalid">A descrição é inválida!</small>}
        </div>
                <Button variant="dark" className="mt-5 w-100" type="submit">Enviar</Button>
            </form>
        </main>
     );
}

export default Contato;