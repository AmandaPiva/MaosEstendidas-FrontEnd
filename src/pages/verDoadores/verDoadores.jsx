import { Typography, Box, useScrollTrigger } from "@mui/material";
import Logo from "../../../public/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function Doadores() {
  const [doadores, setDoadores] = useState([]);
  const [roles, setRoles] = useState([]);
  const [rolePessoa, setRolePessoa] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBuscaDoadoresPelaRole = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8080/api/v1/pessoa/listaPessoasPelaRole/DOADORA`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDoadores(response.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar doadores pela role:", erro);
      });
  };

  const formatPhoneNumber = (phone) => {
    // Remove todos os caracteres não numéricos
    let cleaned = ("" + phone).replace(/\D/g, "");
    // Adiciona o código do país, se necessário
    if (cleaned.length === 11) {
      cleaned = "55" + cleaned;
    }
    return cleaned;
  };

  useEffect(() => {
    handleBuscaDoadoresPelaRole();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        heigth: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
          <Button
            onClick={() => (location.href = "/HomeDonatario")}
            variant="outlined"
          >
            Voltar
          </Button>
        </Box>

        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#E64097",
            fontFamily: "montserrat",
            margin: "5vh ",
            textAlign: "center",
          }}
        >
          Perfis de doadores que podem ajudar
        </Typography>
      </Box>

      <Box
        sx={{
          height: "65vh",
          width: "80vw",
          backgroundImage: "linear-gradient(to bottom, #B2FDF6, #FBD3E8)",
          borderRadius: "50px",
          margin: "5vh auto",
          border: 1,
          borderColor: "white",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {doadores.map((doador) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
                minHeight: "10vh",
                width: "70vw",
                margin: "5vh auto",
                borderRadius: "5px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "montserrat",
                    color: "#E64097",
                    fontWeight: "500",
                    padding: "18px",
                  }}
                >
                  {doador.nomePessoa}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "montserrat",
                    paddingLeft: "18px",
                    marginBottom: "20px",
                  }}
                >
                  {doador.endereco.bairro} - {doador.endereco.cidade}
                </Typography>
              </Box>

              <Button
                variant="contained"
                onClick={() => {
                  const phoneNumber = formatPhoneNumber(doador.celular);
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá%20${doador.nomePessoa},%20vim%20da%20plataforma%20Mãos%20Estendidas!%20Gostaria%20muito%20de%20pedir%20a%20sua%20ajuda`;
                  window.open(whatsappLink, "_blank");
                }}
                sx={{
                  backgroundColor: "#E64097",
                  marginLeft: "auto",
                  marginTop: "30px",
                  marginRight: "20px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Entrar em contato
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Doadores;
