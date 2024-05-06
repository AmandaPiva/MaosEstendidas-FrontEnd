import { Box, Typography } from "@mui/material";
import Logo from "../../../public/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CriancasPcds from "../../../public/criancasPcds.png";
import { Link } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useState } from "react";
import axios from "axios";

function CadastroNecessidade() {
  const [form, setForm] = useState({
    pessoaDonataria: "",
    tituloRequisicao: "",
    descricaoRequisicao: "",
    statusRequisicao: "",
  });
  const [loading, setLoading] = useState(false);
  //pegando o email da pessoa logada no navegador
  const email = localStorage.getItem("email");

  const handleCadastraNecessidade = () => {
    setLoading(true);

    if (form.tituloRequisicao == "" || form.descricaoRequisicao == "") {
      alert("Os campos não foram preenchidos corretamente, revise-os");
    } else {
      const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token

      if (!token) {
        alert("Token não encontrado --> Redirecionando a tela de Login");
        location.href = "/Login";
      } else {
        axios
          .post(
            `http://localhost:8080/api/v1/requisicao`,
            {
              pessoaDonataria: email,
              tituloRequisicao: form.tituloRequisicao,
              descricaoRequisicao: form.descricaoRequisicao,
              statusRequisicao: "ABERTA",
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setLoading(false);
            console.log(response.data);
            alert("Requisição cadastrada com sucesso");
          })
          .catch((erro) => {
            console.error(erro);
            alert("Ocorreu um erro ao cadastrar Requisição");
          });
      }
      setLoading(false);
    }
  };

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(email);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0.8), rgba(230, 64, 151, 0)), url(${CriancasPcds})`,
        }}
      >
        <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
          <Link to={"/HomeDonatario"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#04BFAF",
                "&:hover": {
                  backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                },
                padding: "8px 18px 8px 5px",
              }}
              size="small"
            >
              <ReplyAllIcon sx={{ marginRight: "8px" }} />
              Voltar
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ position: "relative", width: "100%", textAlign: "center" }}
          >
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#FFFFFf",
                fontFamily: "montserrat",
                display: "inline-block", // Necessário para centralizar corretamente a frase
              }}
            >
              Cadastrando Necessidade
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFf",
                fontFamily: "montserrat",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Cadastre aqui o que você está precisando!
            </Typography>

            <Box
              sx={{
                position: "absolute",
                right: 50,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  borderRadius: "70%",
                  width: "220px",
                  height: "200px",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              height: "65vh",
              width: "70vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              margin: "2vh auto",
              border: 1,
              borderColor: "white",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Box
              sx={{
                marginTop: "8vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  width: "60vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Título"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "60vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                multiline
                rows={5}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2vh 46px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    margin: "5vh auto",
                    width: "15vw",
                    backgroundColor: "#04BFAF",
                    "&:hover": {
                      backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                    },
                  }}
                >
                  Cadastrar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CadastroNecessidade;
