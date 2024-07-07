import "./Banner.css"
import imagem from "../assets/banner.jpg"

function Banner(){
    return(
        <section>
            <img src={imagem} alt="Banner" width="250" /> <br />
            {/* <div className="teste" style={{backgroundImage: `url(${imagem})`}}></div> */}
            <img src="/vite.svg" alt="Logo do Vite" /><br />
            <section className="fundo-imagem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aspernatur.
            </section>
            <button>Clique aqui</button>
        </section>
    );
}

export default Banner;