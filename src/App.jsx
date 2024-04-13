import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LadinPage from "./LadinPage/LadinPage";
import Cadastro from "./Cadastro/Cadastro";
import Endereco from "./Endereco/Endereco";
import CadastroNecessidade from "./CadastroNecessidade/CadastroNecessidade";
import SenhaAcesso from "./SenhaAcesso/SenhaAcesso";
import ModalCadastroEndereco from "./Components/modalCadastroEndereco";
import ModalCadastroConcluido from "./Components/modalCadastroConcluido";
import Header from "./Components/Header";
import HomeDonatario from "./HomeDonatario/HomeDonatario";
import HomeDoador from "./HomeDoador/HomeDoador";
import CardNecessidade from "./Components/CardsNecessidades";
import CardDonatarios from "./Components/CardsDonatarios";
import Doadores from "./verDoadores/verDoadores";
import HistoricoDoacoes from "./HitoricoDoacoes/HistoricoDoacoes";
import EscolhendoDonatario from "./EscolhendoDonatario/EscolhendoDonatario";
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
