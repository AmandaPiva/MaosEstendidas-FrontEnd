import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import LadinPage from "./pages/LadinPage/LadinPage";
import Cadastro from "./pages/Cadastro/Cadastro";
import Endereco from "./pages/Endereco/Endereco";
import CadastroNecessidade from "./pages/CadastroNecessidade/CadastroNecessidade";
import SenhaAcesso from "./pages/SenhaAcesso/SenhaAcesso";
import ModalCadastroEndereco from "./Components/modalCadastroEndereco";
import ModalCadastroConcluido from "./Components/modalCadastroConcluido";
import Header from "./Components/Header";
import HomeDonatario from "./pages/HomeDonatario/HomeDonatario";
import HomeDoador from "./pages/HomeDoador/HomeDoador";
import CardNecessidade from "./Components/CardsNecessidades";
import CardDonatarios from "./Components/CardsDonatarios";
import Doadores from "./pages/verDoadores/verDoadores";
import HistoricoDoacoes from "./pages/HitoricoDoacoes/HistoricoDoacoes";
import EscolhendoDonatario from "./pages/EscolhendoDonatario/EscolhendoDonatario";
import EsqueceuSenha from "./pages/EsqueceuAsenha/EsqueceuSenha";

//COMPONENTE
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LadinPage />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Cadastro"} element={<Cadastro />} />
          <Route path={"/Endereco"} element={<Endereco />} />
          <Route
            path={"/CadastroNecessidade"}
            element={<CadastroNecessidade />}
          />
          <Route path={"/HomeDonatario"} element={<HomeDonatario />} />
          <Route path={"/HomeDoador"} element={<HomeDoador />} />
          <Route path={"/SenhaAcesso"} element={<SenhaAcesso />} />
          <Route path={"/modalEndereco"} element={<ModalCadastroEndereco />} />
          <Route path={"/verDoadores"} element={<Doadores />} />
          <Route path={"/HistoricoDoacoes"} element={<HistoricoDoacoes />} />
          <Route path={"/EsqueceuSenha"} element={<EsqueceuSenha />} />

          <Route
            path={"/EscolhendoDonatario"}
            element={<EscolhendoDonatario />}
          />
          <Route
            path={"/modalCadastroConcluido"}
            element={<ModalCadastroConcluido />}
          />
          {/*TESTANDO UM NOVO COMPONENTE QUE SERÁ NOSSO MODAL DE AVISOS  */}

          <Route path={"/Header"} element={<Header />} />
          <Route path={"/CardNecessidade"} element={<CardNecessidade />} />
          <Route path={"/CardDonatarios"} element={<CardDonatarios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
