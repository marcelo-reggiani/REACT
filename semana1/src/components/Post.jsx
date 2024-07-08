import { useState } from "react";
import "./Post.css"

function Post() {
    const [curtido, setCurtido] = useState(false);
    return (
        <section>
            <h3>Post do Dia</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, earum?</p>
            <button className={curtido ? "ativo" : "inativo"}  onClick={() => setCurtido(!curtido)}>CURTIR</button>
        </section>
    )
}
export default Post;