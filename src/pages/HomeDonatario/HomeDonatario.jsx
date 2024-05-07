import { Box } from "@mui/material";
import CriancasPcds from "../../../public/criancasPcds.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function HomeDonartario() {
  //hook como um array, pois vamos armazenar as requisições dentro de um array
  const [requisicoes, setRequisicoes] = useState([]);
  const [loading, setLoading] = useState(false);

  //pegando o email da pessoa logada no navegador
  const email = localStorage.getItem("email");

  const handleBuscaRequisicoesPelaPessoa = () => {
    setLoading(true);
    const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token
    if (!token) {
      alert("Token não encontrado --> Redirecionando a tela de Login");
      location.href = "/Login";
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/requisicao/buscaRequisicoesPelaPessoa/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setRequisicoes(response.data);
          setLoading(false);
        })
        .catch((erro) => {
          console.log(erro);
          alert("Não foi possível retornar as requisições deste usuário");
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    handleBuscaRequisicoesPelaPessoa();
  }, []);

  console.log(requisicoes);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "60vh",
          backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0.8), rgba(230, 64, 151, 0)), url(${CriancasPcds})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/*HEADER */}
        <Header />

        <Box sx={{ margin: "10vh auto 2vh", width: "60vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#FFFFFF",
              fontFamily: "montserrat",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            Cadastre sua necessidade
          </Typography>
        </Box>

        <Box sx={{ margin: "2vh auto" }}>
          <Button
            variant="contained"
            onClick={() => (location.href = "/CadastroNecessidade")}
            sx={{
              backgroundColor: "#04BFAF",
              color: "#FFFFFF",
              width: "270px",
              "&:hover": {
                backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
              },
            }}
          >
            Cadastrar Necessidade
          </Button>
        </Box>
      </Box>

      {/*HISTÓRICO DAS REQUISIÇÕES */}
      <Typography
        sx={{
          fontWeight: "600",
          color: "#04BFAF",
          fontFamily: "montserrat",
          fontSize: "36px",
          padding: "3rem",
        }}
      >
        Minhas requisições recentes
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5vw",
          marginTop: "5vh",
        }}
      >
        {requisicoes.map((requisicao) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "5px 0px  10px rgba(0, 0, 0, 0.3)",
                height: "50vh",
                width: "20vw",
                alignItems: "center",
                padding: "2rem",
                marginLeft: "2vw",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "montserrat",
                  color: "#E64097",
                  fontWeight: "600",
                }}
              >
                {" "}
                {requisicao.tituloRequisicao}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "montserrat",
                  color: "#231F20",
                  fontWeight: "500",
                  marginTop: "5vh",
                }}
              >
                {" "}
                {requisicao.descricaoRequisicao}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
export default HomeDonartario;
