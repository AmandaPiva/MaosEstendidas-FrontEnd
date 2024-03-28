import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LadinPage from "./LadinPage/LadinPage";
import Cadastro from "./Cadastro/Cadastro";

//COMPONENTE
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LadinPage />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Cadastro"} element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
