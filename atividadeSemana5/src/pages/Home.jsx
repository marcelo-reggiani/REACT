import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/carrossel.jpg';
import img2 from '../assets/carrossel2.jpg';
import img3 from '../assets/carrossel3.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    // Aqui na home optei por aplicar um carrossel e um card para testar.  TEm que ser melhor estilizado, incluindo as cores de background.
    // Gostei da cor escura para o menu e footer.  Mas teria que achar uma cor ppara o corpo da pagina
    return (
        <main className="mt-5 text-center">
            <h1>Carrossel</h1>
            <Carousel>
                <Carousel.Item style={{ textAlign: 'center' }}>
                    <img className="d-block mx-auto" src={img1} alt="Slide 1" style={{ width: '600px', height: 'auto' }} />
                    <Carousel.Caption>
                        <h3>Exercicio da 5 Semana</h3>
                        <p>Exercicio da 5 Semana React - Bootstrap - Rotas - Formularios.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }}>
                    <img className="d-block mx-auto" src={img2} alt="Slide 2" style={{ width: '600px', height: 'auto' }} />
                    <Carousel.Caption>
                        <h3>Foram Aplicados Conceitos da 4 Semana</h3>
                        <p>Foram utilizados os conceitos de Props - Cards.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }}>
                    <img className="d-block mx-auto" src={img3} alt="Slide 3" style={{ width: '600px', height: 'auto' }} />
                    <Carousel.Caption>
                        <h3>Esse Carrossel Vai ser melhorado</h3>
                        <p>As Imagens e Textos foram usados para entrega do exercicio.</p>
                        <p>Para o projeto vão ser melhores escolhidas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <Card className="text-center mt-5">
                <Card.Header>EVENTO ESPECIAL</Card.Header>
                <Card.Body>
                    <Card.Title>Evento de Abertura.</Card.Title>
                    <Card.Text>
                        Clique no Botão abaixo e acesse nossa Promoção Exclusiva de Eventos.
                    </Card.Text>
                    <Button variant="primary">Clique Aqui</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Duração do Evento: 2 Dias</Card.Footer>
            </Card>

        </main> // No CARD acima faltou estilizar as cores. Tentei colocar o  BG-"DARK" mas não funcionou.  Assim como o comentário tive que colocar abaixo porque entre
        //o carrossel e o card ficava estrano. Como se não fosse comentario
    );
}

export default Home;


