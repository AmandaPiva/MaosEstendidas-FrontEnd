import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LadinPage from "./LadinPage/LadinPage";

//COMPONENTE
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LadinPage />} />
          <Route path={"/Login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
