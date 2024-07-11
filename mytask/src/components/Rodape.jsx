import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";

function Rodape() {
  return (
    <footer className="rodape">
    <p>&copy; 2024 - Todos os direitos reservados.</p>
      <BrowserRouter>
        <Routes>
           <Route path="/PoliticaPrivacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </BrowserRouter>
    </footer>
  );
}

export default Rodape;
