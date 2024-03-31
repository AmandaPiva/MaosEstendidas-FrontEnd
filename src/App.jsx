import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LadinPage from "./LadinPage/LadinPage";
import Cadastro from "./Cadastro/Cadastro";
import Endereco from "./Endereco/Endereco";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
