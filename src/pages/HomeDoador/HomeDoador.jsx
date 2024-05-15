import Header from "../../Components/Header";
import { Box } from "@mui/material";
import CriancasPcds from "../../../public/criancasPcds.png";
import { Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

function HomeDonartario() {
  const [requisicoes, setRequisicoes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBuscarRequisicoes = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/v1/requisicao`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRequisicoes(response.data);
        console.log(response.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar donatarios pela role:", erro);
      });
  };

  useEffect(() => {
    handleBuscarRequisicoes();
  }, []);

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
            Donatários mais próximos de você
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "5px",
          marginTop: "6vh", // Ajuste conforme necessário para mover abaixo da imagem
          marginLeft: "30px", // Ajuste conforme necessário para a margem da esquerda
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
          borderRadius: "50px",
          border: 1,
          borderColor: "#E64097",
          height: "5vh",
          width: "20vw",
        }}
      >
        <IconButton sx={{ color: "#E64097", p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ color: "#E64097", ml: 1, flex: 1 }}
          placeholder="Filtrar por Região"
          inputProps={{ "aria-label": "pesquisar" }}
        />
        <IconButton
          type="submit"
          sx={{ color: "#E64097", p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5vw",
          marginTop: "5vh",
        }}
      >
        {/**REQUISICOES */}
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
                  fontWeight: "500",
                }}
              >
                {" "}
                {requisicao.pessoaDonataria.nomePessoa}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "montserrat",
                  color: "#231F20",
                  fontWeight: "500",
                  margin: "5vh auto",
                }}
              >
                {" "}
                {requisicao.descricaoRequisicao}
              </Typography>
              <Typography
                sx={{ fontFamily: "montserrat", marginRight: "15px" }}
              >
                {requisicao.pessoaDonataria.endereco.bairro} -
                {requisicao.pessoaDonataria.endereco.cidade}/
                {requisicao.pessoaDonataria.endereco.estado}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E64097",
                  marginTop: "auto",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Ajudar esta pessoa
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
export default HomeDonartario;
