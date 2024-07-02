import "./Blog.css"
import Postagem from "./Postagem";


function Blog() {
    return (

        <section className="blog-body">
           <Postagem></Postagem>
           <Postagem></Postagem>
           <Postagem></Postagem>
           <Postagem></Postagem>
        </section>
    );
}
export default Blog;