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
import Perfil from "./pages/Perfil/Perfil";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";

//variável que vai buscar do navegador a role do usuário logado
const role = localStorage.getItem("role");

//COMPONENTE
function App() {
  //HOOKS (estados)
  const [loading, setLoading] = useState(true);
  const [exibeLadinPage, setExibeLadinPage] = useState(true);

  useEffect(() => {
    const handleValidaToken = async () => {
      setLoading(true);
      const token = localStorage.getItem("token"); //variável que vai busar no navegador o token do usuário

      //verifica se o token existe, se ele não existir
      if (!token) {
        setExibeLadinPage(true); //A tela LadinPage será exibida, por isso aquele estado se torna true
      } else {
        //se existir

        //faz uma requisição get na API que valida este token
        await axios
          .get(`http://localhost:8080/api/v1/login/valida`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            setLoading(false);
            setExibeLadinPage(false);
          })
          .catch((erro) => {
            //caso o token não passar pela validação
            console.log(erro);
            localStorage.removeItem("token"); //remove o token
            setExibeLadinPage(true); //exibe a ladinPage novamente
          });
      }
      setLoading(false);
    };
    handleValidaToken();
  }, []);

  //verificamos se o estado do hook loading está neste momento true
  if (loading == true) {
    //pois se estiver, será renderizado na tela um circulo indicando que a página está carregando
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <CircularProgress
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "5vh auto",
            color: "#E64097",
          }}
        />
      </Box>
    );
  }

  //fazemos também uma verificação se o estado do hook exibeLadinPage é true
  if (exibeLadinPage == true) {
    //se for, exibe o componente LadinPage
    <LadinPage />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LadinPage />} />
          <Route path={"/Login"} element={<Login />} />
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
          <Route path={"/Perfil"} element={<Perfil />} />

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

          <Route path={"/Cadastro"} element={<Cadastro />} />
          <Route path={"/Endereco"} element={<Endereco />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
