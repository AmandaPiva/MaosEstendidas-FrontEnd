import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LadinPage from "./LadinPage/LadinPage";
import Cadastro from "./Cadastro/Cadastro";
import Endereco from "./Endereco/Endereco";
import CadastroNecessidade from "./CadastroNecessidade/CadastroNecessidade"
import SenhaAcesso from "./SenhaAcesso/SenhaAcesso"

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
          <Route path={"/CadastroNecessidade"} element={<CadastroNecessidade />} />
          <Route path={"/SenhaAcesso"} element={<SenhaAcesso />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
