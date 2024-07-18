// import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";

// function Rodape() {
//   return (
//     <footer className="rodape">
//     <p>&copy; 2024 - Todos os direitos reservados.</p>
//       <BrowserRouter>
//         <Routes>
//            <Route path="/PoliticaPrivacidade" element={<PoliticaPrivacidade />} />
//         </Routes>
//       </BrowserRouter>
//     </footer>
//   );
// }

// export default Rodape;
import { Navbar } from "react-bootstrap";

function Rodape() {
    // Inseri o rodape usando os conceitos das aulas passadas e fixei ele no fim da pagina.
    return (
        <footer className="mt-3" style={{ paddingTop: "16px", paddingBottom: "56px" }}>
            <Navbar bg="dark" variant="dark" className="rodape fixed-bottom text-center text-white">
                <div className="w-100">
                    <hr className="border-light"/>
                    <p className="fs-5">&copy; 2024 - Todos os direitos reservados.</p>
                    <hr className="border-light"/>
                </div>
            </Navbar>
        </footer>
    );
}

export default Rodape;

