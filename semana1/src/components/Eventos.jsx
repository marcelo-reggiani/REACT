// Eventos são ações que acontece na interface.  Podem ser provocados pelo usuário
// Manipulador de evento (handler) -  Resposta ao evento que o usuário provocou.  Ex.  Clicar no botao

function Eventos(){

    
    //Manipulador de Eventos
    function handlerClick() {
        alert("Você Clicou!")
    }


    return(
        <section>
            <button onClick={handlerClick}>Clique</button>
            <button onClick={() => (alert("Clicou Novamente"), alert("Outra vez?"))}>Clique novamente</button>
            <h1 onMouseEnter={() => alert("Olá")}>Titulo</h1>
        </section>
    );
};
export default Eventos;