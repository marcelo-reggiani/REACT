import { Button } from "react-bootstrap";

function NovaTarefa() {
    return ( 
        <main>
            <form className="form-section">
                <h1>Adicionar Tarefa</h1>
                <hr />
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" id="titulo" className="form-control" />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" className="form-control"></textarea>
                </div>
                <div>
                    <label htmlFor="dataConclusao">Data</label>
                    <input type="date" id="dataConclusao" className="form-control"/>
                </div>
                <div className="form-check mt-3">
                    <input type="checkbox" id="concluido" className="form-check-input"/>
                    <label htmlFor="concluido" className="form-check-label">Concluido?</label>
                </div>
                <div className="mt-3">
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria" className="form-select">
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Projetos">Projetos</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Outors">Outros</option>
                    </select>
                </div>
                <Button variant="dark" className="w-100 mt-3" type="submit">Salvar Tarefa</Button>
            </form>
        </main>
     );
}

export default NovaTarefa;